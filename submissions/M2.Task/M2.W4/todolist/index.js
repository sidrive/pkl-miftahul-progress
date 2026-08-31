const daftarTodo = [
  { id: 1, teks: "Belajar Node.js & npm", selesai: false },
  { id: 2, teks: "Bikin tampilan awal To-Do List", selesai: false },
  { id: 3, teks: "Pahami konsep DOM & Event", selesai: false },
  { id: 4, teks: "Eksperimen localStorage", selesai: false }
];

const listEl = document.querySelector("#daftar-todo");

function render(data) {
  listEl.textContent = "";
  data.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.teks;
    listEl.appendChild(li);
  });
}

render(daftarTodo);