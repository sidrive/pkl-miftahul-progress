// fungsi cek koneksi putaran 1
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

// fungsi cek stok putaran 2
function cekStokBarang(jumlahStok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jumlahStok > 0) {
        resolve(`Stok tersedia! Sisa ${jumlahStok} unit.`);
      } else {
        reject("Maaf, stok barang habis!");
      }
    }, 1000);
  });
}

//ngubah .then/.catch menjadi async/await

// versi async/await untuk cek koneksi
async function tesCekKoneksi(status) {
  try {
    const hasil = await cekKoneksi(status);
    console.log("Hasil Koneksi:", hasil);
  } catch (error) {
    console.log("Error Koneksi:", error);
  }
}

// versi async/await untuk cek stok
async function tesCekStok(jumlah) {
  try {
    const hasil = await cekStokBarang(jumlah);
    console.log("Hasil Stok:", hasil);
  } catch (error) {
    console.log("Error Stok:", error);
  }
}

// uji kasus sukses & gagal
tesCekKoneksi(true);  // Resolve
tesCekKoneksi(false); // Reject

tesCekStok(10);       // Resolve
tesCekStok(0);        // Reject