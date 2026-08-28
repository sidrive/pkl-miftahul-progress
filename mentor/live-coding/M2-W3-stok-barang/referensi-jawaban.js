// ⚠️ KUNCI JAWABAN MENTOR — jangan diberikan/ditunjukkan ke Gazi.
// Referensi cepat kalau dia stuck dan Anda perlu tahu arah yang benar tanpa mikir dari nol.

const barang = [
  { id: 1, nama: "Kabel Jumper", stok: 120 },
  { id: 2, nama: "Resistor 220Ω", stok: 500 },
  { id: 3, nama: "LED Merah", stok: 80 },
  { id: 4, nama: "Breadboard", stok: 15 },
];

const daftarEl = document.querySelector("#daftar-barang");

// === TINGKAT DASAR ===

function renderList(data) {
  daftarEl.innerHTML = ""; // aman, string kosong literal, bukan data luar

  data.forEach((item) => {
    const li = document.createElement("li");

    const spanNama = document.createElement("span");
    spanNama.textContent = item.nama;

    const spanStok = document.createElement("span");
    spanStok.setAttribute("data-stok-untuk", item.id);
    spanStok.textContent = ""; // kosong dulu, diisi saat tombol diklik

    const btnCek = document.createElement("button");
    btnCek.textContent = "Cek Stok";
    btnCek.classList.add("btn-cek-stok");
    btnCek.setAttribute("data-id", item.id);

    li.appendChild(spanNama);
    li.appendChild(btnCek);
    li.appendChild(spanStok);
    daftarEl.appendChild(li);
  });
}

renderList(barang);

// Event delegation — 1 listener di parent, bukan per tombol
daftarEl.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn-cek-stok")) return;

  const id = Number(event.target.getAttribute("data-id"));
  const item = barang.find((b) => b.id === id); // find: butuh 1 objek, bukan array

  const spanStok = daftarEl.querySelector(`[data-stok-untuk="${id}"]`);
  spanStok.textContent = ` — Stok: ${item.stok}`;
});

// === TINGKAT LANJUTAN (opsional, kalau dia selesai cepat) ===
// Ganti bagian "cari & tampilkan stok" di atas dengan versi async ini:

function cekStokAsync(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = barang.find((b) => b.id === id);
      resolve(item.stok);
    }, 800);
  });
}

async function tampilkanStokAsync(id, spanStokEl) {
  spanStokEl.textContent = " — Mengecek stok...";
  try {
    const stok = await cekStokAsync(id);
    spanStokEl.textContent = ` — Stok: ${stok}`;
  } catch (error) {
    spanStokEl.textContent = " — Gagal mengecek stok.";
  }
}

// dipanggil di dalam listener delegation:
// daftarEl.addEventListener("click", (event) => {
//   if (!event.target.classList.contains("btn-cek-stok")) return;
//   const id = Number(event.target.getAttribute("data-id"));
//   const spanStok = daftarEl.querySelector(`[data-stok-untuk="${id}"]`);
//   tampilkanStokAsync(id, spanStok);
// });
