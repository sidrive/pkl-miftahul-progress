const form = document.querySelector("#form-nama");
const input = document.querySelector("#input-nama");
const output = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop reload
  output.textContent = "Halo, " + input.value;
});