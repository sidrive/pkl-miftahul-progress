//putaran 1
const daftarSiswa = document.querySelector("#daftarS");
const inputS = document.querySelector("#inputS");
const btnTambah = document.querySelector("#btn-tambah");
const output = document.querySelector("#output");

daftarSiswa.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
    output.textContent = "Kamu Klik: " + e.target.textContent;
    }
});

btnTambah.addEventListener("click", () => {
    if (inputS.value.trim() !== "") {
    const liBaru = document.createElement("li");
    liBaru.textContent = inputS.value;
    
    daftarSiswa.appendChild(liBaru);
    inputS.value = "";
  }
});

//putaran 2
const daftarB = document.querySelector("#daftarB");
const inputB = document.querySelector("#inputB");
const btntambahB = document.querySelector("#btn-tambah-B");

daftarB.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
    output.textContent = "Kamu Klik barang: " + e.target.textContent;
    }
});

btntambahB.addEventListener("click", () => {
    if (inputB.value.trim() !== "") {
    const liBaru = document.createElement("li");
    liBaru.textContent = inputB.value;
    
    daftarB.appendChild(liBaru);
    inputB  .value = "";
  }
});