// 1. Data array siswa
const siswa = [
  { nama: "Ica", nilai: 70 },
  { nama: "Jocelyn", nilai: 90 },
  { nama: "Kenni", nilai: 88 },
];

// 2. Tarik wadah <ul> dari HTML
const listContainer = document.querySelector("#daftar-siswa");

// 3. Perulangan untuk membuat & menempelkan <li> untuk setiap siswa
siswa.forEach((s) => {
  // a. bikin elemen <li> baru di memori
  const itemBaru = document.createElement("li");
  
  // b. isi teks <li> dengan format nama & nilai
  itemBaru.textContent = `${s.nama} - Nilai: ${s.nilai}`;
  
  // c. tempel <li> baru ini ke dalam wadah <ul>
  listContainer.appendChild(itemBaru);
});