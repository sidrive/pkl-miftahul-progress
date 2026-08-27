function downloadFile(namaFile, sinyalBagus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sinyalBagus) {
        resolve(`file '${namaFile}' berhasil di download`);
      } else {
        reject(`gagal '${namaFile}' download, sinyal jelek bos`);
      }
    }, 1500);
  });
}

async function prosesDownload(namaFile, sinyalBagus) {
  try {
    const hasil = await downloadFile(namaFile, sinyalBagus);
    console.log("LOG Try (sukses):", hasil);
  } catch (error) {
    console.log("LOG Catch (gagal)", error);
  }
}

console.log("--- pengujian 1: Sinyal bagus Bos (Resolve) ---");
prosesDownload("Game-Patch.zip", true);

setTimeout(() => {
  console.log("\n --- pengujian 2: Sinyal jelek, download gagal (Reject) ---");
  prosesDownload("Game-Patch.zip", false);
}, 1500);
