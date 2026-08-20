const barang = [
    { id: 1, nama: "Kopi Api" , jumlah: 12 },
    { id: 2, nama: "Tea Jus", jumlah: 23 },
    { id: 3, nama: "Teh Melati", jumlah: 11 },
]

const caribarang = barang.find((b) => b.nama === "Teh Melati");
console.log("\n hasil find (caribarang):");
console.log(caribarang);

const filterbarang = barang.filter((b) => b.nama === "Kopi Api");
console.log("\nHasil filter (cari barang):");
console.log(filterbarang); 

const cgagal = barang.find((b) => b.nama === "Oli 2 tak");
console.log("\n hasil find (oli 2 tak):");
console.log(cgagal);

//bedanya pakai filter dan find itu output filter pakai [], sedangkan find {}
