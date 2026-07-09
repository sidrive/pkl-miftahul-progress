#!/usr/bin/env node
/**
 * update_progress.js
 *
 * Baca TASKS.md + DAILY_LOG.md, lalu:
 *  1. Update checkbox di TASKS.md ([x] untuk task dengan log terakhir status "done")
 *  2. Generate docs/data/tasks.json, docs/data/log.json, docs/data/progress.json
 *     untuk dikonsumsi dashboard HTML (docs/index.html)
 *
 * Tidak ada dependency eksternal — hanya Node.js builtin (fs, path).
 * Jalankan: node update_progress.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TASKS_PATH = path.join(ROOT, "TASKS.md");
const LOG_PATH = path.join(ROOT, "DAILY_LOG.md");
const DATA_DIR = path.join(ROOT, "docs", "data");

function readFile(p) {
  return fs.readFileSync(p, "utf8");
}

// ---------- Parse TASKS.md ----------
// Struktur dasar: "## <judul grup>" -> "### <judul subgrup>" -> "- [ ] <!-- id: XXX --> teks"
//
// Grup ("##") dan subgrup ("###") BEBAS namanya — tidak harus "Bulan N" / "Minggu N".
// Kalau formatnya "## Bulan N — Judul" / "### Minggu N", nomornya diekstrak otomatis
// (dipakai untuk urutan & label "Bulan N" di dashboard). Kalau tidak match pola itu
// (misal "## Backlog / Task Tambahan" atau "### Issue Eksternal"), tetap diproses
// normal, cuma "number"-nya null. Ini supaya task tambahan / breakdown lebih detail /
// task ad-hoc di luar roadmap bisa ditambah kapan saja tanpa mengubah script.
//
// Sub-task bertingkat (misal breakdown M1.W1.T1 jadi M1.W1.T1.1, M1.W1.T1.2) juga
// didukung — cukup tambah baris checklist baru dengan indentasi di bawah task induk,
// selama formatnya tetap "- [ ] <!-- id: ID_UNIK --> teks" dan ID_UNIK belum dipakai.
function parseTasks(md) {
  const lines = md.split("\n");
  const groups = [];
  let currentGroup = null;
  let currentSub = null;

  const groupRe = /^##\s+(.+)$/;
  const groupBulanRe = /^Bulan\s+(\d+)\s*—\s*(.+)$/;
  const subRe = /^###\s+(.+)$/;
  const subMingguRe = /^Minggu\s+(\d+)/;
  const taskRe = /^\s*-\s*\[( |x|X)\]\s*<!--\s*id:\s*([A-Za-z0-9._-]+)\s*-->\s*(.+)$/;

  for (const line of lines) {
    let m;
    if ((m = line.match(groupRe))) {
      const heading = m[1].trim();
      const bm = heading.match(groupBulanRe);
      currentGroup = bm
        ? { number: Number(bm[1]), title: bm[2].trim(), weeks: [] }
        : { number: null, title: heading, weeks: [] };
      groups.push(currentGroup);
      currentSub = null;
      continue;
    }
    if ((m = line.match(subRe))) {
      if (!currentGroup) continue;
      const heading = m[1].trim();
      const wm = heading.match(subMingguRe);
      currentSub = wm
        ? { number: Number(wm[1]), title: null, tasks: [] }
        : { number: null, title: heading, tasks: [] };
      currentGroup.weeks.push(currentSub);
      continue;
    }
    if ((m = line.match(taskRe))) {
      if (!currentSub) continue;
      currentSub.tasks.push({
        id: m[2],
        text: m[3].trim(),
        done: m[1].toLowerCase() === "x",
      });
      continue;
    }
  }
  return groups;
}

// ---------- Parse DAILY_LOG.md ----------
// Struktur: "## YYYY-MM-DD" heading menentukan tanggal aktif,
// lalu blok <!-- ENTRY START --> ... <!-- ENTRY END --> berisi Task/Status/Capaian/Kesulitan.
function parseLog(md) {
  const lines = md.split("\n");
  const entries = [];
  let currentDate = null;
  let inEntry = false;
  let buffer = [];

  const dateRe = /^##\s+(\d{4}-\d{2}-\d{2})/;

  for (const line of lines) {
    const dm = line.match(dateRe);
    if (dm) {
      currentDate = dm[1];
      continue;
    }
    if (line.includes("<!-- ENTRY START -->")) {
      inEntry = true;
      buffer = [];
      continue;
    }
    if (line.includes("<!-- ENTRY END -->")) {
      inEntry = false;
      const block = buffer.join("\n");
      const taskM = block.match(/\*\*Task:?\*\*\s*:?\s*([A-Za-z0-9._-]+)/i) ||
        block.match(/###\s*Task:\s*([A-Za-z0-9._-]+)/i);
      const statusM = block.match(/\*\*Status:?\*\*\s*:?\s*([a-zA-Z-]+)/i);
      const capaianM = block.match(/\*\*Capaian:?\*\*\s*:?\s*(.+)/i);
      const kesulitanM = block.match(/\*\*Kesulitan:?\*\*\s*:?\s*(.+)/i);

      // Task id might be in a "### Task: ID" header inside buffer too
      let taskId = null;
      const headerTaskM = block.match(/###\s*Task:\s*([A-Za-z0-9._-]+)/i);
      if (headerTaskM) taskId = headerTaskM[1];
      else if (taskM) taskId = taskM[1];

      if (currentDate && taskId) {
        entries.push({
          date: currentDate,
          task: taskId,
          status: statusM ? statusM[1].toLowerCase() : "unknown",
          capaian: capaianM ? capaianM[1].trim() : "",
          kesulitan: kesulitanM ? kesulitanM[1].trim() : "",
        });
      }
      continue;
    }
    if (inEntry) buffer.push(line);
  }
  return entries;
}

// ---------- Apply log status onto TASKS.md checkboxes ----------
function applyDoneStatus(months, entries) {
  // Task dianggap done kalau ADA minimal 1 entry log dengan status "done" untuk id itu.
  const doneIds = new Set(
    entries.filter((e) => e.status === "done").map((e) => e.task)
  );
  for (const month of months) {
    for (const week of month.weeks) {
      for (const task of week.tasks) {
        if (doneIds.has(task.id)) task.done = true;
      }
    }
  }
  return months;
}

// ---------- Rewrite TASKS.md dengan checkbox terupdate ----------
function rewriteTasksMd(originalMd, months) {
  const doneMap = new Map();
  for (const month of months) {
    for (const week of month.weeks) {
      for (const task of week.tasks) {
        doneMap.set(task.id, task.done);
      }
    }
  }
  const taskRe = /^(\s*-\s*\[)( |x|X)(\]\s*<!--\s*id:\s*)([A-Za-z0-9._-]+)(\s*-->.*)$/;
  const lines = originalMd.split("\n").map((line) => {
    const m = line.match(taskRe);
    if (!m) return line;
    const id = m[4];
    const isDone = doneMap.has(id) ? doneMap.get(id) : m[2].toLowerCase() === "x";
    const mark = isDone ? "x" : " ";
    return `${m[1]}${mark}${m[3]}${id}${m[5]}`;
  });
  return lines.join("\n");
}

// ---------- Hitung statistik progress ----------
function computeProgress(months, entries) {
  let totalTasks = 0;
  let doneTasks = 0;
  const perMonth = [];

  for (const month of months) {
    let monthTotal = 0;
    let monthDone = 0;
    for (const week of month.weeks) {
      for (const task of week.tasks) {
        monthTotal++;
        totalTasks++;
        if (task.done) {
          monthDone++;
          doneTasks++;
        }
      }
    }
    perMonth.push({
      number: month.number,
      title: month.title,
      total: monthTotal,
      done: monthDone,
      percent: monthTotal ? Math.round((monthDone / monthTotal) * 100) : 0,
    });
  }

  // Streak: jumlah hari berturut-turut (dari log terbaru mundur) yang punya minimal 1 entry
  const uniqueDates = [...new Set(entries.map((e) => e.date))].sort();
  let streak = 0;
  if (uniqueDates.length) {
    let cursor = new Date(uniqueDates[uniqueDates.length - 1] + "T00:00:00Z");
    const dateSet = new Set(uniqueDates);
    while (dateSet.has(cursor.toISOString().slice(0, 10))) {
      streak++;
      cursor.setUTCDate(cursor.getUTCDate() - 1);
    }
  }

  // Blocked tasks aktif: task terakhir dilaporkan "blocked" dan belum ada entry "done" setelahnya
  const lastStatusByTask = new Map();
  const sortedEntries = [...entries].sort((a, b) => (a.date > b.date ? 1 : -1));
  for (const e of sortedEntries) {
    lastStatusByTask.set(e.task, e.status);
  }
  const blockedTasks = [...lastStatusByTask.entries()]
    .filter(([, status]) => status === "blocked")
    .map(([id]) => id);

  return {
    generatedAt: new Date().toISOString(),
    totalTasks,
    doneTasks,
    overallPercent: totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0,
    perMonth,
    currentStreakDays: streak,
    blockedTasks,
    totalLogEntries: entries.length,
    lastLogDate: uniqueDates.length ? uniqueDates[uniqueDates.length - 1] : null,
  };
}

function main() {
  const tasksMd = readFile(TASKS_PATH);
  const logMd = readFile(LOG_PATH);

  const months = parseTasks(tasksMd);
  const entries = parseLog(logMd);
  applyDoneStatus(months, entries);

  const newTasksMd = rewriteTasksMd(tasksMd, months);
  if (newTasksMd !== tasksMd) {
    fs.writeFileSync(TASKS_PATH, newTasksMd, "utf8");
    console.log("TASKS.md diupdate.");
  } else {
    console.log("TASKS.md tidak ada perubahan.");
  }

  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(DATA_DIR, "tasks.json"),
    JSON.stringify(months, null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, "log.json"),
    JSON.stringify(entries.sort((a, b) => (a.date < b.date ? 1 : -1)), null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, "progress.json"),
    JSON.stringify(computeProgress(months, entries), null, 2)
  );
  console.log(
    `Selesai. ${entries.length} log entry diproses, data ditulis ke docs/data/.`
  );
}

main();
