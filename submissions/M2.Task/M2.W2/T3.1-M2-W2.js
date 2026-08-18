// --- 1. Cara Modern (querySelector & querySelectorAll) ---
// Ambil 1 elemen pertama yang punya class "deskripsi"
const paragrafPertama = document.querySelector(".deskripsi");
console.log("querySelector (.deskripsi):", paragrafPertama.textContent);

// Ambil SEMUA elemen yang punya class "deskripsi" (mengembalikan NodeList)
const semuaParagraf = document.querySelectorAll(".deskripsi");
console.log("querySelectorAll (.deskripsi) jumlah elemen:", semuaParagraf.length);

// --- 2. Cara Lama (getElementById & getElementsByClassName) ---
// Ambil elemen berdasarkan ID (tanpa tanda #)
const judul = document.getElementById("judul-utama");
console.log("getElementById (judul-utama):", judul.textContent);

// Ambil elemen berdasarkan Class (tanpa tanda .)
const koleksiParagraf = document.getElementsByClassName("deskripsi");
console.log("getElementsByClassName (.deskripsi) jumlah:", koleksiParagraf.length);