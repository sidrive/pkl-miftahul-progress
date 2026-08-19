const pesan = "Siswa Lulus: <b>Laila</b> (Nilai: 85)";
//textContent dia nampilkan pesan apa adanya, jadi tag <b> ditampilkan sebagai teks biasa dan tidak diterapkan.
const wadahText = document.querySelector("#wadah-text");
wadahText.textContent = pesan;

//innerHTML dia nampilkan pesan dengan format HTML, jadi tag <b> akan diterapkan dan teks "Laila" akan dicetak tebal.
const wadahHTML = document.querySelector("#wadah-html");
wadahHTML.innerHTML = pesan;