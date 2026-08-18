const siswa = [
  { nama: "Laila", nilai: 90 },
  { nama: "Haikal", nilai: 88 },
  { nama: "Melvin", nilai: 70 },
];

// filter ambil nilai siswa yang >= 75
const siswaLulus = siswa.filter((s) => s.nilai >= 75);
console.log("Siswa yang lulus (nilai >= 75):");
console.log(siswaLulus);

// 2. filter + map: ambil NAMA siswa yang nilainya < 75
const namaSiswaRemedial = siswa
  .filter((s) => s.nilai < 75) // Filter dulu siswa yang nilainya < 75
  .map((s) => s.nama);          // Ambil properti nama-nya saja

console.log("\nNama siswa yang remedial nilai < 75:");
console.log(namaSiswaRemedial);