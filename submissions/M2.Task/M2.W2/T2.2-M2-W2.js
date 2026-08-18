// --- Kasus (a): Total / Sum dari array angka ---
const angka = [1, 2, 3, 4];

// acc = accumulator (penampung), curr = current value (elemen saat ini)
// angka 0 di akhir itu nilai awal (initialValue) dari acc
const total = angka.reduce((acc, curr) => acc + curr, 0);
console.log("Kasus (a) - Total angka:", total); 
// Hasil: 10

// --- Kasus (b): Cari nilai MAX (Maksimum) ---
const nilaiSiswa = [75, 90, 65, 88, 95, 80];

const nilaiMax = nilaiSiswa.reduce((max, curr) => {
  return curr > max ? curr : max;
}, nilaiSiswa[0]); // nilai awal diambil dari elemen pertama
console.log("\nKasus (b) - Nilai maksimum:", nilaiMax); 
// Hasil: 95


// --- Kasus (c): ubah array transaksi jadi 1 Objek Rekap ---
const transaksi = [
  { kategori: "makanan", nominal: 20000 },
  { kategori: "transpor", nominal: 15000 },
  { kategori: "makanan", nominal: 30000 },
  { kategori: "hiburan", nominal: 50000 },
];

const rekapKategori = transaksi.reduce((acc, item) => {
  // jika kategori belum ada di objek acc, set awal = 0
  if (!acc[item.kategori]) {
    acc[item.kategori] = 0;
  }
  // Tambahkan nominalnya ke kategori tersebut
  acc[item.kategori] += item.nominal;
  return acc;
}, {}); // Nilai awal adalah objek kosong {}

console.log("\nKasus (c) - Rekap total per kategori:");
console.log(rekapKategori);