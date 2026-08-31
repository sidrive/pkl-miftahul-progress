const daftarTodo = [
  { id: 1, teks: "Belajar Node.js & npm", selesai: false },
  { id: 2, teks: "Bikin Mini-App", selesai: false },
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
    listEl.appendChild(li);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // browser gak reload halaman

  const teksBaru = inputEl.value.trim();
  if (teksBaru === "") return;

  // Buat objek task baru
  const todoBaru = {
    id: Date.now(), // pakai timestamp sebagai ID unik
    teks: teksBaru,
    selesai: false
  };

  daftarTodo.push(todoBaru);
  render(daftarTodo);
  inputEl.value = "";
});

render(daftarTodo);