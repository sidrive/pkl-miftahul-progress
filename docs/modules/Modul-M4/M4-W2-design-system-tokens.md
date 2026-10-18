# Modul Bulan 4 Minggu 2 — Design Token & Dark Mode (Simulasi Olsera DS)

> Menemani task `M4.W2.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`. Modul ini **tidak menyertakan contoh jawaban atau hasil eksekusi** untuk
> latihan maupun soal refleksi/kuis — jalankan sendiri, amati sendiri, catat hasil aslinya di log.
> Contoh entry log di bawah cuma menunjukkan **format**, bukan isi jawabannya.
>
> **🗓️ 5 hari kerja penuh** (Senin 19 – Jumat 23 Oktober 2026).
>
> ## Kenapa minggu ini simulasi, bukan install Olsera DS asli
>
> Rencana awal minggu ini adalah install `@olsera/vue-components`/`@olsera/tokens` beneran. Itu
> diubah karena 2 hal:
> 1. Paket itu di-publish ke GitHub npm registry **privat** — kamu belum punya akses token ke situ
>    untuk repo latihan pribadi ini.
> 2. Dukungan Vue 3 untuk `@olsera/vue-components` **belum dikonfirmasi** oleh tim DS internal —
>    project kamu (`CobaVue-M3`) full Vue 3, jadi ada risiko componentnya memang belum kompatibel.
>
> Daripada kamu stuck di masalah akses/kompatibilitas yang di luar kendalimu, minggu ini kamu
> **mensimulasikan Design System sendiri** — bikin versi mini "DS-like" (token CSS variable +
> component `Ds*` tiruan) yang **meniru pola asli Olsera DS** sedekat mungkin:
> - Penamaan token pakai skala angka (`--color-grey-0`, `--color-grey-100`, `--color-navy-50`),
>   BUKAN nama sembarang (`--warna-biru`, `--abu-abu-gelap`).
> - Dark mode lewat atribut `data-theme` di elemen root HTML (`<html data-theme="dark">`), BUKAN
>   class CSS biasa (`.dark-mode`) — ini pola asli Olsera DS:
>   ```js
>   document.documentElement.setAttribute('data-theme', 'dark')
>   document.documentElement.removeAttribute('data-theme')
>   ```
>
> Dengan begitu, konsepnya tetap **transferable** — kalau nanti kamu benar-benar pegang akses DS
> asli (misal pas kerja di project internal), pola yang kamu pelajari minggu ini sudah sama persis.
>
> **Poin perhatian:** 1 warna hardcode yang lolos tidak diganti token bisa bikin dark mode "bocor"
> (sebagian elemen ikut gelap, sebagian tetap terang) — ini jebakan pemahaman minggu ini, pola yang
> sama dengan `:key`/`watch deep`/destructuring minggu-minggu lalu: kelihatan sepele, tapi gampang
> kelewat kalau project makin besar. Lihat bagian 2.

---

## 1. Design Token Dasar

### `M4.W2.T1.1` — Bikin file token CSS sendiri (BARU, 3 putaran)

Design token itu nilai desain (warna, spacing, ukuran font, dll) yang disimpan terpusat lewat **CSS
custom properties**, bukan ditulis berulang-ulang di tiap component:

```css
/* tokens.css */
:root {
  --color-grey-0: #ffffff;
  --color-grey-50: #f5f5f5;
  --color-grey-100: #e0e0e0;
  --color-grey-900: #1a1a1a;

  --color-navy-50: #e8f0fe;
  --color-navy-500: #1a73e8;
  --color-navy-900: #0d47a1;
}
```

Perhatikan pola penamaannya: **skala angka** (`0`, `50`, `100`, ..., `900` — makin besar makin
gelap/pekat), bukan nama deskriptif (`--abu-terang`). Ini pola asli Olsera DS — ikuti supaya
terbiasa dengan konvensi ini.

Pakai di component:
```css
.tombol {
  background-color: var(--color-navy-500);
  color: var(--color-grey-0);
}
```

**Putaran 1 (token warna):** bikin skala `grey` (minimal 4-5 level) dan 1 warna aksen (misal
`navy`, atau warna lain bebas) dengan skala serupa.

**Putaran 2 (token spacing):** bikin token spacing (`--spacing-xs: 4px`, `--spacing-sm: 8px`,
`--spacing-md: 16px`, dst), pakai itu gantiin angka px hardcode di minimal 1 component.

**Putaran 3 (token typography):** bikin token ukuran & ketebalan font (`--font-size-sm`,
`--font-size-md`, `--font-weight-normal`, `--font-weight-bold`), pakai di minimal 1 component.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T1.1
- **Status:** done
- **Capaian:** [ceritakan token warna/spacing/typography yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W2.T1.2` — [Wajib Refleksi] Kenapa token dibanding hardcode

**Coba dulu SEBELUM baca lebih lanjut:**
1. Ambil 1 component lama (bebas, dari Bulan 3/4 manapun) yang masih pakai warna/spacing hardcode
   (`color: #333`, `padding: 16px`).
2. Ganti SEMUA nilai hardcode itu jadi `var(--nama-token)` yang sesuai dari `T1.1`.
3. Pastikan tampilannya tetap sama persis setelah diganti (ini refactor, bukan redesign).

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang berubah secara VISUAL setelah penggantian ini? (jawaban yang benar: seharusnya TIDAK
   ADA perubahan visual — kalau ada yang berubah, berarti token-nya belum pas nilainya)
2. Bayangkan skenario: brand color aplikasi berubah (misal dari navy jadi hijau), dan warna itu
   dipakai di 50 tempat berbeda di seluruh aplikasi. Bandingkan effort mengganti itu DENGAN token
   (tinggal ubah 1 definisi `--color-navy-500` di `tokens.css`) VS TANPA token (cari & ganti manual
   di 50 tempat).
3. Selain soal "lebih gampang diganti", sebutkan 1 keuntungan lain dari sentralisasi nilai desain
   lewat token.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T1.2
- **Status:** done
- **Capaian:** [component mana yang direfactor + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M4.W2.T1.3` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Apa itu CSS custom property (design token), dan bagaimana cara mendeklarasikannya?
2. Kenapa Olsera DS menamai token warnanya dengan skala angka (`--color-grey-0` sampai
   `--color-grey-900`) dibanding nama deskriptif?
3. Bagaimana cara memakai sebuah token di dalam CSS property lain?
4. Sebutkan 1 jenis nilai desain SELAIN warna yang cocok dijadikan token.
5. Kalau kamu lupa definisikan 1 token yang dipakai di CSS (misal `var(--color-tidak-ada)`), apa
   yang terjadi — error, atau diam-diam pakai nilai lain? Coba dulu sebelum menjawab.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T1.3
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 2. Dark Mode Dasar

### `M4.W2.T2.1` — Toggle dark mode pakai `data-theme` (BARU, 3 putaran)

Definisikan 2 set nilai token — 1 untuk light (default), 1 untuk dark — pakai selector
`:root[data-theme="dark"]`:

```css
:root {
  --color-bg: var(--color-grey-0);
  --color-text: var(--color-grey-900);
}

:root[data-theme="dark"] {
  --color-bg: var(--color-grey-900);
  --color-text: var(--color-grey-0);
}
```

Component tetap pakai `var(--color-bg)`/`var(--color-text)` seperti biasa — TIDAK PERLU tahu tema
apa yang sedang aktif, cukup toggle atribut `data-theme` di root:

```js
function toggleDarkMode() {
  const sudahDark = document.documentElement.getAttribute('data-theme') === 'dark'
  if (sudahDark) {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}
```

**Putaran 1:** toggle dark mode untuk 1 halaman/component sederhana — buktikan warnanya berubah
begitu atribut `data-theme` di-toggle.

**Putaran 2 (topik beda):** toggle untuk halaman/component KEDUA yang beda topik.

**Putaran 3 (global, 1 saklar):** tombol toggle 1 kali yang mempengaruhi SELURUH aplikasi sekaligus
— taruh di component paling atas (`App.vue`), dan simpan preferensi ke `localStorage` (ingat
`M2.W4`/konsep serupa) supaya tidak reset ke light tiap kali halaman di-reload.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T2.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran dark mode yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W2.T2.2` — [Wajib Refleksi — PENTING] Jebakan warna hardcode yang lolos

**Coba dulu SEBELUM baca lebih lanjut:**
1. Bikin 1 component BARU (bebas, apa saja).
2. Di component itu, **SEBAGIAN** style pakai `var(--color-...)` (sudah benar), tapi **SEBAGIAN
   LAGI SENGAJA** pakai warna hardcode langsung (misal `color: #222;` atau `background: white;`
   ditulis manual, bukan lewat token).
3. Toggle dark mode (`T2.1`), amati component ini: bagian mana yang ikut berubah warnanya, bagian
   mana yang "nyangkut" tetap di warna lama walau temanya sudah diganti.

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang kamu amati — bagian mana yang ikut dark mode, bagian mana yang tidak?
2. Kenapa dark mode BUKAN sekadar "nambah 1 saklar toggle", tapi butuh DISIPLIN di SELURUH
   component aplikasi?
3. Kalau project-nya sudah besar (ratusan component), menurutmu apa yang bisa dilakukan supaya
   warna hardcode yang "lolos" seperti ini lebih gampang ketahuan (boleh cari tahu sendiri — ada
   tools/cara linting untuk ini, atau jawab dari logikamu sendiri kalau belum tahu istilahnya)?

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T2.2
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M4.W2.T2.3` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Bagaimana cara mengaktifkan/menonaktifkan dark mode lewat atribut `data-theme`?
2. Kenapa dark mode lewat `data-theme` + CSS variable lebih mudah dikelola dibanding bikin 2 versi
   CSS terpisah untuk light dan dark?
3. Apa yang terjadi kalau 1 component pakai warna hardcode, bukan token, saat dark mode di-toggle?
4. Kenapa preferensi dark mode perlu disimpan ke `localStorage`?
5. Sebutkan 1 cara (boleh manual/observasi sendiri) untuk mengecek apakah SEMUA warna di sebuah
   component sudah konsisten pakai token, bukan ada yang hardcode lolos.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T2.3
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 3. Mini Component Library `Ds*` Sendiri

### `M4.W2.T3.1` — `DsButton.vue` tiruan (BARU, 3 putaran)

```vue
<!-- DsButton.vue -->
<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | danger
  size: { type: String, default: 'medium' },      // small | medium | large
  disabled: { type: Boolean, default: false }
})
</script>

<template>
  <button :class="['ds-button', `ds-button--${variant}`, `ds-button--${size}`]" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.ds-button--primary { background: var(--color-navy-500); color: var(--color-grey-0); }
.ds-button--small { padding: var(--spacing-xs) var(--spacing-sm); }
</style>
```

**Putaran 1 (varian warna):** 3 varian warna (`primary`/`secondary`/`danger`), pakai token warna
dari `T1.1`.

**Putaran 2 (varian ukuran):** 3 varian ukuran (`small`/`medium`/`large`), pakai token spacing.

**Putaran 3 (kombinasi + disabled):** gabungkan varian warna+ukuran+state `disabled` sekaligus
dalam 1 component (`props` campuran — ingat `M3.W1.T3.3`/`M3.W2.T2.2`).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T3.1
- **Status:** done
- **Capaian:** [ceritakan 3 putaran DsButton yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W2.T3.2` — Component `Ds*` KEDUA tiruan (BARU, 3 putaran)

Pilih 1: `DsCard` (container dengan padding/border/shadow dari token), `DsBadge` (label kecil status
dengan varian warna), atau `DsInput` (input custom).

**Putaran 1:** versi dasar.

**Putaran 2:** tambah 1 varian/opsi baru yang belum ada di putaran 1.

**Putaran 3:** kalau kamu pilih `DsInput`, coba buat dia mendukung **custom `v-model`** (ingat
`M3.W4.T1.2`) supaya bisa dipakai `<DsInput v-model="sesuatu" />` dari parent persis seperti input
native. Kalau pilih `DsCard`/`DsBadge`, buat varian ketiga yang menggabungkan lebih banyak `props`
sekaligus (mirip pola `T3.1` putaran 3).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T3.2
- **Status:** done
- **Capaian:** [component mana yang dipilih, ceritakan 3 putaran yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M4.W2.T3.3` — [Wajib Refleksi] Kenapa component reusable terpisah

**Isi log dengan menjawab (kata sendiri):**
1. Hitung kira-kira: berapa banyak tempat di project-project Bulan 3/4-mu (to-do list, kasir, dll)
   yang sebenarnya butuh "tombol"? Kalau semua itu dipakaikan `DsButton` yang sama, apa untungnya
   dibanding masing-masing nulis style tombol sendiri-sendiri?
2. Kalau suatu saat kamu perlu ubah SEMUA tombol di aplikasi (misal border-radius-nya), bandingkan
   effort-nya dengan `DsButton` terpusat VS tombol yang stylingnya ditulis manual di tiap tempat.
3. Kaitkan ke `props` yang sudah kamu kuasai — kenapa `variant`/`size` sebagai `props` (bukan bikin
   `DsButtonPrimary.vue`, `DsButtonSecondary.vue` terpisah-pisah) adalah pendekatan yang lebih baik?

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T3.3
- **Status:** done
- **Capaian:** [jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

### `M4.W2.T3.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup modul, jangan tanya AI dulu.** Jawab 5 soal berikut, baru cek jawaban setelahnya:

1. Kenapa `DsButton` pakai `props` untuk variant/size, bukan bikin component terpisah per varian?
2. Sebutkan 2 keuntungan punya component library reusable dibanding styling inline di tiap tempat.
3. Bagaimana cara `DsButton` buatanmu tetap bisa menerima isi/teks yang beda-beda tiap dipakai
   (petunjuk: fitur Vue yang memungkinkan component punya "lubang" konten dari parent)?
4. Kalau kamu bikin `DsInput` dengan custom `v-model`, apa pasangan `props`+`emit` yang wajib ada
   (ingat `M3.W4.T1.3`)?
5. Apa hubungan antara design token (bagian 1) dengan component `Ds*` (bagian 3) — kenapa
   component-nya HARUS pakai token, bukan nilai sendiri?

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T3.4
- **Status:** done
- **Capaian:** [5 jawaban kuis]
- **Kesulitan:** [jujur aja]
```

---

## 4. Proyek Pengembangan Skill Mandiri (`M4.W2.T4`)

**Estimasi waktu:** ±1 hari kerja.

Pilih 1 mini app yang sudah ada — **Mini App Kasir** (`M4.W1.T4`) ATAU **TodoList Pinia**
(`M4.W1.T3`) — lalu **restyle total**:

1. Ganti SEMUA warna/spacing hardcode di app itu jadi pakai token dari `T1.1`.
2. Ganti SEMUA tombol/card/input manual jadi pakai component `Ds*` buatanmu (`T3.1`/`T3.2`).
3. Pasang toggle dark mode (`T2.1`) yang beneran berfungsi di app ini — semua bagian harus
   konsisten ikut berubah tema (ingat jebakan `T2.2`, cek ulang jangan ada warna hardcode yang
   lolos).

Lewat alur **branch → commit rapi → PR** (dibahas bareng mentor saat evaluasi `T6`).

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T4
- **Status:** done
- **Capaian:** [app mana yang dipilih, ceritakan proses restyle, link PR]
- **Kesulitan:** [jujur aja]
```

---

## 5. Laporan/Mini App Akhir Minggu (`M4.W2.T5`)

Sesuai aturan baku di [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md).

Minggu ini bentuknya **Mini App** (cocok karena hasilnya visual): bikin 1 halaman **"mini
storybook"** — terinspirasi dari Storybook asli Olsera DS (showcase semua component dalam 1 tempat)
— yang menampilkan SEMUA component `Ds*` buatanmu minggu ini sekaligus (semua varian dari
`T3.1`/`T3.2`) dalam 1 halaman, lengkap dengan tombol toggle dark mode supaya kedua tema bisa
dilihat langsung di halaman yang sama tanpa pindah-pindah.

**Contoh entry log (format saja):**
```markdown
### Task: M4.W2.T5
- **Status:** done
- **Capaian:** [ceritakan isi mini storybook, link ke halamannya]
- **Kesulitan:** [jujur aja]
```

---

## 6. Evaluasi (`M4.W2.T6`) — satu-satunya sesi bareng mentor minggu ini

Siapkan demo untuk mentor:

1. **Demo restyle dari `T4`** DAN **mini storybook dari `T5`** langsung jalan — toggle dark mode
   harus kelihatan konsisten di SEMUA component.
2. **Jelaskan kenapa token dipisah dari component** (bukan warna hardcode di tiap component).
3. **Review PR bareng.**
4. **Mentor minta modifikasi dadakan** — misal ubah 1 token warna brand, lihat apakah SEMUA
   component ikut berubah otomatis.
5. **Mentor kasih soal live** yang menyasar kesalahpahaman umum dark mode (dianggap cukup toggle 1
   saklar tanpa disiplin token).
6. **Mentor tanya 2-3 variasi pertanyaan** lain di luar contoh modul.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M4.W2.T6
- **Status:** done
- **Capaian:** [ceritakan demo restyle + mini storybook, hasil modifikasi dadakan token]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- MDN — Using CSS custom properties: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- MDN — Attribute selectors (`[data-theme="dark"]`): https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
- Konsep umum Design Tokens (W3C Design Tokens Community Group): https://www.designtokens.org/
