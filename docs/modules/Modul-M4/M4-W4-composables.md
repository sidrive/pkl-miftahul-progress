# Modul Bulan 4 Minggu 4 — Composables (`useXxx()`) + Observasi Singkat

> Menemani task `M4.W4.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Modul ini **tidak menyertakan contoh jawaban atau hasil eksekusi** untuk
> latihan maupun soal refleksi/kuis — jalankan sendiri, amati sendiri, catat hasil aslinya di log.
> Contoh entry log di bawah cuma menunjukkan **format**, bukan isi jawabannya.
>
> **🗓️ 5 hari kerja penuh** (Senin 9 – Jumat 13 November 2026). Jadwal digeser dari rencana awal
> (2–6 November) karena izin — lihat `DAILY_LOG.md` tanggal 2–6 November.
>
> ## Kenapa rencana minggu ini berubah (revisi ke-2)
>
> Minggu ini awalnya didesain 100% observasi (roadmap asli: "bareng mentor, observasi saja").
> Direvisi: skill kamu sudah cukup bertambah untuk tetap produktif sambil belajar/observasi —
> persis kondisi kerja nyata (karyawan tetap menghasilkan product walau masih belajar hal baru).
> Jadi minggu ini **90% coding mandiri** (topik BARU: **Composables**) + **10% observasi**
> (dipadatkan jadi 1 sesi singkat). **Aturan minimal 3 putaran tetap berlaku** untuk task praktik
> inti minggu ini — beda dari rencana sebelumnya yang sempat membebaskan aturan ini.
>
> ## Kenapa Composables (dan kenapa sekarang)
>
> Sepanjang Bulan 3-4 kamu sudah berkali-kali menulis logic yang MIRIP di banyak tempat berbeda —
> pola `loading`/`empty`/`error` (`M3.W3.T3.1`, `M4.W3.T2.2`), pola `watch` + `setTimeout` untuk
> debounce (`M3.W3.T4`), pola validasi form (`M4.W3.T1.3`). Selama ini logic itu ditulis ULANG
> tiap kali dibutuhkan di component baru. **Composable** adalah cara mengekstrak logic REAKTIF itu
> jadi 1 function `useXxx()` yang bisa dipanggil dari component mana saja — sama semangatnya dengan
> kenapa kamu bikin component `Ds*` reusable di `M4.W2`/`M4.W3`, cuma sekarang yang di-reuse LOGIC,
> bukan tampilan UI. Ini skill penting sebelum masuk Bulan 5 (project nyata) karena di project
> besar, logic yang berulang jauh lebih banyak dari yang pernah kamu temui di latihan-latihan kecil.
>
> **Poin perhatian:** composable yang `return` NILAI BIASA (bukan `ref`/`reactive`/`computed` apa
> adanya) kehilangan reactivity-nya — ini jebakan pemahaman minggu ini, **pola yang SAMA PERSIS**
> dengan destructuring `reactive()` (`M3.W2.T1.2`) dan destructuring Pinia store (`M4.W1.T2.3`),
> cuma pindah konteks ke composable. Kalau kamu masih ingat alasan di balik 2 jebakan itu, kamu
> sudah punya hampir semua jawaban untuk jebakan minggu ini juga. Lihat bagian 2.

---

## 1. Composables Dasar — pola `useXxx()`

### `M4.W4.T1.1` — Composable paling sederhana (BARU, 3 putaran)

Composable itu cuma function JavaScript biasa (dengan konvensi nama diawali `use`) yang memakai
`ref()`/`reactive()`/`computed()`/lifecycle hooks DI DALAMNYA, lalu `return` apa yang perlu diakses
dari luar:

```js
// composables/useToggle.js
import { ref } from 'vue'

export function useToggle(nilaiAwal = false) {
  const aktif = ref(nilaiAwal)

  function toggle() {
    aktif.value = !aktif.value
  }

  return { aktif, toggle }
}
```

Dipakai di component:
```vue
<script setup>
import { useToggle } from '@/composables/useToggle'

const { aktif, toggle } = useToggle()
</script>

<template>
  <button @click="toggle">{{ aktif ? 'ON' : 'OFF' }}</button>
</template>
```

**Putaran 1:** pakai `useToggle()` di 2 component BERBEDA sekaligus dalam 1 halaman — buktikan
tiap component dapat STATE TERPISAH (toggle component A tidak memengaruhi component B), BEDA dari
Pinia store yang SHARED/singleton (ingat `M4.W1` — 2 component yang panggil `useKasirStore()` dapat
instance YANG SAMA; composable justru sebaliknya, tiap pemanggilan dapat state BARU).

**Putaran 2:** bikin `useCounter()` dengan opsi step/nilai awal lewat PARAMETER function (misal
`useCounter(10, 2)` = mulai dari 10, nambah 2 tiap panggil).

**Putaran 3:** gabungkan 2 composable sekaligus dalam 1 component (`useToggle()` DAN `useCounter()`
dipakai bareng).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T1.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran composable dasar yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W4.T1.2` — `useFetch()` (BARU, 3 putaran)

Generalisasi dari pola loading/error/data yang sudah berkali-kali kamu tulis manual:

```js
// composables/useFetch.js
import { ref, onMounted } from 'vue'

export function useFetch(sumberData) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  onMounted(() => {
    // simulasikan proses ambil data (setTimeout, atau fetch() beneran)
    // isi data.value kalau sukses, error.value kalau gagal, loading.value = false di akhir
  })

  return { data, loading, error }
}
```

**Putaran 1:** simulasi fetch 1 sumber data (boleh reuse topik dari minggu-minggu lalu).

**Putaran 2 (reusability):** composable yang SAMA dipakai untuk sumber data KEDUA yang beda topik —
buktikan kamu TIDAK perlu menulis ulang logic `loading`/`error`, cukup panggil `useFetch()` lagi.

**Putaran 3 (parameter dinamis):** tambahkan parameter supaya composable bisa terima
URL/identifier sumber data yang berbeda tiap dipanggil (`useFetch('/api/produk')` vs
`useFetch('/api/kategori')`).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T1.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran useFetch yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W4.T1.3` — [Wajib Refleksi] Kenapa ekstrak jadi composable

**Isi log dengan menjawab (kata sendiri):**
1. Sebelum ada composable, berapa banyak tempat di project-projectmu yang sebenarnya butuh pola
   `loading`/`error`/`data` yang sama? Kalau semua itu nulis manual sendiri-sendiri, apa
   masalahnya?
2. Kaitkan ke `M4.W2.T3.3` (kenapa component `Ds*` dibuat reusable) — apa PERSAMAAN alasannya
   dengan kenapa logic sekarang juga diekstrak jadi composable? Apa BEDANYA (component vs
   composable, tampilan vs logic)?

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T1.3
- **Status:** done
- **Capaian:** [jawaban 2 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M4.W4.T1.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa itu composable, dan kenapa namanya biasa diawali `use`?
2. Kenapa 2 component yang sama-sama panggil `useToggle()` dapat state TERPISAH, padahal 2
   component yang sama-sama panggil `useKasirStore()` (Pinia) dapat state YANG SAMA (shared)?
3. Apa isi yang biasa di-`return` dari sebuah composable?
4. Bagaimana composable bisa menerima parameter yang beda tiap dipanggil?
5. Sebutkan 1 logic dari project-projectmu sebelumnya yang COCOK diekstrak jadi composable.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T1.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 2. Composable Lanjutan

### `M4.W4.T2.1` — `useDebounce()` ATAU `useLocalStorage()` (BARU, 3 putaran)

Composable lanjutan yang menggabungkan `watch`/`onMounted`/`onUnmounted` (ingat `M3.W3`) ke dalam
1 function reusable. Contoh kerangka `useDebounce()`:

```js
import { ref, watch } from 'vue'

export function useDebounce(sumber, delay = 500) {
  const hasilDebounce = ref(sumber.value)
  let timer = null

  watch(sumber, (nilaiBaru) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      hasilDebounce.value = nilaiBaru
    }, delay)
  })

  return hasilDebounce
}
```

**Putaran 1:** pakai di 1 kasus (misal input pencarian didebounce lewat composable ini, bukan
ditulis manual seperti `M3.W3.T4` lagi).

**Putaran 2 (topik beda):** pakai composable yang SAMA di kasus KEDUA yang beda topik.

**Putaran 3 (kombinasi):** kombinasikan dengan composable dari `T1.1`/`T1.2` dalam 1 component
(misal `useFetch()` + `useDebounce()` sekaligus untuk fitur search-as-you-type yang fetch data).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T2.1
- **Status:** done
- **Capaian:** [composable mana yang dipilih, ceritakan 3 putaran yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W4.T2.2` — [Wajib Refleksi — PENTING] Composable yang "lupa" return reactive reference

**Coba dulu SEBELUM baca lebih lanjut:**
1. Bikin 1 composable yang SENGAJA mengembalikan nilai biasa (BUKAN `ref` apa adanya):
   ```js
   function useHitungSesuatu() {
     const nilai = ref(0)
     function tambah() {
       nilai.value++
     }
     return { nilai: nilai.value, tambah } // <- perhatikan: nilai.value, bukan nilai saja
   }
   ```
2. Pakai composable ini di component, tampilkan `nilai` di template, panggil `tambah()`.
3. Amati: apakah tampilan `nilai` di template ikut berubah saat `tambah()` dipanggil?

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati — apakah tampilannya ikut update atau diam saja?
2. Kenapa composable HARUS `return` reactive reference (`ref`/`reactive`/`computed`) APA ADANYA
   (bukan nilai yang sudah di-unwrap manual pakai `.value`) supaya tetap reactive di sisi pemakai?
3. Kaitkan EKSPLISIT ke pengalamanmu di `M3.W2.T1.2` (destructuring `reactive()`) dan `M4.W1.T2.3`
   (destructuring Pinia store) — apakah masalah ini SAMA PERSIS, atau ada bedanya? Jelaskan
   alasanmu.
4. Perbaiki composable di atas supaya reactive lagi.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T2.2
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 4 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M4.W4.T2.3` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Kenapa composable `useDebounce()` butuh `watch()` di dalamnya?
2. Apa yang terjadi kalau composable `return` nilai yang sudah di-`.value`-kan manual, bukan
   `ref`-nya langsung?
3. Apa hubungan jebakan ini dengan destructuring `reactive()`/Pinia store yang pernah kamu temui?
4. Kalau composable punya `onMounted()`/`onUnmounted()` di dalamnya, kapan tepatnya hooks itu
   jalan — saat composable-nya didefinisikan, atau saat component yang memanggilnya di-mount?
5. Sebutkan 1 contoh menggabungkan 2 composable sekaligus dalam 1 component.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T2.3
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 3. Proyek Pengembangan Skill Mandiri (`M4.W4.T3`)

**Estimasi waktu:** ±1-1.5 hari kerja.

Pilih 1 mini app yang sudah ada (Mini App Kasir `M4.W1`/`M4.W2`, ATAU Prototipe Antrean Pesanan
`M4.W3`), **refactor** dengan mengekstrak logic yang berulang/kompleks jadi composable — misal:
- `useKeranjang()` — logic tambah/hapus/hitung total keranjang (dari Mini App Kasir).
- `useFormValidasi()` — logic validasi yang dipakai di beberapa field form (dari Prototipe
  Antrean).

**Ini latihan REFACTOR, bukan fitur baru** (sama seperti `M4.W1.T3`) — pastikan perilaku aplikasi
TETAP IDENTIK setelah refactor, cuma cara logic-nya diorganisir yang berubah.

Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat evaluasi `T6`).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T3
- **Status:** done
- **Capaian:** [app mana yang dipilih, composable apa yang diekstrak, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 4. Observasi Singkat Codebase Nyata (`M4.W4.T4`)

**±10% waktu minggu ini — 1 sesi bareng mentor, dipadatkan, tidak perlu mendalam.**

Bareng mentor, amati SECUKUPNYA struktur `frontend-olseraV2`/`frontend-zenwell` (Vue 2 Options API
+ Vuex — stack produksi perusahaan, BEDA dari Vue 3 + Pinia yang kamu kuasai):

1. 1 component `.vue` nyata — perhatikan `data()`, `methods: {}`, `computed: {}`, `mounted()`
   (Options API, beda dari `<script setup>` yang biasa kamu pakai).
2. 1 modul Vuex nyata — perhatikan `state`/`mutations`/`actions` (3 lapis, beda dari Pinia yang
   cuma `state`/`getters`/`actions`).

**Fokus ke 1 pertanyaan inti:** apa bedanya `mutations`+`actions` (Vuex) dengan cuma `actions`
(Pinia yang kamu pakai)? (arahan diskusi: `mutations` Vuex HARUS synchronous, `actions` boleh
async dan memanggil `mutations` lewat `commit()`; Pinia menyederhanakan ini jadi 1 lapis saja).

**Catatan penting:** project Bulan 5 nanti tetap Vue 3 + Pinia — ini murni eksposur konteks kerja
nyata (supaya tidak kaget kalau nanti perlu baca/maintain kode lama), BUKAN pindah stack belajar.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T4
- **Status:** done
- **Capaian:** [component/modul Vuex mana yang diamati, jawaban pertanyaan inti mutations vs actions]
- **Kesulitan:** [jujur aja]
```

---

## 5. Mini App Akhir Minggu: Composables Playground (`M4.W4.T5`)

Sesuai aturan baku di [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — minggu ini
tetap bentuk **coding**, bukan laporan tertulis murni.

Bikin 1 halaman demo/showcase yang menampilkan SEMUA composable yang dibuat minggu ini hidup
berdampingan dalam 1 halaman:
- `useToggle()`/`useCounter()` dari `T1.1`
- `useFetch()` dari `T1.2`
- `useDebounce()`/`useLocalStorage()` dari `T2.1`

Tiap composable punya bagian demo interaktifnya sendiri yang bisa dicoba langsung di halaman itu —
mirip semangat "mini storybook" `M4.W2.T5`, cuma showcase-nya untuk LOGIC (composable), bukan
tampilan component UI.

Lengkapi dengan catatan singkat tertulis (boleh komentar di kode atau README kecil, tidak perlu
dokumen panjang) yang menjelaskan:
1. Composable apa dipakai di refactor `T3`.
2. Ringkasan 2-3 kalimat hasil observasi `T4` (apa yang langsung dipahami, apa yang masih bingung
   soal Vuex).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W4.T5
- **Status:** done
- **Capaian:** [ceritakan isi halaman playground, link ke halamannya, ringkasan catatan tertulis]
- **Kesulitan:** [jujur aja]
```

---

## 6. Evaluasi & Penutup Bulan 4 (`M4.W4.T6`)

Siapkan demo untuk mentor:

1. **Demo hasil refactor composable dari `T3`** langsung jalan (perilaku aplikasi tetap sama) DAN
   **Composables Playground dari `T5`**.
2. **Jelaskan kenapa logic tertentu diekstrak jadi composable** (bukan tetap di component).
3. **Review PR bareng.**
4. **Mentor minta modifikasi dadakan** — misal tambah 1 composable baru dadakan, atau buktikan
   live composable yang salah return value.
5. **Mentor kasih soal live** yang menyasar kesalahpahaman umum composable (return value vs
   `ref`).
6. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.
7. **Refleksi capaian keseluruhan Bulan 4** (Pinia, Design Token/Dark Mode, Prototipe UI,
   Composables) + singgung singkat hasil observasi `T4` + preview Bulan 5.

Setelah demo, isi entry log terakhir untuk minggu ini (dan penutup Bulan 4):
```markdown
### Task: M4.W4.T6
- **Status:** done
- **Capaian:** [ceritakan demo composable, hasil modifikasi dadakan, refleksi Bulan 4]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Vue 3 — Composables: https://vuejs.org/guide/reusability/composables.html
- Vue 2 — Options API (untuk perbandingan saat observasi `T4`): https://vuejs.org/api/options-state.html
- Vuex — Core Concepts: https://vuex.vuejs.org/guide/
