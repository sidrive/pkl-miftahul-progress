const komponenRobot = [
  { nama: "Arduino Nano", stok: 5 },
  { nama: "Ultrasonic Sensor", stok: 10 },
  { nama: "Servo Motor", stok: 8 },
  { nama: "Driver Motor", stok: 4 },
];

console.log("=== iterasi STEP-BY-STEP reduce ===");

const totalStok = komponenRobot.reduce((acc, curr, index) => {
  console.log(`Putaran ke-${index + 1}:`);
  console.log(`- acc awal putaran: ${acc}`);
  console.log(`- elemen sekarang: ${curr.nama} (stok: ${curr.stok})`);

  const accBaru = acc + curr.stok;
  console.log(`- acc setelah diisi: ${accBaru}\n`);

  return accBaru;
}, 0); // 0 nilai awal accumulator

console.log("Hasil Akhir Total Stok:", totalStok);
