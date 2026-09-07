const transaksi = [
  { kategori: "makanan", jumlah: 20000 },
  { kategori: "transport", jumlah: 15000 },
  { kategori: "makanan", jumlah: 30000 },
];

function totalPerKategori(data, kategoriDicari) {
  const hasil = data.filter((t) => t.kategori === kategoriDicari);
  return hasil.reduce((acc, t) => acc + t.jumlah, 0);
}

console.log(totalPerKategori(transaksi, "makanan"));