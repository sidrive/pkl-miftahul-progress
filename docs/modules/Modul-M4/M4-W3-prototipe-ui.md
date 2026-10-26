# Modul Bulan 4 Minggu 3 — Prototipe UI: Halaman Daftar + Form (DS Simulasi)

> Menemani task `M4.W3.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Modul ini **tidak menyertakan contoh jawaban atau hasil eksekusi** untuk
> latihan maupun soal refleksi/kuis — jalankan sendiri, amati sendiri, catat hasil aslinya di log.
> Contoh entry log di bawah cuma menunjukkan **format**, bukan isi jawabannya.
>
> **🗓️ 5 hari kerja penuh** (Senin 26 – Jumat 30 Oktober 2026).
>
> ## Masih simulasi DS (sama seperti minggu lalu)
>
> Alasannya sama seperti `M4.W2`: tidak ada akses registry privat ke `@olsera/vue-components`, dan
> dukungan Vue 3 untuk paket itu belum dikonfirmasi. Minggu ini kamu **menambah koleksi component
> `Ds*` buatanmu sendiri** (`DsInput`, dropdown/select, badge/tag), lalu memakai SEMUANYA sekaligus
> — termasuk `DsButton`/`DsCard` dari minggu lalu — untuk membangun 1 **prototipe UI nyata**:
> halaman daftar data + form tambah/edit. Ini pola paling umum di aplikasi bisnis sungguhan (daftar
> produk, daftar karyawan, daftar pesanan, dst — pasti ada halaman "list + form" semacam ini).
>
> **Poin perhatian:** form/modal yang dipakai ULANG untuk 2 tujuan (tambah DAN edit) tapi state
> lamanya "nyangkut" saat dibuka ulang untuk tujuan lain — ini jebakan pemahaman minggu ini, pola
> yang sama dengan `:key` dan jebakan-jebakan state minggu-minggu lalu: kelihatan seperti pasti
> otomatis bersih tiap dibuka, padahal tidak. Lihat bagian 2.

---

## 1. Form Elements: `DsInput` & Dropdown

### `M4.W3.T1.1` — `DsInput` tervalidasi (BARU, 3 putaran)

```vue
<!-- DsInput.vue -->
<script setup>
defineProps({
  label: String,
  error: String,       // kalau ada isinya, berarti field ini invalid
  modelValue: [String, Number],
  type: { type: String, default: 'text' }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="ds-input-group">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{ 'ds-input--error': error }"
    />
    <small v-if="error" class="ds-input__error-msg">{{ error }}</small>
  </div>
</template>
```

Validasi logic-nya (kapan `error` terisi) ada di component PARENT yang memakai `DsInput`, bukan di
`DsInput` sendiri — `DsInput` cuma TAMPILKAN pesan error yang dikirim lewat `props`.

**Putaran 1 (tipe `text`, wajib diisi):** validasi "field tidak boleh kosong" — kalau kosong saat
submit, `error` terisi pesan semacam "Nama wajib diisi".

**Putaran 2 (tipe `number`, batas min/max):** validasi angka harus dalam rentang tertentu (misal
harga minimal 0, maksimal sesuai kebutuhan).

**Putaran 3 (`textarea` ATAU `password`, bebas pilih):** 1 validasi tambahan yang relevan (misal
panjang minimal karakter untuk `textarea`, atau kombinasi huruf-angka untuk `password`).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T1.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran DsInput yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W3.T1.2` — `DsSelect`/Dropdown tiruan (BARU, 3 putaran)

```vue
<!-- DsSelect.vue -->
<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
  options: { type: Array, default: () => [] } // [{ value, label }]
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="ds-select-group">
    <label v-if="label">{{ label }}</label>
    <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
  </div>
</template>
```

Boleh bungkus `<select>` native (seperti contoh) atau bikin dari `<div>`+daftar opsi custom kalau
mau lebih menantang — bebas, yang penting konsep `props`+custom `v-model`-nya sama.

**Putaran 1:** dropdown sederhana 1 instance (misal pilih kategori).

**Putaran 2 (topik beda):** dropdown KEDUA dengan daftar opsi berbeda topik dari putaran 1.

**Putaran 3 (placeholder invalid):** dropdown dengan opsi default/placeholder ("Pilih salah
satu...") yang statusnya TIDAK VALID untuk disubmit sampai user benar-benar memilih opsi lain.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T1.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran DsSelect yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W3.T1.3` — [Wajib Refleksi] Pola validasi form

**Isi log dengan menjawab (kata sendiri):**
1. Jelaskan alur: bagaimana sebuah field "tahu" dirinya invalid — kapan `error` di `DsInput`/
   `DsSelect` jadi terisi, dan siapa yang menentukan isinya (component itu sendiri, atau parent
   yang memakainya)?
2. Coba submit form kosong tanpa isi field wajib — ceritakan apa yang terjadi (apakah muncul pesan
   error di bawah field yang kosong, apakah form tetap "nyangkut" tidak ter-submit, dll).
3. Kalau validasi logic-nya ditaruh DI DALAM `DsInput` sendiri (bukan di parent), apa kerugiannya
   kalau suatu saat kamu butuh ATURAN VALIDASI YANG BEDA di 2 tempat berbeda yang sama-sama pakai
   `DsInput`?

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T1.3
- **Status:** done
- **Capaian:** [jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M4.W3.T1.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Kenapa `DsInput` perlu custom `v-model` (bukan cuma `props` biasa)?
2. Siapa yang menentukan isi pesan `error` di `DsInput` — component itu sendiri atau parent?
3. Apa bedanya `DsSelect` dengan `<select>` native biasa dari sisi reusability?
4. Kenapa opsi placeholder ("Pilih salah satu...") perlu dianggap TIDAK VALID untuk disubmit?
5. Sebutkan 1 keuntungan memisahkan logic validasi dari component input-nya sendiri.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T1.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 2. List Pattern: Badge, Loading & Empty State

### `M4.W3.T2.1` — `DsBadge`/Tag status (BARU, 3 putaran)

```vue
<!-- DsBadge.vue -->
<script setup>
defineProps({
  status: String // 'aktif' | 'nonaktif' | 'pending' | dst
})

const warnaPerStatus = {
  aktif: 'var(--color-navy-500)',
  nonaktif: 'var(--color-grey-500)',
  pending: 'var(--color-warning-500)'
}
</script>

<template>
  <span class="ds-badge" :style="{ backgroundColor: warnaPerStatus[status] }">{{ status }}</span>
</template>
```

Perhatikan: warnanya dipetakan lewat OBJECT (`warnaPerStatus[status]`), BUKAN `v-if`/`v-else-if`
berantai — lebih ringkas kalau variannya banyak.

**Putaran 1:** 2 status sederhana (misal "Aktif"/"Nonaktif").

**Putaran 2 (topik beda):** status BEDA topik dari putaran 1 (misal status pesanan: "Diproses"/
"Selesai"/"Dibatalkan").

**Putaran 3 (3+ varian sekaligus):** status dengan 3+ varian warna sekaligus dalam 1 component,
tetap pakai pola object mapping, bukan kondisional berantai.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T2.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran DsBadge yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W3.T2.2` — Loading & Empty State (BARU, 3 putaran)

Pola umum saat menampilkan data dari "server" (ingat simulasi fetch `onMounted` di `M3.W3.T3.1`):

```vue
<template>
  <p v-if="sedangMemuat">Memuat...</p>
  <p v-else-if="daftarData.length === 0">Belum ada data.</p>
  <ul v-else>
    <li v-for="item in daftarData" :key="item.id">{{ item.nama }}</li>
  </ul>
</template>
```

**Putaran 1:** terapkan di 1 list sederhana — simulasi delay (`setTimeout`), tampilkan "Memuat..."
dulu, baru data/pesan kosong muncul setelah delay selesai.

**Putaran 2 (topik beda):** list KEDUA dengan topik beda dari putaran 1.

**Putaran 3 (tambah state error):** tambahkan state KETIGA — error (gagal memuat data, simulasi
`reject`/`throw` di proses fetch-nya), dengan pesan yang BEDA dari "belum ada data" (kosong itu
normal, error itu ada yang salah — jangan disamakan pesannya).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T2.2
- **Status:** done
- **Capaian:** [ceritakan 3 putaran loading/empty/error state yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W3.T2.3` — [Wajib Refleksi — PENTING] State nyangkut saat reuse form

**Coba dulu SEBELUM baca lebih lanjut:**
1. Bikin 1 form/modal yang dipakai ULANG untuk 2 tujuan: "Tambah Data Baru" DAN "Edit Data"
   (component yang SAMA, bukan 2 component terpisah — misal lewat `props` `mode: 'tambah' |
   'edit'` dan `props` `dataAwal` untuk mode edit).
2. Buka form itu dalam mode EDIT, isi field dengan data tertentu (misal nama "Budi") — JANGAN
   disimpan/disubmit.
3. Tutup form itu (tanpa reset manual).
4. Buka LAGI form yang SAMA, tapi kali ini untuk MODE TAMBAH (data baru, bukan edit "Budi").
5. Amati: apakah field form-nya kembali KOSONG seperti seharusnya untuk tambah data baru, atau
   masih menampilkan "Budi" dari sesi edit sebelumnya? Kalau sempat ada pesan error validasi yang
   muncul di langkah sebelumnya, amati juga apakah pesan itu ikut "nyangkut".

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati — state form-nya ter-reset otomatis, atau nyangkut?
2. Kenapa component yang di-reuse TIDAK otomatis me-reset state internalnya sendiri cuma karena
   "tujuan pemakaiannya" berubah (dari edit ke tambah)? Apa yang sebenarnya terjadi di balik layar
   — apakah Vue tahu "maksudmu" berubah, atau dia cuma lihat component yang sama masih terpasang?
2. Cari tahu sendiri minimal 1 cara mengatasi ini (2 arah yang bisa dieksplor — pilih salah satu
   atau keduanya): (a) `watch` pada `props` yang menentukan mode/data awal, reset manual field
   internal saat propsnya berubah; (b) trik `:key` pada component form itu sendiri (ingat
   `M3.W1.T2.4`/`M3.W4.T2.3` — `:key` yang beda memaksa Vue membuat ULANG component dari nol,
   bukan reuse instance lama). Coba terapkan salah satunya, buktikan masalahnya hilang.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T2.3
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban + cara yang dipilih & dicoba]
- **Kesulitan:** [jujur aja]
```

### `M4.W3.T2.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Kenapa `DsBadge` pakai object mapping untuk warna, bukan `v-if`/`v-else-if` berantai?
2. Apa beda "data kosong" (empty state) dengan "gagal memuat data" (error state) — kenapa
   pesannya harus beda?
3. Kalau sebuah form di-reuse untuk tambah dan edit tapi state-nya tidak di-reset, apa yang bisa
   terjadi ke user yang memakainya?
4. Sebutkan 2 cara untuk mengatasi masalah state nyangkut saat component di-reuse.
5. Kenapa `:key` yang berbeda bisa "memaksa" Vue membuat ulang sebuah component dari nol?

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T2.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 3. Proyek Pengembangan Skill Mandiri (`M4.W3.T3`)

**Estimasi waktu:** ±1.5-2 hari kerja — proyek paling besar sejauh ini.

Bikin **Prototipe UI: Halaman Daftar + Form** (topik bebas — misal daftar produk, daftar karyawan,
daftar pesanan) yang menggabungkan SEMUA component `Ds*`-mu:

1. Dari minggu lalu: `DsButton`, `DsCard`.
2. Dari minggu ini: `DsInput`, `DsSelect`, `DsBadge`.
3. Loading/empty/error state (`T2.2`) saat halaman daftar dimuat.
4. Dark mode konsisten di SELURUH halaman (ingat disiplin token dari `M4.W2`).
5. **Form tambah/edit WAJIB pakai 1 component yang SAMA** untuk kedua mode — terapkan solusi
   `T2.3` supaya state (field + pesan error) tidak nyangkut saat beralih antar mode.

Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat evaluasi `T5`).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T3
- **Status:** done
- **Capaian:** [topik prototipe apa, ceritakan component apa saja yang dipakai, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 4. Laporan Akhir Minggu (`M4.W3.T4`)

Sesuai aturan baku di [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md). Minggu ini
bentuknya **laporan tertulis** (bukan mini app terpisah) — karena `T3` sendiri SUDAH menjadi mini
app yang menyatukan semua task minggu ini, bikin mini app lain lagi cuma pengulangan.

Jelaskan alur logis:
1. Bagaimana tiap component kecil (`DsInput`/`DsSelect`/`DsBadge`/loading-empty state) akhirnya
   dipakai di prototipe `T3` — di bagian mana persisnya.
2. Bagaimana solusi jebakan `T2.3` (state nyangkut) diterapkan NYATA di form tambah/edit
   prototipe-mu — bukan cuma di latihan terpisah `T2.3`.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W3.T4
- **Status:** done
- **Capaian:** [isi laporan]
- **Kesulitan:** [jujur aja]
```

---

## 5. Evaluasi (`M4.W3.T5`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo Prototipe UI dari `T3`** langsung jalan — tambah data baru, edit data yang sudah ada,
   GANTI ANTAR MODE BERKALI-KALI untuk membuktikan state tidak nyangkut.
2. **Jelaskan pola validasi** `DsInput`/`DsSelect`.
3. **Review PR bareng.**
4. **Mentor minta modifikasi dadakan** — misal tambah 1 field baru ke form, atau 1 status baru ke
   `DsBadge`.
5. **Mentor kasih soal live** yang menyasar kesalahpahaman umum reuse component (dianggap state
   otomatis ter-reset padahal tidak).
6. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M4.W3.T5
- **Status:** done
- **Capaian:** [ceritakan demo prototipe, hasil modifikasi dadakan]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Vue 3 — Component `v-model`: https://vuejs.org/guide/components/v-model.html
- Vue 3 — Forced re-render dengan `:key`: https://vuejs.org/api/built-in-special-attributes.html#key
- Pola umum UI: Loading/Empty/Error state (artikel umum, cari "loading empty error state UX
  pattern" kalau mau referensi lebih dalam)
