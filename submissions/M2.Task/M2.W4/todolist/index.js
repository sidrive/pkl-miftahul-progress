// fungsi nyimpan data ke localStorage (dikonversi ke String JSON)
function simpan(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}

// fungsin memuat data dari localStorage (diubah balik ke Object/Array)
function muat() {
  const mentah = localStorage.getItem("todos");
  return mentah ? JSON.parse(mentah) : [];
}

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

// Event Delegation di parent listEl
listEl.addEventListener("click", (event) => {
  const target = event.target;
  const li = target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);

  if (target.classList.contains("btn-hapus")) {
    daftarTodo = daftarTodo.filter((todo) => todo.id !== id);
    simpan(daftarTodo);
    render(daftarTodo);
    return;
  }

  if (target.tagName === "SPAN") {
    const todo = daftarTodo.find((t) => t.id === id);
    if (todo) {
      todo.selesai = !todo.selesai;
      simpan(daftarTodo);
      render(daftarTodo);
    }
  }
});

// Event listener form tambah task
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
  simpan(daftarTodo);
  render(daftarTodo);
  inputEl.value = "";
});

render(daftarTodo);