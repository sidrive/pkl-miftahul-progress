// kode ini hasil tugas T2 sampai T2.7.

// fungsi buat nyimpan semua data todo ke localStorage. karna localStorage cuma bisa simpan string,
// jadi datanya harus diubah dulu pakai JSON.stringify().
function simpan(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}

// fungsi buat ambil data todo dari localStorage.
function muat() {
  const mentah = localStorage.getItem("todos");

  // kalau belum ada data yang disimpan, balikin array kosong biar aplikasi tetap jalan.
  if (!mentah) return [];

  try {
    // ubah lagi data string JSON jadi array/object supaya bisa dipakai lagi di JavaScript.
    return JSON.parse(mentah);
  } catch (error) {
    // kalau isi localStorage rusak atau bukan JSON yang benar, jangan sampai aplikasi error. 
    // balikin aja array kosong.
    console.warn("Data localStorage rusak.", error);
    return [];
  }
}

// pas halaman dibuka, langsung ambil data dari localStorage.k alau sebelumnya udah pernah nyimpan todo,
// nanti data itu jadi otomatis muncul lagi.
const dataAwal = muat();

let daftarTodo = dataAwal.length > 0 ? dataAwal : [
  { id: 1, teks: "Belajar Node.js & npm", selesai: false },
  { id: 2, teks: "Bikin tampilan awal To-Do List", selesai: false },
  { id: 3, teks: "Pahami konsep DOM & Event", selesai: false },
  { id: 4, teks: "Eksperimen localStorage", selesai: false }
];

const listEl = document.querySelector("#daftar-todo");
const formEl = document.querySelector("#form-todo");
const inputEl = document.querySelector("#input-todo");
const inputCariEl = document.querySelector("#input-cari");

function render(data) {
  listEl.textContent = "";

  data.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const spanTeks = document.createElement("span");
    spanTeks.textContent = todo.teks;

    if (todo.selesai) {
      spanTeks.classList.add("selesai");
    }

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus");

    li.appendChild(spanTeks);
    li.appendChild(btnHapus);
    listEl.appendChild(li);
  });
}

// fitur tambahan: cari task secara langsung saat kita ngetik. (T4)
inputCariEl.addEventListener("input", (event) => {
  const kataKunci = event.target.value.toLowerCase();

  const hasilFilter = daftarTodo.filter((todo) =>
    todo.teks.toLowerCase().includes(kataKunci)
  );

  render(hasilFilter);
});

// Event untuk klik task atau tombol hapus.
listEl.addEventListener("click", (event) => {
  const target = event.target;
  const li = target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);

  // kalau tombol hapus ditekan.
  if (target.classList.contains("btn-hapus")) {
    daftarTodo = daftarTodo.filter((todo) => todo.id !== id);

    // simpan perubahan ke localStorage.
    simpan(daftarTodo);

    // tampilin lagi data yang sudah diperbarui.
    render(daftarTodo);
    return;
  }

  // kalau teks task diklik, ubah status selesai/belum selesai.
  if (target.tagName === "SPAN") {
    const todo = daftarTodo.find((t) => t.id === id);

    if (todo) {
      todo.selesai = !todo.selesai;

      // simpan perubahan ke localStorage.
      simpan(daftarTodo);

      // tampilin hasilnya lagi.
      render(daftarTodo);
    }
  }
});

// Event kalau nambah task baru.
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const teksBaru = inputEl.value.trim();
  if (teksBaru === "") return;

  const todoBaru = {
    id: Date.now(),
    teks: teksBaru,
    selesai: false
  };

  daftarTodo.push(todoBaru);

  // simpan data terbaru ke localStorage.
  simpan(daftarTodo);

  // tampilin task yang baru ditambahkan.
  render(daftarTodo);

  inputEl.value = "";
});

// tampilin semua data saat halaman pertama kali dibuka.
render(daftarTodo);