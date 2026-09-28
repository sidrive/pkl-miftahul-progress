# Modul Bulan 3 Minggu 3 — `computed()` Lanjutan, `watch()`/`watchEffect()`, & Lifecycle Hooks

> Menemani task `M3.W3.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Modul ini **tidak menyertakan contoh jawaban atau hasil eksekusi** untuk
> latihan maupun soal refleksi/kuis — jalankan sendiri, amati sendiri, catat hasil aslinya di log.
> Contoh entry log di bawah cuma menunjukkan **format**, bukan isi jawabannya.
>
> **🗓️ 5 hari kerja penuh** (Senin 28 September – Jumat 2 Oktober 2026).
>
> ## Modal awal dari minggu-minggu lalu
>
> Kamu sudah pakai `computed()` sendiri sejak `M3.W1.T4` (fitur cari task, `todoTersaring`) tanpa
> diminta eksplisit — itu modal bagus. Minggu ini memformalkan `computed()` (termasuk sisi yang
> belum dicoba: **writable computed**) sekaligus menambah 2 hal baru: `watch()`/`watchEffect()`
> (bereaksi ke perubahan data secara eksplisit) dan **lifecycle hooks** (`onMounted`/`onUnmounted`
> — kode yang jalan di momen tertentu siklus hidup komponen, bukan cuma saat render).
>
> **Poin perhatian:** `watch()` pada `reactive()` object butuh opsi `{ deep: true }` untuk
> mendeteksi perubahan property di dalamnya — ini jebakan pemahaman minggu ini, pola yang sama
> dengan `:key` dan destructuring `reactive()` minggu-minggu lalu: **kelihatan** seperti seharusnya
> otomatis terdeteksi, padahal defaultnya tidak. Lihat bagian 2.

---

## 1. `computed()` Lanjutan

### `M3.W3.T1.1` — `computed()`: recap + writable computed (3 putaran)

Kamu sudah pakai `computed()` sendiri untuk `todoTersaring`. Bentuk dasarnya (read-only):

```vue
<script setup>
import { ref, computed } from 'vue'

const harga = ref(10000)
const jumlah = ref(2)

const totalHarga = computed(() => harga.value * jumlah.value) // read-only
</script>
```

Ada bentuk lain, **writable computed** — punya `get` (baca) dan `set` (tulis), jadi bisa "ditulis
balik" seolah dia ref biasa:

```vue
<script setup>
import { ref, computed } from 'vue'

const namaDepan = ref('Budi')
const namaBelakang = ref('Santoso')

const namaLengkap = computed({
  get() {
    return `${namaDepan.value} ${namaBelakang.value}`
  },
  set(nilaiBaru) {
    // logic memecah nilaiBaru balik ke namaDepan/namaBelakang
  }
})
</script>
```

Kalau `namaLengkap.value = 'Ani Wijaya'` dijalankan, function `set` di atas yang akan mengurus
bagaimana nilai itu "dipecah balik" ke `namaDepan`/`namaBelakang`.

**Putaran 1 (recap):** jelaskan ulang kenapa `todoTersaring` yang sudah kamu buat itu `computed`,
bukan function biasa yang dipanggil di template — apa yang membuatnya pantas jadi `computed`.

**Putaran 2 (computed BARU, read-only):** bikin `computed()` baru untuk kasus lain yang read-only
(misal total/rata-rata dari sebuah list, atau turunan data lain).

**Putaran 3 (writable computed, BARU):** bikin **writable computed** untuk 1 kasus baru — misal 1
field gabungan yang saat di-set akan "memecah" nilainya ke beberapa state lain (contoh: nama
lengkap yang memecah ke `namaDepan`+`namaBelakang`, atau kombinasi lain yang kamu pikirkan sendiri).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T1.1
- **Status:** done
- **Capaian:** [ceritakan recap + computed baru + writable computed yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T1.2` — [Wajib Refleksi] `computed()` vs method biasa

**Coba dulu SEBELUM baca lebih lanjut:**
1. Bikin 1 function biasa yang logic-nya mirip salah satu `computed()` di `T1.1`, tapi dipanggil
   langsung dari template sebagai method (`{{ namaFunction() }}`), bukan `computed()`.
2. Tambahkan `console.log('dipanggil')` di dalam function biasa itu.
3. Sebabkan komponen re-render beberapa kali lewat **state lain** yang tidak berhubungan dengan
   dependency function/computed tersebut (misal klik tombol counter terpisah yang tidak
   memengaruhi data yang dipakai function/computed itu).
4. Amati di console: berapa kali `console.log` itu muncul.
5. Ganti balik jadi `computed()` (tambah `console.log` juga di dalamnya kalau perlu), ulangi
   percobaan yang sama, bandingkan jumlah kemunculannya.

**Isi log dengan menjawab (kata sendiri):**
1. Apa beda jumlah pemanggilan antara method biasa vs `computed()` pada percobaan di atas?
2. Kenapa bedanya begitu — apa yang sebenarnya dilakukan `computed()` secara berbeda dari method
   biasa di balik layar?
3. Kapan sifat "cache" dari `computed()` itu justru bisa jadi masalah (bukan cuma keuntungan)? Coba
   pikirkan skenario di mana kamu justru butuh nilai selalu dihitung ulang tiap render.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T1.2
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T1.3` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `computed()` biasa (read-only) dengan writable computed?
2. Kapan kamu butuh writable computed, dibanding cukup pakai `computed()` read-only biasa?
3. Kalau `computed()` dependency-nya tidak berubah, tapi komponen re-render karena state lain
   berubah, apakah `computed()` itu dihitung ulang? Kenapa?
4. Sebutkan 1 kerugian kalau semua turunan data di aplikasimu ditulis pakai method biasa
   dipanggil di template, bukan `computed()`.
5. Sebutkan 1 skenario nyata (boleh dari project yang sudah kamu buat) di mana `computed()` lebih
   cocok dipakai dibanding `watch()` (kalau belum tahu `watch()`, boleh dijawab setelah selesai
   bagian 2 modul ini).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T1.3
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 2. `watch()` & `watchEffect()`

### `M3.W3.T2.1` — `watch()` dasar (BARU, 3 putaran kasus berbeda)

`watch()` bereaksi terhadap perubahan 1 atau lebih sumber reaktif, sumbernya harus disebut
eksplisit:

```vue
<script setup>
import { ref, watch } from 'vue'

const kataKunci = ref('')

watch(kataKunci, (nilaiBaru, nilaiLama) => {
  console.log(`berubah dari "${nilaiLama}" jadi "${nilaiBaru}"`)
})
</script>
```

**Putaran 1:** `watch()` 1 `ref()` sederhana — misal watch perubahan input pencarian, log ke
console tiap berubah.

**Putaran 2 (topik beda):** `watch()` sumber lain yang beda topik, jalankan efek samping yang
berbeda (bukan cuma `console.log` lagi — misal ubah state lain berdasarkan perubahan yang
di-watch).

**Putaran 3 (multi-source):** `watch()` dengan **2 sumber sekaligus**, pakai array of sources:
```js
watch([sumber1, sumber2], ([baru1, baru2], [lama1, lama2]) => {
  // ...
})
```

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T2.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran watch() yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T2.2` — [Wajib Refleksi — PENTING] `watch()` pada `reactive()` butuh `deep`

**Coba dulu SEBELUM baca lebih lanjut:**
1. Bikin (atau reuse dari `M3.W2.T1.1`) 1 `reactive()` object dengan minimal 2 property.
2. `watch()` object itu **tanpa** opsi `{ deep: true }`:
   ```js
   watch(objekReactive, () => {
     console.log('berubah!')
   })
   ```
3. Ubah salah satu **property di dalamnya** (misal `objekReactive.nama = '...'`) — BUKAN mengganti
   seluruh objectnya. Amati apakah callback `watch` terpicu atau tidak.
4. Tambahkan opsi `{ deep: true }` ke `watch()` yang sama, ulangi percobaan #3, bandingkan.

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati bedanya antara tanpa `deep: true` vs dengan `deep: true` saat property di
   dalam object berubah?
2. Kenapa `watch()` pada `reactive()` object **tidak otomatis** mendeteksi perubahan property di
   dalamnya tanpa `deep: true` — menurutmu, secara default apa sebenarnya yang di-"watch": seluruh
   isi object-nya, atau cuma reference/identitas object itu sendiri?
3. Kalau kamu `watch()` sebuah `ref()` yang isinya array of object (bukan `reactive()`), apakah
   kamu perlu `deep: true` juga untuk mendeteksi perubahan property di dalam salah satu itemnya?
   Coba dulu sebelum menjawab.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T2.2
- **Status:** done
- **Capaian:** [hasil percobaan tanpa vs dengan deep + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T2.3` — `watchEffect()` dasar (BARU, 3 putaran kasus berbeda)

`watchEffect()` beda dari `watch()`: kamu **tidak perlu sebutkan sumber** yang di-watch secara
eksplisit — dia otomatis melacak reactive data apa saja yang dipakai di dalam function-nya, dan
langsung jalan sekali di awal (tanpa perlu ada perubahan dulu):

```vue
<script setup>
import { ref, watchEffect } from 'vue'

const a = ref(1)
const b = ref(2)

watchEffect(() => {
  console.log(`total sekarang: ${a.value + b.value}`)
  // otomatis ke-track: a dan b, karena keduanya dipakai di dalam sini
})
</script>
```

**Putaran 1:** pakai `watchEffect()` untuk 1 kasus sederhana — perhatikan bedanya dari `watch()`:
tidak perlu sebutkan sumbernya, dan langsung jalan sekali di awal tanpa trigger perubahan dulu.

**Putaran 2 (multi-source otomatis):** kasus lain yang beda topik, dengan **lebih dari 1** reactive
source yang otomatis ke-track sekaligus di dalam 1 `watchEffect()` (tanpa perlu daftar array
seperti di `watch()`).

**Putaran 3 (uji batas tracking):** kasus ketiga, sengaja masukkan 1 reactive source yang **tidak**
kamu maksudkan untuk ikut ter-track (misal dibaca dengan cara yang membuatnya tidak otomatis
terdeteksi Vue — cari tahu sendiri caranya, salah satu contoh umum: baca nilainya di dalam
`setTimeout` di dalam `watchEffect`). Amati apakah `watchEffect()` tetap bereaksi ke perubahan itu.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T2.3
- **Status:** done
- **Capaian:** [ceritakan 3 putaran watchEffect() yang dibuat, termasuk hasil uji batas tracking]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T2.4` — [Wajib Refleksi] `watch()` vs `watchEffect()` vs `computed()`

**Isi log dengan menjawab (kata sendiri, berdasarkan pengalaman `T2.1`–`T2.3` dan bagian 1 — bukan
menyalin definisi umum):**
1. Dari ketiganya, mana yang **menghasilkan nilai baru** untuk dipakai langsung di template, dan
   mana yang cuma **menjalankan efek samping** (tidak menghasilkan nilai untuk template)?
2. Apa beda cara kerja `watch()` vs `watchEffect()` dalam hal menentukan sumber apa yang dipantau?
3. Kasih 1 skenario nyata (boleh dari project yang sudah kamu buat/rencanakan) untuk masing-masing:
   kapan kamu pilih `computed()`, kapan `watch()`, kapan `watchEffect()`.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T2.4
- **Status:** done
- **Capaian:** [jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T2.5` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa yang terjadi kalau kamu `watch()` sebuah `reactive()` object tanpa `{ deep: true }`, lalu
   ubah salah satu property di dalamnya?
2. Apa beda utama `watch()` dengan `watchEffect()` soal cara menentukan sumber yang dipantau?
3. Apakah `watchEffect()` langsung jalan sekali saat komponen pertama kali dibuat, atau baru jalan
   setelah ada perubahan pertama?
4. `watch()` dengan array of sources dipakai untuk kasus apa?
5. Antara `computed()` dan `watch()`, mana yang cocok kalau kamu ingin **menghasilkan nilai baru**
   untuk ditampilkan di template, dan mana yang cocok kalau kamu ingin **menjalankan efek samping**
   (misal `console.log`, panggil API, dsb) saat sesuatu berubah?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T2.5
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 3. Lifecycle Hooks

### `M3.W3.T3.1` — `onMounted()` (BARU, 3 putaran kasus berbeda)

`onMounted()` menjalankan kode setelah komponen selesai dipasang ke halaman (DOM sudah ada):

```vue
<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)

onMounted(() => {
  console.log('komponen sudah tampil di halaman')
  // cocok untuk: baca elemen DOM asli, ambil data dari API, dsb
})
</script>
```

**Putaran 1:** pakai `onMounted()` untuk 1 kasus sederhana — misal `console.log` sekali saat
komponen pertama kali tampil, atau baca sesuatu dari DOM lewat template ref (`ref` yang dipasang
langsung ke elemen HTML, bukan `ref()` reactivity — cari tahu bedanya di dokumentasi Vue kalau
belum familiar) setelah elemen itu benar-benar ada.

**Putaran 2 (simulasi fetch data):** kasus lain yang beda topik, kali ini simulasikan fetch data
(boleh pakai `setTimeout` sebagai pengganti API asli, atau `fetch()` beneran ke endpoint publik
gratis) yang mengisi state kamu **setelah** komponen mount.

**Putaran 3 (kombinasi dengan reactivity):** kasus ketiga yang beda lagi, kombinasikan
`onMounted()` dengan `ref()`/`reactive()` — state awal kosong/default, baru terisi setelah
`onMounted()` jalan. Amati bedanya tampilan sebelum vs sesudah data masuk (ini pola umum untuk
loading state).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T3.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran onMounted() yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T3.2` — `onUnmounted()` (BARU, 3 putaran kasus berbeda)

`onUnmounted()` menjalankan kode saat komponen akan dihapus/hilang — dipakai untuk **membersihkan**
sesuatu yang dipasang di `onMounted()` supaya tidak terus jalan setelah komponennya sudah tidak
ada:

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    console.log('masih jalan...')
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId) // WAJIB dibersihkan, kalau tidak akan terus jalan
})
</script>
```

**Putaran 1:** pasang sesuatu yang perlu "dibersihkan" saat komponen hilang — misal
`setInterval`/`setTimeout` yang jalan terus, atau event listener manual lewat
`window.addEventListener` — di `onMounted()`, lalu bersihkan lewat
`clearInterval`/`clearTimeout`/`removeEventListener` di `onUnmounted()`.

**Putaran 2 (jenis pembersihan lain):** kasus lain yang beda topik, dengan jenis "pembersihan" yang
beda dari putaran 1.

**Putaran 3 (trigger nyata lewat `v-if`):** kombinasikan dengan `v-if` di parent — component yang
punya `onMounted()`/`onUnmounted()` ini ditampilkan/disembunyikan lewat `v-if` di parent, supaya
`onUnmounted()` beneran ter-trigger nyata (component benar-benar dilepas dari DOM), bukan cuma
dibaca teorinya.

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T3.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran onUnmounted() yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T3.3` — [Wajib Refleksi — PENTING] Kenapa cleanup di `onUnmounted()` penting

**Coba dulu SEBELUM baca lebih lanjut:**
1. Dari salah satu percobaan `T3.2`, **hapus dulu** pembersihan di `onUnmounted()` (sengaja bikin
   salah — biarkan `setInterval`/listener tetap jalan tanpa dibersihkan).
2. Sembunyikan/hapus komponennya lewat `v-if` (component-nya jadi tidak ada lagi di DOM/tampilan).
3. Amati di console (`console.log` di dalam interval/listener yang lupa dibersihkan) — apakah dia
   tetap jalan terus walau komponennya sudah "hilang" dari tampilan?
4. Ulangi beberapa kali (tampilkan-sembunyikan komponennya berkali-kali lewat `v-if`) — amati
   apakah jumlah interval/listener yang jalan makin bertambah tiap kali.

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati — apakah interval/listener yang lupa dibersihkan benar-benar berhenti saat
   komponennya hilang dari `v-if`, atau tetap jalan di "belakang layar"?
2. Istilah "memory leak" sering dipakai untuk menjelaskan masalah seperti ini — cari tahu sendiri
   artinya (boleh dari dokumentasi/sumber mana saja), lalu jelaskan dengan bahasamu sendiri apa
   maksudnya **di konteks kasus yang baru kamu amati** ini (bukan cuma menyalin definisi umum).
3. Kalau ini terjadi di aplikasi sungguhan yang dipakai lama (bukan cuma latihan), kira-kira
   masalah apa yang bisa muncul ke pengguna kalau ini dibiarkan terus-menerus?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T3.3
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M3.W3.T3.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Kapan `onMounted()` dijalankan, tepatnya di momen apa dalam siklus hidup komponen?
2. Kapan `onUnmounted()` dijalankan?
3. Sebutkan 2 contoh hal yang biasanya perlu "dibersihkan" di `onUnmounted()`.
4. Apa yang terjadi kalau kamu lupa membersihkan `setInterval` yang dipasang di `onMounted()`?
5. Kenapa fetch data (ambil dari API) biasanya ditaruh di `onMounted()`, bukan langsung di
   `<script setup>` level atas?

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T3.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 4. Proyek Pengembangan Skill Mandiri (`M3.W3.T4`)

**Estimasi waktu:** ±1 hari kerja.

Tambahkan **1 fitur baru** ke to-do list Vue (`M3.W2.T3`) yang **menggabungkan** `computed()`,
`watch()`, dan lifecycle hooks. Pilih salah satu:

**Opsi A — Pencarian dengan debounce:**
- Input pencarian di-`watch()`.
- Tunda proses filter pakai `setTimeout` yang di-**reset** tiap kali ada ketikan baru (pola
  "debounce" — cari tahu sendiri kalau istilah ini belum familiar).
- Bersihkan timeout yang tersisa di `onUnmounted()` (kalau component dilepas sebelum timeout-nya
  sempat jalan).

**Opsi B — Load data awal lewat `onMounted()`:**
- `daftarTodo` awal tidak lagi array hardcode — isi lewat simulasi fetch di `onMounted()` (boleh
  `setTimeout` sebagai pengganti API asli).
- Tambahkan `watch()` yang otomatis mencatat log (`console.log`) tiap kali `daftarTodo` berubah —
  perhatikan kasus ini butuh `deep: true` atau tidak, tergantung `daftarTodo` kamu pakai `ref([])`
  atau `reactive([])`.

Boleh pilih salah satu saja — jangan dua-duanya kalau waktu tidak cukup, lebih baik 1 selesai rapi
daripada 2 setengah jadi. Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat
evaluasi `T5`).

**Contoh entry log (format saja):**
```markdown
### Task: M3.W3.T4
- **Status:** done
- **Capaian:** [opsi mana yang dipilih dan kenapa, ceritakan implementasinya, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 5. Evaluasi (`M3.W3.T5`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo fitur baru dari `T4`** langsung jalan.
2. **Jelaskan kenapa pakai `watch()`/`watchEffect()`/`computed()`** di bagian masing-masing (bukan
   yang lain).
3. **Jelaskan kenapa ada cleanup di `onUnmounted()`** (atau kenapa tidak perlu, kalau memang tidak
   ada yang perlu dibersihkan di fitur ini).
4. **Review PR bareng.**
5. **Mentor minta modifikasi dadakan** di kode yang sedang jalan.
6. **Mentor kasih soal live** yang menyasar kesalahpahaman umum `watch()` tanpa `deep` di
   `reactive()` object.
7. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M3.W3.T5
- **Status:** done
- **Capaian:** [ceritakan demo fitur baru, penjelasan watch/computed/lifecycle, hasil modifikasi dadakan]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Vue 3 — Computed Properties: https://vuejs.org/guide/essentials/computed.html
- Vue 3 — Watchers: https://vuejs.org/guide/essentials/watchers.html
- Vue 3 — Lifecycle Hooks: https://vuejs.org/guide/essentials/lifecycle.html
