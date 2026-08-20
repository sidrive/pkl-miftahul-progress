const input = document.getElementById("inputGame");
const list = document.getElementById("listGame");

// Tambah game
document.getElementById("btnTambah").addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${input.value} <button class="btn-hapus">Hapus</button>`;

  list.appendChild(li);
  input.value = "";
});

// Event Delegation
list.addEventListener("click", (e) => {

  // Kalau klik tombol Hapus
  if (e.target.classList.contains("btn-hapus")) {
    e.target.parentElement.remove();
  }

  // Kalau klik nama game
  else {
    alert("Kamu memilih game: " + e.target.childNodes[0].textContent.trim());
  }

});