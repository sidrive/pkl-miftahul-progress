const siswa = {
  nama: "Gazi",
  jurusan: "RPL"
}

// Ambil biasa
const { nama } = siswa
console.log("1. Nama biasa:", nama)

// Rename (Ubah nama variabel jadi 'namaSiswa'), digunakan saat ada nama variabel yang sama
// jadi dibedakan menggunakan rename ini. (ada variabel nama=guru dan nama=siswa, jadi biar ga bentrok/eror
// maka kita rename salah satu variabelnya, misal nama=siswa diubah menjadi namaSiswa)
const { nama: namaSiswa } = siswa
console.log("2. Rename variabel:", namaSiswa)

// Default Value (Property 'kota' tidak ada di objek 'siswa'), karena di variabel siswa tidak ada kota, 
// maka kasih batam sebagai cadangan untuk 'kota'
const { kota = "Batam" } = siswa
console.log("3. Pakai Default Value:", kota)