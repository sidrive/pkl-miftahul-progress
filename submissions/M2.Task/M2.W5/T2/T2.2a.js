// ===================================
// Simpan data ke localStorage
// ===================================
const daftarCatatan = [
    {
        id: 1,
        teks: "Belajar JavaScript"
    }
];

localStorage.setItem("catatan", JSON.stringify(daftarCatatan));


// ===================================
// Fungsi dari modul (MASIH ADA BUG)
// ===================================
function muat() {
    const mentah = localStorage.getItem("catatan");

    if (!mentah) return [];

    return JSON.parse(mentah);
}


// ===================================
// Coba lihat hasilnya
// ===================================
const hasil = muat();

console.log("Isi variabel hasil:");
console.log(hasil);

console.log("Tipe datanya:");
console.log(typeof hasil);

console.log("Isi karakter pertama:");
console.log(hasil[0]);