const dataBarang = [
    {id: 1, nama: "Alat Bor", stok: 15},
    {id: 2, nama: "Lem Super", stok: 9},
    {id: 3, nama: "Cangkul", stok: 24},
    {id: 4, nama: "Skop", stok: 5},
];

const inputCari = document.querySelector("#inputCari");
const daftarBarangEl = document.querySelector("#daftarBarang");

function render(list) {
    daftarBarangEl.textContent = "";

    const dataFormat = list.map(item => ({id: item.id, nama: item.nama }));

    dataFormat.forEach(item => {
        const li = document.createElement("li");

        const spanNama = document.createElement("span");
        spanNama.textContent = item.nama;

        const btnStok = document.createElement("button");
        btnStok.textContent = "lihat stok";
        btnStok.dataset.id = item.id;
        btnStok.classList.add("btn-cek-stok");

        li.appendChild(spanNama);
        li.appendChild(btnStok);
        daftarBarangEl.appendChild(li);
    });
}

daftarBarangEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-cek-stok")) {
        const idBarang = Number(e.target.dataset.id);

        const itemDitemukan = dataBarang.find(b => b.id === idBarang);

        if (itemDitemukan) {
            e.target.textContent = `Stok: ${itemDitemukan.stok}`;
        }
    }
});

inputCari.addEventListener("input", (e) => {
    const kataKunci = e.target.value.toLowerCase();

    const hasilCari = dataBarang.filter(item => item.nama.toLowerCase().includes(kataKunci));
    render(hasilCari);
});

render(dataBarang);