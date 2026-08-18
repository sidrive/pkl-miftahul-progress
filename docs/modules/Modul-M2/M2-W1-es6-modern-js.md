# Modul Bulan 2 Minggu 1 — ES6+ (JavaScript Modern)

> Modul ini menemani task `M2.W1.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah.
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — task bertanda
> **[Wajib Refleksi]** baru dianggap `done` kalau kamu bisa jelaskan pemahamannya pakai kata
> sendiri, bukan cuma kode-nya jalan.
>
> **Catatan penting:** Minggu lalu ada kesalahan konsep — unit CSS `fr` dikira "mirip `vh`" karena
> sekilas kelihatan serupa (sama-sama bukan `px`), padahal cara kerjanya beda total. Minggu ini ada
> jebakan serupa yang **sangat umum** di JavaScript: banyak orang kira **arrow function itu cuma
> "versi singkat" dari `function` biasa** — itu salah, bedanya jauh lebih dalam (soal `this`).
> Modul ini dirancang supaya kamu tidak kejebak pola pikir "kelihatan mirip = berarti sama" itu.

---

## 1. `let`/`const` vs `var`

### `M2.W1.T1.1` — Buktikan beda scope

| Kata kunci | Scope | Bisa diubah? |
|---|---|---|
| `var` | Function-scope (tidak peduli blok `{}`) | Ya |
| `let` | Block-scope (terkunci di dalam `{}` tempat dia dideklarasikan) | Ya |
| `const` | Block-scope | Tidak (tapi isi object/array di dalamnya masih bisa diubah) |

**Latihan — buktikan sendiri, jangan cuma percaya tabel di atas:**
```js
if (true) {
  var a = "var punya"
  let b = "let punya"
}
console.log(a) // coba tebak dulu sebelum jalanin: muncul atau error?
console.log(b) // coba tebak dulu sebelum jalanin: muncul atau error?
```
Jalankan, lihat hasilnya. `a` akan tetap bisa diakses di luar blok `if` (karena `var` "bocor" ke
scope function/global), sedangkan `b` akan error `ReferenceError` (karena `let` terkunci di
dalam `{}`).

**Checklist selesai:** kamu benar-benar menjalankan kode di atas (bukan cuma baca), dan lihat
sendiri `b` memang error.

### `M2.W1.T1.2` — [Wajib Refleksi] Kenapa `var` "berbahaya"?

**Isi log dengan menjawab (kata sendiri, berdasarkan percobaan di atas):** kenapa perilaku `var`
yang "bocor" keluar blok itu bisa jadi sumber bug di program yang lebih besar? Kasih 1 contoh
skenario (boleh dari bayangan sendiri) di mana itu bisa bikin bug tidak terduga.

**Contoh entry log:**
```markdown
### Task: M2.W1.T1.2
- **Status:** done
- **Capaian:** [jawaban kamu soal kenapa var berbahaya, dengan 1 contoh skenario]
- **Kesulitan:** -
```

---

## 2. Arrow Function — **bukan cuma "versi singkat"**

### `M2.W1.T2.1` — Sintaks dasar

```js
// function biasa
function tambah(a, b) {
  return a + b
}

// arrow function — untuk kasus sederhana ini, HASILNYA sama
const tambahArrow = (a, b) => a + b
```

Untuk fungsi sederhana seperti di atas, memang kelihatan cuma beda gaya penulisan (lebih singkat).
**Tapi ini yang bikin banyak orang salah paham** — mereka berhenti di sini dan mengira itu satu-
satunya beda. Lanjut ke bagian berikutnya untuk lihat beda yang sebenarnya penting.

**Checklist selesai:** bisa menulis fungsi sederhana dalam kedua gaya dan hasilnya sama.

### `M2.W1.T2.2` — Praktik: buktikan beda `this`

**Ini bagian paling penting minggu ini.** Buat objek dengan 2 method — satu pakai `function`
biasa, satu pakai arrow function — lalu bandingkan nilai `this` di dalamnya:

```js
const kucing = {
  nama: "Milo",
  sapaBiasa: function () {
    console.log("Halo, saya " + this.nama) // this = kucing (object ini)
  },
  sapaArrow: () => {
    console.log("Halo, saya " + this.nama) // this = BUKAN kucing!
  },
}

kucing.sapaBiasa() // "Halo, saya Milo"
kucing.sapaArrow() // "Halo, saya undefined" (atau error, tergantung environment)
```

**Coba jalankan sendiri, jangan cuma percaya penjelasan di atas.** Perhatikan `sapaArrow` tidak
bisa mengakses `this.nama` dengan benar — kenapa? Karena **arrow function tidak punya `this`
miliknya sendiri** — dia "mewarisi" `this` dari lingkungan/scope tempat dia **didefinisikan**
(bukan tempat dia dipanggil), yang dalam kasus ini bukan objek `kucing`.

**Checklist selesai:** kamu jalankan kode di atas sendiri dan melihat langsung perbedaan hasilnya.

### `M2.W1.T2.3` — [Wajib Refleksi — PENTING] Bukan cuma soal gaya penulisan

**Isi log dengan menjawab (kata sendiri, JANGAN tanya AI dulu — coba jelaskan dari pemahamanmu
sendiri berdasarkan percobaan `T2.2`, baru cek/koreksi kalau perlu):**

1. Apa beda fundamental arrow function vs `function` biasa? (bukan soal "lebih singkat", tapi
   soal konsep apa yang beda)
2. Kasih 1 contoh situasi nyata (boleh dari kode yang pernah/akan kamu buat) di mana salah pilih
   arrow function untuk sebuah method objek bisa bikin bug yang membingungkan.

**Contoh entry log:**
```markdown
### Task: M2.W1.T2.3
- **Status:** done
- **Capaian:** [jawaban kamu soal beda fundamental this, + 1 contoh skenario bug nyata]
- **Kesulitan:** -
```

---

## 3. Template Literal

### `M2.W1.T3.1` — Interpolation & multi-baris

```js
const nama = "Gazi"
const umur = 20

// Cara lama (concatenation)
console.log("Halo, nama saya " + nama + " dan umur saya " + umur + " tahun.")

// Template literal
console.log(`Halo, nama saya ${nama} dan umur saya ${umur} tahun.`)

// Multi-baris tanpa perlu \n manual
const pesan = `Baris pertama
Baris kedua
Baris ketiga`
```

**Latihan:** ubah minimal 3 baris kode yang pakai concatenation `+` (boleh dari project lama kamu)
jadi template literal.

**Contoh entry log:**
```markdown
### Task: M2.W1.T3.1
- **Status:** done
- **Capaian:** Berhasil ubah 3 baris kode dari concatenation jadi template literal di [nama file].
- **Kesulitan:** -
```

### `M2.W1.T3.2` — [Wajib Refleksi] Kapan masih pakai `+`?

**Isi log dengan menjawab (kata sendiri):** template literal jelas lebih enak dibaca untuk string
yang isinya campur teks+variabel. Tapi apakah selalu lebih baik dari `+`? Kasih 1 contoh kasus
(boleh sederhana) di mana `+` masih cukup/masuk akal dipakai.

**Contoh entry log:**
```markdown
### Task: M2.W1.T3.2
- **Status:** done
- **Capaian:** [jawaban kamu + contoh kasus]
- **Kesulitan:** -
```

---

## 4. Destructuring

### `M2.W1.T4.1` — Destructuring array

```js
const koordinat = [10, 20]
const [x, y] = koordinat
console.log(x, y) // 10 20
```

**Latihan:** coba destructuring array dari hasil fungsi yang me-return lebih dari 1 nilai (misal
`[jam, menit]`).

### `M2.W1.T4.2` — Destructuring object + default value + rename

```js
const user = { nama: "Gazi", umur: 20 }

const { nama } = user // ambil cuma nama
const { nama: namaLengkap } = user // ambil nama, tapi rename jadi namaLengkap
const { kota = "Tidak diketahui" } = user // kota tidak ada di user, jadi pakai default
```

**Latihan:** coba ketiga variasi di atas dengan objek buatanmu sendiri.

**Contoh entry log:**
```markdown
### Task: M2.W1.T4.2
- **Status:** done
- **Capaian:** Berhasil coba destructuring object dengan rename dan default value.
- **Kesulitan:** -
```

### `M2.W1.T4.3` — [Wajib Refleksi] Kenapa destructuring lebih enak?

**Isi log dengan menjawab (kata sendiri):** bandingkan kode sebelum (akses manual `obj.properti`
berkali-kali) vs sesudah (destructuring) — kasih contoh konkret, lalu jelaskan kenapa versi
destructuring lebih enak dibaca/ditulis.

**Contoh entry log:**
```markdown
### Task: M2.W1.T4.3
- **Status:** done
- **Capaian:** [contoh kode before/after + alasan kenapa destructuring lebih enak]
- **Kesulitan:** -
```

---

## 5. Kuis & Latihan Soal

### `M2.W1.T5.1` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup dulu modul ini, jangan tanya AI.** Jawab minimal 8 soal berikut semampunya, baru boleh
cek jawaban setelahnya (dan koreksi jujur kalau ada yang salah — seperti kebiasaan yang sudah
bagus kamu jalani minggu-minggu sebelumnya):

1. Apa beda scope `var` dengan `let`?
2. Kalau kamu declare `const arr = [1, 2, 3]`, boleh tidak melakukan `arr.push(4)`? Kenapa?
3. Apa beda fundamental arrow function dengan `function` biasa (bukan soal panjang kode)?
4. Kalau sebuah method objek butuh akses `this` ke objek itu sendiri, sebaiknya pakai arrow
   function atau `function` biasa?
5. Tulis 1 contoh template literal dengan 2 variabel di dalamnya.
6. Destructuring `const { a, b } = { a: 1, b: 2, c: 3 }` — apa isi `a` dan `b`? Apakah `c` ikut
   terambil?
7. Bagaimana cara memberi nilai default saat destructuring kalau property-nya tidak ada di object?
8. Kapan kamu akan tetap pakai `+` untuk gabung string, bukan template literal?

**Contoh entry log:**
```markdown
### Task: M2.W1.T5.1
- **Status:** done
- **Capaian:** [8 jawaban kamu + koreksi kalau ada yang salah setelah dicek ulang]
- **Kesulitan:** -
```

### `M2.W1.T5.2` — Latihan soal kecil

Cari atau buat 5-10 soal latihan kecil ES6+ (boleh cari di internet, boleh minta AI **membuatkan
soal** — bukan menjawabnya). Kerjakan dulu semampunya sendiri sebelum minta AI verifikasi jawaban.

**Contoh entry log:**
```markdown
### Task: M2.W1.T5.2
- **Status:** done
- **Capaian:** Sudah kerjakan 8 soal latihan ES6+, [x] benar dari awal, [y] sempat salah lalu dikoreksi.
- **Kesulitan:** -
```

---

## 6. Proyek Pengembangan Skill Mandiri (`M2.W1.T6`)

**Estimasi waktu:** minimal setengah hari kerja (±4 jam), termasuk kalau dibantu AI.

Refactor 1 script/bagian kode lama supaya pakai ES6+ secara **tepat** — bukan asal ganti semua
`function` jadi arrow function tanpa dipikir.

### Requirement wajib

1. **Pilih target refactor**: boleh bagian JavaScript dari project to-do list Minggu 4 (kalau ada),
   boleh juga script baru kecil yang kamu buat sendiri untuk latihan ini.
2. **Ganti `var` → `let`/`const`** di semua tempat yang masuk akal.
3. **Pakai arrow function DI TEMPAT YANG TEPAT** — untuk fungsi biasa/callback sederhana boleh
   arrow, tapi **kalau ada method objek yang butuh `this` mengacu ke objek itu sendiri, WAJIB
   tetap pakai `function` biasa** (ini yang membedakan refactor yang genuinely paham vs asal
   ganti semua).
4. **Ganti concatenation `+` → template literal** di bagian yang menggabung teks+variabel.
5. **Pakai destructuring** minimal di 1 tempat yang sebelumnya akses property manual berulang.
6. **Sertakan minimal 1 kasus nyata** (komentar di kode boleh) yang menunjukkan kamu SENGAJA
   memilih `function` biasa (bukan arrow) karena butuh `this` — ini pembuktian kamu paham beda
   fundamentalnya, bukan cuma ikut-ikutan tren "arrow function lebih modern".
7. Kerjakan lewat **branch → commit rapi (minimal 4 commit) → PR** — merge sendiri setelah yakin,
   **jangan hapus branch/PR-nya**, dibahas bareng mentor sekalian pas evaluasi `T7`.

### Submit

Cukup pastikan repo/PR-nya bisa diakses, cantumkan link di entry log.

**Contoh entry log:**
```markdown
### Task: M2.W1.T6
- **Status:** done
- **Capaian:** [ceritakan script apa yang direfactor, di bagian mana kamu SENGAJA pakai function biasa bukan arrow karena this, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 7. Evaluasi (`M2.W1.T7`)

Siapkan demo singkat (~15-20 menit) untuk mentor:

1. **Tunjukkan hasil refactor `T6`** langsung — jalankan kodenya, jelaskan tiap keputusan yang
   diambil (kapan arrow, kapan `function` biasa, kapan destructuring dipakai).
2. **Buka PR-nya bareng mentor** untuk dibahas (review digabung di sesi ini, sama seperti Minggu 4).
3. **Mentor akan kasih soal live** yang menyasar kesalahpahaman umum arrow function/`this` —
   dijawab langsung tanpa buka catatan, untuk memastikan pemahamannya beneran nempel.
4. **Mentor akan tanya 2-3 variasi pertanyaan** lain di luar contoh modul.
5. Ceritakan singkat: bagian mana yang paling menantang, bagian mana yang paling gampang.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M2.W1.T7
- **Status:** done
- **Capaian:** Demo ke mentor selesai, ES6+ dikuasai (termasuk beda this arrow vs function), PR dibahas, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- MDN — Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- javascript.info — Variables (var/let/const): https://javascript.info/variables
- javascript.info — Arrow functions revisited (this): https://javascript.info/arrow-functions
