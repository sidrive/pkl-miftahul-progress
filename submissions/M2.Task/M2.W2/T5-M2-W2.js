const sparepart = [
    {nama: "Oli Mesin", harga: 60000},
    {nama: "Oli GearBox", harga: 20000},
    {nama: "Busi", harga: 100000},
    {nama: "Kampas Rem", harga: 75000},
];

const listPart = document.getElementById("listPart");

function render(data) {
    listPart.innerHTML = "";
    data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.nama} - Rp${item.harga}`;

        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.classList.add("btn-hapus");

        li.appendChild(btnHapus);
        listPart.appendChild(li);
    });
}

render(sparepart);

document.getElementById("btnTambah").addEventListener("click", () => {
  const nama = document.getElementById("namaPart").value.trim();
  const harga = Number(document.getElementById("hargaPart").value);

  if (!nama || !harga) return;

  sparepart.push({ nama, harga });
  render(sparepart);

  document.getElementById("namaPart").value = "";
  document.getElementById("hargaPart").value = "";
});

// filter
document.getElementById("btnFilter").addEventListener("click", () => {
  const mahal = sparepart.filter((item) => item.harga > 50000);
  render(mahal);
});

// filter 2
document.getElementById("btnFilter1").addEventListener("click", () => {
  const murah = sparepart.filter((item) => item.harga < 50000);
  render(murah);
});

// reduce
document.getElementById("btnTotal").addEventListener("click", () => {
  const total = sparepart.reduce((acc, curr) => acc + curr.harga, 0);
  document.getElementById("totalInfo").textContent = `Total: Rp${total}`;
});

// event Delegation di Parent <ul>
listPart.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-hapus")) {
    e.target.parentElement.remove();
  }
});