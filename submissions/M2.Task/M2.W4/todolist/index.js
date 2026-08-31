const daftarTodo = [
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
    li.textContent = todo.teks;
    
    li.dataset.id = todo.id;

    if (todo.selesai) {
      li.classList.add("selesai");
    }

    listEl.appendChild(li);
  });
}

listEl.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const id = Number(event.target.dataset.id);
    
    const todo = daftarTodo.find((t) => t.id === id);
    
    if (todo) {
      todo.selesai = !todo.selesai;
      render(daftarTodo);
    }
  }
});

// Event listener untuk form tambah task
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
  render(daftarTodo);
  inputEl.value = "";
});

render(daftarTodo);