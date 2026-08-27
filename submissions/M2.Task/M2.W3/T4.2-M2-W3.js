function cekKoneksi(sukses) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sukses) {
        resolve("eskrim sampai dengan selamat di tujuan");
      } else {
        reject("es krim tidak selamat bos");
      }
    }, 1500);
  });
}

async function contoh(sukses) {
  try {
    const hasil = await cekKoneksi(sukses);
    // baris ini bakal jalan kalau sukses
    console.log("LOG di TRY (Berhasil):", hasil);
  } catch (error) {
    // ini jalan kalau gagal
    console.log("LOG di CATCH (Gagal):", error);
  }
}

// tes kedua kasus
console.log("--- pengujian 1: sukses ---");
contoh(true);

setTimeout(() => {
  console.log("\n--- pengujian 2: gagal ---");
  contoh(false);
}, 1500);
