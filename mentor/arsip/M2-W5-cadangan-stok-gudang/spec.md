# Spec — Bug Hunting: Manajemen Stok Gudang (3 bug)

## Bug #1 — Total stok jadi aneh (nilai awal `reduce` salah tipe)

```js
function hitungTotalStok(data) {
  return data.reduce((acc, item) => acc + item.stok, "");
}
```

Nilai awal `reduce` seharusnya `0` (angka), tapi ditulis `""` (string kosong). Karena `"" + 20`
menghasilkan string `"20"` (bukan angka), setiap penjumlahan berikutnya jadi **penggabungan
string**, bukan penjumlahan matematis.

**Gejala:** total stok yang tampil bukan angka masuk akal — jadi gabungan digit semua item
(misal `"2015105"` alih-alih `50`), tanpa error di console.

## Bug #2 — Tombol "+10 Stok" kadang tidak merespons (event target vs elemen anak)

```html
<button class="btn-restock" data-id="...">
  <span>+10 Stok</span>
</button>
```
```js
listEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-restock")) {
    // ...tidak pernah/jarang kesampaian
  }
});
```

Tombolnya punya elemen `<span>` di dalamnya untuk teks. Saat diklik tepat di teks (`<span>`),
`event.target` adalah `<span>` itu, **bukan** `<button>`-nya — jadi `classList.contains("btn-restock")`
selalu `false` di kasus itu. Kalau kebetulan klik di pinggir tombol (di luar area `<span>`, masih di
dalam `<button>`), baru `event.target` adalah `<button>` itu sendiri dan kodenya jalan.

**Gejala:** tombol restock **kadang jalan kadang tidak**, tergantung persis di mana kursor
mengklik — membingungkan karena kelihatan "acak", padahal polanya konsisten kalau dipahami.

## Bug #3 — Filter kategori selalu kosong (typo nama properti)

```js
const daftarBarang = [
  { id: 1, nama: "Kabel Jumper", kategori: "Elektronik", stok: 20 },
  // ...
];

filterEl.addEventListener("change", (event) => {
  const kategori = event.target.value;
  if (kategori === "semua") {
    render(daftarBarang);
  } else {
    const hasil = daftarBarang.filter((item) => item.katagori === kategori); // typo: katagori
    render(hasil);
  }
});
```

Properti di data adalah `kategori`, tapi di dalam `filter` ditulis `item.katagori` (typo, huruf
"a" bukan "e"). `item.katagori` selalu `undefined`, jadi kondisinya selalu `false` — filter
apapun kategorinya, hasilnya selalu **array kosong**.

**Gejala:** pilih kategori apapun di dropdown filter, list selalu kosong — tidak ada error.

## Rubrik penilaian live

| Bug | Sinyal bagus | Perlu digali lebih lanjut |
|---|---|---|
| #1 (total aneh) | Curiga ke `reduce`, cek nilai awal, sadar `""` vs `0` | Cuma coba ganti-ganti angka tanpa ngerti kenapa hasilnya nyambung jadi 1 string panjang |
| #2 (tombol intermiten) | Sadar pola "kadang jalan" terkait posisi klik, cek `event.target` di console, ganti ke `event.target.closest(".btn-restock")` | Menyerah/menganggap "bug aneh tidak konsisten", tidak menyadari ada elemen anak (`<span>`) di dalam tombol |
| #3 (filter kosong) | Cek isi `item` di console, bandingkan nama properti aslinya vs yang dipakai di kondisi `filter` | Curiga ke logic filter secara umum tanpa cek typo nama properti |

## Estimasi waktu

Realistis 25-40 menit untuk ketiga bug (kode baru + ada 1 bug yang genuinely tricky). Kalau di
bawah 25 menit, itu progres signifikan dibanding baseline minggu ini (32-37 menit untuk kode yang
jauh lebih pendek dan bug lebih sederhana).
