// Soal:
// 1. Apa perbedaan utama let dan const?

// 2. Ubah function di bawah ini menjadi arrow function.
function tambah(a, b) {
  return a + b;
}
//---------------------------------------------------------------------------------------------------

//3. Ubah kode di bawah ini menjadi template literal.
const nama = "Gazi";
const umur = 20;

console.log("Halo, nama saya " + nama + ", umur saya " + umur + " tahun.");
//---------------------------------------------------------------------------------------------------

//4. Isi bagian yang kosong.
const warna = ["Merah", "Hijau"];

const [_____, _____] = warna;

console.log(warna1);
console.log(warna2);

// Biar outputnya:
// Merah
// Hijau
//---------------------------------------------------------------------------------------------------

// 5. Destructuring - Lengkapi kode berikut.
const siswa = {
  nama: "Gazi",
  jurusan: "RPL",
};

const { _____, _____ } = siswa;

console.log(nama);
console.log(jurusan);
//---------------------------------------------------------------------------------------------------

// 6. Default Value Kenapa output kode di bawah ini menjadi "Batam"?
const user = {
  nama: "Gazi",
};

const { kota = "Batam" } = user;

console.log(kota);
//