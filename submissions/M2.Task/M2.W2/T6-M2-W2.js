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