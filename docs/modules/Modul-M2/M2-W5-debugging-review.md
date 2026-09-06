# Modul Bulan 2 Minggu 5 — Debugging & Review Penutup

> Menemani task `M2.W5.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`.
>
> **🗓️ 5 hari kerja penuh** (Senin 7 – Jumat 11 September 2026) — minggu penutup Bulan 2 sebelum
> masuk Vue 3.
>
> ## Kenapa minggu ini fokus ke debugging
>
> Dari evaluasi Minggu 4: butuh waktu untuk menemukan penyebab error saat mengerjakan modifikasi
> dadakan (ternyata cuma lupa 1 parameter di pemanggilan `render`). Pola serupa — "butuh waktu
> lama cari bug", "salah ketik", "penempatan kode salah" — muncul berulang di catatan kesulitan
> hampir setiap minggu Bulan 2. Bukan berarti pemahaman konsepnya kurang (terbukti minggu-minggu
> lalu konsepnya justru kuat) — ini soal **kecepatan menemukan** masalah saat kode tidak berjalan
> sesuai harapan. Minggu ini didesain khusus untuk melatih itu.

---

## 1. Dasar Debugging

### `M2.W5.T1.1` — Baca & artikan error message

Setiap error JavaScript di console browser punya 2 bagian penting: **jenis error** dan **pesan**.
Keduanya kasih petunjuk, bukan cuma "ada yang salah".

| Error | Artinya | Penyebab umum |
|---|---|---|
| `TypeError: Cannot read properties of undefined (reading 'x')` | Kamu coba akses property `.x` dari sesuatu yang ternyata `undefined` | Variabel/hasil fungsi yang diharapkan berisi object, ternyata kosong — sering karena lupa `return`, salah nama variabel, atau data belum ada saat diakses |
| `ReferenceError: nama is not defined` | Kamu pakai variabel/fungsi yang belum pernah dideklarasikan (atau typo namanya) | Salah ketik nama variabel, lupa deklarasi, atau variabel di luar scope yang bisa diakses |
| `TypeError: x is not a function` | Kamu coba panggil sesuatu seperti fungsi, padahal bukan fungsi | Salah nama method (`.pushh()` bukan `.push()`), atau variabel berisi tipe data yang salah |
| `SyntaxError: Unexpected token` | Struktur kode salah secara tata bahasa (kurung tidak nutup, koma kurang, dll) | Kurung `{}`/`()`/`[]` tidak seimbang, lupa koma di object/array |
| `Uncaught (in promise) ...` | Sebuah Promise di-reject tapi tidak ada `.catch()`/`try`-`catch` yang menangkapnya | Lupa `catch`, atau `await` di luar `try` |

**Latihan:** untuk tiap baris di tabel, sengaja **buat kode yang memicu error itu** (boleh 2-3
baris kecil), jalankan, lihat sendiri pesan errornya persis apa dan baris berapa yang ditunjuk.

### `M2.W5.T1.2` — Praktik `debugger;` + breakpoint

```js
function hitungTotal(data) {
  debugger; // eksekusi akan berhenti di sini kalau DevTools terbuka
  return data.reduce((acc, item) => acc + item.harga, 0);
}
```

Buka DevTools → tab **Sources**, jalankan kode yang ada `debugger;`-nya (atau klik nomor baris di
Sources untuk pasang breakpoint tanpa edit kode). Saat berhenti di situ, panel **Scope** di kanan
menunjukkan isi semua variabel yang bisa diakses saat itu — kamu bisa **step over** (jalan 1 baris)
untuk lihat nilainya berubah pelan-pelan.

**Latihan:** pasang breakpoint di 1 fungsi dari project to-do list Minggu 4, step through, amati
variabelnya di panel Scope.

**Checklist selesai:** kamu paham breakpoint = "jeda" kode di baris tertentu supaya bisa diperiksa
isi variabelnya saat itu — beda dengan `console.log` yang cuma print nilai di satu titik tanpa
bisa "menjelajah" lebih jauh.

### `M2.W5.T1.3` — Strategi bisection

Kalau ada 1 fungsi panjang yang hasilnya salah tapi tidak error, jangan baca ulang semua baris
dari atas. Taruh 1 `console.log` di **tengah** fungsi dulu:

```js
function prosesData(data) {
  const langkah1 = data.filter(...)
  const langkah2 = langkah1.map(...)
  console.log("cek di tengah:", langkah2) // <- taruh di sini dulu
  const langkah3 = langkah2.reduce(...)
  return langkah3
}
```

Kalau `langkah2` sudah salah, berarti masalahnya di bagian ATAS (sebelum titik ini) — pindahkan
`console.log` lebih ke atas lagi. Kalau `langkah2` sudah benar, masalahnya di bagian BAWAH.
Ulangi mempersempit sampai ketemu baris persisnya — ini jauh lebih cepat daripada menaruh
`console.log` di semua baris sekaligus atau membaca ulang dari awal setiap kali.

**Latihan:** ambil 1 fungsi dengan minimal 4-5 langkah dari project lama, praktikkan bisection ini
walau kodenya sudah benar (buat "pura-pura" ada bug untuk latihan polanya).

### `M2.W5.T1.4` — [Wajib Refleksi] Kenapa bisection lebih cepat

**Isi log dengan menjawab (kata sendiri):** kenapa strategi bisection (mempersempit dari tengah)
lebih cepat menemukan bug dibanding membaca ulang semua kode dari baris pertama setiap kali ada
masalah? Kaitkan ke pengalaman nyata kamu sendiri minggu-minggu sebelumnya yang butuh waktu lama
cari bug — kalau dipikir ulang, apakah bisection bisa mempercepat kejadian itu?

---

## 2. Bug Hunting — Inti Minggu Ini

**Aturan:** untuk `T2.1` dan `T2.2`, catat WAKTU dari mulai buka file sampai semua masalah beres.
Jujur — kalau lama, catat lama; ini bukan soal nilai, tapi mengukur progres kecepatanmu sendiri
dari minggu ke minggu.

### `M2.W5.T2.1` — Bug Hunting: "Daftar Belanja"

Salin kode di bawah ke file sendiri, jalankan, dan **temukan semua hal yang tidak berjalan sesuai
harapan** (jumlahnya tidak diberi tahu di sini — sebagian mungkin memunculkan error di console,
sebagian lagi mungkin diam saja tapi hasilnya salah).

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Daftar Belanja</title>
</head>
<body>
  <h2>Daftar Belanja</h2>
  <form id="form-belanja">
    <input type="text" id="input-nama" placeholder="Nama barang">
    <input type="number" id="input-harga" placeholder="Harga">
    <select id="input-kategori">
      <option value="Makanan">Makanan</option>
      <option value="Alat Tulis">Alat Tulis</option>
    </select>
    <button type="submit">Tambah</button>
  </form>
  <button id="btn-filter-mahal">Tampilkan yang di atas Rp10.000</button>
  <ul id="daftar-belanja"></ul>
  <p id="total-harga"></p>
  <script src="belanja.js"></script>
</body>
</html>
```

```js
// belanja.js
let daftarBelanja = [
  { id: 1, nama: "Roti", harga: 8000, kategori: "Makanan" },
  { id: 2, nama: "Pulpen", harga: 3000, kategori: "Alat Tulis" },
  { id: 3, nama: "Susu", harga: 15000, kategori: "Makanan" },
];

const formEl = document.querySelector("#form-belanja");
const inputNamaEl = document.querySelector("#input-nama");
const inputHargaEl = document.querySelector("#input-harga");
const inputKategoriEl = document.querySelector("#input-kategori");
const listEl = document.querySelector("#daftar-belanja");
const totalEl = document.querySelector("#total-harga");
const btnFilterMahalEl = document.querySelector("#btn-filter-mahal");

function render(data) {
  listEl.textContent = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.dataset.id = item.id;

    const spanNama = document.createElement("span");
    spanNama.textContent = `${item.nama} (${item.kategori}) - Rp${item.harga}`;

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btnHapus");

    li.appendChild(spanNama);
    li.appendChild(btnHapus);
    listEl.appendChild(li);
  });

  const total = data.reduce((acc, item) => {
    acc + item.harga;
  }, 0);
  totalEl.textContent = `Total: Rp${total}`;
}

listEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-hapus")) {
    const id = Number(event.target.closest("li").dataset.id);
    daftarBelanja = daftarBelanja.filter((item) => item.id !== id);
    render();
  }
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = inputNamaEl.value.trim();
  const harga = Number(inputHargaEl.value);
  const kategori = inputKategoriEl.value;

  if (!nama || !harga) return;

  daftarBelanja.push({ id: Date.now(), nama, harga, kategori });
  render(daftarBelanja);

  inputNamaEl.value = "";
  inputHargaEl.value = "";
});

btnFilterMahalEl.addEventListener("click", () => {
  const hasil = daftarBelanja.filter((item) => item.harga = 10000);
  render(hasil);
});

render(daftarBelanja);
```

**Contoh entry log:**
```markdown
### Task: M2.W5.T2.1
- **Status:** done
- **Capaian:** Ditemukan [n] masalah dalam [x menit]. 1) [gejala] -> [cara melacak] -> [perbaikan]. 2) ... dst.
- **Kesulitan:** (jujur, bug mana yang paling lama)
```

### `M2.W5.T2.2` — **[Ulangi Tanpa Contek]** Bug Hunting: "Daftar Kontak"

**Tutup dulu `T2.1` dan bagian bisection di atas.** Kode di bawah juga sengaja punya beberapa hal
yang tidak berjalan sesuai harapan — kategorinya beda dari `T2.1`, jadi jangan berharap pola yang
persis sama. Ulangi proses: temukan semua, catat gejala/cara melacak/perbaikan, dan **waktu
total** — bandingkan dengan `T2.1`.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Daftar Kontak</title>
</head>
<body>
  <h2>Daftar Kontak</h2>
  <form id="form-kontak">
    <input type="text" id="input-nama" placeholder="Nama">
    <input type="text" id="input-telepon" placeholder="No. Telepon">
    <button type="submit">Simpan</button>
  </form>
  <ul id="daftar-kontak"></ul>
  <script src="kontak.js"></script>
</body>
</html>
```

```js
// kontak.js
function simpan(data) {
  localStorage.setItem("kontak", JSON.stringify(data));
}

function muat() {
  const mentah = localStorage.getItem("kontak");
  if (!mentah) return [];
  return mentah;
}

let daftarKontak = muat();
if (daftarKontak.length === 0) {
  daftarKontak = [
    { id: 1, nama: "Budi", telepon: "0812xxxx" },
    { id: 2, nama: "Ani", telepon: "0813xxxx" },
  ];
}

const formEl = document.querySelector("#form-kontak");
const inputNamaEl = document.querySelector("#input-nama");
const inputTeleponEl = document.querySelector("#input-telepon");
const listEl = document.querySelector("#daftar-kontak");

function render(data) {
  listEl.textContent = "";

  data.forEach((kontak) => {
    const li = document.createElement("li");
    li.dataset.id = kontak.id;

    const span = document.createElement("span");
    span.textContent = `${kontak.nama} - ${kontak.telepon}`;

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus");

    li.appendChild(span);
    li.appendChild(btnHapus);
    listEl.appendChild(li);
  });
}

listEl.addEventListener("click", (event) => {
  if (event.target.tagName === "li") {
    alert("Kamu klik: " + event.target.textContent);
  }

  if (event.target.classList.contains("btn-hapus")) {
    const id = Number(event.target.closest("li").dataset.id);
    const hasilCari = daftarKontak.find((k) => k.id !== id);
    daftarKontak = hasilCari;
    simpan(daftarKontak);
    render(daftarKontak);
  }
});

formEl.addEventListener("submit", (event) => {
  const nama = inputNamaEl.value.trim();
  const telepon = inputTeleponEl.value.trim();

  if (!nama || !telepon) return;

  daftarKontak.push({ id: Date.now(), nama, telepon });
  simpan(daftarKontak);
  render(daftarKontak);

  inputNamaEl.value = "";
  inputTeleponEl.value = "";
});

render(daftarKontak);
```

**Contoh entry log:**
```markdown
### Task: M2.W5.T2.2
- **Status:** done
- **Capaian:** Ditemukan [n] masalah dalam [x menit] (dibanding [y menit] di T2.1). 1) [gejala] -> [cara melacak] -> [perbaikan]. 2) ... dst.
- **Kesulitan:** (jujur, apakah lebih cepat dari T2.1 atau tidak, kenapa)
```

### `M2.W5.T2.3` — [Wajib Refleksi] Bandingkan `T2.1` vs `T2.2`

**Isi log dengan menjawab (kata sendiri):**
1. Bug mana (di kedua exercise) yang paling cepat kamu temukan? Bug mana yang paling lama?
2. Pola/strategi apa dari `T2.1` yang beneran kepakai lagi di `T2.2` dan bikin lebih cepat? Kalau
   waktunya ternyata tidak lebih cepat, menurutmu kenapa?
3. Dari semua bug yang ditemukan minggu ini, kategori mana yang paling sering bikin kamu
   "muter-muter" duluan sebelum ketemu — error yang jelas di console, atau yang diam saja (silent
   bug, hasilnya cuma salah tanpa pesan error)?

---

## 3. Review Bulan 2 (`M2.W5.T3`)

**Tutup modul, jangan tanya AI dulu.** Jawab 10 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `let` dengan `const`?
2. Apa beda fundamental arrow function dengan `function` biasa (soal `this`, bukan soal panjang
   kode)?
3. Kapan pakai `map`, kapan pakai `filter`, kapan pakai `find`?
4. Kenapa `reduce` bukan cuma "`for` loop yang ditulis lebih ribet"?
5. Kenapa `textContent` lebih aman dari `innerHTML` untuk data dari luar (input user/API)?
6. Apa keuntungan event delegation dibanding listener per-elemen?
7. Kenapa `async`/`await` tidak membuat kode berjalan sinkron?
8. Kalau lupa taruh `await` di depan `fetch(...)`, apa isi variabelnya?
9. Kenapa harus `JSON.stringify` sebelum `localStorage.setItem` dan `JSON.parse` setelah
   `getItem`?
10. Kasih 1 contoh kapan kamu akan pakai `try`/`catch`.

**Contoh entry log:**
```markdown
### Task: M2.W5.T3
- **Status:** done
- **Capaian:** 10 jawaban review Bulan 2 + koreksi kalau ada yang salah.
- **Kesulitan:** -
```

---

## 4. Evaluasi & Penutup Bulan 2 (`M2.W5.T4`)

Siapkan untuk mentor:

1. **Ceritakan hasil bug hunting `T2.1`/`T2.2`** — waktu masing-masing, pola yang ditemukan.
2. **Mentor akan sengaja menyuntik 1 bug ke to-do list Minggu 4 yang sudah jalan**, live di depan
   kamu — dihitung waktu sampai ketemu & terbaiki, dibandingkan dengan waktu `T2.1`/`T2.2`.
3. **Mentor tanya soal live** variasi dari kuis review `T3`.
4. Refleksi capaian keseluruhan Bulan 2 (dari ES6+ sampai `localStorage`) — bagian mana yang
   paling berkembang, bagian mana yang masih terasa berat.
5. Preview singkat Bulan 3 (Vue 3) sebagai penutup.

**Contoh entry log:**
```markdown
### Task: M2.W5.T4
- **Status:** done
- **Capaian:** Bug suntikan mentor ditemukan dalam [x menit]. Soal review terjawab. Refleksi Bulan 2 selesai.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — Debugging JavaScript: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong
- Chrome DevTools — JavaScript debugging: https://developer.chrome.com/docs/devtools/javascript
