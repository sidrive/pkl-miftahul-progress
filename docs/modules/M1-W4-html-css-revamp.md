# Modul Minggu 4 — HTML Semantik, CSS Flexbox/Grid & Revamp Project

> Modul ini menemani task `M1.W4.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah: pelajari HTML semantik dan CSS Flexbox/Grid dulu (bagian 1-2),
> baru terapkan ke project revamp (bagian 3), sambil menjaga alur kerja Git yang sudah dilatih di
> Minggu 3 (bagian 4).
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — task bertanda
> **[Wajib Refleksi]** baru dianggap `done` kalau kamu bisa jelaskan pemahamannya pakai kata
> sendiri, bukan cuma tampilannya jadi bagus.
>
> **Catatan penting soal `T4.3`:** minggu lalu, task "merge PR" sempat ditandai `done` padahal
> proses review-nya sendiri belum pernah benar-benar terjadi. Minggu ini, jangan ulangi itu —
> kalau mentor belum sempat review PR-mu, biarkan statusnya `in-progress` dan jujur tulis kenapa,
> itu jauh lebih baik daripada menandai selesai duluan.

---

## 1. HTML Semantik

### `M1.W4.T1.1` — Elemen semantik vs `<div>` generik

`<div>` itu netral — tidak bilang apa-apa soal isinya. Elemen semantik **menjelaskan perannya**:

| Elemen | Peran |
|---|---|
| `<header>` | Bagian atas halaman/section — biasanya judul, logo, navigasi |
| `<nav>` | Kumpulan link navigasi utama |
| `<main>` | Konten utama halaman (cuma boleh 1 per halaman) |
| `<section>` | Kelompok konten yang punya tema/topik sendiri |
| `<article>` | Konten yang bisa berdiri sendiri (post blog, kartu berita, dll) |
| `<footer>` | Bagian bawah halaman/section — copyright, link tambahan |

Elemen-elemen ini **secara visual bisa terlihat sama persis** dengan `<div>` (kalau tidak dikasih
CSS apa-apa) — bedanya cuma di **makna**, bukan tampilan.

**Checklist selesai:** paham bahwa semantik itu soal makna/struktur, bukan soal tampilan visual.

### `M1.W4.T1.2` — Praktik refactor ke semantik

Ambil 1 halaman HTML lama (boleh project to-do list yang mau di-revamp di bagian 3), cari bagian
yang sekarang pakai `<div>` polos, ganti dengan elemen semantik yang sesuai perannya. Contoh:
```html
<!-- Sebelum -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- Sesudah -->
<header>
  <nav>...</nav>
</header>
```

**Checklist selesai:** minimal `<header>`, `<main>`, `<footer>` sudah dipakai di halaman itu
(sesuai konteksnya).

**Contoh entry log:**
```markdown
### Task: M1.W4.T1.2
- **Status:** done
- **Capaian:** Berhasil ganti div generik jadi header/main/footer di halaman [nama halaman].
- **Kesulitan:** -
```

### `M1.W4.T1.3` — [Wajib Refleksi] Kenapa semantik penting?

**Coba jawab dulu sendiri sebelum tanya AI:**
1. Screen reader (alat bantu baca layar untuk pengguna low-vision) itu "membaca" HTML — kalau
   semuanya `<div>`, bagaimana dia tahu mana navigasi, mana konten utama? Kenapa elemen semantik
   membantu di sini?
2. Search engine (Google, dll) juga "membaca" struktur HTML untuk memahami halamanmu — kenapa
   `<article>`/`<section>` yang jelas bisa membantu SEO dibanding semuanya `<div>`?

**Contoh entry log:**
```markdown
### Task: M1.W4.T1.3
- **Status:** done
- **Capaian:** [jawaban kamu soal aksesibilitas & SEO]
- **Kesulitan:** -
```

---

## 2. CSS Flexbox & Grid

### `M1.W4.T2.1` — Flexbox dasar

Flexbox itu buat mengatur elemen dalam **1 baris atau 1 kolom** (1 dimensi).

| Properti | Fungsi |
|---|---|
| `display: flex` | Aktifkan flexbox di container |
| `flex-direction: row / column` | Arah susunan item (baris atau kolom) |
| `justify-content` | Atur posisi item di sumbu utama (`flex-start`, `center`, `space-between`, dll) |
| `align-items` | Atur posisi item di sumbu silang (`flex-start`, `center`, `stretch`, dll) |
| `gap` | Jarak antar item |

**Latihan:** bikin 3 kotak (`<div>`) di dalam 1 container, aktifkan `display: flex`, coba-coba
`justify-content` dan `align-items` dengan nilai berbeda, lihat efeknya.

**Checklist selesai:** paham bedanya `justify-content` (sumbu utama) vs `align-items` (sumbu
silang) lewat percobaan langsung, bukan cuma baca definisi.

### `M1.W4.T2.2` — Grid dasar

Grid itu buat mengatur elemen dalam **baris DAN kolom sekaligus** (2 dimensi) — cocok buat layout
seperti galeri kartu atau susunan halaman kompleks.

| Properti | Fungsi |
|---|---|
| `display: grid` | Aktifkan grid di container |
| `grid-template-columns` | Definisikan jumlah & lebar kolom (misal `1fr 1fr 1fr` = 3 kolom sama lebar) |
| `gap` | Jarak antar sel grid |

**Latihan:** bikin 6 kartu, aktifkan `display: grid` dengan `grid-template-columns: repeat(3, 1fr)`
— lihat otomatis tersusun 3 kolom x 2 baris.

**Contoh entry log:**
```markdown
### Task: M1.W4.T2.2
- **Status:** done
- **Capaian:** Berhasil bikin layout grid 3 kolom pakai grid-template-columns.
- **Kesulitan:** -
```

### `M1.W4.T2.3` — Praktik: 1 layout Flexbox + 1 layout Grid

Bikin 2 komponen kecil terpisah:
1. **Navbar horizontal** pakai Flexbox (logo di kiri, menu di kanan — `justify-content:
   space-between`).
2. **Galeri kartu** pakai Grid (3 kolom, responsive nanti di `T2.4`).

**Checklist selesai:** kedua komponen ini jadi, dan kamu bisa jelaskan kenapa masing-masing pakai
Flexbox/Grid (bukan sebaliknya).

### `M1.W4.T2.4` — Responsive dasar

```css
@media (max-width: 600px) {
  .galeri {
    grid-template-columns: 1fr; /* jadi 1 kolom di layar kecil */
  }
}
```

**Latihan:** tambahkan minimal 1 `@media` query ke galeri kartu dari `T2.3`, supaya di layar sempit
jadi 1 kolom. **Coba resize browser beneran** (drag jendela browser, atau pakai DevTools device
toolbar) — jangan cuma asumsi kodenya akan jalan tanpa dicek visual.

**Checklist selesai:** layout beneran berubah saat browser di-resize melewati breakpoint 600px.

**Contoh entry log:**
```markdown
### Task: M1.W4.T2.4
- **Status:** done
- **Capaian:** Media query berhasil, galeri berubah dari 3 kolom jadi 1 kolom di bawah 600px (sudah dicoba resize langsung).
- **Kesulitan:** -
```

### `M1.W4.T2.5` — [Wajib Refleksi] Kapan Flexbox, kapan Grid?

**Isi log dengan menjawab (kata sendiri, contoh dari pengalamanmu sendiri bikin navbar & galeri
tadi):** kapan kamu pilih Flexbox, kapan kamu pilih Grid? Kasih 1 contoh kasus nyata masing-masing
(bukan definisi umum copy dari dokumentasi).

**Contoh entry log:**
```markdown
### Task: M1.W4.T2.5
- **Status:** done
- **Capaian:** [jawaban kamu, pakai contoh navbar/galeri yang sudah kamu bikin sendiri]
- **Kesulitan:** -
```

---

## 3. Revamp Project To-Do List Lama

### `M1.W4.T3.1` — Audit "before"

Ambil project to-do list lama kamu (dari sebelum program PKL ini). Screenshot tampilannya
sekarang, dan catat masalah konkret yang ada — contoh: "semua pakai `<div>`", "tidak ada
responsive sama sekali", "layout numpuk kalau layar kecil", dll. Ini jadi pembanding "before" nanti.

**Checklist selesai:** ada screenshot + catatan masalah spesifik (bukan cuma "jelek").

### `M1.W4.T3.2` — Refactor HTML jadi semantik

Terapkan hasil bagian 1 ke project to-do list ini — ganti `<div>` generik jadi elemen semantik yang
sesuai.

### `M1.W4.T3.3` — Refactor CSS pakai Flexbox/Grid + responsive

Terapkan hasil bagian 2 — layout to-do list-nya pakai Flexbox/Grid (pilih sesuai kebutuhan tiap
bagian), dan tambahkan responsive supaya enak dilihat di layar kecil juga.

**Contoh entry log:**
```markdown
### Task: M1.W4.T3.3
- **Status:** done
- **Capaian:** To-do list sekarang pakai Flexbox untuk [bagian], Grid untuk [bagian], responsive di bawah 600px.
- **Kesulitan:** -
```

### `M1.W4.T3.4` — [Wajib Refleksi] Before vs After

Screenshot hasil "after", taruh berdampingan dengan screenshot "before" dari `T3.1`. **Isi log
dengan menjelaskan perubahan spesifik** — bukan "jadi lebih rapi", tapi hal konkret: "navbar yang
tadinya numpuk ke bawah sekarang sejajar pakai flexbox", "kartu task yang tadinya 1 kolom panjang
sekarang jadi grid 3 kolom di layar besar", dst.

**Contoh entry log:**
```markdown
### Task: M1.W4.T3.4
- **Status:** done
- **Capaian:** [daftar perubahan spesifik before -> after]
- **Kesulitan:** -
```

---

## 4. Commit History Rapi & Alur Kerja yang Benar

**Konteks kenapa bagian ini ditekankan lagi:** di Minggu 3, task "merge PR" (`T4.4`) sempat
ditandai `done` padahal task "review bareng mentor" (`T4.3`) yang seharusnya terjadi duluan masih
kosong — artinya proses review-nya belum benar-benar dijalani saat itu ditandai selesai. Minggu
ini, bagian ini dirancang supaya itu tidak terulang.

### `M1.W4.T4.1` — Kerjakan di branch terpisah

Jangan langsung revamp di `main` — buat branch baru (misal `revamp-todo-list`), kerjakan semua
perubahan `T1`-`T3` di situ.

### `M1.W4.T4.2` — Commit per langkah kecil

Minimal 5 commit terpisah, masing-masing 1 langkah jelas, contoh:
1. `refactor: HTML jadi semantik`
2. `style: navbar pakai flexbox`
3. `style: galeri task pakai grid`
4. `feat: responsive breakpoint 600px`
5. `chore: cleanup class CSS yang tidak dipakai`

**Checklist selesai:** `git log --oneline` menunjukkan histori yang bisa dibaca sebagai cerita
perkembangan, bukan 1 commit besar "revamp selesai".

### `M1.W4.T4.3` — [Wajib — jangan ditandai `done` sebelum benar-benar terjadi] PR + review nyata

1. Push branch, buat PR seperti di Minggu 3.
2. **Tunggu mentor benar-benar memberi komentar/review di PR-nya lewat GitHub** — bukan cuma bilang
   "oke" di chat.
3. **Kalau sampai waktunya isi log dan mentor belum sempat review**, tulis status `in-progress` dan
   jelaskan di Kesulitan bahwa PR masih menunggu review — **ini bukan kegagalan**, ini justru
   pelaporan yang jujur. Jangan tandai `done` duluan.
4. Setelah benar-benar direview (dan diperbaiki kalau ada masukan), baru merge, dan **saat itu**
   tandai `done`.

**Contoh entry log (kalau masih menunggu review):**
```markdown
### Task: M1.W4.T4.3
- **Status:** in-progress
- **Capaian:** PR sudah dibuat: [link]. Masih menunggu review dari mentor.
- **Kesulitan:** -
```

**Contoh entry log (setelah benar-benar direview & di-merge):**
```markdown
### Task: M1.W4.T4.3
- **Status:** done
- **Capaian:** PR [link] sudah direview mentor (ada masukan soal [x], sudah diperbaiki), dan sudah di-merge.
- **Kesulitan:** -
```

### `M1.W4.T4.4` — [Wajib Refleksi] Evaluasi `git log` kamu sendiri

Buka `git log --oneline` untuk project revamp ini. **Isi log dengan menjawab jujur:**
1. Kalau orang lain (bukan kamu) baca histori commit ini, apa mereka bisa paham urutan &
   perkembangan pengerjaannya cuma dari pesan commit-nya saja?
2. Ada tidak commit yang pesannya kurang jelas (misal cuma "update" atau "fix")? Kalau ada, gimana
   seharusnya pesan yang lebih baik?

**Contoh entry log:**
```markdown
### Task: M1.W4.T4.4
- **Status:** done
- **Capaian:** [evaluasi jujur histori commit kamu sendiri]
- **Kesulitan:** -
```

---

## 5. Proyek Pengembangan Skill Mandiri Minggu 4 (`M1.W4.T5`)

**Estimasi waktu:** minimal setengah hari kerja (±4 jam), termasuk kalau dibantu AI.

Bikin **1 halaman statis baru dari nol** (bebas topik — landing page sederhana, portofolio mini,
halaman profil, dll) yang menerapkan semua skill minggu ini sekaligus.

### Requirement wajib

1. **HTML semantik penuh** — `<header>`, `<nav>`, `<main>`, minimal 1 `<section>`/`<article>`,
   `<footer>`.
2. **Minimal 1 bagian pakai Flexbox, 1 bagian pakai Grid** — dan kamu bisa jelaskan kenapa masing-
   masing dipilih untuk bagian itu.
3. **Responsive** — minimal 1 breakpoint, dicoba resize beneran (bukan cuma diasumsikan jalan).
4. **Alur kerja benar**: branch → commit rapi (minimal 5 commit) → PR → **direview mentor secara
   nyata** → merge (sama seperti `T4.3` — jangan tandai `done` sebelum review beneran terjadi).
5. **Bersih dari sisa-sisa iseng**: tidak ada CSS class yang di-declare tapi tidak dipakai, tidak
   ada komentar placeholder ("lorem ipsum", "TODO: nanti diisi") yang ketinggalan pas submit —
   cek ulang sebelum push, seperti pelajaran dari data lelucon yang sempat ketinggalan di project
   Minggu 1.

### Submit

Cukup pastikan repo/PR-nya bisa diakses, cantumkan link di entry log.

**Contoh entry log:**
```markdown
### Task: M1.W4.T5
- **Status:** done
- **Capaian:** [ceritakan halaman apa yang dibuat, bagian mana pakai Flexbox/Grid & kenapa, link PR yang sudah direview & di-merge]
- **Kesulitan:** [jujur aja]
```

---

## 6. Evaluasi Minggu 4 (`M1.W4.T6`)

Siapkan demo singkat (~15-20 menit) untuk mentor:

1. **Tunjukkan project revamp (`T3`) dan proyek mandiri (`T5`) langsung di browser** — termasuk
   resize jendela browser live untuk membuktikan responsive-nya beneran jalan.
2. Buka `git log` kedua project — tunjukkan histori commit yang rapi, dan buka PR yang sudah
   **benar-benar direview** (bukan cuma di-merge tanpa proses).
3. **Jelaskan pilihan Flexbox vs Grid** di tiap bagian layout — kenapa bagian itu Flexbox, kenapa
   bagian lain Grid.
4. **Mentor akan tanya 2-3 variasi pertanyaan** di luar contoh modul — untuk memastikan pemahaman
   beneran nempel, bukan hafalan langkah.
5. Ceritakan singkat: bagian mana yang paling menantang, bagian mana yang paling gampang.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W4.T6
- **Status:** done
- **Capaian:** Demo ke mentor selesai, HTML semantik/Flexbox/Grid/responsive dikuasai, git log & PR review ditunjukkan, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — HTML semantik: https://developer.mozilla.org/en-US/docs/Glossary/Semantics
- MDN — Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
- MDN — Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- Flexbox Froggy (latihan interaktif): https://flexboxfroggy.com/
- Grid Garden (latihan interaktif): https://cssgridgarden.com/
