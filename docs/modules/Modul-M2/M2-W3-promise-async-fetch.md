# Modul Bulan 2 Minggu 3 — Promise, async/await, & fetch API

> Menemani task `M2.W3.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`, dan untuk aturan penulisan kode di modul ini: contoh kode tidak lagi
> menyertakan hasil `console.log` — jalankan sendiri, catat hasil aslinya di log.
>
> **🗓️ Selasa 25 Agustus libur — 4 hari kerja** (Senin 24, lalu Rabu 26 – Jumat 28 Agustus).
>
> ## Struktur minggu ini
>
> Dibagi 2 bagian. **Bagian A** (Senin, ±25% waktu) menuntaskan capstone & PR Minggu 2 yang
> tersisa, plus 1 latihan fluency array methods — boleh sedikit meluber ke awal Rabu bila perlu.
> **Bagian B** (Rabu–Jumat, ±75% waktu) materi baru: Promise, `async`/`await`, `fetch()`, yang di
> `T6` digabung dengan array methods Minggu 2.
>
> Setiap task praktik inti punya minimal 2 putaran dengan skenario/data berbeda; `async`/`await`
> dan `fetch()` masing-masing punya 1 ronde tambahan `[Ulangi Tanpa Contek]` sebagai putaran
> ketiga.
>
> **Poin perhatian:** `async`/`await` sering disalahpahami membuat kode berjalan sinkron —
> keliru, lihat bagian 2.

---

## Bagian A — Tuntaskan & Perkuat Lagi Minggu 2

### `M2.W3.T1.1` — Lanjutkan & selesaikan `M2.W2.T6`

Minggu lalu proyek mandiri `T6` belum selesai (status evaluasi: "half done", `T6` dan PR belum
kelar). Sebelum lanjut ke materi baru, tuntaskan dulu ini.

**Opsi:**
1. Lanjutkan dari `T5-M2-W2.js` (alat manajemen sparepart bengkel) kalau itu memang mau dijadikan
   capstone — tinggal lengkapi bagian yang belum ada.
2. Atau mulai dari nol dengan topik lain kalau lebih nyaman — yang penting requirement `T6`
   Minggu 2 terpenuhi.

**Requirement yang WAJIB ada (dari `T6` Minggu 2, ini yang belum terpenuhi kemarin):**
- Minimal 1 pemakaian nyata masing-masing `map`, `filter`, `reduce`, `find`.
- Render ke DOM lewat `createElement` + `textContent` (bukan `innerHTML` untuk data dinamis).
- Event handling termasuk event delegation untuk elemen dinamis.
- **Komentar kode di tiap fungsi array, menjelaskan KENAPA fungsi itu dipilih** — ini yang paling
  sering kelupaan, jangan sampai terulang.

**Contoh entry log:**
```markdown
### Task: M2.W3.T1.1
- **Status:** done
- **Capaian:** Selesaikan alat manajemen sparepart dari T5-M2-W2, tambahkan komentar alasan tiap fungsi array yang belum ada minggu lalu.
- **Kesulitan:** -
```

### `M2.W3.T1.2` — Push lewat branch → PR

Minggu lalu PR untuk `T6` belum dibuat. Sekarang: **branch baru → commit rapi (minimal 4 commit,
bukan 1 commit besar) → push → buat PR**. Merge sendiri setelah yakin, **jangan hapus branch/PR-nya**
— dibahas bareng mentor sekalian saat evaluasi `T7` minggu ini (menutup utang Minggu 2 sekaligus).

### `M2.W3.T1.3` — [Wajib Refleksi] Bandingkan `T4.5` vs `T5` — apa yang berubah?

Buka berdampingan 2 file kamu sendiri:
```js
// T4.5-M2-W2.js (20 Agustus)
li.innerHTML = `${input.value} <button class="btn-hapus">Hapus</button>`

// T5-M2-W2.js (21 Agustus)
const btnHapus = document.createElement("button");
btnHapus.textContent = "Hapus";
btnHapus.classList.add("btn-hapus");
li.appendChild(btnHapus);
```

**Isi log dengan menjawab (kata sendiri):**
1. Apa tepatnya yang berubah antara kedua pendekatan ini?
2. Kenapa versi `T5` lebih aman — kaitkan langsung ke refleksi `T3.4` Minggu 2 soal risiko
   `innerHTML` untuk data dari input user.
3. Apakah perubahan ini sudah kamu sadari sendiri saat menulisnya, atau baru sadar sekarang saat
   membandingkan? Jawab jujur — keduanya oke, yang penting sekarang benar-benar dipahami dan
   ditulis, bukan cuma kebetulan berubah.

**Contoh entry log:**
```markdown
### Task: M2.W3.T1.3
- **Status:** done
- **Capaian:** [jawaban perbandingan T4.5 vs T5, alasan keamanan, dan refleksi jujur soal kesadaran saat menulis]
- **Kesulitan:** -
```

### `M2.W3.T1.4` — Lengkapi entry log yang kosong

3 task Minggu 2 sudah ada kodenya dan tercentang selesai, tapi **belum pernah ada entry
`DAILY_LOG.md`**: `M2.W2.T1.1`, `M2.W2.T3.1`, `M2.W2.T3.3`. Buka lagi masing-masing file kodenya,
lalu tulis entry log untuk ketiganya — ceritakan apa yang dikerjakan dan kesulitan apa (kalau ada)
saat itu, sejauh masih diingat.

### `M2.W3.T2` — [Ulangi Tanpa Contek — Fluency Drill]

**Beda dengan `[Ulangi Tanpa Contek]` minggu lalu** — ini bukan buat cek paham konsep (itu sudah
lumayan terbukti lancar di live eval), tapi buat membangun **kecepatan dan rasa percaya diri**,
karena kamu sendiri bilang minggu lalu materinya "berat, kurang pengalaman JS."

**Aturan:**
1. Set timer, target **±30 menit**.
2. TANPA modul/AI/catatan/kode lama.
3. Bikin 1 mini-app baru dari nol, topik bebas (beda dari siswa/sparepart/robot/game yang sudah
   dipakai), pakai **minimal 3 dari 4** (`map`/`filter`/`reduce`/`find`) + render ke DOM + event
   delegation.
4. Catat jujur di log: **berapa lama actual selesai** (walau lebih dari 30 menit, tulis apa
   adanya), dan bagian mana yang masih bikin ragu meski secara konsep sudah paham.

**Contoh entry log:**
```markdown
### Task: M2.W3.T2
- **Status:** done
- **Capaian:** Selesai dalam [x] menit (target 30 menit). Topik: [ceritakan]. Pakai map+filter+reduce, render DOM, event delegation.
- **Kesulitan:** [jujur, bagian mana yang masih bikin ragu walau paham konsepnya]
```

---

## Bagian B — Promise, `async`/`await`, `fetch()`

## 1. Promise Dasar

### `M2.W3.T3.1` — 3 state Promise + `.then()`/`.catch()` (2 putaran, skenario berbeda)

Promise punya 3 kemungkinan state: **pending** (masih menunggu), **fulfilled** (berhasil, ada
hasilnya), **rejected** (gagal, ada alasan gagalnya).

**Putaran 1 — simulasi cek koneksi:**
```js
function cekKoneksi(sukses) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sukses) {
        resolve("Koneksi berhasil setelah nunggu 1 detik!");
      } else {
        reject("Koneksi gagal, ada masalah!");
      }
    }, 1000);
  });
}

cekKoneksi(true)
  .then((hasil) => console.log("Then:", hasil))
  .catch((error) => console.log("Catch:", error));

cekKoneksi(false)
  .then((hasil) => console.log("Then:", hasil))
  .catch((error) => console.log("Catch:", error));
```

**Latihan putaran 1:** jalankan kedua kasus di atas (sukses `true` dan `false`), lihat sendiri
`.then()` jalan untuk yang sukses, `.catch()` jalan untuk yang gagal.

**Checklist putaran 1:** kamu paham Promise itu **placeholder untuk nilai yang belum ada sekarang,
tapi akan ada nanti** (baik berhasil maupun gagal).

**Putaran 2 (skenario baru, dari nol):** bikin lagi 1 fungsi yang mengembalikan Promise, tapi
dengan **skenario yang benar-benar beda** dari "cek koneksi" — misalnya simulasi "cek stok barang
tersedia atau tidak" (`resolve` kalau stok ada, `reject` kalau stok habis). Jangan cuma
copy-paste `cekKoneksi` dan ganti nama variabel — tulis ulang logikanya dari pemahamanmu sendiri.

**Contoh entry log:**
```markdown
### Task: M2.W3.T3.1
- **Status:** done
- **Capaian:** Putaran 1 (cek koneksi) & putaran 2 (cek stok barang) berhasil, .then/.catch jalan sesuai state Promise-nya.
- **Kesulitan:** -
```

### `M2.W3.T3.2` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Isi log dengan menjawab (tutup modul dulu):**
1. Kapan Promise pindah dari `pending` ke `fulfilled`? Kapan ke `rejected`?
2. Apa yang terjadi kalau kamu memanggil Promise yang di-reject, tapi **tidak menulis `.catch()`
   sama sekali**? (boleh coba langsung di kode, lihat apa yang muncul di console)

**Contoh entry log:**
```markdown
### Task: M2.W3.T3.2
- **Status:** done
- **Capaian:** [jawaban soal state Promise + apa yang terjadi tanpa .catch()]
- **Kesulitan:** -
```

---

## 2. `async`/`await` — **bukan bikin kode jadi sinkron**

### `M2.W3.T4.1` — Ubah `.then()` jadi `async`/`await` (untuk KEDUA putaran `T3.1`)

```js
// versi Promise chain
function ambilData() {
  cekKoneksi(true)
    .then((hasil) => console.log("Hasil:", hasil))
    .catch((error) => console.log("Error:", error));
}

// versi async/await — SAMA PERSIS perilakunya, cuma gaya nulis beda
async function ambilDataAsync() {
  try {
    const hasil = await cekKoneksi(true);
    console.log("Hasil:", hasil);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

**Latihan:** ubah **kedua** Promise dari `T3.1` (putaran 1 "cek koneksi" DAN putaran 2 "cek stok
barang") jadi dipanggil pakai `async`/`await` seperti contoh di atas, untuk kasus sukses dan
gagal di masing-masing skenario.

**Checklist selesai:** bandingkan kedua versi kodenya (Promise chain vs `async`/`await`) untuk
kedua skenario — perhatikan `async`/`await` **tidak mengubah cara kerja Promise-nya**, cuma
mengubah cara kamu *menulis* kode yang berinteraksi dengannya.

### `M2.W3.T4.2` — Error handling `try`/`catch` (2 kasus wajib: resolve & reject)

`try`/`catch` di dalam fungsi `async` adalah pengganti `.catch()` di versi Promise chain.

```js
async function contoh(sukses) {
  try {
    const hasil = await cekKoneksi(sukses);
    console.log(hasil);
  } catch (error) {
    console.log("Ketangkep di catch:", error);
  }
}
contoh(true);  // kasus 1: resolve
contoh(false); // kasus 2: reject
```

**Latihan — WAJIB 2 kasus, jangan cuma salah satu, dan JALANKAN sendiri untuk lihat hasilnya
(jangan cuma dibaca kodenya):**
1. Panggil dengan argumen yang membuat Promise **resolve** — perhatikan baris `console.log` mana
   yang benar-benar tampil di console.
2. Panggil dengan argumen yang membuat Promise **reject** — perhatikan baris mana yang tampil kali
   ini, dan baris mana (kalau ada) yang **tidak** tampil dibanding kasus pertama.
3. **Tulis di log apa yang benar-benar muncul di console untuk masing-masing kasus**, dan
   simpulkan sendiri: kode setelah `await` yang reject itu jalan atau tidak? Kesimpulan ini harus
   berdasarkan hasil yang kamu lihat sendiri, bukan tebakan sebelum dicoba.

**Contoh entry log:**
```markdown
### Task: M2.W3.T4.2
- **Status:** done
- **Capaian:** Jalankan contoh(true) -> output console: [tulis apa yang benar2 muncul]. Jalankan contoh(false) -> output console: [tulis apa yang benar2 muncul]. Simpulan: [jelaskan baris mana yang jalan/tidak, berdasarkan hasil di atas].
- **Kesulitan:** -
```

### `M2.W3.T4.3` — [Wajib Refleksi — PENTING] `async`/`await` BUKAN sinkron

**Ini jebakan pemahaman paling penting minggu ini — pola yang sama dengan kesalahan `fr`/`vh`,
`this` arrow function, dan `reduce` di minggu-minggu lalu.**

Banyak orang (termasuk yang sudah lama coding) mengira: karena kode `async`/`await` **kelihatan**
ditulis berurutan dari atas ke bawah seperti kode sinkron biasa, berarti kode itu **jadi**
sinkron/blocking — padahal salah. `await` cuma "menunggu di titik itu", tapi mesin JavaScript
tetap async di baliknya (event loop tidak diblokir, bagian lain program tetap bisa jalan).

**Isi log dengan menjawab (kata sendiri, JANGAN tanya AI dulu):**
1. Jelaskan kenapa `async`/`await` bukan berarti kode berjalan sinkron seperti `for` loop biasa —
   apa beda fundamentalnya dari `for` loop yang benar-benar blocking?
2. Kasih 1 contoh situasi nyata di mana salah paham ini bisa bikin bug — misalnya: 2 `await` yang
   sebenarnya **tidak saling butuh hasil satu sama lain** (bisa jalan paralel/bersamaan), tapi
   ditulis berurutan satu-satu tanpa alasan, jadi lebih lambat dari yang seharusnya.

**Contoh entry log:**
```markdown
### Task: M2.W3.T4.3
- **Status:** done
- **Capaian:** [jawaban soal async/await bukan sinkron + 1 contoh skenario bug akibat salah paham ini]
- **Kesulitan:** -
```

### `M2.W3.T4.4` — **[Ulangi Tanpa Contek]** Skenario ke-3, dari nol

**Tutup dulu kode `T3.1`/`T4.1`/`T4.2` dan modul ini.** Ini ronde ke-3 untuk `async`/`await` —
karena ini jebakan pemahaman paling penting minggu ini, dapat porsi pengulangan paling banyak
(sama seperti `reduce` di Minggu 2).

Dari nol (dari ingatan, bukan disalin), bikin 1 fungsi `async` baru dengan **skenario ke-3** yang
belum pernah dipakai (beda dari "cek koneksi" `T3.1` putaran 1 dan "cek stok barang" `T3.1`
putaran 2) — lengkap dengan:
1. Fungsi yang mengembalikan Promise (resolve/reject via `setTimeout`).
2. Dipanggil pakai `async`/`await`.
3. `try`/`catch` untuk KEDUA kasus (sukses maupun gagal).

**Kalau ada yang lupa di tengah jalan** — catat jujur di log bagian mana yang sempat macet, cek
balik bagian itu saja, lanjutkan dari ingatan.

**Contoh entry log:**
```markdown
### Task: M2.W3.T4.4
- **Status:** done
- **Capaian:** Ulangi Promise+async/await+try/catch dari nol pakai skenario baru: [ceritakan skenarionya]. Sempat lupa [bagian mana], sisanya lancar dari ingatan.
- **Kesulitan:** (jujur, bagian mana yang sempat macet)
```

---

## 3. `fetch()` & Render ke DOM

### `M2.W3.T5.1` — `fetch()` dasar dengan `.then()` (2 putaran, endpoint berbeda)

**Putaran 1:**
```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // ubah response jadi JSON
  .then((data) => console.log(data))
  .catch((error) => console.log("Gagal fetch:", error));
```

**Latihan putaran 1:** jalankan ini, lihat isi datanya di console dulu (belum ke DOM) —
perhatikan `fetch()` juga sebuah Promise, jadi bisa dipakai `.then()`/`.catch()` seperti `T3.1`.

**Checklist putaran 1:** kamu paham kenapa ada **2 `.then()`** — yang pertama untuk mengubah
response mentah jadi JSON (`response.json()` itu sendiri juga Promise), yang kedua untuk data
JSON yang sudah siap dipakai.

**Putaran 2 (endpoint berbeda):** ulangi `fetch()` yang sama strukturnya, tapi ke **endpoint
lain** di JSONPlaceholder (misal `https://jsonplaceholder.typicode.com/posts` atau `.../todos`) —
atau API publik lain kalau mau. `console.log` datanya, perhatikan bentuk data JSON-nya beda dari
`/users` (field-nya berbeda).

**Contoh entry log:**
```markdown
### Task: M2.W3.T5.1
- **Status:** done
- **Capaian:** Putaran 1 (/users) & putaran 2 (/posts) berhasil fetch pakai .then, paham kenapa perlu 2 .then (response.json() lalu data).
- **Kesulitan:** -
```

### `M2.W3.T5.2` — Ulangi KEDUA putaran pakai `async`/`await`

```js
async function ambilUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Gagal fetch:", error);
  }
}
ambilUser();
```

**Latihan:** request yang **sama seperti `T5.1`** (kedua endpoint, putaran 1 & 2), tapi gaya
`async`/`await`. Bandingkan: mana yang lebih gampang dibaca untuk kasus yang agak kompleks (2
tahap: fetch lalu `.json()`) dibanding Promise sederhana 1 tahap di `T4.1`?

**Contoh entry log:**
```markdown
### Task: M2.W3.T5.2
- **Status:** done
- **Capaian:** Berhasil ulangi fetch untuk kedua endpoint (users & posts) pakai async/await. Menurut saya versi [pilih] lebih gampang dibaca karena [alasan].
- **Kesulitan:** -
```

### `M2.W3.T5.3` — Render ke DOM + loading & error state (untuk kedua putaran)

```js
const daftarUser = document.querySelector("#daftar-user");

async function tampilkanUser() {
  daftarUser.textContent = "Loading..."; // tampilkan loading DULU

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    daftarUser.textContent = ""; // kosongkan "Loading..." setelah data datang
    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`; // WAJIB textContent, bukan innerHTML
      daftarUser.appendChild(li);
    });
  } catch (error) {
    daftarUser.textContent = "Gagal memuat data. Coba lagi nanti.";
  }
}
tampilkanUser();
```

**Kenapa WAJIB `textContent`, bukan `innerHTML`?** Sama seperti pelajaran `T3.4`/`T1.3` Minggu 2 —
data dari API itu tetap "data dari luar" yang tidak sepenuhnya dipercaya (bisa saja API-nya
diretas, atau datanya mengandung karakter yang tidak terduga). Kebiasaan pakai `textContent`
sebagai default aman harus dijaga konsisten, bukan cuma pas ingat.

**Latihan — untuk KEDUA putaran (data `/users` dan data endpoint lain dari `T5.1`):**
1. Render masing-masing ke DOM dengan struktur di atas (boleh 2 container terpisah).
2. Coba sengaja pakai URL yang salah (misal ketik typo di domain-nya) untuk salah satu, lihat
   pesan error yang muncul di UI — pastikan pesannya jelas untuk user, bukan cuma error teknis
   mentah.

**Contoh entry log:**
```markdown
### Task: M2.W3.T5.3
- **Status:** done
- **Capaian:** Berhasil render data users & posts ke DOM pakai createElement+textContent, ada loading state, dan coba URL salah untuk buktikan error state jalan.
- **Kesulitan:** -
```

### `M2.W3.T5.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `fetch()` versi `.then()` dengan versi `async`/`await` — dari segi *hasil* (bukan gaya
   nulis)?
2. Kalau kamu **lupa** taruh `await` di depan `fetch(...)`, apa isi variabel yang menampungnya?
   (boleh coba langsung, lihat hasilnya)
3. Kenapa perlu ada 2 tahap `await` (`fetch` lalu `response.json()`) — kenapa tidak langsung dapat
   data JSON-nya dari `fetch` saja?
4. Kenapa `daftarUser.textContent = "Loading..."` harus ditulis SEBELUM `await fetch(...)`, bukan
   sesudahnya?
5. Kalau `fetch` gagal (misal internet putus), kode di dalam `try` yang mana yang berhenti
   dieksekusi, dan kode di `catch` yang menangkapnya itu dapat informasi apa?

**Contoh entry log:**
```markdown
### Task: M2.W3.T5.4
- **Status:** done
- **Capaian:** 5 jawaban kuis Promise/async-await/fetch + koreksi kalau ada yang salah.
- **Kesulitan:** -
```

### `M2.W3.T5.5` — **[Ulangi Tanpa Contek]** API/endpoint ke-3, dari nol

**Tutup dulu kode `T5.1`–`T5.3` dan modul ini.** Ini ronde ke-3 untuk `fetch()` — pilih 1
**API/endpoint yang belum pernah dipakai** (beda dari `/users` dan endpoint pilihanmu di `T5.1`
putaran 2). Dari nol (dari ingatan), kerjakan lengkap:

1. `fetch()` pakai `async`/`await` + `try`/`catch`.
2. Render ke DOM lewat `createElement`+`textContent` (bukan `innerHTML`).
3. Tampilkan "Loading..." sebelum data datang, dan pesan error yang jelas kalau gagal (coba
   sengaja salahkan URL-nya lagi untuk buktikan).

**Kalau ada yang lupa** — catat jujur di log bagian mana yang sempat macet, cek balik bagian itu
saja, lanjutkan dari ingatan.

**Contoh entry log:**
```markdown
### Task: M2.W3.T5.5
- **Status:** done
- **Capaian:** Ulangi fetch+async/await+render DOM+loading/error dari nol pakai endpoint [nama endpoint]. Sempat lupa [bagian mana], sisanya lancar dari ingatan.
- **Kesulitan:** (jujur, bagian mana yang sempat macet)
```

---

## 4. Proyek Pengembangan Skill Mandiri (`M2.W3.T6`)

**Estimasi waktu:** ±0,5–1 hari kerja.

Bangun 1 mini-app yang **menggabungkan skill baru minggu ini dengan skill Minggu 2** — bukan
topik lepas-lepas.

### Requirement wajib

1. **`fetch()` dari 1 public API** (boleh JSONPlaceholder atau API publik lain yang tidak butuh
   API key), pakai `async`/`await` + `try`/`catch`.
2. **Olah hasilnya pakai array methods Minggu 2** — minimal 2 dari `filter`/`map`/`find` (misal:
   filter user dari domain tertentu, map jadi format tampilan `"nama - email"`, atau find 1 user
   spesifik berdasarkan id).
3. **Render ke DOM** lewat `createElement`+`textContent` — **ada loading state** dan **ada error
   state** yang benar-benar teruji (coba matikan koneksi atau salah URL).
4. **Event handling** minimal 1 interaksi (misal tombol refresh data, dropdown filter, search
   box) — pakai event delegation kalau elemen yang berinteraksi dibuat dinamis.
5. **Komentar kode** di tiap fungsi array yang menjelaskan kenapa dipilih (lanjutan requirement
   `T6` Minggu 2 yang sempat kelupaan).
6. Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat evaluasi `T7`).

**Contoh entry log:**
```markdown
### Task: M2.W3.T6
- **Status:** done
- **Capaian:** [ceritakan mini-app apa, API apa yang dipakai, array method apa untuk apa, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 5. Evaluasi (`M2.W3.T7`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo `T6`** langsung di browser — termasuk coba matikan koneksi/salah URL untuk tunjukkan
   error state beneran berfungsi, bukan cuma teori.
2. **Review PR bareng** — `T1.1` (utang Minggu 2) **dan** `T6` (minggu ini) sekaligus.
3. **Mentor kasih soal live** yang menyasar kesalahpahaman umum `async`/`await` dianggap sinkron.
4. **Mentor minta modifikasi dadakan** di kode `T6` (misal ubah kriteria `filter`, atau tambah
   `try`/`catch` di bagian yang belum ada) — dikerjakan di tempat, tanpa buka modul.
5. **Ceritakan hasil fluency drill `T2`** — berapa lama actual selesai, bagian mana yang masih
   bikin ragu.
6. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M2.W3.T7
- **Status:** done
- **Capaian:** Demo T6 selesai (termasuk error state teruji), PR T1.1 & T6 dibahas, soal async/await terjawab, modifikasi dadakan berhasil dikerjakan live.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — Using Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- MDN — async function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- MDN — Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- javascript.info — Async/await: https://javascript.info/async-await
- JSONPlaceholder (API publik untuk latihan): https://jsonplaceholder.typicode.com/
