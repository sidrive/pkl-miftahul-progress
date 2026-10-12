# Modul Bulan 4 Minggu 1 — Pinia Dasar: `state`, `getters`, `actions`

> Menemani task `M4.W1.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Modul ini **tidak menyertakan contoh jawaban atau hasil eksekusi** untuk
> latihan maupun soal refleksi/kuis — jalankan sendiri, amati sendiri, catat hasil aslinya di log.
> Contoh entry log di bawah cuma menunjukkan **format**, bukan isi jawabannya.
>
> **🗓️ 4 hari kerja** (Selasa 13 – Jumat 16 Oktober 2026). Jadwal berubah dari rencana awal: Senin
> 12 Oktober batal (izin kegiatan sekolah) — evaluasi penutup Bulan 3 (`M3.W4.T5`) dipadatkan ke
> **Selasa pagi**, baru dilanjut `T1.1` minggu ini di hari yang sama. Cakupan minggu ini tetap
> ringkas (dasarnya sudah dirancang untuk 3 hari efektif) — 1 hari tambahan ini jadi buffer kalau
> `T5`/`T1.1` di hari Selasa molor, bukan alasan menambah beban task baru.
>
> ## Modal awal dari Bulan 3
>
> Capstone terakhirmu di Bulan 3 (`M3.W4.T3`) sudah punya `todoStore.js` — file terpisah berisi
> `ref()` yang dipakai bareng beberapa halaman (`TodoMain.vue`, `TodoDetail.vue`, dst) lewat
> import, bukan lewat `props`/`emit` berantai. Itu sebenarnya **sudah pola state management**,
> cuma manual. Pinia memformalkan pola itu: 1 tempat state yang jelas (`state`), nilai turunan dari
> state (`getters` — mirip `computed()`, tapi levelnya di store), dan fungsi yang mengubah state
> (`actions` — mirip method, tapi levelnya di store).
>
> **Poin perhatian:** destructuring langsung dari Pinia store memutus reactivity-nya — ini jebakan
> pemahaman minggu ini, **pola yang PERSIS SAMA** dengan destructuring `reactive()` di
> `M3.W2.T1.2`, bukan kebetulan: Pinia store memang dibangun di atas `reactive()` di balik layar.
> Kalau kamu masih ingat alasan kenapa destructuring `reactive()` bermasalah, kamu sudah punya 90%
> jawaban untuk jebakan minggu ini juga. Lihat bagian 1.

---

## 1. Pinia Dasar: `state`, `getters`, `actions`

### `M4.W1.T1.1` — Setup & `state` dasar (BARU, 3 putaran data berbeda)

Install dan daftarkan:
```bash
npm install pinia
```
```js
// main.js
import { createPinia } from 'pinia'
app.use(createPinia())
```

Bikin store pertama — ada 2 gaya penulisan, pilih salah satu (tapi kamu harus bisa jelaskan
kenapa milih itu):

**Gaya Composition API** (mirip `<script setup>` yang sudah kamu kuasai):
```js
// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const jumlah = ref(0)
  return { jumlah }
})
```

**Gaya Options API** (lebih mirip struktur lama Vue, tapi masih valid di Vue 3):
```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ jumlah: 0 }),
})
```

Pakai di component:
```vue
<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <p>{{ counterStore.jumlah }}</p>
</template>
```

**Putaran 1:** store sederhana 1 data (misal counter seperti contoh di atas, atau topik lain
sederhana).

**Putaran 2 (topik beda):** store BARU dengan lebih dari 1 properti di `state`.

**Putaran 3 (data kompleks):** store ketiga yang isinya array/object kompleks — mirip
`reactive()`/`ref()` array of object yang kamu pakai sepanjang Bulan 3.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W1.T1.1
- **Status:** done
- **Capaian:** [ceritakan setup Pinia + 3 putaran store yang dibuat, gaya mana yang dipilih dan kenapa]
- **Kesulitan:** [jujur aja]
```

### `M4.W1.T2.1` — `getters` (BARU, 3 putaran)

`getters` adalah nilai turunan dari `state` — konsepnya mirip `computed()` yang sudah kamu kuasai
di `M3.W3.T1.1`, cuma levelnya di store (bisa dipakai banyak component tanpa dihitung ulang
sendiri-sendiri):

```js
// Composition API style
export const useKeranjangStore = defineStore('keranjang', () => {
  const item = ref([])
  const totalHarga = computed(() => item.value.reduce((t, i) => t + i.harga, 0))
  return { item, totalHarga }
})
```
```js
// Options API style
export const useKeranjangStore = defineStore('keranjang', {
  state: () => ({ item: [] }),
  getters: {
    totalHarga: (state) => state.item.reduce((t, i) => t + i.harga, 0),
  },
})
```

**Putaran 1:** 1 getter sederhana dari state `T1.1` (misal total/jumlah item dari array yang kamu
buat).

**Putaran 2 (gabungan):** getter BARU yang menggabungkan lebih dari 1 properti `state` sekaligus.

**Putaran 3 (getter saling bergantung):** getter yang memanggil getter LAIN di dalamnya (misal
getter kedua memakai hasil getter pertama).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W1.T2.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran getters yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W1.T2.2` — `actions` (BARU, 3 putaran)

`actions` adalah function di dalam store yang **mengubah** `state` (boleh juga async):

```js
export const useTodoStore = defineStore('todo', () => {
  const daftar = ref([])

  function tambah(teks) {
    daftar.value.push({ id: Date.now(), teks })
  }

  async function muatDariServer() {
    // simulasi fetch, isi daftar setelah "delay"
  }

  return { daftar, tambah, muatDariServer }
})
```

**Putaran 1:** 1 action sederhana yang mengubah 1 data `state`.

**Putaran 2 (gabungan):** action BARU yang mengubah lebih dari 1 properti `state` sekaligus dalam
1 pemanggilan.

**Putaran 3 (async):** action **async** (pakai `setTimeout` simulasi atau `fetch()` beneran) yang
mengisi `state` setelah "delay" — panggil dari `onMounted()` di component (ingat `M3.W3.T3.1`:
`onMounted` cocok untuk ambil data setelah component tampil).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W1.T2.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran actions yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W1.T2.3` — [Wajib Refleksi — PENTING] Destructuring Pinia store memutus reactivity

**Coba dulu SEBELUM baca lebih lanjut:**
1. Dari salah satu store `T1.1`/`T2.1`, panggil dari component dengan **destructuring langsung**:
   ```js
   const { namaProperti } = useNamaStore()
   ```
2. Tampilkan `namaProperti` itu di template, lalu ubah nilai aslinya (lewat action, atau
   mengakses store langsung `useNamaStore().namaProperti = ...` dari tempat lain) — amati apakah
   tampilan ikut berubah.
3. Bandingkan dengan akses **tanpa destructuring**:
   ```js
   const store = useNamaStore()
   // dipakai sebagai store.namaProperti di template
   ```
   Ulangi percobaan #2 dengan cara ini, bandingkan.

**Isi log dengan menjawab (kata sendiri):**
1. Apa bedanya hasil antara akses lewat destructuring vs `store.namaProperti` langsung?
2. Kaitkan ke pengalamanmu di `M3.W2.T1.2` (destructuring `reactive()`) — apakah masalah yang kamu
   amati di Pinia store ini **sama persis**, atau ada bedanya? Jelaskan alasanmu.
3. Cari tahu sendiri (boleh dari dokumentasi Pinia resmi): fungsi `storeToRefs()` dipakai untuk
   apa? Coba terapkan ke percobaan destructuring di atas, buktikan apakah itu memperbaiki
   masalahnya.
4. Catatan: `storeToRefs()` cuma perlu dipakai untuk property `state`/`getters` yang di-destructure
   — kenapa menurutmu `actions` (function) TIDAK perlu dibungkus `storeToRefs()` juga saat
   di-destructure? (coba destructure sebuah action langsung, amati apakah itu tetap berfungsi
   normal tanpa masalah reactivity)

**Contoh entry log (format saja):**
```markdown
### Task: M4.W1.T2.3
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 4 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M4.W1.T2.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa beda `state`, `getters`, dan `actions` di Pinia store?
2. Kenapa `getters` disebut mirip `computed()`?
3. Apa yang terjadi kalau kamu destructure langsung sebuah properti `state`/`getters` dari store
   tanpa `storeToRefs()`?
4. Kenapa `actions` tidak kena masalah yang sama saat di-destructure?
5. Sebutkan 1 keuntungan memakai Pinia store dibanding `ref()`/`reactive()` manual di file terpisah
   seperti `todoStore.js` yang kamu buat sebelumnya (boleh berdasarkan pengalaman refactor `T3`,
   kalau sudah sampai situ duluan).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W1.T2.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 2. Proyek Pengembangan Skill Mandiri (`M4.W1.T3`)

**Estimasi waktu:** ±1 hari kerja.

Refactor `todoStore.js` manual dari capstone Bulan 3 (`M3.W4.T3`) jadi Pinia store beneran:

1. Pindahkan `daftarTodo` jadi `state` Pinia store.
2. Pindahkan logic filter/search (yang sekarang ada di `computed()` level component) jadi
   `getters` store.
3. Pindahkan `tambahTodo`/`toggleSelesai`/`editTodo`/`hapusTodo` jadi `actions` store.
4. Pastikan semua halaman (daftar, detail, filter) **tetap berfungsi persis seperti sebelumnya**
   setelah refactor ini.

**Penting — ini latihan REFACTOR, bukan fitur baru:** perilaku aplikasi dari sudut pandang
pengguna harus identik sebelum dan sesudah. Yang berubah cuma CARA state-nya disimpan dan
dikelola (dari file `ref()` manual, jadi Pinia store resmi). Kalau ada fitur yang jadi
berubah/rusak gara-gara refactor ini, itu bug yang perlu diperbaiki, bukan hal yang "boleh beda".

Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat evaluasi `T5`).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W1.T3
- **Status:** done
- **Capaian:** [ceritakan proses refactor, bagian mana yang pindah ke state/getters/actions, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 3. Laporan/Mini App Akhir Minggu (`M4.W1.T4`)

Sesuai aturan baku di [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) bagian
"Laporan/Mini App Akhir Minggu".

Topik minggu ini (state management) lebih konseptual/arsitektural dibanding navigasi/UI minggu
lalu — jadi **laporan tertulis** kemungkinan lebih masuk akal dibanding bikin mini app baru, tapi
tetap bebas pilih mini app kalau kamu punya ide yang pas (misal halaman kecil yang mendemokan
beberapa store sekaligus).

**Kalau pilih laporan tertulis**, jelaskan minimal:
1. Alur logis `state` → `getters` → `actions` di store hasil refactor `T3`-mu — bagaimana
   ketiganya saling berhubungan dalam 1 store yang sama.
2. Bandingkan eksplisit **"sebelum"** (pakai `ref()`/`reactive()` manual di `todoStore.js`) vs
   **"sesudah"** (Pinia) — apa yang SEBENARNYA berubah (struktur kode, cara import/pakai di
   component), dan apa yang **TIDAK berubah** dari sisi component yang memakainya (perilaku
   aplikasi untuk pengguna).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W1.T4
- **Status:** done
- **Capaian:** [bentuk yang dipilih dan kenapa, isi laporan/link mini app]
- **Kesulitan:** [jujur aja]
```

---

## 4. Evaluasi (`M4.W1.T5`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo refactor Pinia dari `T3`** langsung jalan (semua halaman tetap berfungsi seperti
   sebelumnya) + **laporan/mini app dari `T4`**.
2. **Jelaskan kenapa data dipindah ke `getters`/`actions`** (bukan tetap di level component).
3. **Review PR bareng.**
4. **Mentor minta modifikasi dadakan** di store yang sedang jalan.
5. **Mentor kasih soal live** yang menyasar kesalahpahaman umum destructuring Pinia store.
6. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M4.W1.T5
- **Status:** done
- **Capaian:** [ceritakan demo refactor Pinia, penjelasan state/getters/actions, hasil modifikasi dadakan]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Pinia — Getting Started: https://pinia.vuejs.org/getting-started.html
- Pinia — State: https://pinia.vuejs.org/core-concepts/state.html
- Pinia — Getters: https://pinia.vuejs.org/core-concepts/getters.html
- Pinia — Actions: https://pinia.vuejs.org/core-concepts/actions.html
- Pinia — `storeToRefs()`: https://pinia.vuejs.org/core-concepts/#Destructuring-from-a-Store
