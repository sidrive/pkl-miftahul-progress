//kasus a
const stokBarang = [10, 13, 32, 25];

const totalStok = stokBarang.reduce((acc, curr) => acc + curr, 0);
console.log("kasus (a) - Total stok barang:", totalStok);
// total 80

//kasus b
const hargaBarang = [1000, 2000, 5000, 10000];

const hargaMax = hargaBarang.reduce((max, curr) => (curr > max ? curr : max), hargaBarang[0]);
console.log("Kasus (b) - Harga barang:", hargaMax);

//kasus c
const barangKedai = [
    {jenis: "makanan", total: 5000},
    {jenis: "minuman", total: 10000},
    {jenis: "rokok", total: 50000},
    {jenis: "shampoo", total: 15000},
];

const kedaiA = barangKedai.reduce((acc, item) => {
    acc[item.jenis] = (acc[item.jenis] || 0) + item.total;
    return acc;
}, {});

console.log("kasus (c) - kedai kedai:", kedaiA);