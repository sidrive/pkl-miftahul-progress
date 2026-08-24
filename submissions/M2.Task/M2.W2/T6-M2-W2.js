// 1. data statis Array of Objects
const dataKomponen = [
  { id: 1, nama: "Arduino Nano", kategori: "Microcontroller", harga: 45000 },
  { id: 2, nama: "Ultrasonic HC-SR04", kategori: "Sensor", harga: 15000 },
  { id: 3, nama: "Motor Servo SG90", kategori: "Actuator", harga: 22000 },
  { id: 4, nama: "Sensor Garis TCRT5000", kategori: "Sensor", harga: 12000 }
];

const tabelBody = document.getElementById("tabelBody");

// 2. render DOM
function renderTabel(arr) {
  tabelBody.innerHTML = "";

  arr.forEach((item) => {
    const tr = document.createElement("tr");

    const tdNama = document.createElement("td");
    tdNama.textContent = item.nama;

    const tdKategori = document.createElement("td");
    tdKategori.textContent = item.kategori;

    const tdHarga = document.createElement("td");
    tdHarga.textContent = `Rp${item.harga.toLocaleString()}`;

    const tdAksi = document.createElement("td");
    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus");
    btnHapus.setAttribute("data-id", item.id);

    tdAksi.appendChild(btnHapus);

    tr.appendChild(tdNama);
    tr.appendChild(tdKategori);
    tr.appendChild(tdHarga);
    tr.appendChild(tdAksi);

    tabelBody.appendChild(tr);
  });
}

renderTabel(dataKomponen);

function updateRingkasan(arr) {
  // reduce
  const total = arr.reduce((acc, item) => acc + item.harga, 0);
  document.getElementById("totalBiaya").textContent = `Total Biaya: Rp${total.toLocaleString()}`;

  // map: map karna butuh mengubah array of object jadi array string berisi nama nama komponen aja
  const namaList = arr.map((item) => item.nama);
  document.getElementById("daftarRingkas").textContent = `Daftar Ringkas: ${namaList.join(", ")}`;
}

updateRingkasan(dataKomponen);

document.getElementById("btnTambah").addEventListener("click", () => {
  const nama = document.getElementById("inputNama").value.trim();
  const kategori = document.getElementById("inputKategori").value;
  const harga = Number(document.getElementById("inputHarga").value);

  if (!nama || !harga) return;

  dataKomponen.push({ id: Date.now(), nama, kategori, harga });
  renderTabel(dataKomponen);
  updateRingkasan(dataKomponen);

  document.getElementById("inputNama").value = "";
  document.getElementById("inputHarga").value = "";
});

// FILTER: Pilih filter karena butuh menyaring array awal menjadi array baru berdasarkan pilihan kategori
document.getElementById("filterKategori").addEventListener("change", (e) => {
  const kat = e.target.value;
  if (kat === "Semua") {
    renderTabel(dataKomponen);
    updateRingkasan(dataKomponen);
  } else {
    const hasilFilter = dataKomponen.filter((item) => item.kategori === kat);
    renderTabel(hasilFilter);
    updateRingkasan(hasilFilter);
  }
});

// 6. FIND: karna hanya butuh mengambil 1 objek pertama yang namanya cocok untuk menampilkan detailnya
document.getElementById("btnCari").addEventListener("click", () => {
  const kataKunci = document.getElementById("inputCari").value.toLowerCase().trim();
  const hasilFind = dataKomponen.find((item) => item.nama.toLowerCase().includes(kataKunci));

  const elHasil = document.getElementById("hasilCari");
  if (hasilFind) {
    elHasil.textContent = `Ditemukan: ${hasilFind.nama} (${hasilFind.kategori}) - Rp${hasilFind.harga.toLocaleString()}`;
  } else {
    elHasil.textContent = "Item tidak ditemukan!";
  }
});