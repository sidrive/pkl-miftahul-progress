// ini putaran ke 3 untuk task T2.1/T2.2
// Data Komponen Robot
const komponenRobot = [
  { nama: "Arduino Nano", harga: 45000, stok: 5, kategori: "Microcontroller" },
  { nama: "Ultrasonic Sensor HC-SR04", harga: 15000, stok: 10, kategori: "Sensor" },
  { nama: "Servo Motor SG90", harga: 20000, stok: 8, kategori: "Motor" },
  { nama: "Driver Motor L298N", harga: 30000, stok: 4, kategori: "Driver" }
];

// find ()
const cariServo = komponenRobot.find((item) => item.nama === "Servo Motor SG90");

console.log("--- Hasil find() ---");
console.log(cariServo);

//total
const stokTotal = komponenRobot.reduce((acc, curr) => acc + curr.stok, 0);
console.log("\nhasil reduce(): variasi 1:");
console.log("total seluruh stok:", stokTotal);

const komponenTermhl = komponenRobot.reduce((max, curr) => {
    return curr.harga > max.harga ? curr : max;
}, komponenRobot[0]);

console.log("\nhasil reduce() variasi 2:");
console.log("komponen paling mahal",komponenTermhl);
