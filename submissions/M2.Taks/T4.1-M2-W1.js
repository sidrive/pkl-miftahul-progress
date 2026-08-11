// 1. Contoh Sederhana
const koordinat = [10, 20];
const [x, y] = koordinat;

console.log("Nilai X:", x); // 10
console.log("Nilai Y:", y); // 20

// 2. Contoh dari Fungsi yang ngembaliin Array (misal: Jam & Menit)
function getWaktu() {
  return [11, 16];
}

const [jam, menit] = getWaktu();
console.log(`Sekarang jam ${jam} lewat ${menit} WIB`);

//NOTE
// nah jadi gini kan ada fungsi getWaktu(), kita anggap function ini mesin, 
// jadi kalo dia panggil function atau mesin ini, dia menjalan kan getWaktu() ini, nah kan ada return, 
// jadi ini kaya kita menyalakan mesin nya, dia akan mengeluarkan hasil dari mesin itu yaitu 11 dan 16, 
// untuk 11 dan 16 ini kita variabel kan menjadi jam dan menit, sehingga kita bisa memanggil/memakai 
// nya di teks
