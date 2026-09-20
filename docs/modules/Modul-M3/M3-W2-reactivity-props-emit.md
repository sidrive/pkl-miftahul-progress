# Modul Bulan 3 Minggu 2 — Reactivity Lanjutan & Props/Emit

> Menemani task `M3.W2.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Modul ini **tidak menyertakan contoh jawaban atau hasil eksekusi** untuk
> latihan maupun soal refleksi/kuis — jalankan sendiri, amati sendiri, catat hasil aslinya di log.
> Contoh entry log di bawah cuma menunjukkan **format**, bukan isi jawabannya.
>
> **🗓️ 5 hari kerja penuh** (Senin 21 – Jumat 25 September 2026).
>
> ## Modal awal dari minggu lalu
>
> Minggu lalu (`M3.W1`) kamu sudah pakai `ref()` untuk reactivity dan `props`/`emit` dasar untuk
> komunikasi parent↔child (lewat migrasi to-do list ke Vue). Minggu ini memperdalam dua hal itu:
> `reactive()` sebagai cara lain menyimpan state (khusus object/array), dan `emit`/`props` yang
> lebih lengkap — kirim data (bukan cuma id) dan validasi tipe.
>
> **Poin perhatian:** destructuring dari `reactive()` — ini jebakan pemahaman minggu ini, pola yang
> sama dengan `:key` minggu lalu: **kelihatan** seperti cara singkat yang wajar, padahal bisa
> menghilangkan reactivity-nya. Lihat bagian 1.

---

## 1. Reactivity Lanjutan: `ref()` vs `reactive()`

### `M3.W2.T1.1` — `reactive()` dasar (BARU, 3 putaran data berbeda)

`ref()` yang kamu pakai minggu lalu bisa dipakai untuk tipe data apa saja (string, number, array,
object) — tapi untuk object/array, ada cara lain: `reactive()`.

```vue
<script setup>
import { reactive } from 'vue'

const profil = reactive({
  nama: 'Budi',
  umur: 20
})
// akses/ubah LANGSUNG, tanpa .value
function ulangTahun() {
  profil.umur++
}
</script>

<template>
  <p>{{ profil.nama }} — {{ profil.umur }} tahun</p>
  <button @click="ulangTahun">Ulang tahun</button>
</template>
```

Bedanya dari `ref()`: `reactive()` **hanya untuk object/array** (bukan untuk string/number/boolean
tunggal), dan kamu akses propertinya **langsung** (`profil.umur`), **tanpa** `.value` — baik di
`<script>` maupun `<template>`.

**Putaran 1:** bikin 1 object state pakai `reactive()` (misal data profil sederhana: nama, umur,
status — bebas topiknya), tampilkan di template, ubah salah satu propertinya lewat sebuah aksi
(tombol/input), amati UI update otomatis.

**Putaran 2 (topik beda):** ulangi dari nol dengan object state lain yang **beda topik** dari
putaran 1 — jangan copy-paste ganti nama variabel saja.

**Putaran 3 (array of object):** pakai `reactive()` untuk sebuah **array berisi object** (bukan 1
object tunggal lagi) — misal daftar barang/task/apa saja. Tambah, ubah salah satu item, dan hapus
salah satu item, semuanya **langsung** tanpa `.value` (beda dari `ref([])` minggu lalu yang perlu
`.value.push(...)`, `reactive([])` cukup `.push(...)` langsung).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T1.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran reactive() yang dibuat — object apa, array apa]
- **Kesulitan:** [jujur aja]
```

### `M3.W2.T1.2` — [Wajib Refleksi — PENTING] Jebakan destructuring `reactive()`

**Coba dulu SEBELUM baca lebih lanjut:**
1. Dari salah satu `reactive()` yang kamu buat di `T1.1`, **destructure** salah satu propertinya ke
   variabel biasa, contoh:
   ```js
   const { nama } = profil
   ```
2. Ubah variabel hasil destructure itu (`nama = 'Ani'`, atau lewat sebuah input/aksi yang mengubah
   `nama` tersebut) — amati apakah tampilan `{{ profil.nama }}` di `<template>` ikut berubah.
3. Bandingkan dengan mengubah **langsung** lewat `profil.nama = 'Ani'` (tanpa destructure duluan) —
   amati bedanya.

**Isi log dengan menjawab (kata sendiri):**
1. Apa bedanya hasil antara mengubah lewat variabel hasil destructure vs mengubah langsung lewat
   `profil.nama`?
2. Kenapa destructuring bisa bikin `reactive()` "kehilangan" reactivity-nya untuk properti yang
   di-destructure itu? (petunjuk arah eksplorasi, bukan jawaban: pikirkan apa yang sebenarnya
   disalin saat destructuring — nilainya, atau koneksinya ke object aslinya?)
3. Kalau kamu memang butuh destructure dari `reactive()` (misal supaya kode lebih ringkas), apa
   yang perlu kamu lakukan supaya tetap reactive? (boleh cari sendiri di dokumentasi Vue resmi soal
   ini, sebutkan nama fungsi/cara yang kamu temukan dan jelaskan cara kerjanya singkat)

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T1.2
- **Status:** done
- **Capaian:** [hasil percobaan destructure vs langsung + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W2.T1.3` — [Wajib Refleksi] Kapan pakai `ref()`, kapan pakai `reactive()`

**Isi log dengan menjawab (kata sendiri, berdasarkan pengalaman `T1.1`/`T1.2` — bukan menyalin
definisi umum dari internet):**
1. Dari pengalamanmu minggu ini vs minggu lalu, kapan kamu akan pilih `ref()`, kapan `reactive()`?
2. Apakah `ref()` bisa dipakai untuk menggantikan semua kasus `reactive()` (termasuk object/array)?
   Kalau bisa, kenapa `reactive()` masih ada sebagai opsi terpisah?
3. Apakah `reactive()` bisa dipakai untuk menggantikan semua kasus `ref()` (termasuk string/number
   tunggal)? Jelaskan alasannya berdasarkan yang kamu amati di `T1.1`.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T1.3
- **Status:** done
- **Capaian:** [jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W2.T1.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa perbedaan cara akses nilai antara `ref()` dan `reactive()` di dalam `<script>`?
2. Kenapa `reactive()` tidak dipakai untuk menyimpan string/number tunggal?
3. Apa yang terjadi kalau kamu destructure sebuah properti dari `reactive()` object lalu mengubah
   variabel hasil destructure-nya?
4. Kalau kamu punya state berupa daftar/list of object yang sering ditambah-hapus-ubah itemnya,
   `ref([])` atau `reactive([])` yang lebih pas dipakai, dan kenapa?
5. Sebutkan 1 skenario nyata (boleh dari project yang sudah kamu buat) di mana kamu akan pilih
   `ref()`, dan 1 skenario lain di mana kamu akan pilih `reactive()`.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T1.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 2. `emit` dengan Payload & `props` Tervalidasi

### `M3.W2.T2.1` — `emit` dengan payload (3 putaran, kasus berbeda)

Minggu lalu `emit` di `TodoList.vue` cuma kirim `id` (`$emit('toggle', todo.id)`). `emit` sebenarnya
bisa kirim data apa saja sebagai argumen kedua, ketiga, dst — bukan cuma id.

```vue
<!-- child -->
<script setup>
const emit = defineEmits(['simpan'])

function kirimData() {
  emit('simpan', { id: 1, catatan: 'contoh isi data yang dikirim' })
}
</script>
```

```vue
<!-- parent -->
<ChildComponent @simpan="handleSimpan" />
```
```js
function handleSimpan(data) {
  // data di sini = object yang dikirim child, bukan cuma id
}
```

**Putaran 1:** ulangi pola `emit` minggu lalu, tapi kirim **lebih dari sekadar id** — misal kirim
seluruh object `todo`, atau object gabungan seperti `{ id, teksBaru }` — dari child ke parent.

**Putaran 2 (kasus beda):** bikin child component BARU (topik beda dari putaran 1) yang emit data
dari sebuah form kecil (misal emit isi input saat form di-submit).

**Putaran 3 (multi-event):** bikin child component KETIGA yang emit **lebih dari 1 event berbeda**
dari komponen yang sama (misal `emit('simpan', data)` di 1 tombol dan `emit('batal')` — tanpa
payload — di tombol lain).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T2.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran emit dengan payload yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W2.T2.2` — `props` dengan validasi tipe (BARU, 3 putaran)

Minggu lalu `defineProps(['nama', 'nilai'])` — array string biasa, Vue tidak tahu tipe datanya
seharusnya apa, dan tidak ada peringatan kalau prop yang wajib lupa dikirim. Ada cara lain, object
syntax, yang bisa divalidasi:

```vue
<script setup>
defineProps({
  nama: { type: String, required: true },
  nilai: { type: Number, default: 0 }
})
</script>
```

**Putaran 1:** ambil 1 komponen dari `T3.3` minggu lalu (atau bikin komponen baru), ganti
`defineProps` array-nya jadi object syntax dengan `type` dan `required`/`default`.

**Putaran 2 (komponen baru, tipe lain):** bikin component baru dengan props tervalidasi berbeda —
coba juga tipe `Boolean` dan `Array` (bukan cuma `String`/`Number` lagi).

**Putaran 3 — `[Ulangi Tanpa Contek]`:** tutup dulu kode putaran 1 dan 2. Dari nol, bikin component
ketiga dengan minimal 3 props tervalidasi campuran tipe, salah satunya `required: true` **tanpa**
`default` (bedakan dari prop yang punya `default`).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T2.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran props tervalidasi yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W2.T2.3` — [Wajib Refleksi] Kenapa `props` itu read-only

**Coba dulu SEBELUM baca lebih lanjut:**
1. Di salah satu component dari `T2.2` yang punya prop `required: true`, sengaja **jangan kirim**
   prop itu dari parent-nya, jalankan, buka console browser, amati apa yang muncul.
2. Di child component yang sama, coba **langsung ubah** nilai salah satu prop yang diterima (bukan
   emit ke parent, tapi langsung `props.namaProp = 'sesuatu'` di dalam `<script setup>`) — amati
   lagi apa yang muncul di console.

**Isi log dengan menjawab (kata sendiri):**
1. Apa pesan yang muncul di console untuk masing-masing percobaan di atas?
2. Kenapa Vue menganggap `props` itu **read-only** dari sisi child — kenapa child tidak boleh
   langsung mengubah prop yang diterimanya?
3. Kalau child perlu "mengubah" data yang sebenarnya berasal dari prop, pola apa yang benar
   dipakai (kaitkan ke `emit` di `T2.1` dan ke `M3.W1.T3.4` minggu lalu soal arah aliran data)?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T2.3
- **Status:** done
- **Capaian:** [hasil 2 percobaan + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W2.T2.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa bedanya `defineProps(['nama'])` (array syntax) dengan `defineProps({ nama: { type: String }
   })` (object syntax) — dari sisi validasi?
2. Kalau prop `required: true` tidak dikirim dari parent, apa yang terjadi ke aplikasinya (apakah
   langsung crash, atau cuma peringatan)?
3. Kenapa child component tidak boleh langsung mengubah prop yang diterimanya?
4. Kalau child perlu mengirim lebih dari 1 data sekaligus ke parent lewat `emit`, bagaimana caranya
   (beri 1 contoh singkat)?
5. Sebuah component punya 2 event berbeda yang bisa di-emit (misal `simpan` dan `batal`) — di sisi
   parent, bagaimana caranya mendengarkan dua-duanya sekaligus?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T2.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 3. Proyek Pengembangan Skill Mandiri (`M3.W2.T3`)

**Estimasi waktu:** ±1 hari kerja.

Tambahkan **1 fitur baru** ke to-do list Vue (`M3.W1.T4`) yang **menggabungkan** ketiganya:
`reactive()`, `props` tervalidasi, dan `emit` dengan payload. Pilih salah satu:

**Opsi A — Filter kategori:**
- State filter (misal kategori aktif yang dipilih) pakai `reactive()`.
- Bikin component filter terpisah (misal tombol/dropdown kategori) yang menerima daftar kategori
  lewat `props` tervalidasi, dan kirim pilihan filter ke parent lewat `emit` ber-payload.
- Parent memakai state filter itu untuk menyaring `daftarTodo` yang ditampilkan.

**Opsi B — Edit task lewat form terpisah:**
- Ganti `editTodo` yang sekarang masih pakai `prompt()` manual (lihat `MainTodo.vue`) jadi component
  form terpisah.
- Component form itu menerima data task awal lewat `props` tervalidasi (`required`, tipe sesuai).
- Saat form disubmit, component itu `emit` data hasil edit (payload lengkap, bukan cuma teks) ke
  parent, parent yang update `daftarTodo`.

Boleh pilih salah satu saja — jangan dua-duanya kalau waktu tidak cukup, lebih baik 1 selesai rapi
daripada 2 setengah jadi. Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat
evaluasi `T4`).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W2.T3
- **Status:** done
- **Capaian:** [opsi mana yang dipilih dan kenapa, ceritakan implementasinya, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 4. Evaluasi (`M3.W2.T4`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo fitur baru dari `T3`** langsung jalan.
2. **Jelaskan kenapa pakai `reactive()`** di bagian tertentu (bukan `ref()`) — kaitkan ke `T1.3`.
3. **Jelaskan validasi `props`** yang dipakai di fitur baru ini.
4. **Review PR bareng.**
5. **Mentor minta modifikasi dadakan** di kode yang sedang jalan.
6. **Mentor kasih soal live** yang menyasar kesalahpahaman umum destructuring `reactive()`.
7. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M3.W2.T4
- **Status:** done
- **Capaian:** [ceritakan demo fitur baru, penjelasan reactive/props, hasil modifikasi dadakan]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Vue 3 — Reactivity Fundamentals (`ref` & `reactive`): https://vuejs.org/guide/essentials/reactivity-fundamentals.html
- Vue 3 — Reactivity Transform/caveats (destructuring): https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
- Vue 3 — Props: https://vuejs.org/guide/components/props.html
- Vue 3 — Component Events (`emit`): https://vuejs.org/guide/components/events.html
