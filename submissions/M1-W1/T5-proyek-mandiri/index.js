// index.js
import chalk from "chalk";
import Table from "cli-table3";
import { pklTasks } from "./data.js";

// 1. Ambil perintah dari terminal
const perintah = process.argv[2];
const argumen1 = process.argv[3]; // Bisa jadi nama task (untuk tambah) ATAU ID task (untuk status)
const argumen2 = process.argv[4]; // Bisa jadi status baru (done/progress) untuk perintah status

// ==========================================
// FUNGSIONAL MENU BANTUAN SINGKAT (NAVIGASI)
// ==========================================
const cetakNavigasiAtas = () => {
  console.log(chalk.bold.yellow("💡 NAVIGASI COMMAND:"));
  console.log(
    chalk.white(" ➜ Tambah Tugas : ") +
      chalk.green('node index.js tambah "Nama Tugas"'),
  );
  console.log(
    chalk.white(" ➜ Filter Tugas : ") +
      chalk.green("node index.js lihat done") +
      chalk.white(" atau ") +
      chalk.hex("#FFA500")("progress"),
  );
  console.log(
    chalk.white(" ➜ Edit Status  : ") +
      chalk.green("node index.js status [ID_TASK] done") +
      chalk.white(" atau ") +
      chalk.hex("#FFA500")("progress"),
  );
  console.log(
    chalk.gray(
      "--------------------------------------------------------------------------",
    ),
  );
};

// ==========================================
// LOGIKA TAMBAH DATA
// ==========================================
if (perintah === "tambah") {
  if (!argumen1) {
    console.log(
      chalk.bold.red("\n[EROR] Nama tugasnya apa cok? Tulis yang lengkap! ❌"),
    );
    console.log(
      chalk.yellow('Contoh: node index.js tambah "Belajar Git Push"\n'),
    );
    process.exit(1);
  }

  const idBaru = `TASK-00${pklTasks.length + 1}`;
  pklTasks.push({ id: idBaru, name: argumen1, status: "Progress" });
  console.log(
    chalk.bold.green(
      `\n✔ BERHASIL: "${argumen1}" ditambahkan dengan ID ${idBaru}!\n`,
    ),
  );
}

// ==========================================
// LOGIKA EDIT STATUS TASK (IDE BARU LU!)
// ==========================================
if (perintah === "status") {
  if (!argumen1 || !argumen2) {
    console.log(chalk.bold.red("\n[EROR] Argumen kurang lengkap cok! ❌"));
    console.log(
      chalk.yellow("Contoh cara ubah: node index.js status M1.W1.T5 done\n"),
    );
    process.exit(1);
  }

  // Cari data tugas di dalam array berdasarkan ID yang diketik user
  const taskYangDicari = pklTasks.find(
    (task) => task.id.toLowerCase() === argumen1.toLowerCase(),
  );

  if (!taskYangDicari) {
    console.log(
      chalk.bold.red(
        `\n[EROR] ID Task "${argumen1}" kagak ketemu di daftar, bray! ❌\n`,
      ),
    );
    process.exit(1);
  }

  // Format input status dari user biar rapi
  const statusBaru = argumen2.toLowerCase() === "done" ? "Done" : "Progress";

  // Update status data aslinya di memori!
  taskYangDicari.status = statusBaru;

  const statusTeksWarna =
    statusBaru === "Done"
      ? chalk.green("✔ DONE")
      : chalk.hex("#FFA500")("⏳ PROGRESS");
  console.log(
    chalk.bold.green(
      `\n✔ BERHASIL: Status task ${argumen1.toUpperCase()} berhasil diubah jadi [${statusTeksWarna}]!\n`,
    ),
  );
}

// Validasi jika perintah ngasal di luar yang terdaftar
if (
  perintah &&
  perintah !== "tambah" &&
  perintah !== "lihat" &&
  perintah !== "status"
) {
  console.log(
    chalk.bold.red(`\n[EROR] Perintah "${perintah}" kagak terdaftar cok! ❌\n`),
  );
  cetakNavigasiAtas();
  process.exit(1);
}

// ==========================================
// TAMPILKAN OUTPUT UTAMA
// ==========================================

// 1. Cetak petunjuk navigasi di paling atas
console.log("");
cetakNavigasiAtas();

// 2. Cetak Judul Aplikasi
console.log(
  chalk.bold.cyan("=== MONITORING TUGAS PKL - MIFTAHUL AL GAZI ===\n"),
);

// 3. Siapkan Cetakan Tabel Kotak-Kotak
const table = new Table({
  head: [
    chalk.yellow("ID Task"),
    chalk.yellow("Nama Tugas"),
    chalk.yellow("Status"),
  ],
  colWidths: [15, 40, 15],
});

pklTasks.forEach((task) => {
  // Logika Filter data tugas
  if (
    perintah === "lihat" &&
    argumen1.toLowerCase() === "done" &&
    task.status !== "Done"
  )
    return;
  if (
    perintah === "lihat" &&
    argumen1.toLowerCase() === "progress" &&
    task.status !== "Progress"
  )
    return;

  const statusText =
    task.status === "Done"
      ? chalk.green.bold("✔ DONE")
      : chalk.hex("#FFA500").bold("⏳ PROGRESS");

  table.push([chalk.gray(task.id), task.name, statusText]);
});

// 4. Muntahin Tabel
console.log(table.toString());
console.log(
  chalk.magenta(`\nTotal Progress: ${table.length} Task Ditampilkan.`),
);
