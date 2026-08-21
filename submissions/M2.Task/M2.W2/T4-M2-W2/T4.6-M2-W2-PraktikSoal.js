const list = document.querySelector("#list");

document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    console.log("diklik:", li.textContent);
  });
});

// Tambah li baru
const liBaru = document.createElement("li");
liBaru.textContent = "jocelyn";

list.appendChild(liBaru);