const orang = [
    { id: 1, nama: "bude", umur: 45 },
    { id: 2, nama: "jesika", umur: 23 },
    { id: 3, nama: "jojo", umur: 30 },
]

const caribude = orang.find((o) => o.nama === "bude");
console.log("\nHasil find (cari bude):");
console.log(caribude); 
// Outputnya objek langsung: { id: 1, nama: 'bude', umur: 45 }

const cariGagal2 = orang.find((o) => o.nama === "dodo");
console.log("\nHasil find data tidak ada (cari dodo):");
console.log(cariGagal2); 
// Outputnya: undefined

const filterbude = orang.filter((o) => o.nama === "bude");
console.log("\nHasil filter (cari bude):");
console.log(filterbude); 
// Outputnya array: [ { id: 1, nama: 'bude', umur: 45 } ]