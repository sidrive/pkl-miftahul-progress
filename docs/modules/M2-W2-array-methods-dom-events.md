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
> (Selasa 18 – Jumat 21 Agustus 2026).
>
> ## ⚠️ Aturan baru minggu ini — WAJIB dibaca dulu
>
> Dari evaluasi Minggu 1 Bulan 2 kemarin, kelihatan polanya: task dikerjakan sekali, kode jalan,
> di-checklist selesai, lalu lanjut ke task berikutnya — **tanpa diulang atau didalami lagi**.
> Akibatnya beberapa fungsi yang **kamu tulis sendiri** minggu itu, waktu ditanya lagi, tidak bisa
> dijelaskan ulang, dan sempat coba-coba/intip modul lagi untuk jawab.
>
> Mulai dari kelompok `reduce`/`find` (Rabu 19 Agustus) di bawah, setiap kelompok konsep punya
> **task tambahan bertanda `[Ulangi Tanpa Contek]`** — task ini WAJIB, bukan opsional, dan baru
> `done` kalau kamu benar-benar:
> 1. **Tutup/tidak buka** kode task sebelumnya, modul ini, dan AI, saat mengerjakannya.
> 2. Pakai **data/kasus yang beda** dari ronde pertama (bukan sekadar copy-paste ganti nama
>    variabel) — supaya kamu tidak bisa "mengingat urutan ketikan", tapi benar-benar mengingat
>    **konsepnya**.
> 3. **Catat jujur** di log kalau ada bagian yang sempat lupa/macet — itu bukan tanda gagal, itu
>    justru informasi penting buat saya (mentor) soal bagian mana yang perlu diulang lagi.
>
> Ada juga 1 task baru, `M2.W2.T5`, **sesi live dadakan** sebelum proyek mandiri — mentor kasih
> kasus baru yang belum pernah kamu kerjakan, dan kamu kerjakan di tempat tanpa bantuan apapun.
> Ini bukan ujian untuk dinilai sempurna — ini cara paling jujur untuk tahu apakah pemahamannya
> sudah benar-benar nempel atau masih hafalan dari urutan task sebelumnya.
>
> **Catatan pola berulang:** minggu-minggu lalu ada kesalahan konsep karena "kelihatan mirip =
> dikira sama" (`fr` dikira mirip `vh`, arrow function dikira cuma "versi singkat" `function`).
> Minggu ini jebakan serupa ada di `reduce()` — dikira cuma "`for` loop yang ditulis lebih ribet".
> Modul ini dirancang supaya kamu tidak kejebak pola pikir "kelihatan mirip = berarti sama" itu lagi,
> dan supaya kamu punya **bukti nyata lewat pengulangan** bahwa pemahamannya beneran ada, bukan
> cuma "kode-nya kebetulan jalan".

---

## 1. `map` & `filter` — Selasa 18 Agustus (versi biasa, tidak ikut dirombak)

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

## 2. `reduce` & `find` — Rabu 19 Agustus (**bukan cuma "`for` loop yang lebih ribet"**)

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

### `M2.W2.T2.4` — **[Ulangi Tanpa Contek]** Case baru, dari nol

**Tutup dulu kode `T2.1`/`T2.2` dan modul ini.** Pilih 1 topik data yang **beda dari data `map`/
`filter` hari Selasa** (misal: array produk toko dengan harga & stok, array transaksi, array film,
dsb — bebas asal beda, dan boleh dipakai lagi untuk task DOM/event di hari-hari berikutnya minggu
ini). Dari nol, tulis ulang (dari ingatan):

1. 1 penggunaan `find` (misal cari 1 produk berdasarkan nama).
2. Minimal 2 dari 3 variasi `reduce` (misal: total stok semua produk, cari produk termahal, atau
   rekap jumlah produk per kategori — pilih yang masuk akal untuk data barumu).

**Kalau lupa di tengah jalan** (paling sering lupa: nilai awal `reduce` atau urutan parameter
callback-nya) — catat jujur di log, cek balik bagian itu saja, lanjutkan dari ingatan.

**Contoh entry log:**
```markdown
### Task: M2.W2.T2.4
- **Status:** done
- **Capaian:** Ulangi find + 2 variasi reduce dari nol pakai data produk toko. Sempat lupa nilai awal reduce untuk rekap object (harus cek balik), sisanya lancar.
- **Kesulitan:** (jujur, bagian mana yang sempat macet)
```

### `M2.W2.T2.5` — [Wajib Refleksi] Teach-back: telusuri `reduce` langkah demi langkah

**Ini bagian paling penting untuk `reduce`.** Ambil salah satu `reduce` yang kamu buat (boleh dari
`T2.2` atau `T2.4`), tambahkan `console.log` di dalam callback-nya:

```js
const total = data.reduce((akumulator, sekarang) => {
  console.log("akumulator sekarang:", akumulator, "| elemen sekarang:", sekarang)
  return akumulator + sekarang.jumlah
}, 0)
```

Jalankan, lihat output tiap baris `console.log`-nya (satu baris per iterasi). **Lalu jelaskan ke
mentor secara lisan, TANPA membaca catatan**, apa yang terjadi di **setiap langkah**: nilai
`akumulator` di awal itu dari mana, kenapa nilainya berubah tiap iterasi, dan bagaimana nilai
terakhir jadi hasil akhir `reduce`. Tujuannya membuktikan kamu paham prosesnya bertahap — bukan
cuma tahu "oh hasilnya benar".

**Contoh entry log:**
```markdown
### Task: M2.W2.T2.5
- **Status:** done
- **Capaian:** Tambah console.log di dalam reduce, lihat tiap iterasi, teach-back lisan ke mentor tentang alur accumulator step-by-step berhasil dijelaskan tanpa catatan.
- **Kesulitan:** -
```

### `M2.W2.T2.6` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `find` dengan `filter` kalau kondisinya cuma cocok untuk 1 elemen saja?
2. Kenapa `reduce` butuh parameter nilai awal (misal `0` atau `{}`)? Apa yang terjadi kalau nilai
   awal itu dihilangkan (boleh dicoba langsung, lalu jelaskan errornya)?
3. Baca kode ini, **telusuri manual nilai `acc` di tiap iterasi di kertas/catatan dulu sebelum
   dijalankan**, baru tebak hasil akhirnya:
   ```js
   const hasil = [2, 4, 6].reduce((acc, n) => acc * n, 1)
   ```
4. Kalau kamu ingin mengubah array of object jadi 1 object rekap (seperti `rekapPerKategori` di
   atas), kenapa `map` atau `filter` saja tidak cukup — kenapa harus `reduce`?
5. Kasih 1 alasan kenapa `reduce` kadang dianggap "susah dibaca" oleh orang lain kalau dipakai
   untuk kasus yang terlalu kompleks — dan bagaimana caranya menulis `reduce` supaya tetap mudah
   dibaca.

**Contoh entry log:**
```markdown
### Task: M2.W2.T2.6
- **Status:** done
- **Capaian:** 5 jawaban kuis reduce/find (termasuk telusuri manual accumulator sebelum run) + koreksi kalau ada yang salah.
- **Kesulitan:** -
```

---

## 3. DOM Manipulation Dasar — Kamis 20 Agustus

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

### `M2.W2.T3.5` — **[Ulangi Tanpa Contek]** Case baru, dari nol

**Tutup dulu kode `T3.2`/`T3.3` dan modul ini.** Pakai data baru dari `T2.4` (produk/transaksi/dsb,
bukan data siswa lagi) — dari nol, render ke DOM:

1. Ambil container-nya dengan `querySelector`.
2. Untuk **setiap** item data, bikin elemen baru lewat `createElement`, isi dengan `textContent`
   (bukan `innerHTML`), lalu `appendChild`/`append` ke container.

**Kalau lupa command-nya** — catat jujur di log, cek balik, lanjutkan dari ingatan.

**Contoh entry log:**
```markdown
### Task: M2.W2.T3.5
- **Status:** done
- **Capaian:** Ulangi render DOM dari nol pakai data produk toko (bukan data siswa). Sempat lupa urutan createElement -> set isi -> appendChild, sisanya lancar.
- **Kesulitan:** (jujur, bagian mana yang sempat macet)
```

### `M2.W2.T3.6` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `querySelector` dengan `querySelectorAll` dari segi hasil yang dikembalikan?
2. Baca kode ini, **bayangkan/gambarkan dulu tampilan HTML hasilnya di kertas/catatan** sebelum
   dijalankan di browser:
   ```js
   const ul = document.querySelector("#daftar")
   const li = document.createElement("li")
   li.textContent = "Halo"
   ul.appendChild(li)
   ```
3. Kalau kamu punya string `"<script>alert(1)</script>"` dan memasukkannya ke `textContent`, apa
   yang tampil di halaman? Bandingkan kalau dimasukkan ke `innerHTML`.
4. Apa fungsi `setAttribute` dan `classList.add`, kapan masing-masing dipakai?
5. Kenapa `appendChild(itemBaru)` harus dipanggil **setelah** `itemBaru.textContent = "..."` diisi
   (atau apakah urutannya tidak masalah)? Jelaskan alasannya.

**Contoh entry log:**
```markdown
### Task: M2.W2.T3.6
- **Status:** done
- **Capaian:** 5 jawaban kuis DOM (termasuk bayangkan tampilan HTML sebelum run) + koreksi kalau ada yang salah.
- **Kesulitan:** -
```

---

## 4. Event Handling — Jumat 21 Agustus

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

### `M2.W2.T4.5` — **[Ulangi Tanpa Contek]** Case baru + fitur baru, dari nol

**Tutup dulu kode `T4.3` dan modul ini.** Pakai list data dari `T3.5` — dari nol, pasang
event delegation di container-nya. Kali ini **tambahkan fitur baru yang belum pernah kamu coba**:
tombol "hapus" di setiap item, yang juga ditangani lewat **event delegation yang sama** (bukan
listener terpisah per item, dan bukan listener baru per tombol hapus).

Hint konsep (jangan langsung buka ini kalau belum benar-benar macet): dalam 1 handler delegation,
kamu bisa cek `event.target` — apakah yang diklik itu elemen `<li>`-nya sendiri, atau tombol
"hapus" di dalamnya (misal lewat `event.target.classList.contains("btn-hapus")`), lalu tentukan
aksinya beda-beda.

**Contoh entry log:**
```markdown
### Task: M2.W2.T4.5
- **Status:** done
- **Capaian:** Ulangi event delegation dari nol di list produk + fitur baru tombol hapus (masih 1 listener di parent). Sempat bingung bedakan target li vs target tombol hapus, sudah diatasi.
- **Kesulitan:** (jujur, bagian mana yang sempat macet)
```

### `M2.W2.T4.6` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `event.target` dengan `event.currentTarget`?
2. Kenapa `event.preventDefault()` dibutuhkan di event `submit` sebuah form?
3. **Soal skenario debug** — diberi potongan kode ini, listener-nya **tidak jalan** untuk `<li>`
   yang ditambahkan belakangan lewat `createElement`. Coba temukan & jelaskan kenapa **tanpa
   mencoba-coba run dulu**, baru verifikasi jawabanmu dengan menjalankannya:
   ```js
   document.querySelectorAll("li").forEach((li) => {
     li.addEventListener("click", () => console.log("diklik:", li.textContent))
   })
   // ... beberapa saat kemudian, ada <li> baru ditambahkan lewat createElement + appendChild
   ```
4. Kalau container punya banyak sekali elemen anak (misal 1000 `<li>`), kenapa event delegation
   lebih baik dari segi performa dibanding memasang 1000 listener terpisah?
5. Di task `T4.5`, bagaimana caranya 1 handler delegation bisa membedakan klik di `<li>`-nya
   sendiri vs klik di tombol "hapus" di dalam `<li>` itu?

**Contoh entry log:**
```markdown
### Task: M2.W2.T4.6
- **Status:** done
- **Capaian:** 5 jawaban kuis event handling (termasuk skenario debug listener tidak jalan untuk elemen baru) + koreksi kalau ada yang salah.
- **Kesulitan:** -
```

---

## 5. Uji Ulang Pemahaman Mandiri (`M2.W2.T5`) — sesi live, SEBELUM proyek mandiri

**Ini bukan proyek mandiri, dan bukan evaluasi akhir minggu — ini sesi terpisah, lebih pendek,
yang WAJIB dilewati dulu sebelum mulai `T6`.**

Mentor akan memberi 1 kasus kombinasi baru **secara dadakan** — kombinasi minimal 2 dari
`map`/`filter`/`reduce`/`find`, ditambah render ke DOM dan event handling (boleh + delegation) —
dengan topik data yang **belum pernah dipakai** di task manapun minggu ini (bukan siswa, bukan
produk/film dari task-task `[Ulangi Tanpa Contek]`).

**Aturan sesi ini:**
1. Dikerjakan **langsung di depan mentor** (atau direkam layar kalau sesinya async).
2. **TIDAK BOLEH** membuka modul ini, AI, catatan pribadi, atau kode task-task sebelumnya.
3. Boleh macet, boleh salah, boleh butuh waktu lebih lama dari biasanya — **itu justru informasi
   yang dicari**, bukan kegagalan. Tujuannya memverifikasi jujur: pemahaman minggu ini sudah
   nempel, atau masih mengandalkan hafalan urutan/hasil task sebelumnya.
4. Kalau ada bagian yang macet total, **itu sinyal bagian itu perlu diulang lagi** sebelum lanjut
   ke proyek mandiri `T6` — bukan berarti langsung lanjut saja supaya cepat selesai.

**Contoh entry log:**
```markdown
### Task: M2.W2.T5
- **Status:** done
- **Capaian:** Sesi live dengan mentor selesai, kasus dadakan: [ceritakan kasusnya]. Bagian yang lancar: [...]. Bagian yang sempat macet: [...] (jujur).
- **Kesulitan:** (jujur, termasuk kalau ada bagian yang benar-benar tidak bisa dikerjakan tanpa bantuan)
```

---

## 6. Proyek Pengembangan Skill Mandiri (`M2.W2.T6`)

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
5. **WAJIB tambahkan komentar singkat di kode untuk tiap fungsi array (`map`/`filter`/`reduce`/
   `find`) yang menjelaskan KENAPA fungsi itu yang dipilih** untuk bagian itu (bukan cuma "kode-nya
   kebetulan jalan") — contoh: `// pakai reduce di sini karena butuh 1 angka total, bukan array baru`.
   Ini jadi bukti tertulis pemahamanmu sendiri, dan akan jadi bahan diskusi live di evaluasi `T7`.
6. Contoh topik yang bisa dipakai (bebas pilih atau bikin sendiri): daftar belanja dengan filter
   kategori & total harga (`reduce`), atau daftar tugas dengan filter status selesai/belum &
   pencarian nama tugas (`filter`/`find`).
7. Kerjakan lewat **branch → commit rapi (minimal 4 commit) → PR** — merge sendiri setelah yakin,
   **jangan hapus branch/PR-nya**, dibahas bareng mentor sekalian pas evaluasi `T7`.

### Submit

Cukup pastikan repo/PR-nya bisa diakses, cantumkan link di entry log.

**Contoh entry log:**
```markdown
### Task: M2.W2.T6
- **Status:** done
- **Capaian:** [ceritakan mini-app apa yang dibuat, di bagian mana pakai map/filter/reduce/find + alasan tiap fungsi (sesuai komentar kode), kenapa event delegation dibutuhkan di app ini, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 7. Evaluasi (`M2.W2.T7`)

Siapkan demo singkat (~20-25 menit, lebih panjang dari biasanya karena ada komponen live coding)
untuk mentor:

1. **Tunjukkan mini-app `T6`** langsung jalan di browser — jelaskan tiap keputusan (kapan pakai
   `map` vs `filter` vs `reduce` vs `find`, kapan `textContent` vs `innerHTML`, kenapa perlu event
   delegation) **berdasarkan komentar kode yang kamu tulis**, bukan mengarang penjelasan baru saat
   ditanya.
2. **Ceritakan hasil sesi `T5`** (uji ulang pemahaman mandiri) — bagian mana yang lancar, bagian
   mana yang sempat macet, dan apakah sudah lebih lancar sekarang.
3. **Buka PR-nya bareng mentor** untuk dibahas (review digabung di sesi ini, sama seperti
   minggu-minggu sebelumnya).
4. **Mentor akan kasih soal live** yang menyasar kesalahpahaman umum `reduce` (dikira "cuma
   for-loop yang ditulis lebih ribet") — dijawab langsung tanpa buka catatan.
5. **Mentor akan minta modifikasi kecil dadakan langsung di kode `T6`** (misal tambah 1 fitur
   filter baru, atau ubah 1 bagian `map` jadi `reduce`) — dikerjakan di tempat, tanpa buka modul,
   untuk memastikan pemahamannya bisa langsung dipakai untuk kasus baru, bukan hafalan urutan kode
   yang sudah jadi.
6. **Mentor akan tanya 2-3 variasi pertanyaan** lain di luar contoh modul.
7. Ceritakan singkat: bagian mana yang paling menantang minggu ini (dengan waktu kerja yang lebih
   singkat dari biasanya dan jumlah pengulangan yang lebih banyak), bagian mana yang paling gampang.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M2.W2.T7
- **Status:** done
- **Capaian:** Demo ke mentor selesai, array methods (map/filter/reduce/find) dan DOM/event handling (termasuk event delegation) dikuasai, modifikasi dadakan di T6 berhasil dikerjakan live, PR dibahas, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — Array.prototype.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- MDN — Array.prototype.reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- MDN — Introduction to events: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
- javascript.info — Event delegation: https://javascript.info/event-delegation
- OWASP — Cross Site Scripting (XSS): https://owasp.org/www-community/attacks/xss/
