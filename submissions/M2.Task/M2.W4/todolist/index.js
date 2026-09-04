// --- LOCALSTORAGE FUNCTIONS ---
function simpanBelanja(data) {
  localStorage.setItem("belanjaan", JSON.stringify(data));
}

function muatBelanja() {
  const mentah = localStorage.getItem("belanjaan");
  if (!mentah) return [];
  try {
    return JSON.parse(mentah);
  } catch (error) {
    console.warn("data belanjaan tidak valid", error);
    return [];
  }
}

// Inisialisasi Data
let daftarBelanja = muatBelanja();

// Selector Elemen DOM
const listBelanjaEl = document.querySelector("#daftar-belanja");
const formBelanjaEl = document.querySelector("#form-belanja");
const inputNamaEl = document.querySelector("#input-nama-barang");
const inputHargaEl = document.querySelector("#input-harga-barang");
const totalHargaEl = document.querySelector("#total-harga");
const inputCariBarangEl = document.querySelector("#input-cari-barang");

// Fungsi Render List & Hitung Total
function renderBelanja(data) {
  listBelanjaEl.textContent = "";
  let total = 0;

  data.forEach((item) => {
    total += item.harga;

    const li = document.createElement("li");
    li.dataset.id = item.id;

    const spanInfo = document.createElement("span");
    spanInfo.textContent = `${item.nama} - Rp ${item.harga.toLocaleString('id-ID')}`;

    // Tombol Edit Baru
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.classList.add("btn-edit-belanja");
    btnEdit.style.marginLeft = "8px";

    // Tombol Hapus Tetap Ada
    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus-belanja");
    btnHapus.style.marginLeft = "4px";

    li.appendChild(spanInfo);
    li.appendChild(btnEdit);
    li.appendChild(btnHapus);
    listBelanjaEl.appendChild(li);
  });

  totalHargaEl.textContent = total.toLocaleString('id-ID');
}

// Event Submit Form (Tambah Barang Baru)
formBelanjaEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = inputNamaEl.value.trim();
  const harga = Number(inputHargaEl.value);

  if (!nama || harga <= 0) return;

  const barangBaru = {
    id: Date.now(),
    nama: nama,
    harga: harga
  };

  daftarBelanja.push(barangBaru);
  simpanBelanja(daftarBelanja);
  renderBelanja(daftarBelanja);

  inputNamaEl.value = "";
  inputHargaEl.value = "";
});

// Event Delegation (Hapus & Edit Barang)
listBelanjaEl.addEventListener("click", (event) => {
  const target = event.target;
  const li = target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);

  // Fitur Hapus
  if (target.classList.contains("btn-hapus-belanja")) {
    daftarBelanja = daftarBelanja.filter((item) => item.id !== id);
    simpanBelanja(daftarBelanja);
    renderBelanja(daftarBelanja);
    return;
  }

  // Fitur Edit
  if (target.classList.contains("btn-edit-belanja")) {
    const barang = daftarBelanja.find((item) => item.id === id);
    if (!barang) return;

    const namaBaru = prompt("Edit nama barang:", barang.nama);
    const hargaBaru = prompt("Edit harga barang (Rp):", barang.harga);

    // Cek kalau inputan valid (tidak dibatalkan/kosong)
    if (namaBaru !== null && namaBaru.trim() !== "" && !isNaN(hargaBaru) && Number(hargaBaru) > 0) {
      barang.nama = namaBaru.trim();
      barang.harga = Number(hargaBaru);

      simpanBelanja(daftarBelanja);
      renderBelanja(daftarBelanja);
    }
  }
});

// Fitur Pencarian Real-Time
if (inputCariBarangEl) {
  inputCariBarangEl.addEventListener("input", (event) => {
    const kataKunci = event.target.value.toLowerCase();
    const hasilFilter = daftarBelanja.filter((item) =>
      item.nama.toLowerCase().includes(kataKunci)
    );
    renderBelanja(hasilFilter);
  });
}

// Render awal
renderBelanja(daftarBelanja);