const dataBuku = [
    {id: 1, judul: "Belajar Skrip Jawa", kategori: "Komputer", harga: 75000},
    {id: 2, judul: "Seni Pelangi Hitam", kategori: "Art", harga: 55000},
    {id: 4, judul: "Aku adalah Dia, Dia adalah Aku", kategori: "Novel", harga: 50000},
];

const tabelBody = document.getElementById("tabelBody");

//render tabel dan info
function tampilkanData(list) {
    tabelBody.innerHTML = "";

    list.forEach((buku) => {
        const tr = document.createElement("tr");

        const tdJudul = document.createElement("td");
        tdJudul.textContent = buku.judul;
        
        const tdKategori = document.createElement("td");
        tdKategori.textContent = buku.kategori;

        const tdHarga = document.createElement("td");
        tdHarga.textContent = `Rp${buku.harga}`;

        const tdAksi = document.createElement("td");
        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.classList.add("btn-hapus");
        btnHapus.setAttribute("data-id", buku.id);

        tdAksi.appendChild(btnHapus);

        tr.appendChild(tdJudul);
        tr.appendChild(tdKategori);
        tr.appendChild(tdHarga);
        tr.appendChild(tdAksi);

        tabelBody.appendChild(tr);
    });

    const total = list.reduce((acc, curr) => acc + curr.harga, 0);
    document.getElementById("totalHarga").textContent = `Total Harga Buku: Rp${total}`;

    const judulSemua = list.map((buku) => buku.judul);
    document.getElementById("daftarJudul").textContent = `Daftar Judul Ringkas: ${judulSemua.join(", ")}`;
}

tampilkanData(dataBuku);

//tambah buku
document.getElementById("btnTambah").addEventListener("click", () => {
    const judul = document.getElementById("inputJudul").value.trim();
    const kategori = document.getElementById("inputKategori").value;
    const harga = Number(document.getElementById("inputHarga").value);

    if (!judul || !harga) return;

    dataBuku.push({id: Date.now(), judul, kategori, harga});
    tampilkanData(dataBuku);

    document.getElementById("inputJudul").value = "";
    document.getElementById("inputHarga").value = "";
});

document.getElementById("filterKategori").addEventListener("change", (e) => {
    const kat = e.target.value;
    if (kat === "Semua"){
        tampilkanData(dataBuku);
    } else {
        const hasilFilter = dataBuku.filter((buku) => buku.kategori === kat);
        tampilkanData(hasilFilter);
    }
});

//hapus
tabelBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-hapus")) {
        const idHapus = Number(e.target.getAttribute("data-id"));
        const index = dataBuku.findIndex((buku) => buku.id === idHapus);

        if (index !== -1) {
            dataBuku.splice(index,1);
            tampilkanData(dataBuku);
        }
    }
});