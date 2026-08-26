function cekStokBarang(jumlahStok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jumlahStok > 0) {
        resolve (`stok barang tersedia ${jumlahStok} unit.`);
      } else {
        reject("maaf barang tidak cukup");
      }
    }, 1500);
  });
}

cekStokBarang(100)
  .then((pesan) => console.log("Then (Stok):", pesan))
  .catch((err) => console.log("Catch (Stok):", err));

// Uji Kasus Stok Habis (Reject -> .catch)
cekStokBarang(0)
  .then((pesan) => console.log("Then (Stok):", pesan))
  .catch((err) => console.log("Catch (Stok):", err));
