import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname khusus untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, "tasks.json");

// 1. Fungsi untuk membaca database JSON (array)
function readTasks() {
  if (!fs.existsSync(FILE_PATH)) {
    const defaultData = [
      { id: "M1.W1.T1", name: "Buat Akun GitHub & 2FA", status: "done" },
      { id: "M1.W1.T2.4", name: "Refleksi ESLint vs Prettier", status: "done" },
      {
        id: "M1.W1.T4.4",
        name: "Refleksi Larangan Commit node_modules",
        status: "done",
      },
      { id: "M1.W1.T5", name: "Project CLI Tool Mandiri", status: "progress" },
      { id: "Hiu tes tes", name: "Tas Tes Tos", status: "progress" },
    ];
    fs.writeFileSync(FILE_PATH, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

// 2. Fungsi untuk menyimpan ke JSON
function writeTasks(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

// 3. Fungsi utama untuk menampilkan dashboard layout box
function displayDashboard(tasks) {
  console.log(`\n💡 NAVIGASI COMMAND:`);
  console.log(` ➜ Tambah Tugas : node index.js tambah [ID_TASK] "Nama Tugas"`);
  console.log(` ➜ Filter Tugas : node index.js lihat done atau progress`);
  console.log(
    ` ➜ Edit Status  : node index.js status [ID_TASK] done or progress`,
  );
  console.log(
    `--------------------------------------------------------------------------`,
  );
  console.log(`=== MONITORING TUGAS PKL - MIFTAHUL AL GAZI ===\n`);

  const formattedTasks = tasks.map((t) => ({
    "ID Task": t.id,
    "Nama Tugas": t.name,
    Status: t.status === "done" ? "✔ DONE" : "⏳ PROGRESS",
  }));

  console.table(formattedTasks);
  console.log(`Total Progress: ${tasks.length} Task Ditampilkan.`);
}

// 4. Menangkap argument input dari CLI (process.argv)
const args = process.argv.slice(2);
const command = args[0];

let tasks = readTasks();

if (!command) {
  displayDashboard(tasks);
} else if (command === "tambah") {
  const customId = args[1];
  const taskName = args[2];

  if (!customId || !taskName) {
    console.log(`\n❌ EROR: Format salah bray!`);
    console.log(`Cara benernya: node index.js tambah [ID_TASK] "Nama Tugas"`);
    console.log(
      `Contoh: node index.js tambah M1.W2.T1 "Eksplorasi Git Harian"\n`,
    );
    process.exit(1);
  }

  const isExist = tasks.some(
    (t) => t.id.toLowerCase() === customId.toLowerCase(),
  );
  if (isExist) {
    console.log(
      `\n❌ EROR: ID Task "${customId}" sudah ada di list, cok! Pakai ID lain.\n`,
    );
    process.exit(1);
  }

  const newTask = {
    id: customId,
    name: taskName,
    status: "progress",
  };

  tasks.push(newTask);
  writeTasks(tasks);

  console.log(`\n✔ BERHASIL: "${taskName}" ditambahkan dengan ID ${customId}!`);
  displayDashboard(tasks);
} else if (command === "lihat") {
  const filter = args[1];
  if (filter === "done" || filter === "progress") {
    const filteredTasks = tasks.filter((t) => t.status === filter);
    displayDashboard(filteredTasks);
  } else {
    console.log(
      `\n❌ EROR: Filter tidak dikenali. Pilih antara 'done' atau 'progress'.\n`,
    );
  }
} else if (command === "status") {
  const targetId = args[1];
  const newStatus = args[2];

  const taskIndex = tasks.findIndex(
    (t) => t.id.toLowerCase() === targetId?.toLowerCase(),
  );

  if (taskIndex === -1) {
    console.log(`\n❌ EROR: ID Task "${targetId}" tidak ditemukan bray!\n`);
  } else if (newStatus !== "done" && newStatus !== "progress") {
    console.log(`\n❌ EROR: Status salah. Gunakan 'done' atau 'progress'.\n`);
  } else {
    tasks[taskIndex].status = newStatus;
    writeTasks(tasks);
    console.log(
      `\n✔ BERHASIL: Status ID "${targetId}" diubah menjadi ${newStatus.toUpperCase()}!`,
    );
    displayDashboard(tasks);
  }
} else {
  console.log(`\n❌ EROR: Command "${command}" kagak terdaftar bray!\n`);
}
