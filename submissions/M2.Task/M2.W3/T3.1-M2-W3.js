// PUTARAN 1: Simulasi Cek Koneksi
function cekKoneksi(sukses) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sukses) {
        resolve("Koneksi berhasil setelah nunggu 1 detik!");
      } else {
        reject("Koneksi gagal, ada masalah!");
      }
    }, 1000);
  });
}

// Uji Kasus Sukses (Resolve -> .then)
cekKoneksi(true)
  .then((hasil) => console.log("Then:", hasil))
  .catch((error) => console.log("Catch:", error));

// Uji Kasus Gagal (Reject -> .catch)
cekKoneksi(false)
  .then((hasil) => console.log("Then:", hasil))
  .catch((error) => console.log("Catch:", error));