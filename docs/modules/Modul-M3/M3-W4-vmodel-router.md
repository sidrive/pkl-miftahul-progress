# Modul Bulan 3 Minggu 4 — Custom `v-model` & Vue Router 4 Dasar

> Menemani task `M3.W4.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Modul ini **tidak menyertakan contoh jawaban atau hasil eksekusi** untuk
> latihan maupun soal refleksi/kuis — jalankan sendiri, amati sendiri, catat hasil aslinya di log.
> Contoh entry log di bawah cuma menunjukkan **format**, bukan isi jawabannya.
>
> **🗓️ 5 hari kerja penuh** (Senin 5 – Jumat 9 Oktober 2026). **Minggu terakhir Bulan 3.**
>
> ## Kenapa minggu ini lebih berat
>
> Minggu-minggu sebelumnya materinya bertahap: `ref` → `props`/`emit` dasar → `reactive` →
> `emit` berpayload/`props` tervalidasi → `computed`/`watch`/lifecycle. Formatnya tetap sama
> (3 putaran per task praktik inti, refleksi tanpa kisi-kisi), tapi minggu ini **2 topiknya lebih
> abstrak**:
>
> 1. **Custom `v-model`** — kamu sudah jago `props`+`emit` manual. `v-model` di component sendiri
>    itu sebenarnya cuma "bungkus ringkas" dari pola yang sama, tapi harus paham konvensi
>    penamaannya (`modelValue`/`update:modelValue`) supaya "sihir"-nya jalan.
> 2. **Vue Router** — aplikasimu yang selama ini 1 halaman (switch pakai `v-if`) akan jadi
>    **multi-halaman sungguhan** dengan URL berbeda. Ini konsep baru total, bukan perluasan dari
>    yang sudah ada.
>
> **Poin perhatian:** Vue Router **tidak otomatis membuat ulang component** kalau kamu pindah ke
> route yang sama persis, cuma parameter URL-nya yang beda (misal `/produk/1` → `/produk/2`) — ini
> jebakan pemahaman minggu ini, pola yang sama dengan `:key` dan `watch()` tanpa `deep`
> minggu-minggu lalu: **kelihatan** seperti harusnya otomatis "refresh", padahal tidak. Lihat
> bagian 2.

---

## 1. `v-model` Lanjutan: Custom `v-model` di Component

### `M3.W4.T1.1` — `v-model` native + modifier (recap + lebih dalam, 3 putaran)

Kamu sudah sering pakai `v-model="sesuatu"` di `<input type="text">`. Ada beberapa modifier yang
mungkin belum dicoba:

```vue
<input v-model.trim="nama" />      <!-- buang spasi awal/akhir otomatis -->
<input v-model.number="umur" />    <!-- paksa jadi Number, bukan String -->
<input v-model.lazy="teks" />      <!-- update cuma saat blur/Enter, bukan tiap ketikan -->
```

Untuk checkbox, `v-model` bisa diikat ke sebuah **array** — tiap checkbox yang tercentang,
value-nya masuk ke array itu:

```vue
<script setup>
import { ref } from 'vue'
const terpilih = ref([])
</script>

<template>
  <input type="checkbox" value="Sekolah" v-model="terpilih" />
  <input type="checkbox" value="Pribadi" v-model="terpilih" />
  <!-- terpilih akan berisi array, misal ['Sekolah', 'Pribadi'] kalau dua-duanya dicentang -->
</template>
```

**Putaran 1:** recap `v-model` di `<input type="text">`, tambahkan `.trim`, amati bedanya (coba
ketik dengan spasi berlebih di awal/akhir, bandingkan hasil tersimpan dengan/tanpa `.trim`).

**Putaran 2:** `v-model` di `<input type="checkbox">` versi **array** seperti contoh di atas —
dengan topik/data berbeda dari putaran 1.

**Putaran 3:** `v-model` di `<select>` dengan modifier `.number` — buktikan pakai `typeof` (misal
`console.log(typeof nilaiTerpilih.value)`) bedanya hasil dengan dan tanpa `.number`.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T1.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran v-model native + modifier yang dicoba]
- **Kesulitan:** [jujur aja]
```

### `M3.W4.T1.2` — Custom `v-model` di component sendiri (BARU, lebih sulit, 3 putaran)

`v-model` bukan cuma untuk elemen native — kamu bisa bikin component sendiri yang mendukung
`v-model`. Konvensinya: component menerima prop bernama **`modelValue`**, dan meng-emit event
bernama **`update:modelValue`** saat nilainya berubah:

```vue
<!-- InputKustom.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

```vue
<!-- parent -->
<InputKustom v-model="namaUser" />
```

Vue menerjemahkan `v-model="namaUser"` di atas jadi (secara konsep) `:modelValue="namaUser"` +
`@update:modelValue="namaUser = $event"` — persis pola `props`+`emit` yang sudah kamu kuasai, cuma
dibungkus sintaks ringkas.

> Ada cara lebih modern: macro `defineModel()` (menggantikan kedua baris `defineProps`/`defineEmits`
> di atas jadi 1 baris). Cari tahu sendiri di dokumentasi Vue resmi kalau mau coba versi ini —
> boleh pakai salah satu (manual `modelValue`/`update:modelValue`, atau `defineModel()`), tapi
> kamu harus bisa jelaskan APA yang terjadi di balik layarnya, bukan cuma hafal syntax-nya.

**Putaran 1:** bikin 1 component kecil yang bisa dipakai parent lewat `v-model="sesuatu"` — tipe
data bebas (string sederhana, seperti contoh di atas).

**Putaran 2 (tipe data beda):** bikin component KEDUA dengan tipe data `v-model` yang beda — misal
boolean untuk toggle on/off (bukan string lagi).

**Putaran 3 (multi `v-model`):** bikin component KETIGA yang punya **lebih dari 1 `v-model`**
sekaligus — pakai nama argumen (`v-model:nama="..."`, `v-model:aktif="..."`), masing-masing butuh
pasangan prop+emit sendiri (`nama`/`update:nama`, `aktif`/`update:aktif` — bukan `modelValue` lagi
untuk versi dengan argumen).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T1.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran custom v-model yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W4.T1.3` — [Wajib Refleksi — PENTING] Kenapa custom `v-model` butuh pasangan yang cocok

**Coba dulu SEBELUM baca lebih lanjut:**
1. Dari salah satu component custom `v-model` di `T1.2`, **sengaja rusak** pasangannya — misal
   nama prop-nya kamu ubah jadi bukan `modelValue` lagi (atau bukan nama argumen yang sesuai untuk
   versi `v-model:nama`), tapi event emit-nya TETAP memakai nama lama.
2. Jalankan, pakai component itu dari parent seperti biasa (`v-model="sesuatu"`), amati: apakah ada
   peringatan di console, atau component-nya cuma diam-diam tidak berfungsi (nilai tidak pernah
   ter-update)?

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati setelah sengaja merusak pasangan prop/emit itu?
2. Jelaskan apa yang sebenarnya terjadi di balik layar saat parent menulis `v-model="sesuatu"` —
   diterjemahkan Vue jadi kombinasi `props`+`@event` seperti apa persisnya?
3. Kenapa nama prop dan nama event-nya harus **cocok persis** (ikuti konvensi
   `modelValue`/`update:modelValue`, atau `namaArgumen`/`update:namaArgumen`) — apa yang akan Vue
   lakukan kalau penamaannya tidak diikuti?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T1.3
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W4.T1.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa fungsi modifier `.trim`, `.number`, dan `.lazy` pada `v-model` native?
2. Bagaimana cara `v-model` bekerja kalau diikat ke beberapa `<input type="checkbox">` sekaligus?
3. Pada custom `v-model` tanpa argumen (`v-model="x"`), nama prop dan nama event yang harus
   dipakai component-nya apa?
4. Kalau kamu butuh lebih dari 1 `v-model` dalam 1 component (`v-model:a`, `v-model:b`), bagaimana
   pola penamaan prop/event untuk masing-masing?
5. Jelaskan dengan kata sendiri: `v-model="x"` di parent itu sebenarnya "singkatan" dari kombinasi
   apa (dalam bentuk prop + event biasa)?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T1.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 2. Vue Router 4 Dasar

### `M3.W4.T2.1` — Setup & routing dasar (BARU, 3 putaran)

Install dulu:
```bash
npm install vue-router@4
```

Bikin file router (misal `src/router/index.js`):
```js
import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../pages/Beranda.vue'
import Tentang from '../pages/Tentang.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/tentang', component: Tentang },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
```

Daftarkan ke aplikasi (`main.js`):
```js
import router from './router'
app.use(router)
```

Pasang `<router-view>` di `App.vue` (ini yang jadi "slot" tempat halaman aktif ditampilkan,
mengganti pola `v-if` manual yang kamu pakai sejak `M3.W1`):
```vue
<template>
  <nav>
    <router-link to="/">Beranda</router-link>
    <router-link to="/tentang">Tentang</router-link>
  </nav>
  <router-view />
</template>
```

**Putaran 1:** 2 halaman dasar ("Beranda"/"Tentang", atau topik lain bebas), navigasi pakai
`<router-link>`, pastikan URL di address bar benar-benar berubah (bukan cuma konten yang ganti).

**Putaran 2:** tambah halaman KETIGA yang beda topik.

**Putaran 3:** tambah halaman KEEMPAT — kali ini perhatikan styling link aktifnya. `<router-link>`
otomatis menambahkan class `router-link-active`/`router-link-exact-active` ke link yang sesuai
dengan halaman aktif sekarang — cari tahu sendiri bedanya, lalu coba styling sedikit biar kelihatan
mana halaman yang aktif.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T2.1
- **Status:** done
- **Capaian:** [ceritakan setup router + 4 halaman yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W4.T2.2` — Dynamic route params (BARU, 3 putaran)

Route bisa punya parameter dinamis di URL-nya:

```js
{ path: '/produk/:id', component: DetailProduk }
```

Baca parameternya di component tujuan:
```vue
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
</script>
```

**Putaran 1:** bikin halaman daftar → detail dari 1 topik data (boleh reuse data minggu-minggu
lalu, misal daftar produk/task), link ke detail pakai `:to="`/produk/${item.id}`"`.

**Putaran 2 (topik beda):** ulangi dari nol dengan topik data yang BEDA dari putaran 1.

**Putaran 3 (multi-parameter):** route dengan **lebih dari 1 parameter dinamis sekaligus**, misal
`/kategori/:kategoriId/produk/:produkId` — baca keduanya di component tujuan.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T2.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran dynamic route params yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W4.T2.3` — [Wajib Refleksi — PENTING] Component reuse saat parameter berubah

**Coba dulu SEBELUM baca lebih lanjut:**
1. Dari route dynamic param di `T2.2`, taruh `console.log('component dibuat')` di dalam
   `onMounted()` component tujuannya (misal halaman detail produk).
2. Buka salah satu detail (misal `/produk/1`), perhatikan console — `onMounted` jalan.
3. Dari halaman detail itu, **navigasi ke detail LAIN** yang masih route yang SAMA, cuma beda `:id`
   (misal ke `/produk/2`) lewat `<router-link>` — **bukan** reload halaman penuh (`F5`/ketik URL
   manual), harus lewat klik link di dalam aplikasi yang sedang jalan.
4. Amati console lagi: apakah `onMounted` ("component dibuat") muncul LAGI, atau cuma muncul sekali
   di langkah #2 saja?
5. Amati juga tampilannya: apakah data yang ditampilkan ikut berubah sesuai `:id` baru (`2`), atau
   malah masih menampilkan data lama (`1`)?

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati — `onMounted` terpanggil ulang atau tidak, dan apakah datanya ikut berubah
   atau "nyangkut"?
2. Kenapa Vue Router **tidak otomatis membuat ulang component**-nya kalau cuma parameter URL yang
   berubah, sementara route-nya (komponennya) tetap sama? (petunjuk arah eksplorasi, bukan jawaban:
   pikirkan — apakah Vue menganggap ini "halaman baru" atau "halaman yang sama, cuma datanya perlu
   di-refresh"?)
3. Cari tahu sendiri (boleh dari dokumentasi Vue Router resmi) minimal **1 cara** supaya data di
   component itu ikut "refresh" tiap kali parameter berubah, meski component-nya tidak dibuat
   ulang. Sebutkan cara yang kamu temukan dan coba terapkan di component-mu, buktikan sekarang
   datanya ikut berubah sesuai `:id` baru.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T2.3
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 3 poin di atas + cara yang ditemukan & dicoba]
- **Kesulitan:** [jujur aja]
```

### `M3.W4.T2.4` — Navigasi terprogram & query params (BARU, 3 putaran)

Selain `<router-link>`, kamu bisa pindah halaman lewat kode (`router.push`):
```vue
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function selesaiSimpan() {
  router.push('/')
}
</script>
```

Query params (`?key=value` di URL) — state yang tersimpan di URL, beda dari route params:
```js
// navigasi ke /cari?keyword=sepatu
router.push({ path: '/cari', query: { keyword: 'sepatu' } })
```
```vue
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.query.keyword)
</script>
```

**Putaran 1:** pakai `router.push('/path')` dipicu dari sebuah function (misal setelah submit form
berhasil) — bandingkan dengan `<router-link>` biasa: kapan masing-masing lebih cocok dipakai?

**Putaran 2 (query params):** pakai query params untuk 1 kasus baru — misal filter/pencarian yang
state-nya tersimpan di URL (bukan cuma `ref()` biasa seperti minggu-minggu lalu), sehingga link-nya
bisa di-share dan tetap menunjukkan hasil pencarian yang sama.

**Putaran 3 (kombinasi):** kombinasikan `router.push` dengan query params sekaligus dalam 1
pemanggilan.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T2.4
- **Status:** done
- **Capaian:** [ceritakan 3 putaran navigasi terprogram & query params yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W4.T2.5` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `<router-link>` dengan `<a href="...">` biasa?
2. Bagaimana cara membaca parameter dinamis (`:id`) dari URL di dalam component tujuan?
3. Kalau kamu navigasi dari `/produk/1` ke `/produk/2` (route sama, param beda) lewat
   `<router-link>`, apakah component-nya dibuat ulang dari awal? Apa dampaknya ke `onMounted()`?
4. Apa beda route params (`/produk/:id`) dengan query params (`/cari?keyword=...`) — kapan masing-
   masing lebih cocok dipakai?
5. Kapan kamu akan pakai `router.push()` dibanding `<router-link>`?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T2.5
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 3. Proyek Pengembangan Skill Mandiri (`M3.W4.T3`)

**Estimasi waktu:** ±1-1.5 hari kerja (lebih besar dari minggu-minggu sebelumnya).

Migrasikan to-do list Vue (`M3.W3.T4`) jadi **multi-halaman** pakai Vue Router. Minimal:

1. **Halaman daftar to-do** — seperti sekarang (list + search + filter kategori).
2. **Halaman detail 1 task** lewat dynamic route param (`/todo/:id`) yang menampilkan detail
   lengkap + form edit — **ganti `prompt()` manual** yang masih dipakai sejak `M3.W1` dengan form
   beneran, pakai **custom `v-model`** dari `T1.2` di field form edit-nya.
3. **Navigasi antar halaman** pakai `<router-link>` DAN minimal 1 `router.push()` terprogram
   (misal redirect otomatis ke halaman daftar setelah edit berhasil disimpan).
4. Kalau relevan di halaman detailmu (misal ada tombol "task berikutnya"/"sebelumnya" yang pindah
   antar detail tanpa reload), terapkan solusi dari `T2.3` (jebakan component reuse) supaya
   datanya ikut ter-refresh.

Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat evaluasi `T5`).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T3
- **Status:** done
- **Capaian:** [ceritakan migrasi multi-halaman, halaman apa saja, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 4. Laporan/Mini App Akhir Minggu (`M3.W4.T4`) — BARU, berlaku mulai minggu ini dan seterusnya

> Ini aturan baru yang berlaku **setiap akhir minggu ke depan**, bukan cuma minggu ini. Lihat
> [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) bagian "Laporan/Mini App Akhir
> Minggu" untuk aturan lengkapnya.

Selama ini, tiap task praktik (`T1.1`, `T1.2`, `T2.1`, dst — tiap putaran) biasanya kamu kerjakan
sebagai component/file terpisah, dipanggil manual lewat 1 file switch (misal `TaskW4.vue` yang
isinya cuma daftar link ke component-component latihan). Itu cukup untuk belajar konsepnya
satu-satu, tapi belum menunjukkan kamu bisa melihatnya sebagai **satu kesatuan yang saling
berhubungan**.

Task ini: satukan SEMUA task praktik minggu ini (`T1.1`-`T1.4`, `T2.1`-`T2.5` — semua putaran,
bukan cuma capstone `T3`) jadi 1 kesatuan. Pilih salah satu bentuk:

**Opsi A — Mini App:** pakai Vue Router (yang baru saja kamu pelajari minggu ini) untuk menyatukan
seluruh component latihan minggu ini jadi aplikasi navigasi beneran — 1 halaman/route per task atau
per kelompok task yang berhubungan, dengan menu/navigasi jelas antar halaman. Hasilnya: showcase
yang bisa kamu demo end-to-end ke mentor dalam 1 aplikasi yang jalan, bukan buka-tutup file
satu-satu seperti biasanya.

**Opsi B — Laporan tertulis:** dokumen (boleh markdown) yang menjelaskan **alur logis** keseluruhan
minggu — bagaimana tiap konsep saling berhubungan dan dipakai lagi di konsep berikutnya. Contoh
pertanyaan yang perlu terjawab di laporan ini (bukan daftar lengkap, kembangkan sendiri):
- Custom `v-model` yang kamu pelajari di `T1.2` — di bagian mana dari capstone `T3` itu dipakai
  lagi, dan kenapa di situ lebih cocok dibanding `props`/`emit` manual biasa?
- Dynamic route param `T2.2` — bagaimana itu jadi dasar untuk halaman detail di `T3`?
- Jebakan component reuse `T2.3` — apakah itu relevan/muncul juga di capstone `T3`-mu? Kalau iya,
  bagaimana kamu menanganinya di sana?

Ini **bukan** ringkasan terpisah per task seperti isi `DAILY_LOG.md` biasa (itu tetap jalan terus,
per task, seperti biasa) — ini laporan yang secara eksplisit MENGHUBUNGKAN antar task, menunjukkan
kamu melihat gambaran besarnya, bukan cuma menyelesaikan checklist satu-satu.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W4.T4
- **Status:** done
- **Capaian:** [opsi mana yang dipilih dan kenapa, ceritakan hasilnya, link ke mini app/laporan]
- **Kesulitan:** [jujur aja]
```

---

## 5. Evaluasi (`M3.W4.T5`) — Penutup Bulan 3

Siapkan demo untuk mentor:

1. **Demo migrasi multi-halaman dari `T3`** langsung jalan (navigasi antar halaman, buka detail
   task, edit lewat custom `v-model`), DAN **demo mini app/laporan dari `T4`**.
2. **Jelaskan kenapa butuh dynamic route param** untuk halaman detail.
3. **Review PR bareng.**
4. **Mentor minta modifikasi dadakan** di kode yang sedang jalan.
5. **Mentor kasih soal live** yang menyasar kesalahpahaman umum component reuse Vue Router
   (dianggap otomatis "refresh" tiap ganti param).
6. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.
7. **Refleksi capaian keseluruhan Bulan 3** (Vue 3 fundamental — `ref`/`reactive` sampai Router) +
   preview singkat Bulan 4.

Setelah demo, isi entry log terakhir untuk minggu ini (dan penutup Bulan 3):
```markdown
### Task: M3.W4.T5
- **Status:** done
- **Capaian:** [ceritakan demo multi-halaman + mini app/laporan, penjelasan dynamic route param, hasil modifikasi dadakan, refleksi Bulan 3]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Vue 3 — Component `v-model`: https://vuejs.org/guide/components/v-model.html
- Vue 3 — Form Input Bindings (`v-model` native & modifier): https://vuejs.org/guide/essentials/forms.html
- Vue Router 4 — Getting Started: https://router.vuejs.org/guide/
- Vue Router 4 — Dynamic Route Matching: https://router.vuejs.org/guide/essentials/dynamic-matching.html
- Vue Router 4 — Reacting to Params Changes: https://router.vuejs.org/guide/essentials/dynamic-matching.html#Reacting-to-Params-Changes
