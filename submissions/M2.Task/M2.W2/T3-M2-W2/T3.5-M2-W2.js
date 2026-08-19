//nama barang:
const barang = [
    {Nama: "KukuBima", Harga: 2000, Stok: 15},
    {Nama: "Teh Manis", Harga: 5000, Stok: 25},
    {Nama: "Kopi Kapal Selam", Harga: 1000, Stok: 30},
    {Nama: "CatBand", Harga: 1000, Stok: 22},
];

//kita ambil dari ul ini
const wadah1 = document.querySelector("#daftar-barang");

barang.forEach((item) => { //perulangan untuk nampilkan tiap barang
    const liBaru = document.createElement("li");
    liBaru.textContent = `${item.Nama} | Harga: ${item.Harga} | Stok: ${item.Stok}`;
    wadah1.appendChild(liBaru);
});
