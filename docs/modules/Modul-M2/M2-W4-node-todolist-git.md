# Modul Bulan 2 Minggu 4 — Node/npm, To-Do List, & Git Branch-per-Fitur

> Menemani task `M2.W4.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`, dan untuk aturan penulisan kode di modul ini: contoh kode tidak
> menyertakan hasil eksekusi — jalankan sendiri, catat hasil aslinya di log.
>
> **🗓️ 5 hari kerja penuh** (Senin 31 Agustus – Jumat 4 September 2026).
>
> ## Struktur minggu ini
>
> Minggu ini project-based: 1 aplikasi to-do list vanilla JS + `localStorage`, dibangun bertahap.
> **Setiap fitur dikerjakan di branch sendiri, PR sendiri** — bukan 1 branch besar di akhir minggu.
> Node.js & npm jadi sesi tooling singkat di awal (Senin) sebelum masuk ke project intinya.
>
> **Poin perhatian:** `localStorage` cuma bisa menyimpan **string**, bukan array/object langsung —
> lupa `JSON.stringify`/`JSON.parse` adalah jebakan klasik yang bikin data tersimpan jadi
> `"[object Object]"`. Lihat bagian 3.

---

## 1. Node.js & npm

### `M2.W4.T1.1` — Recap Node.js + `package.json`

```bash
node index.js
npm init -y
```

`npm init -y` bikin `package.json` dengan default. Buka isinya, perhatikan field utama:
`name`, `version`, `scripts`, `dependencies`.

**Latihan:** buat 1 folder project baru untuk to-do list minggu ini, jalankan `npm init -y`, buka
`package.json` yang dihasilkan.

### `M2.W4.T1.2` — Custom script di `package.json`

```json
{
  "scripts": {
    "start": "live-server ."
  }
}
```

Dengan ini, `npm run start` sama efeknya dengan menjalankan `live-server .` langsung — bedanya
`npm run` jadi 1 titik pemanggilan yang konsisten, tidak perlu ingat command lengkapnya tiap kali.

**Latihan:** tambahkan minimal 1 custom script, jalankan lewat `npm run <nama-script>`.

### `M2.W4.T1.3` — Install & pakai `live-server`

```bash
npm install --save-dev live-server
npx live-server .
```

**Latihan:** install `live-server` sebagai dev-dependency, pakai untuk serve project to-do list
minggu ini lewat `http://localhost:...` — bandingkan dengan buka file `.html`-nya langsung lewat
`file://` di browser (perhatikan address bar-nya beda).

**Contoh entry log:**
```markdown
### Task: M2.W4.T1.3
- **Status:** done
- **Capaian:** Berhasil install live-server, serve project lewat localhost, bandingkan dengan file://.
- **Kesulitan:** -
```

### `M2.W4.T1.4` — [Wajib Refleksi] `dependencies` vs `devDependencies`

**Isi log dengan menjawab (kata sendiri):**
1. Apa beda `dependencies` dengan `devDependencies` di `package.json`?
2. Kenapa `live-server` masuk `devDependencies` (bukan `dependencies` biasa)?
3. Kasih 1 alasan kenapa serve project lewat `localhost` kadang lebih mirip kondisi nyata
   dibanding buka file langsung lewat `file://` (hint: beberapa fitur browser — termasuk yang
   berhubungan dengan request ke server — punya perlakuan beda antara `file://` dan `http://`).

---

## 2. To-Do List — Fitur Inti

**Aturan git untuk seluruh bagian ini:** 1 branch per fitur, commit rapi, PR terpisah untuk
masing-masing. Jangan gabung beberapa fitur dalam 1 branch/PR yang sama.

### `M2.W4.T2.1` — Render list awal

```js
const daftarTodo = [
  { id: 1, teks: "Belajar localStorage", selesai: false },
  { id: 2, teks: "Bikin to-do list", selesai: false },
];

const listEl = document.querySelector("#daftar-todo");

function render(data) {
  listEl.textContent = "";
  data.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.teks;
    listEl.appendChild(li);
  });
}

render(daftarTodo);
```

**Latihan:** render minimal 3-5 task contoh ke DOM, pakai `createElement`+`textContent`.

### `M2.W4.T2.2` — Fitur tambah task

**Branch:** `fitur/tambah-task`

Form input + tombol/`submit`, `push` ke array, render ulang. Jangan lupa `event.preventDefault()`
kalau pakai `<form>`.

**Contoh entry log:**
```markdown
### Task: M2.W4.T2.2
- **Status:** done
- **Capaian:** Fitur tambah task berhasil, branch fitur/tambah-task, PR dibuat.
- **Kesulitan:** -
```

### `M2.W4.T2.3` — Fitur tandai selesai/belum

**Branch:** `fitur/toggle-selesai`

```js
listEl.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const id = Number(event.target.dataset.id);
    const todo = daftarTodo.find((t) => t.id === id);
    todo.selesai = !todo.selesai;
    render(daftarTodo);
  }
});
```

**Latihan:** klik pada task untuk toggle status selesai/belum — pakai event delegation di parent
list (bukan listener per-item, sesuai pelajaran `T4.4` Minggu 2), tampilkan beda secara visual
(misal `class="selesai"` dengan `text-decoration: line-through`).

### `M2.W4.T2.4` — Fitur hapus task

**Branch:** `fitur/hapus-task`

Tombol hapus per item (event delegation lagi), buang dari array (`filter`/`splice`), render ulang.

**Contoh entry log:**
```markdown
### Task: M2.W4.T2.4
- **Status:** done
- **Capaian:** Fitur hapus task berhasil pakai filter, branch fitur/hapus-task, PR dibuat.
- **Kesulitan:** -
```

---

## 3. `localStorage` — cuma bisa simpan string

### `M2.W4.T2.5` — Simpan & muat data

**Branch:** `fitur/persist-localstorage`

```js
function simpan(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}

function muat() {
  const mentah = localStorage.getItem("todos");
  return mentah ? JSON.parse(mentah) : [];
}
```

**Latihan:** panggil `simpan(daftarTodo)` setiap ada perubahan (tambah/toggle/hapus), dan panggil
`muat()` saat halaman pertama kali dibuka untuk isi `daftarTodo` awal.

### `M2.W4.T2.6` — [Wajib Refleksi — PENTING] Kenapa wajib `JSON.stringify`/`JSON.parse`

**Coba dulu SEBELUM baca lebih lanjut:** hapus `JSON.stringify(...)` di `simpan()`, langsung
`localStorage.setItem("todos", data)` — refresh halaman, buka DevTools → Application →
Local Storage, lihat isinya. Bandingkan dengan versi yang pakai `JSON.stringify`.

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang tersimpan kalau `JSON.stringify` dilewatkan? Kenapa begitu?
2. Kenapa `localStorage` cuma bisa menyimpan string, padahal kita "menaruh" array/object ke
   dalamnya?
3. Kasih 1 alasan kenapa ini jebakan yang gampang kelewat kalau baru pertama kali pakai
   `localStorage`.

**Contoh entry log:**
```markdown
### Task: M2.W4.T2.6
- **Status:** done
- **Capaian:** Coba tanpa JSON.stringify, lihat hasilnya "[object Object]". [jawaban lengkap soal kenapa localStorage cuma simpan string]
- **Kesulitan:** -
```

### `M2.W4.T2.7` — Tangani 2 edge case

1. **`localStorage` masih kosong** (pertama kali dibuka, belum pernah ada data) — `muat()` di atas
   sudah menangani ini lewat `mentah ? JSON.parse(mentah) : []`, tapi verifikasi sendiri: hapus
   semua data di DevTools → Application → Local Storage, refresh halaman, pastikan tidak error.
2. **Data rusak/bukan JSON valid** — coba edit manual value `todos` di DevTools jadi string acak
   yang bukan JSON (misal `"asdf{{{"`), refresh halaman. `JSON.parse` akan melempar error — bungkus
   dengan `try`/`catch`, kalau gagal anggap data kosong (`[]`).

```js
function muat() {
  const mentah = localStorage.getItem("todos");
  if (!mentah) return [];
  try {
    return JSON.parse(mentah);
  } catch (error) {
    return [];
  }
}
```

**Contoh entry log:**
```markdown
### Task: M2.W4.T2.7
- **Status:** done
- **Capaian:** Berhasil tangani localStorage kosong & data rusak (try/catch), sudah dicoba manual lewat DevTools.
- **Kesulitan:** -
```

### `M2.W4.T2.8` — **[Ulangi Tanpa Contek]** Data berbeda, dari nol

**Tutup dulu kode `T2.5`/`T2.6` dan modul ini.** Pilih 1 data yang **beda dari to-do** (misal
daftar catatan singkat) — dari nol, tulis ulang (dari ingatan):
1. Simpan ke `localStorage` (`JSON.stringify`).
2. Muat lagi (`JSON.parse`).
3. Tangani kosong & data rusak (`try`/`catch`).

**Kalau ada yang lupa** — catat jujur di log, cek balik bagian itu saja, lanjutkan dari ingatan.

**Contoh entry log:**
```markdown
### Task: M2.W4.T2.8
- **Status:** done
- **Capaian:** Ulangi simpan/muat localStorage dari nol pakai data catatan (bukan to-do). Sempat lupa [bagian mana], sisanya lancar.
- **Kesulitan:** (jujur, bagian mana yang sempat macet)
```

---

## 4. Git: Branch-per-Fitur

### `M2.W4.T3.1` — [Wajib Refleksi] Kenapa branch-per-fitur

Buka `git log --graph` untuk semua branch fitur yang sudah di-merge minggu ini.

**Isi log dengan menjawab (kata sendiri):** kenapa branch-per-fitur (1 branch = 1 fitur kecil)
lebih aman dibanding 1 branch besar untuk semua fitur sekaligus — kaitkan langsung ke insiden
`T6-M2-W3` minggu lalu (ada file tidak terkait yang sempat ikut ter-commit ke branch fitur sebelum
dirapikan). Bagaimana branch yang lebih kecil & fokus bisa mengurangi risiko itu terulang?

---

## 5. Proyek Pengembangan Skill Mandiri (`M2.W4.T4`)

**Estimasi waktu:** ±0,5–1 hari kerja.

Tambahkan **1 fitur ORIGINAL** ke to-do list yang belum diminta di task-task sebelumnya — bebas
pilih, contoh:
- Edit teks task yang sudah ada.
- Filter tampilan: semua / selesai / belum selesai.
- Urutkan berdasarkan yang terbaru ditambahkan.
- Fitur lain yang kamu anggap masuk akal.

**Requirement:**
1. Lewat branch fitur sendiri + PR terpisah lagi (menegakkan kebiasaan `T3.1`).
2. **Wajib komentar kode** untuk bagian yang menyentuh `localStorage`, menjelaskan alurnya.

**Contoh entry log:**
```markdown
### Task: M2.W4.T4
- **Status:** done
- **Capaian:** [ceritakan fitur original apa yang ditambahkan, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 6. Evaluasi (`M2.W4.T5`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo to-do list lengkap** — tambah/toggle/hapus, lalu **refresh halaman** untuk membuktikan
   datanya tetap ada (dari `localStorage`).
2. **Review PR `#5` (`T6-M2-W3`)** yang belum sempat dibahas tuntas minggu lalu.
3. **Jelaskan tiap branch/PR fitur** yang dibuat minggu ini.
4. **Mentor kasih soal live** yang menyasar kesalahpahaman umum `localStorage` (lupa
   `JSON.stringify`/`JSON.parse`).
5. **Mentor minta modifikasi dadakan** di fitur `T4`.
6. **Mentor coba matikan/rusak data `localStorage` lewat DevTools** untuk lihat apakah edge case
   `T2.7` beneran jalan.
7. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M2.W4.T5
- **Status:** done
- **Capaian:** Demo to-do list selesai (localStorage terverifikasi), PR #5 minggu lalu & PR minggu ini dibahas, soal localStorage terjawab, modifikasi dadakan berhasil dikerjakan.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — Window.localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- MDN — JSON.stringify: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
- npm docs — package.json: https://docs.npmjs.com/cli/v10/configuring-npm/package-json
- live-server (npm): https://www.npmjs.com/package/live-server
