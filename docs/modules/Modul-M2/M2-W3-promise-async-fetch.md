# Modul Bulan 2 Minggu 3 — Promise, async/await, & fetch API

> Modul ini menemani task `M2.W3.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah.
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — task bertanda
> **[Wajib Refleksi]** baru dianggap `done` kalau kamu bisa jelaskan pemahamannya pakai kata
> sendiri, bukan cuma kode-nya jalan.
>
> **🗓️ 5 hari kerja penuh** (Senin 24 – Jumat 28 Agustus 2026, tidak ada libur minggu ini).
>
> ## Kenapa minggu ini dibagi 2 bagian
>
> Dari evaluasi `M2.W2.T7` (21 Agustus): array methods (`map`/`filter`/`reduce`) sebenarnya sudah
> cukup lancar dieksekusi live saat mentor minta langsung, dan pelajaran soal `innerHTML`/XSS
> **sudah kelihatan diterapkan dengan benar** di `T5-M2-W2.js` (pakai `createElement` untuk tombol,
> bukan suntik string ke `innerHTML` lagi) — ini kemajuan nyata dibanding insiden `T4.5`. Tapi
> proyek mandiri `T6` dan PR-nya belum selesai, dan kamu sendiri bilang materi Minggu 2 "cukup
> berat, kurang pengalaman JS." Jadi:
>
> - **Bagian A (Senin–Selasa, ±40% waktu minggu ini):** tuntaskan dulu utang Minggu 2 + 1 latihan
>   fluency (bukan konsep baru — cuma membangun kecepatan & rasa percaya diri).
> - **Bagian B (Rabu–Jumat, ±60% waktu minggu ini):** materi baru — Promise, `async`/`await`,
>   `fetch()` — yang di bagian akhir (`T6`) **digabung** dengan skill Minggu 2 (array methods),
>   bukan topik lepas berdiri sendiri.
>
> **Catatan pola berulang (baca ini dulu sebelum bagian B):** minggu-minggu lalu ada beberapa
> kesalahan konsep karena "kelihatan mirip = dikira sama" — unit CSS `fr` dikira mirip `vh`, arrow
> function dikira cuma "versi singkat" `function`, `reduce()` dikira cuma "`for` loop yang ditulis
> lebih ribet". Minggu ini jebakannya ada di `async`/`await`: **banyak orang mengira kode di dalam
> `async function` jadi berjalan sinkron/blocking** karena penulisannya kelihatan berurutan seperti
> kode biasa. Itu salah — lihat bagian 3 di bawah.

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

### `M2.W3.T3.1` — 3 state Promise + `.then()`/`.catch()`

Promise punya 3 kemungkinan state: **pending** (masih menunggu), **fulfilled** (berhasil, ada
hasilnya), **rejected** (gagal, ada alasan gagalnya).

```js
function tungguSebentar(sukses) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sukses) {
        resolve("Berhasil setelah nunggu 1 detik!");
      } else {
        reject("Gagal, ada masalah!");
      }
    }, 1000);
  });
}

tungguSebentar(true)
  .then((hasil) => console.log("Then:", hasil))
  .catch((error) => console.log("Catch:", error));

tungguSebentar(false)
  .then((hasil) => console.log("Then:", hasil))
  .catch((error) => console.log("Catch:", error));
```

**Latihan:** jalankan kedua kasus di atas (sukses `true` dan `false`), lihat sendiri `.then()`
jalan untuk yang sukses, `.catch()` jalan untuk yang gagal.

**Checklist selesai:** kamu paham Promise itu **placeholder untuk nilai yang belum ada sekarang,
tapi akan ada nanti** (baik berhasil maupun gagal).

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

### `M2.W3.T4.1` — Ubah `.then()` jadi `async`/`await`

```js
// versi Promise chain
function ambilData() {
  tungguSebentar(true)
    .then((hasil) => console.log("Hasil:", hasil))
    .catch((error) => console.log("Error:", error));
}

// versi async/await — SAMA PERSIS perilakunya, cuma gaya nulis beda
async function ambilDataAsync() {
  try {
    const hasil = await tungguSebentar(true);
    console.log("Hasil:", hasil);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

**Latihan:** ubah Promise `tungguSebentar` dari `T3.1` jadi dipanggil pakai `async`/`await`
(seperti contoh di atas), untuk kasus sukses dan gagal.

**Checklist selesai:** bandingkan kedua versi kodenya — perhatikan `async`/`await` **tidak
mengubah cara kerja Promise-nya**, cuma mengubah cara kamu *menulis* kode yang berinteraksi
dengannya.

### `M2.W3.T4.2` — Error handling `try`/`catch`

`try`/`catch` di dalam fungsi `async` adalah pengganti `.catch()` di versi Promise chain.

```js
async function contoh() {
  try {
    const hasil = await tungguSebentar(false); // ini akan reject
    console.log(hasil); // baris ini TIDAK akan pernah jalan
  } catch (error) {
    console.log("Ketangkep di catch:", error);
  }
}
contoh();
```

**Latihan:** sengaja buat 1 kasus yang reject, pastikan `catch` beneran menangkapnya (taruh
`console.log` di dalam `try` SETELAH `await` untuk buktikan baris itu tidak pernah jalan kalau
reject).

**Contoh entry log:**
```markdown
### Task: M2.W3.T4.2
- **Status:** done
- **Capaian:** Berhasil praktik try/catch di async function, buktikan baris setelah await yang reject tidak pernah jalan.
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

---

## 3. `fetch()` & Render ke DOM

### `M2.W3.T5.1` — `fetch()` dasar dengan `.then()`

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // ubah response jadi JSON
  .then((data) => console.log(data))
  .catch((error) => console.log("Gagal fetch:", error));
```

**Latihan:** jalankan ini, lihat isi datanya di console dulu (belum ke DOM) — perhatikan
`fetch()` juga sebuah Promise, jadi bisa dipakai `.then()`/`.catch()` seperti `T3.1`.

**Checklist selesai:** kamu paham kenapa ada **2 `.then()`** — yang pertama untuk mengubah
response mentah jadi JSON (`response.json()` itu sendiri juga Promise), yang kedua untuk data
JSON yang sudah siap dipakai.

### `M2.W3.T5.2` — Ulangi pakai `async`/`await`

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

**Latihan:** request yang sama seperti `T5.1`, tapi gaya `async`/`await`. Bandingkan: mana yang
lebih gampang dibaca untuk kasus yang agak kompleks (2 tahap: fetch lalu `.json()`) dibanding
Promise sederhana 1 tahap di `T4.1`?

**Contoh entry log:**
```markdown
### Task: M2.W3.T5.2
- **Status:** done
- **Capaian:** Berhasil ulangi fetch pakai async/await, request sama dengan T5.1. Menurut saya versi [pilih] lebih gampang dibaca karena [alasan].
- **Kesulitan:** -
```

### `M2.W3.T5.3` — Render ke DOM + loading & error state

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

**Latihan:** coba sengaja pakai URL yang salah (misal ketik typo di domain-nya), lihat pesan error
yang muncul di UI — pastikan pesannya jelas untuk user, bukan cuma error teknis mentah.

**Contoh entry log:**
```markdown
### Task: M2.W3.T5.3
- **Status:** done
- **Capaian:** Berhasil render data user ke DOM pakai createElement+textContent, ada loading state, dan coba URL salah untuk buktikan error state jalan.
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
