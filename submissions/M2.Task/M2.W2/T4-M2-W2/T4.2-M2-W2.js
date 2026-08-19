const listSiswa = document.querySelector("#list-siswa");
const listKedai = document.querySelector("#list-kedai");
const output = document.querySelector("#output");

const listSiswa1 = document.querySelector("#list-siswa1");
const output1 = document.querySelector("#output1");

// Fungsi pembantu biar gak nulis berulang
function tangkapKlik(e) { //e ni untuk jadi variabel, bebas ganti huruf apa aja
  // e.target = <li> yang diklik
  // e.currentTarget = <ul> tempat event ini dipasang
  const itemDiklik = e.target.textContent;
  const wadahInduk = e.currentTarget.id;

  output.textContent = `Kamu mengklik: "${itemDiklik}" (dari container: #${wadahInduk})`;
  
  console.log("target (elemen spesifik):", e.target);
  console.log("currentTarget (elemen induk):", e.currentTarget);
}

function arahCursor(e) {
    const item = e.target.textContent;

    output1.textContent = `Cursor sedang di: ${item}`;
}

// Pasang listener di kedua <ul>
listSiswa.addEventListener("click", tangkapKlik);
listKedai.addEventListener("click", tangkapKlik);

listSiswa1.addEventListener("mouseover", arahCursor);