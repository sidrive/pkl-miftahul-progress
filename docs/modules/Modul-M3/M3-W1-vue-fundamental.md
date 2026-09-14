# Modul Bulan 3 Minggu 1 — Vue 3 Fundamental

> Menemani task `M3.W1.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Contoh kode di modul ini tidak menyertakan hasil eksekusi — jalankan
> sendiri, catat hasil aslinya di log.
>
> **🗓️ 5 hari kerja penuh** (Senin 14 – Jumat 18 September 2026) — minggu pertama Bulan 3.
>
> ## Modal awal dari minggu lalu
>
> Kamu sudah iseng eksplor Vue 3 sendiri minggu lalu (`M2.W5.T3`) — install Vite+Vue, bikin
> `Tentang.vue`, pakai `ref`, `v-if`/`v-else-if`, `@click.prevent`. Bagus, itu jadi modal. Minggu
> ini memformalkan yang sudah sempat dicoba (biar dasarnya kokoh) sekaligus menambah yang belum:
> `v-for`, komposisi komponen dengan data mengalir dari parent ke child (`props`), dan migrasi
> to-do list Minggu 4 Bulan 2 ke Vue asli sebagai proyek mandiri.
>
> **Poin perhatian:** `v-for` butuh `:key` — ini jebakan pemahaman minggu ini, pola yang sama
> dengan `fr`/`vh`, `this` arrow function, `reduce`, `async`/`await`, dan `localStorage` di
> minggu-minggu lalu: `:key` **kelihatan** seperti syarat formalitas yang boleh diabaikan, padahal
> perannya penting. Lihat bagian 2.

---

## 1. Setup & Anatomi SFC

### `M3.W1.T1.1` — Recap project `cobaVue`

Buka lagi project `cobaVue` yang sudah dibuat minggu lalu. Jelaskan (boleh sambil buka
file-nya satu-satu):

- `main.js` — titik masuk aplikasi, tempat Vue "dipasang" ke halaman HTML.
- `App.vue` — komponen akar/utama yang jadi pembungkus semua komponen lain.
- `vite.config.js` — konfigurasi build tool Vite.
- `package.json` — perhatikan `scripts.dev` (dijalankan lewat `npm run dev`) dan bedakan
  `dependencies` vs `devDependencies` (kaitkan ke pelajaran `T1.4` Minggu 4 Bulan 2 — `vue` masuk
  `dependencies` karena dibutuhkan saat aplikasi jalan, `vite` masuk `devDependencies` karena cuma
  dipakai saat development).

**Contoh entry log:**
```markdown
### Task: M3.W1.T1.1
- **Status:** done
- **Capaian:** Sudah recap project cobaVue, jelaskan fungsi main.js/App.vue/vite.config.js/package.json.
- **Kesulitan:** -
```

### `M3.W1.T1.2` — Anatomi Single File Component

Setiap file `.vue` (Single File Component/SFC) punya 3 blok:

```vue
<template>
  <!-- struktur mirip HTML biasa -->
  <h1>{{ judul }}</h1>
</template>

<script setup>
// logic JavaScript — versi modern disebut Composition API
import { ref } from 'vue'
const judul = ref('Halo Vue!')
</script>

<style scoped>
/* CSS yang otomatis cuma berlaku di komponen ini saja */
h1 {
  color: blue;
}
</style>
```

`<script setup>` adalah cara modern (Composition API) — lebih ringkas dibanding Options API lama
(`export default { data() {...}, methods: {...} }`). Project ini pakai `<script setup>` sepenuhnya.

`<style scoped>` — kata kunci `scoped` bikin CSS di situ **tidak bocor** ke komponen lain, beda
dengan CSS biasa yang berlaku global ke seluruh halaman.

**Latihan:** buka `App.vue` dan `Tentang.vue` yang sudah dibuat minggu lalu, tunjuk masing-masing
3 blok-nya, dan cek apakah style di satu komponen memengaruhi tampilan komponen lain.

### `M3.W1.T1.3` — [Wajib Refleksi] Kenapa SFC menggabungkan HTML+JS+CSS

**Isi log dengan menjawab (kata sendiri):**
1. Kenapa Vue menggabungkan HTML+JS+CSS dalam 1 file `.vue`, dibanding dipisah 3 file terpisah
   seperti project vanilla JS sebelumnya (`index.html`/`.js`/`.css`)?
2. Apa untung-ruginya pendekatan SFC ini?
3. Kaitkan ke `<style scoped>` — di CSS biasa (bukan Vue), bagaimana caramu mencegah 1 aturan CSS
   "bocor" mempengaruhi elemen di bagian lain halaman? Bandingkan effort-nya dengan `scoped` di Vue.

---

## 2. Reactivity & Template Syntax

### `M3.W1.T2.1` — `ref()` dasar (3 putaran, data berbeda)

```vue
<script setup>
import { ref } from 'vue'

const halamanAktif = ref('beranda') // putaran 1 — sudah dipakai minggu lalu

const jumlahKlik = ref(0) // putaran 2 — BARU
function tambahKlik() {
  jumlahKlik.value++ // WAJIB pakai .value di dalam <script>, TIDAK di dalam <template>
}
</script>

<template>
  <p>Halaman aktif: {{ halamanAktif }}</p>

  <button @click="tambahKlik">Klik saya</button>
  <p>Sudah diklik {{ jumlahKlik }} kali</p>
</template>
```

**Putaran 1:** ulangi `halamanAktif` yang sudah dipakai minggu lalu (`App.vue`), pastikan masih
paham cara kerjanya.

**Putaran 2 (BARU):** tambahkan `ref()` baru untuk kasus lain (contoh: counter di atas, atau kasus
lain bebas), amati **UI update otomatis** begitu nilai `.value` berubah — tanpa perlu `render()`
manual seperti di vanilla JS dulu.

**Putaran 3 (tipe data lain):** bikin `ref()` lagi untuk kasus ketiga yang **beda tipe data** dari
putaran 1 dan 2 (misal `ref()` berisi string dari input yang diketik user, atau `ref()` berisi
array kecil) — buktikan `ref()` bisa dipakai untuk berbagai tipe data, bukan cuma dihafal untuk 1
bentuk saja.

**Checklist selesai:** kamu paham `.value` WAJIB dipakai saat mengakses/mengubah `ref()` di dalam
`<script>`, tapi TIDAK perlu `.value` saat dipakai di `<template>` (Vue otomatis "membuka"-nya).

### `M3.W1.T2.2` — `v-if`/`v-else-if`/`v-else`

Minggu lalu kamu sudah pakai `v-if`/`v-else-if` untuk switch antara halaman "beranda" dan
"tentang". Tambahkan **1 halaman baru** (misal "kontak") supaya ada `v-else` yang beneran
terpakai (bukan cuma `v-if`/`v-else-if` doang):

```vue
<div v-if="halamanAktif === 'beranda'">...</div>
<Tentang v-else-if="halamanAktif === 'tentang'" />
<div v-else>
  <!-- ini jalan kalau bukan beranda ATAU tentang -->
</div>
```

**Contoh entry log:**
```markdown
### Task: M3.W1.T2.2
- **Status:** done
- **Capaian:** Tambah halaman ke-3 (kontak), sekarang ada v-if/v-else-if/v-else lengkap.
- **Kesulitan:** -
```

### `M3.W1.T2.3` — `v-for` (BARU, 3 putaran data berbeda)

```vue
<script setup>
import { ref } from 'vue'

const daftarSiswa = ref([
  { id: 1, nama: 'Ani', nilai: 80 },
  { id: 2, nama: 'Budi', nilai: 65 },
])
</script>

<template>
  <ul>
    <li v-for="siswa in daftarSiswa" :key="siswa.id">
      {{ siswa.nama }} - {{ siswa.nilai }}
    </li>
  </ul>
</template>
```

Bandingkan ini dengan cara vanilla JS dulu: `data.forEach((item) => { const li =
document.createElement("li"); ... listEl.appendChild(li) })`. Perhatikan `v-for` jauh lebih
ringkas — kamu cukup deklaratif ("render 1 `<li>` untuk tiap siswa"), tanpa perlu manual
`createElement`/`appendChild`.

**Putaran 1:** render 1 list data (boleh reuse data siswa/produk dari Bulan 2) pakai
`v-for="item in daftar" :key="item.id"`.

**Putaran 2 (data lain, topik beda dari putaran 1):** ulangi dari nol dengan 1 data yang **beda
topik** dari putaran 1 (misal kalau putaran 1 pakai data siswa, putaran 2 pakai data
buku/film/apa saja) — jangan cuma copy-paste ganti nama variabel, tulis ulang strukturnya sendiri.

**Putaran 3 — `[Ulangi Tanpa Contek]`:** tutup dulu kode putaran 1 dan 2. Dari nol, pakai 1 data
topik ketiga, **kombinasikan `v-for` dengan `v-if`** — misal tampilkan pesan "Belum ada data"
kalau array-nya kosong (`v-if="daftar.length === 0"`), atau tampilkan list-nya kalau ada isi
(`v-else`). Catat jujur bagian mana yang sempat lupa.


### `M3.W1.T2.4` — [Wajib Refleksi — PENTING] Kenapa `:key` bukan formalitas

**Coba dulu SEBELUM baca lebih lanjut:**
1. Dari list `v-for` yang kamu buat di `T2.3`, **hapus dulu** `:key="item.id"`-nya (jadi cuma
   `v-for="item in daftar"` tanpa `:key`) — perhatikan: mungkin masih kelihatan "jalan normal" di
   kasus sederhana.
2. Sekarang tambahkan sesuatu yang membuat urutan/isi list berubah secara dinamis (misal tombol
   "tambah di depan list" yang meng-`unshift` item baru ke awal array, atau tombol hapus di
   tengah), sambil ada elemen interaktif per item (misal `<input>` kecil di tiap baris, atau warna
   berbeda per item lewat CSS `nth-child`). Amati apakah ada perilaku aneh — state di baris
   tertentu "tertukar" dengan baris lain setelah list berubah.
3. Pasang lagi `:key="item.id"`, ulangi percobaan yang sama, bandingkan.

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati bedanya antara tanpa `:key` vs dengan `:key` saat list berubah?
2. Kenapa `:key` bukan cuma formalitas yang boleh dilewatkan — apa sebenarnya fungsi `key` buat
   Vue di balik layar?
3. Kenapa `:key="index"` (pakai posisi urutan sebagai key) sering dianggap "kurang aman"
   dibanding `:key="item.id"` (pakai id unik dari data)? Kasih 1 skenario di mana pakai `index`
   sebagai key bisa menyebabkan masalah yang mirip dengan yang kamu amati di percobaan tanpa
   `:key` sama sekali.

**Contoh entry log:**
```markdown
### Task: M3.W1.T2.4
- **Status:** done
- **Capaian:** [hasil percobaan tanpa vs dengan :key + jawaban soal fungsi key + kenapa index bukan pilihan aman]
- **Kesulitan:** -
```

### `M3.W1.T2.5` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Kenapa harus pakai `.value` untuk mengubah `ref()` di dalam `<script>`, tapi tidak di
   `<template>`?
2. Apa beda `v-if` dengan `v-else-if`?
3. Kalau `v-for` dipakai tanpa `:key`, apa risikonya kalau data di array berubah urutan/isi?
4. Kenapa `:key="item.id"` lebih aman dibanding `:key="index"`?
5. Kalau kamu ingin menampilkan teks berbeda tergantung 3 kondisi (bukan cuma 2), directive apa
   saja yang kamu pakai berurutan?

**Contoh entry log:**
```markdown
### Task: M3.W1.T2.5
- **Status:** done
- **Capaian:** 5 jawaban kuis ref/v-if/v-for/:key + koreksi kalau ada yang salah.
- **Kesulitan:** -
```

---

## 3. Event Handling, Binding, & Komposisi Komponen

### `M3.W1.T3.1` — `@click`/`v-on` (3 putaran, kasus berbeda)

**Putaran 1:** minggu lalu kamu sudah pakai `@click.prevent`. Ulangi lagi konsepnya di komponen
mana saja untuk mastikan masih lancar.

**Putaran 2 (event BARU, kasus beda):** pakai event yang belum pernah dicoba, misal `@input` di
sebuah form — bukan sekadar variasi kecil dari `@click`, tapi kasus yang benar-benar beda
(`@input` terpicu tiap kali isi input berubah, bukan cuma saat elemen diklik):

```vue
<input type="text" @input="handleInput" />
```

**Putaran 3 (event lain lagi):** pakai 1 event modifier lain yang belum dicoba, misal
`@keyup.enter` (submit form cukup tekan Enter, tanpa klik tombol) atau `@dblclick` — di kasus
ketiga yang beda dari putaran 1 dan 2.

**Contoh entry log:**
```markdown
### Task: M3.W1.T3.1
- **Status:** done
- **Capaian:** Putaran 1 (ulangi @click.prevent), putaran 2 (@input di form baru), putaran 3 (@keyup.enter) berhasil.
- **Kesulitan:** -
```

### `M3.W1.T3.2` — `:class` dinamis (3 putaran, kasus berbeda)

**Putaran 1:**

```vue
<script setup>
const item = ref({ teks: 'Belajar Vue', selesai: false })
function toggleSelesai() {
  item.value.selesai = !item.value.selesai
}
</script>

<template>
  <span :class="{ selesai: item.selesai }" @click="toggleSelesai">
    {{ item.teks }}
  </span>
</template>

<style scoped>
.selesai {
  text-decoration: line-through;
  color: #888;
}
</style>
```

`:class="{ selesai: item.selesai }"` — class `selesai` ditambahkan **hanya kalau**
`item.selesai` bernilai `true`. Ini pengganti `classList.add`/`classList.toggle` manual yang
dulu kamu tulis sendiri di vanilla JS.

**Putaran 2 (kondisi/data lain):** ulangi dari nol dengan **1 kondisi atau data yang belum dipakai**
di putaran 1 (misal `:class` berdasarkan kategori/status yang beda, bukan sekadar
"selesai"/"belum" lagi) — tulis ulang strukturnya sendiri, jangan copy-paste ganti nama.

**Putaran 3 — `[Ulangi Tanpa Contek]`:** tutup dulu kode putaran 1 dan 2. Dari nol, pakai kondisi
ketiga, kali ini **kombinasikan lebih dari 1 class kondisional sekaligus** dalam 1 elemen (misal
`:class="{ selesai: ..., prioritas: ... }"` — 2 kelas berbeda, aktif tidaknya independen satu
sama lain).

**Contoh entry log:**
```markdown
### Task: M3.W1.T3.2
- **Status:** done
- **Capaian:** Putaran 1 (toggle selesai), putaran 2 (kondisi lain), putaran 3 (2 class kondisional sekaligus) berhasil.
- **Kesulitan:** -
```

### `M3.W1.T3.3` — Komposisi komponen dengan `props` (BARU, 3 putaran)

`Tentang.vue` minggu lalu isinya statis (tidak menerima data dari luar). Sekarang bikin child
component yang menerima data lewat `props`.

**Putaran 1:**

```vue
<!-- KartuSiswa.vue -->
<script setup>
defineProps(['nama', 'nilai'])
</script>

<template>
  <div class="kartu">
    <strong>{{ nama }}</strong> - Nilai: {{ nilai }}
  </div>
</template>
```

```vue
<!-- App.vue (parent) -->
<script setup>
import KartuSiswa from './components/KartuSiswa.vue'
</script>

<template>
  <KartuSiswa nama="Ani" :nilai="80" />
</template>
```

Perhatikan `nama="Ani"` (tanpa `:`) mengirim string literal, sedangkan `:nilai="80"` (dengan `:`)
mengirim nilai sebagai JavaScript (angka, bukan string `"80"`).

Kombinasikan dengan `v-for` dari `T2.3` putaran 1 — render 1 `KartuSiswa` untuk **setiap** siswa
di `daftarSiswa`, masing-masing dapat data (`nama`, `nilai`) berbeda lewat `props`.

**Putaran 2 (komponen KEDUA, `props` berbeda):** bikin child component lain lagi — bukan reuse
`KartuSiswa`, tapi komponen baru dengan bentuk `props` yang beda (misal jumlah prop-nya beda,
atau tipe datanya beda — array/object, bukan cuma string/angka lagi). Ini membuktikan kamu paham
pola `defineProps` secara umum, bukan hafal 1 komponen contoh.

**Putaran 3 (komponen KETIGA, kompleksitas naik):** bikin child component lagi yang menerima
**lebih dari 2 `props` sekaligus**, salah satunya bertipe array/object (misal komponen kartu
produk yang menerima `nama`, `harga`, DAN `daftarUlasan` berupa array) — buktikan kamu bisa
mengelola beberapa `props` dengan tipe campuran dalam 1 komponen, bukan cuma 1-2 prop sederhana.

**Contoh entry log:**
```markdown
### Task: M3.W1.T3.3
- **Status:** done
- **Capaian:** Putaran 1 (KartuSiswa + v-for), putaran 2 (komponen baru, props berbeda), putaran 3 (komponen dengan 3+ props campuran tipe) berhasil.
- **Kesulitan:** -
```

### `M3.W1.T3.4` — [Wajib Refleksi] Bagaimana data mengalir lewat `props`

**Isi log dengan menjawab (kata sendiri):**
1. Jelaskan bagaimana data "mengalir" dari komponen parent ke child lewat `props` — kasih contoh
   konkret dari `KartuSiswa` yang baru dibuat.
2. Kenapa `nama="Ani"` (tanpa `:`) beda dari `:nilai="80"` (dengan `:`) — apa yang terjadi kalau
   kamu tulis `nilai="80"` (tanpa `:`) untuk prop yang seharusnya angka?

---

## 4. Proyek Pengembangan Skill Mandiri (`M3.W1.T4`)

**Estimasi waktu:** ±1 hari kerja.

Migrasikan to-do list vanilla JS (Minggu 4 Bulan 2) ke Vue 3.

### Requirement wajib

1. **Render list** pakai `v-for="todo in daftarTodo" :key="todo.id"` — bukan `createElement`
   manual lagi.
2. **State** `daftarTodo` pakai `ref([])`.
3. **Toggle selesai** pakai `:class="{ selesai: todo.selesai }"` — bukan `classList.add`/`remove`
   manual.
4. **Tambah/hapus task** lewat `@click`/`@submit` — logic array-nya (`push`/`filter`) sama seperti
   vanilla JS dulu, cuma cara trigger render-nya yang beda (otomatis lewat reactivity, bukan
   manual panggil `render()`).
5. Boleh split minimal 1 bagian jadi child component (misal 1 item task jadi komponennya sendiri,
   terima data lewat `props` — sesuai `T3.3`).
6. **Tidak perlu `localStorage` dulu** — belum dibahas cara gabungnya sama reactivity Vue (topik
   minggu depan). Fokus ke migrasi logic & state Vue-nya dulu.
7. Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat evaluasi `T5`).

**Contoh entry log:**
```markdown
### Task: M3.W1.T4
- **Status:** done
- **Capaian:** [ceritakan migrasi to-do list ke Vue, bagian mana yang jadi child component, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 5. Evaluasi (`M3.W1.T5`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo migrasi to-do list Vue (`T4`)** langsung jalan.
2. **Jelaskan kenapa pakai `ref`** untuk state, **kenapa `:key` dibutuhkan** di `v-for`-nya.
3. **Review PR bareng.**
4. **Mentor minta modifikasi dadakan** — misal tambah 1 komponen kecil baru, atau ubah 1 bagian
   jadi conditional rendering baru.
5. **Mentor kasih soal live** yang menyasar kesalahpahaman umum `:key` (dianggap formalitas
   kosong).
6. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M3.W1.T5
- **Status:** done
- **Capaian:** Demo migrasi to-do list Vue selesai, ref/v-for/:key dijelaskan, PR dibahas, modifikasi dadakan berhasil dikerjakan.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- Vue 3 — Guide: https://vuejs.org/guide/introduction.html
- Vue 3 — `<script setup>`: https://vuejs.org/api/sfc-script-setup.html
- Vue 3 — List Rendering (`v-for` & `key`): https://vuejs.org/guide/essentials/list.html
- Vue 3 — Component Props: https://vuejs.org/guide/components/props.html
