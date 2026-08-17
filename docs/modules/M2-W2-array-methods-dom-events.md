# Modul Bulan 2 Minggu 2 — Array/Object Methods & DOM/Event Handling

> Modul ini menemani task `M2.W2.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah.
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — task bertanda
> **[Wajib Refleksi]** baru dianggap `done` kalau kamu bisa jelaskan pemahamannya pakai kata
> sendiri, bukan cuma kode-nya jalan.
>
> **🗓️ Minggu kerja pendek:** Senin 17 Agustus 2026 libur, jadi minggu ini hanya **4 hari kerja**
> (Selasa 18 – Jumat 21 Agustus 2026). Task di bawah sudah disesuaikan volumenya, tidak perlu
> dipaksa selesai lebih cepat dari biasanya.
>
> **Catatan penting (pola yang sudah 2x berulang):** Minggu-minggu lalu ada 2 kesalahan konsep
> karena "kelihatan mirip = dikira sama" — unit CSS `fr` dikira mirip `vh`, lalu arrow function
> dikira cuma "versi singkat" dari `function` biasa. Minggu ini ada jebakan **serupa** di
> `reduce()`: banyak orang menganggap itu cuma "`for` loop yang ditulis lebih ribet". Salah — lihat
> bagian 2 di bawah, jangan kejebak pola pikir yang sama lagi.

---

## 1. `map` & `filter`

### `M2.W2.T1.1` — Praktik `map`

`map()` mengubah **setiap** elemen array jadi sesuatu yang baru, dan hasilnya array baru dengan
**panjang yang sama** seperti array asli.

```js
const siswa = [
  { nama: "Ani", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Citra", nilai: 90 },
]

const daftarNama = siswa.map((s) => s.nama)
console.log(daftarNama) // ["Ani", "Budi", "Citra"]

const angka = [1, 2, 3]
const dikali2 = angka.map((n) => n * 2)
console.log(dikali2) // [2, 4, 6]
```

**Latihan:** dari array `siswa` di atas, buat array baru berisi string `"nama - nilai"` untuk tiap
siswa (pakai `map` + template literal, gabungkan pelajaran minggu lalu).

**Checklist selesai:** kamu jalankan sendiri dan lihat `angka` aslinya **tidak berubah** setelah
`map` (cek `console.log(angka)` lagi setelahnya — masih `[1, 2, 3]`).

### `M2.W2.T1.2` — Praktik `filter`

`filter()` **menyeleksi** elemen berdasarkan kondisi (return `true`/`false`), hasilnya array baru
yang bisa **lebih pendek** dari aslinya.

```js
const siswaLulus = siswa.filter((s) => s.nilai >= 75)
console.log(siswaLulus) // [{nama: "Ani", ...}, {nama: "Citra", ...}] — Budi tidak lolos
```

**Latihan:** gabungkan `map` + `filter` — dari array `siswa`, ambil nama-nama siswa yang nilainya
di bawah 75 saja.

**Contoh entry log:**
```markdown
### Task: M2.W2.T1.2
- **Status:** done
- **Capaian:** Berhasil praktik map & filter, termasuk kombinasi keduanya untuk ambil nama siswa nilai <75.
- **Kesulitan:** -
```

### `M2.W2.T1.3` — [Wajib Refleksi] Kenapa selalu array baru?

**Isi log dengan menjawab (kata sendiri):**
1. Kenapa `map`/`filter` **selalu** menghasilkan array baru, tidak pernah mengubah array asli
   (coba buktikan lagi kalau belum yakin — `console.log` array aslinya setelah `map`/`filter`)?
2. Bandingkan dengan versi `for` loop manual yang melakukan hal yang sama (tulis versi `for` loop
   dari salah satu latihan di atas) — mana yang lebih mudah dibaca, dan kenapa?

**Contoh entry log:**
```markdown
### Task: M2.W2.T1.3
- **Status:** done
- **Capaian:** [jawaban soal immutability map/filter + perbandingan kode for-loop vs map/filter]
- **Kesulitan:** -
```

---

## 2. `reduce` & `find` — **bukan cuma "`for` loop yang lebih ribet"**

### `M2.W2.T2.1` — Praktik `find`

`find()` mencari **1 elemen pertama** yang cocok kondisi, hasilnya 1 elemen (atau `undefined`
kalau tidak ketemu) — **bukan array**.

```js
const cariBudi = siswa.find((s) => s.nama === "Budi")
console.log(cariBudi) // {nama: "Budi", nilai: 65}

const cariGagal = siswa.find((s) => s.nama === "Deni")
console.log(cariGagal) // undefined
```

**Bandingkan dengan `filter`:** `siswa.filter((s) => s.nama === "Budi")` juga bisa jalan, tapi
hasilnya **array berisi 1 elemen** (`[{...}]`), bukan elemen itu langsung. Kalau kamu cuma butuh
1 elemen, `find` lebih tepat dan lebih jelas maksudnya buat pembaca kode.

**Checklist selesai:** kamu coba `cariGagal` di atas dan lihat sendiri hasilnya `undefined`
(bukan error).

### `M2.W2.T2.2` — Praktik `reduce`

`reduce()` "mengakumulasi" seluruh elemen array jadi **1 nilai akhir** (bisa angka, string, object,
apa saja) — nilai itu dibawa terus dari elemen ke elemen.

```js
const nilaiArr = [80, 65, 90]

// (a) total
const total = nilaiArr.reduce((akumulator, sekarang) => akumulator + sekarang, 0)
console.log(total) // 235

// (b) cari nilai max
const nilaiMax = nilaiArr.reduce((maxSaatIni, sekarang) => (sekarang > maxSaatIni ? sekarang : maxSaatIni), nilaiArr[0])
console.log(nilaiMax) // 90

// (c) ubah array jadi object rekap
const transaksi = [
  { kategori: "makanan", jumlah: 20000 },
  { kategori: "transport", jumlah: 15000 },
  { kategori: "makanan", jumlah: 30000 },
]
const rekapPerKategori = transaksi.reduce((rekap, t) => {
  rekap[t.kategori] = (rekap[t.kategori] || 0) + t.jumlah
  return rekap
}, {})
console.log(rekapPerKategori) // {makanan: 50000, transport: 15000}
```

**Latihan:** kerjakan sendiri ketiga variasi di atas dengan data buatanmu sendiri (jangan copy
persis) — perhatikan baik-baik peran **nilai awal** (parameter kedua `reduce`, contoh: `0` di
kasus (a), `{}` di kasus (c)).

**Contoh entry log:**
```markdown
### Task: M2.W2.T2.2
- **Status:** done
- **Capaian:** Berhasil praktik find, dan reduce untuk 3 kasus (total, max, rekap object) dengan data sendiri.
- **Kesulitan:** -
```

### `M2.W2.T2.3` — [Wajib Refleksi — PENTING] `reduce` bukan "for-loop ribet"

**Isi log dengan menjawab (kata sendiri, JANGAN tanya AI dulu — coba jelaskan dari pemahamanmu
sendiri berdasarkan percobaan `T2.2`, baru cek/koreksi kalau perlu):**

1. Apa beda fundamental `reduce` dibanding `for` loop biasa yang melakukan hal serupa — bukan soal
   "lebih pendek ditulis", tapi soal **konsep**: kenapa `reduce` selalu punya "akumulator" yang
   jalan dari elemen ke elemen, dan kenapa itu berguna (hint: bandingkan seberapa jelas maksud kode
   `reduce` dibaca vs `for` loop yang isinya banyak variabel bantuan di luar loop).
2. Kasih 1 contoh kasus nyata di mana `reduce` lebih pas dipakai dibanding menggabungkan
   `map`+`filter` secara manual (atau sebaliknya — kapan `reduce` malah bikin kode lebih sulit
   dibaca dan `map`/`filter` biasa sudah cukup).

**Contoh entry log:**
```markdown
### Task: M2.W2.T2.3
- **Status:** done
- **Capaian:** [jawaban soal beda fundamental reduce vs for-loop + 1 contoh kasus nyata reduce vs map/filter]
- **Kesulitan:** -
```

---

## 3. DOM Manipulation Dasar

### `M2.W2.T3.1` — Ambil elemen dari HTML

```js
const tombol = document.querySelector("#tombol-submit") // 1 elemen pertama yang cocok
const semuaItem = document.querySelectorAll(".item-list") // NodeList berisi SEMUA yang cocok

// Cara lama (masih valid, tapi querySelector lebih fleksibel karena bisa pakai CSS selector apa saja)
const elemenById = document.getElementById("tombol-submit")
const elemenByClass = document.getElementsByClassName("item-list")
```

**Latihan:** buat 1 file HTML sederhana dengan beberapa elemen (`id`, `class`), lalu ambil masing-
masing pakai `querySelector`/`querySelectorAll` dan cara lama, bandingkan hasilnya.

**Checklist selesai:** kamu paham `querySelectorAll` mengembalikan **NodeList** (kumpulan elemen),
bukan 1 elemen — kalau mau iterasi, perlu `forEach` atau diubah ke array dulu.

### `M2.W2.T3.2` — Bikin & sisipkan elemen baru

```js
const listContainer = document.querySelector("#daftar")

const itemBaru = document.createElement("li")
itemBaru.textContent = "Item baru dari JS"
itemBaru.classList.add("item-list")
itemBaru.setAttribute("data-id", "123")

listContainer.appendChild(itemBaru)
// atau versi lebih baru: listContainer.append(itemBaru)
```

**Latihan:** dari array `siswa` di bagian 1, bikin elemen `<li>` untuk **setiap** siswa (gabungkan
dengan `map`/`forEach`) dan tampilkan semuanya ke dalam 1 `<ul>` di halaman.

**Contoh entry log:**
```markdown
### Task: M2.W2.T3.2
- **Status:** done
- **Capaian:** Berhasil render list siswa ke DOM secara dinamis pakai createElement + appendChild.
- **Kesulitan:** -
```

### `M2.W2.T3.3` — `textContent` vs `innerHTML`

```js
const target = document.querySelector("#output")
const namaUser = "Gazi"

target.textContent = namaUser // aman: apapun isinya, ditampilkan sebagai teks polos
target.innerHTML = namaUser // berisiko kalau namaUser bisa berisi tag HTML/script
```

**Latihan:** coba set `innerHTML` dengan string yang **sengaja** berisi tag HTML (misal
`"<b>Tebal</b>"`) dan bandingkan hasil tampilannya dengan `textContent` yang isinya sama persis —
perhatikan `innerHTML` benar-benar merender tag-nya, `textContent` menampilkannya sebagai teks
mentah.

### `M2.W2.T3.4` — [Wajib Refleksi] Kenapa `innerHTML` berisiko?

**Isi log dengan menjawab (kata sendiri):**
1. Dari percobaan `T3.3`, kenapa `innerHTML` bisa berbahaya (XSS) kalau isinya berasal dari **input
   user atau data dari luar yang tidak dipercaya** — bukan dari teks yang kamu tulis sendiri di
   kode? Coba bayangkan: apa yang terjadi kalau user mengetik `<img src=x onerror="alert(1)">` di
   sebuah form, dan itu langsung dimasukkan ke `innerHTML` tanpa disaring.
2. Kasih 1 contoh skenario nyata (boleh dari project yang mungkin kamu buat) di mana `textContent`
   adalah pilihan yang jelas lebih aman dibanding `innerHTML`.

**Contoh entry log:**
```markdown
### Task: M2.W2.T3.4
- **Status:** done
- **Capaian:** [jawaban soal risiko XSS innerHTML + 1 contoh skenario nyata textContent lebih aman]
- **Kesulitan:** -
```

---

## 4. Event Handling

### `M2.W2.T4.1` — `addEventListener` dasar

```js
const tombol = document.querySelector("#tombol-submit")
tombol.addEventListener("click", () => {
  console.log("Tombol diklik!")
})

const form = document.querySelector("#form-nama")
form.addEventListener("submit", (event) => {
  event.preventDefault() // WAJIB, kalau tidak halaman akan reload/redirect
  console.log("Form disubmit tanpa reload halaman")
})
```

**Latihan:** buat 1 form kecil (misal input nama + tombol submit), tangkap event `submit`, cegah
reload halaman dengan `preventDefault()`, tampilkan isi input ke halaman (gabungkan dengan DOM
manipulation bagian 3).

**Checklist selesai:** kamu coba **tanpa** `preventDefault()` dulu dan lihat sendiri halaman
reload — baru tambahkan `preventDefault()` dan lihat bedanya.

### `M2.W2.T4.2` — Event object: `target` vs `currentTarget`

```js
document.querySelector("#daftar").addEventListener("click", (event) => {
  console.log(event.target) // elemen SPESIFIK yang benar-benar diklik (misal <li> tertentu)
  console.log(event.currentTarget) // elemen yang listener-nya dipasang (di sini: #daftar)
})
```

**Latihan:** dari list siswa yang kamu render di `T3.2`, tangkap klik pada `<ul>` induknya, ambil
`event.target` untuk tahu `<li>` mana yang diklik, lalu tampilkan nama siswa yang diklik itu.

**Contoh entry log:**
```markdown
### Task: M2.W2.T4.2
- **Status:** done
- **Capaian:** Berhasil bedakan event.target vs currentTarget, praktik tangkap klik li tertentu dari ul.
- **Kesulitan:** -
```

### `M2.W2.T4.3` — Event delegation

**Masalah:** kalau kamu pasang `addEventListener` **satu-satu** ke setiap `<li>` yang ada saat
halaman dimuat, lalu ada `<li>` **baru** yang dibuat belakangan lewat `createElement` (seperti di
`T3.2`) — `<li>` baru itu **tidak otomatis punya listener**, karena listener dipasang sebelum dia
ada.

**Solusi — event delegation:** pasang **1 listener saja** di elemen parent (yang sudah pasti ada
dari awal), lalu cek `event.target` untuk tahu elemen anak mana yang sebenarnya diklik.

```js
const listContainer = document.querySelector("#daftar")

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Item diklik:", event.target.textContent)
  }
})

// Sekarang, <li> BARU yang ditambahkan belakangan lewat createElement TETAP kena listener ini,
// karena listener-nya ada di parent (#daftar), bukan di masing-masing <li>.
```

**Latihan:** buktikan sendiri — render list siswa (`T3.2`), pasang event delegation di parent-nya,
lalu **tambahkan 1 `<li>` baru secara dinamis lewat kode** (misal lewat tombol "tambah siswa") dan
klik `<li>` baru itu — pastikan listener tetap berfungsi tanpa perlu dipasang ulang.

**Contoh entry log:**
```markdown
### Task: M2.W2.T4.3
- **Status:** done
- **Capaian:** Berhasil praktik event delegation, buktikan li baru yang ditambah dinamis tetap kena listener.
- **Kesulitan:** -
```

### `M2.W2.T4.4` — [Wajib Refleksi] Keuntungan event delegation

**Isi log dengan menjawab (kata sendiri):** jelaskan keuntungan event delegation dibanding pasang
listener satu-satu ke setiap elemen anak — **kaitkan langsung** ke percobaan `T4.3` (elemen baru
yang dibuat lewat `createElement` di `T3.2` tidak otomatis punya listener kalau dipasang manual per
elemen). Kasih juga 1 alasan lain selain itu (misal soal performa kalau elemen anaknya sangat
banyak).

**Contoh entry log:**
```markdown
### Task: M2.W2.T4.4
- **Status:** done
- **Capaian:** [jawaban soal keuntungan event delegation, dikaitkan ke elemen dinamis createElement]
- **Kesulitan:** -
```

---

## 5. Proyek Pengembangan Skill Mandiri (`M2.W2.T5`)

**Estimasi waktu:** minimal setengah hari kerja (±4 jam), termasuk kalau dibantu AI.

**Ingat:** minggu ini cuma 4 hari kerja (Selasa 18 – Jumat 21 Agustus), jangan dipaksa buru-buru
mengejar target 5 hari biasa — kualitas pemahaman lebih penting daripada kecepatan.

Bangun 1 **mini-app interaktif tanpa framework** (murni HTML+CSS+JS) yang menggabungkan semua
skill minggu ini.

### Requirement wajib

1. **Data**: minimal 1 array of object statis di dalam kode (boleh daftar belanja, daftar tugas,
   daftar siswa, bebas topik) yang jadi sumber data mini-app.
2. **Minimal 1 pemakaian nyata masing-masing** `map`, `filter`, `reduce`, `find` untuk mengolah
   data itu (bukan asal dipaksakan tanpa alasan — pilih yang paling pas untuk kebutuhan app-nya,
   misal: `filter` untuk fitur cari/kategori, `reduce` untuk hitung total, `find` untuk ambil 1
   item detail).
3. **Render hasilnya ke DOM** lewat `createElement` (bukan `innerHTML` untuk data dinamis dari
   array — pakai `textContent` untuk isi teksnya, sesuai pelajaran `T3.4`).
4. **Event handling** untuk minimal 1 interaksi user (misal filter kategori, tambah item baru,
   hapus item, cari), **WAJIB pakai event delegation** untuk elemen-elemen yang dibuat dinamis
   (bukan pasang listener satu-satu per elemen).
5. Contoh topik yang bisa dipakai (bebas pilih atau bikin sendiri): daftar belanja dengan filter
   kategori & total harga (`reduce`), atau daftar tugas dengan filter status selesai/belum &
   pencarian nama tugas (`filter`/`find`).
6. Kerjakan lewat **branch → commit rapi (minimal 4 commit) → PR** — merge sendiri setelah yakin,
   **jangan hapus branch/PR-nya**, dibahas bareng mentor sekalian pas evaluasi `T6`.

### Submit

Cukup pastikan repo/PR-nya bisa diakses, cantumkan link di entry log.

**Contoh entry log:**
```markdown
### Task: M2.W2.T5
- **Status:** done
- **Capaian:** [ceritakan mini-app apa yang dibuat, di bagian mana pakai map/filter/reduce/find, kenapa event delegation dibutuhkan di app ini, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 6. Evaluasi (`M2.W2.T6`)

Siapkan demo singkat (~15-20 menit) untuk mentor:

1. **Tunjukkan mini-app `T5`** langsung jalan di browser — jelaskan tiap keputusan (kapan pakai
   `map` vs `filter` vs `reduce` vs `find`, kapan `textContent` vs `innerHTML`, kenapa perlu event
   delegation untuk bagian yang dinamis).
2. **Buka PR-nya bareng mentor** untuk dibahas (review digabung di sesi ini, sama seperti
   minggu-minggu sebelumnya).
3. **Mentor akan kasih soal live** yang menyasar kesalahpahaman umum `reduce` (dikira "cuma
   for-loop yang ditulis lebih ribet") — dijawab langsung tanpa buka catatan.
4. **Mentor akan tanya 2-3 variasi pertanyaan** lain di luar contoh modul.
5. Ceritakan singkat: bagian mana yang paling menantang minggu ini (dengan waktu kerja yang lebih
   singkat dari biasanya), bagian mana yang paling gampang.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M2.W2.T6
- **Status:** done
- **Capaian:** Demo ke mentor selesai, array methods (map/filter/reduce/find) dan DOM/event handling (termasuk event delegation) dikuasai, PR dibahas, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — Array.prototype.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- MDN — Array.prototype.reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- MDN — Introduction to events: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
- javascript.info — Event delegation: https://javascript.info/event-delegation
- OWASP — Cross Site Scripting (XSS): https://owasp.org/www-community/attacks/xss/
