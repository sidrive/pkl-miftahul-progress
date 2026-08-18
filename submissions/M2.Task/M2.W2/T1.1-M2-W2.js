// Data awal array siswa
const siswa = [
  { nama: "Ani", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Citra", nilai: 90 },
];

// 1. Mengubah array siswa menjadi array string dengan format "nama - nilai" menggunakan map
const formatSiswa = siswa.map((s) => `${s.nama} - ${s.nilai}`);
console.log("Hasil map (format nama - nilai):");
console.log(formatSiswa);

// 2. Mengubah array angka menjadi hasil kali 2
const angka = [1, 2, 3];
const dikali2 = angka.map((n) => n * 2);
console.log("\nHasil map angka dikali 2:");
console.log(dikali2);

// 3. Pembuktian bahwa array asli TIDAK berubah (Immutability)
console.log("\nCek array angka asli (tetap utuh):");
console.log(angka);