// tugas T2.8 M4

function simpanCatatan (data) {
  localStorage.setItem('catatan_harian', JSON.stringify(data))
}

function muatCatatan() {
  const mentah = localStorage.getItem('catatan_harian');

  if (!mentah) return[];

  try {
    return JSON.parse(mentah);
  } catch (error) {
    console.warn('Gagal memuat catatan harian', error);
    return [];
  }
}

const dataAwal = muatCatatan();
let daftarCatatan = dataAwal.length > 0 ? dataAwal : [
  { id: 1, isi: "Evaluasi kodingan hari ini" },
  { id: 2, isi: "Istirahat jam 12 siang" },
  { id: 3, isi: "Foto KTA hari kamis" }
];

const listEl = document.querySelector('#daftar-catatan');
const formEl = document.querySelector('#form-catatan');
const inputEl = document.querySelector('#input-catatan');

function render(data) {
  listEl.textContent = "";
  data.forEach((catatan) => {
    const li = document.createElement('li');
    li.dataset.id = catatan.id;

    const spanText = document.createElement('span');
    spanText.textContent = catatan.isi;

    const btnHapus = document.createElement('button');
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add('btn-hapus');

    li.appendChild(spanText);
    li.appendChild(btnHapus);
    listEl.appendChild(li);
  });
}

listEl.addEventListener("click", (event) => {
  const target = event.target;
  const li = target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);

  if (target.classList.contains('btn-hapus')) {
    daftarCatatan = daftarCatatan.filter((catatan) => catatan.id !== id);
    simpanCatatan(daftarCatatan);
    render(daftarCatatan);
  }
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const teskBaru = inputEl.value.trim();
  if (teskBaru === "") return;

  const catatanBaru = {
    id: Date.now(),
    isi: teskBaru
  };

  daftarCatatan.push(catatanBaru);
  simpanCatatan(daftarCatatan);
  render(daftarCatatan);
  inputEl.value = "";
});

render(daftarCatatan);