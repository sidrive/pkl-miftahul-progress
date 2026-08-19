const form = document.querySelector("#form-angka");
const input = document.querySelector("#input-angka");
const output = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Cek kalau inputnya BUKAN angka (isNaN)[cite: 1]
  if (isNaN(input.value) || input.value.trim() === "") {
    output.textContent = "Bukan angka woi!";
  } else {
    output.textContent = "Angka kamu: " + input.value;
  }
});