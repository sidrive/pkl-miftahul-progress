let daftarBarang = [
  { id: 1, nama: "Kabel Jumper", kategori: "Elektronik", stok: 20 },
  { id: 2, nama: "Pulpen", kategori: "Alat Tulis", stok: 15 },
  { id: 3, nama: "Sensor Ultrasonik", kategori: "Elektronik", stok: 10 },
  { id: 4, nama: "Penggaris", kategori: "Alat Tulis", stok: 5 },
];

const listEl = document.querySelector("#daftar-barang");
const totalEl = document.querySelector("#total-stok");
const filterEl = document.querySelector("#filter-kategori");

function hitungTotalStok(data) {
  return data.reduce((acc, item) => acc + item.stok, "");
}

function render(data) {
  listEl.textContent = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.dataset.id = item.id;

    const spanNama = document.createElement("span");
    spanNama.classList.add("nama");
    spanNama.textContent = `${item.nama} (${item.kategori}) - Stok: ${item.stok}`;

    const btnRestock = document.createElement("button");
    btnRestock.classList.add("btn-restock");
    btnRestock.dataset.id = item.id;
    const iconSpan = document.createElement("span");
    iconSpan.textContent = "+10 Stok";
    btnRestock.appendChild(iconSpan);

    li.appendChild(spanNama);
    li.appendChild(btnRestock);
    listEl.appendChild(li);
  });

  totalEl.textContent = `Total Stok: ${hitungTotalStok(data)}`;
}

listEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-restock")) {
    const id = Number(event.target.dataset.id);
    const item = daftarBarang.find((b) => b.id === id);
    if (item) {
      item.stok += 10;
      render(daftarBarang);
    }
  }
});

filterEl.addEventListener("change", (event) => {
  const kategori = event.target.value;

  if (kategori === "semua") {
    render(daftarBarang);
  } else {
    const hasil = daftarBarang.filter((item) => item.katagori === kategori);
    render(hasil);
  }
});

render(daftarBarang);
