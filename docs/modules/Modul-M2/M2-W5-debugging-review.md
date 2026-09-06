# Modul Bulan 2 Minggu 5 — Review Penutup + Sedikit Latihan Debugging

> Menemani task `M2.W5.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`.
>
> **🗓️ 5 hari kerja penuh** (Senin 7 – Jumat 11 September 2026) — minggu penutup Bulan 2 sebelum
> masuk Vue 3.
>
> ## Kenapa ada sedikit latihan debugging minggu ini
>
> Dari evaluasi Minggu 4: butuh waktu untuk menemukan penyebab error saat modifikasi dadakan
> (ternyata cuma lupa 1 parameter di pemanggilan `render`). Ini **bukan** jadi fokus tunggal
> minggu ini — cuma diselipkan di beberapa titik kecil (bagian 1, dan 2 potongan kode di bagian
> review) — sisanya minggu ini berjalan seperti biasa: review Bulan 2 dan lanjutan project.

---

## 1. Dasar Debugging (ringkas)

### `M2.W5.T1.1` — Baca & artikan error message

| Error | Artinya | Penyebab umum |
|---|---|---|
| `TypeError: Cannot read properties of undefined (reading 'x')` | Kamu coba akses property `.x` dari sesuatu yang ternyata `undefined` | Lupa `return`, salah nama variabel, atau data belum ada saat diakses |
| `ReferenceError: nama is not defined` | Kamu pakai variabel/fungsi yang belum pernah dideklarasikan | Typo nama variabel, lupa deklarasi, atau di luar scope |
| `TypeError: x is not a function` | Kamu coba panggil sesuatu seperti fungsi, padahal bukan | Salah nama method, atau variabel berisi tipe data yang salah |
| `SyntaxError: Unexpected token` | Struktur kode salah secara tata bahasa | Kurung `{}`/`()`/`[]` tidak seimbang, lupa koma |
| `Uncaught (in promise) ...` | Promise di-reject tapi tidak ada yang menangkap | Lupa `.catch()`/`try`-`catch` |

**Latihan:** untuk tiap baris, sengaja buat 2-3 baris kode yang memicu error itu, jalankan, lihat
sendiri pesan errornya persis apa dan baris berapa yang ditunjuk.

### `M2.W5.T1.2` — Breakpoint + bisection

**Breakpoint:** buka DevTools → tab **Sources**, klik nomor baris untuk pasang breakpoint (atau
taruh `debugger;` di kode). Saat eksekusi berhenti di situ, panel **Scope** menunjukkan isi semua
variabel yang bisa diakses saat itu.

**Bisection:** kalau ada fungsi panjang yang hasilnya salah tapi tidak error, taruh 1
`console.log` di **tengah** dulu (bukan di banyak tempat sekaligus) — kalau nilainya sudah salah
di situ, masalahnya di bagian atas; kalau masih benar, masalahnya di bagian bawah. Ulangi
mempersempit sampai ketemu baris persisnya.

**Latihan:** praktikkan keduanya di 1 fungsi dari project to-do list Minggu 4 (boleh pura-pura ada
bug untuk latihan polanya kalau kodenya sudah benar).

### `M2.W5.T1.3` — [Wajib Refleksi] Kenapa lebih cepat

**Isi log dengan menjawab (kata sendiri):** kenapa breakpoint/bisection lebih cepat menemukan bug
dibanding baca ulang semua kode dari baris pertama setiap kali ada masalah? Kaitkan ke pengalaman
nyata kamu sendiri minggu-minggu sebelumnya yang butuh waktu lama cari bug.

---

## 2. Review Bulan 2

Masing-masing bagian di bawah diawali 1 potongan kode kecil yang ada 1 bug tersembunyi —
temukan & perbaiki dulu (catat berapa lama), baru jawab soal kuisnya.

### `M2.W5.T2.1` — Review bagian 1: ES6+ & Array Methods

**Potongan kode (temukan bug-nya dulu):**
```js
const transaksi = [
  { kategori: "makanan", jumlah: 20000 },
  { kategori: "transport", jumlah: 15000 },
  { kategori: "makanan", jumlah: 30000 },
];

function totalPerKategori(data, kategoriDicari) {
  const hasil = data.filter((t) => t.kategori = kategoriDicari);
  return hasil.reduce((acc, t) => acc + t.jumlah, 0);
}

console.log(totalPerKategori(transaksi, "makanan"));
```

**Setelah bug ketemu & diperbaiki, tutup modul (jangan lihat jawaban) dan jawab 5 soal:**
1. Apa beda `let` dengan `const`?
2. Apa beda fundamental arrow function dengan `function` biasa (soal `this`, bukan soal panjang
   kode)?
3. Kapan pakai `map`, kapan pakai `filter`, kapan pakai `find`?
4. Kenapa `reduce` bukan cuma "`for` loop yang ditulis lebih ribet"?
5. Kasih 1 contoh kapan destructuring lebih enak dibanding akses `obj.properti` manual berulang.

**Contoh entry log:**
```markdown
### Task: M2.W5.T2.1
- **Status:** done
- **Capaian:** Bug ditemukan dalam [x menit]: [gejala -> cara melacak -> perbaikan]. Jawaban 5 soal: [...]
- **Kesulitan:** -
```

### `M2.W5.T2.2` — Review bagian 2: DOM/Event/Promise/localStorage

**Potongan kode (temukan bug-nya dulu):**
```js
function muat() {
  const mentah = localStorage.getItem("catatan");
  if (!mentah) return [];
  return mentah;
}

const listEl = document.querySelector("#daftar");
listEl.addEventListener("click", (event) => {
  if (event.target.tagName === "li") {
    console.log("diklik:", event.target.textContent);
  }
});
```

*(Ada 2 hal yang tidak berjalan sesuai harapan di sini — temukan keduanya.)*

**Setelah ketemu & diperbaiki, tutup modul dan jawab 5 soal:**
1. Apa keuntungan event delegation dibanding listener per-elemen?
2. Kenapa `async`/`await` tidak membuat kode berjalan sinkron?
3. Kalau lupa taruh `await` di depan `fetch(...)`, apa isi variabelnya?
4. Kenapa harus `JSON.stringify` sebelum `localStorage.setItem` dan `JSON.parse` setelah
   `getItem`?
5. Kenapa `textContent` lebih aman dari `innerHTML` untuk data dari luar (input user/API)?

**Contoh entry log:**
```markdown
### Task: M2.W5.T2.2
- **Status:** done
- **Capaian:** Bug ditemukan dalam [x menit]: [gejala -> cara melacak -> perbaikan, untuk kedua bug]. Jawaban 5 soal: [...]
- **Kesulitan:** (bandingkan waktunya dengan T2.1)
```

---

## 3. Lanjutan Project & Persiapan Ringan Bulan 3 (`M2.W5.T3`)

Pilih salah satu:

**(a) Tambah 1 fitur lagi ke to-do list Minggu 4** — bebas topik fiturnya, lewat branch+PR
seperti biasa.

**(b) Orientasi ringan Vue 3** — install project Vue+Vite baru:
```bash
npm create vite@latest nama-project -- --template vue
cd nama-project
npm install
npm run dev
```
Amati struktur foldernya (`src/`, `App.vue`, `main.js`) — belum perlu paham konsepnya sekarang,
ini cuma pemanasan lingkungan kerja sebelum Bulan 3 resmi dimulai minggu depan.

**Contoh entry log:**
```markdown
### Task: M2.W5.T3
- **Status:** done
- **Capaian:** Pilih opsi [a/b]: [ceritakan apa yang dikerjakan/diamati]
- **Kesulitan:** -
```

---

## 4. Evaluasi & Penutup Bulan 2 (`M2.W5.T4`)

Siapkan untuk mentor:

1. **Mentor akan sengaja menyuntik 1 bug ke to-do list Minggu 4 yang sudah jalan**, live di depan
   kamu — dihitung waktu sampai ketemu & terbaiki, dibandingkan dengan waktu di `T2.1`/`T2.2`.
2. **Mentor tanya soal live** variasi dari kuis review `T2.1`/`T2.2`.
3. **Ceritakan hasil `T3`** — fitur baru yang ditambahkan, atau orientasi Vue yang diamati.
4. Refleksi capaian keseluruhan Bulan 2 (dari ES6+ sampai `localStorage`) — bagian mana yang
   paling berkembang, bagian mana yang masih terasa berat.
5. Preview singkat Bulan 3 (Vue 3) sebagai penutup.

**Contoh entry log:**
```markdown
### Task: M2.W5.T4
- **Status:** done
- **Capaian:** Bug suntikan mentor ditemukan dalam [x menit]. Soal review terjawab. Refleksi Bulan 2 & T3 diceritakan.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — Debugging JavaScript: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong
- Chrome DevTools — JavaScript debugging: https://developer.chrome.com/docs/devtools/javascript
- Vite — Getting Started: https://vitejs.dev/guide/
