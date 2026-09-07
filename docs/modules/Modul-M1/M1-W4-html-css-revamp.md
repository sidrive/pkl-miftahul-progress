# Modul Minggu 4 — HTML Semantik, CSS Flexbox/Grid & Revamp Project

> Modul ini menemani task `M1.W4.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah: mulai dengan recall Git dulu (bagian 1 — bukan materi baru),
> baru pelajari HTML semantik dan CSS Flexbox/Grid (bagian 2-3), terapkan ke project revamp
> (bagian 4), sambil menjaga alur kerja Git yang sudah dilatih di Minggu 3 (bagian 5).
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — task bertanda
> **[Wajib Refleksi]** baru dianggap `done` kalau kamu bisa jelaskan pemahamannya pakai kata
> sendiri, bukan cuma tampilannya jadi bagus.
>
> **Catatan soal review PR:** minggu lalu, task "merge PR" sempat ditandai `done` padahal proses
> review-nya sendiri belum pernah benar-benar terjadi — jadi minggu ini, review PR **tidak lagi
> jadi gerbang terpisah yang bikin task nge-gantung**. Kamu boleh langsung merge sendiri setelah
> yakin (`T5.3`), tapi **jangan hapus/cleanup branch-nya** — PR itu akan dibahas & direview bareng
> mentor sekalian saat sesi evaluasi (`T7`), jadi biarkan tetap ada sampai evaluasi selesai.
>
> **Kenapa ada bagian Git Recall Drill:** dari evaluasi Minggu 2 & 3, beberapa command Git masih
> belum lancar diingat tanpa buka dokumentasi/AI. Bagian 1 bukan materi baru — murni latihan
> mengingat ulang dari nol, supaya makin lama makin tidak perlu buka catatan tiap kali kerja.

---

## 1. Git Recall Drill

Ini **bukan materi baru** — semua command di bawah sudah pernah kamu pelajari & praktikkan di
Minggu 2 dan 3. Tujuannya sekarang murni **mengingat ulang tanpa bantuan**, karena dari evaluasi
kemarin beberapa command masih perlu buka dokumentasi/AI. Wajar butuh diulang beberapa kali sampai
benar-benar jadi kebiasaan — ini bagian dari proses belajar, bukan tanda gagal.

### `M1.W4.T1.1` — Siklus penuh dari ingatan, tanpa bantuan

**Tutup dulu modul, jangan buka AI/catatan.** Coba lakukan dari nol, urutan lengkap:
1. `git init` di folder baru
2. Buat 2 file, `add` + `commit` minimal 3x terpisah (bukan 1 commit besar)
3. Buat branch baru & pindah ke situ (`git switch -c ...`)
4. Commit lagi 1x di branch itu
5. Balik ke `main`, `merge` branch tadi
6. `push` ke GitHub

**Selagi mengerjakan, catat jujur**: command mana yang langsung lancar dari ingatan, command mana
yang sempat bikin ragu/lupa urutannya (kalaupun akhirnya kamu buka catatan buat cek, itu tidak
masalah — yang penting dicatat jujur, bukan ditutupi).

**Contoh entry log:**
```markdown
### Task: M1.W4.T1.1
- **Status:** done
- **Capaian:** Siklus penuh berhasil dari ingatan. Yang lancar: init/add/commit/branch. Yang sempat ragu: urutan merge balik ke main.
- **Kesulitan:** [jujur command mana yang masih perlu dicek ulang]
```

### `M1.W4.T1.2` — [Wajib Refleksi] Cheat sheet pribadi

Dari catatan jujur di `T1.1`, buat daftar command yang tadi sempat lupa/ragu — tulis command +
fungsinya **pakai bahasamu sendiri** (bukan disalin persis dari modul Minggu 2/3). Ini bukan buat
dihafal ulang dari nol, tapi jadi rujukan cepat pribadi supaya makin jarang perlu buka dokumentasi
resmi/AI ke depannya.

**Contoh entry log:**
```markdown
### Task: M1.W4.T1.2
- **Status:** done
- **Capaian:** [daftar command + penjelasan versi kamu sendiri, untuk command yang tadi masih ragu]
- **Kesulitan:** -
```

### `M1.W4.T1.3` — Ulangi simulasi push ditolak, dari ingatan

Ulangi skenario "push ditolak" seperti Minggu 2 `T4.4` — kali ini coba selesaikan dulu **dari
ingatan**, tanpa buka modul asli. Kalau benar-benar lupa langkahnya, boleh cek cheat sheet
pribadimu dari `T1.2` dulu (bukan langsung lompat ke modul lengkap/AI).

**Checklist selesai:** push ditolak berhasil diselesaikan pakai `git pull` (bukan `--force`), dan
kamu bisa bilang berapa banyak yang perlu dicek ulang vs yang lancar dari ingatan/cheat sheet.

### `M1.W4.T1.4` — Teach-back alur kerja Git harian

Jelaskan lisan ke mentor (tanpa membaca catatan sama sekali): garis besar alur kerja Git harian —
branch → commit → push/pull → PR → merge — pakai kata-katamu sendiri, boleh sambil peragakan
langsung di terminal.

**Contoh entry log:**
```markdown
### Task: M1.W4.T1.4
- **Status:** done
- **Capaian:** Sudah teach-back ke mentor, alur branch-commit-push-PR-merge dijelaskan lancar.
- **Kesulitan:** [jujur kalau ada bagian yang masih tersendat]
```

---

## 2. HTML Semantik

### `M1.W4.T2.1` — Elemen semantik vs `<div>` generik

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

### `M1.W4.T2.2` — Praktik refactor ke semantik

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
### Task: M1.W4.T2.2
- **Status:** done
- **Capaian:** Berhasil ganti div generik jadi header/main/footer di halaman [nama halaman].
- **Kesulitan:** -
```

### `M1.W4.T2.3` — [Wajib Refleksi] Kenapa semantik penting?

**Coba jawab dulu sendiri sebelum tanya AI:**
1. Screen reader (alat bantu baca layar untuk pengguna low-vision) itu "membaca" HTML — kalau
   semuanya `<div>`, bagaimana dia tahu mana navigasi, mana konten utama? Kenapa elemen semantik
   membantu di sini?
2. Search engine (Google, dll) juga "membaca" struktur HTML untuk memahami halamanmu — kenapa
   `<article>`/`<section>` yang jelas bisa membantu SEO dibanding semuanya `<div>`?

**Contoh entry log:**
```markdown
### Task: M1.W4.T2.3
- **Status:** done
- **Capaian:** [jawaban kamu soal aksesibilitas & SEO]
- **Kesulitan:** -
```

---

## 3. CSS Flexbox & Grid

### `M1.W4.T3.1` — Flexbox dasar

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

### `M1.W4.T3.2` — Grid dasar

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
### Task: M1.W4.T3.2
- **Status:** done
- **Capaian:** Berhasil bikin layout grid 3 kolom pakai grid-template-columns.
- **Kesulitan:** -
```

### `M1.W4.T3.3` — Praktik: 1 layout Flexbox + 1 layout Grid

Bikin 2 komponen kecil terpisah:
1. **Navbar horizontal** pakai Flexbox (logo di kiri, menu di kanan — `justify-content:
   space-between`).
2. **Galeri kartu** pakai Grid (3 kolom, responsive nanti di `T2.4`).

**Checklist selesai:** kedua komponen ini jadi, dan kamu bisa jelaskan kenapa masing-masing pakai
Flexbox/Grid (bukan sebaliknya).

### `M1.W4.T3.4` — Responsive dasar

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
### Task: M1.W4.T3.4
- **Status:** done
- **Capaian:** Media query berhasil, galeri berubah dari 3 kolom jadi 1 kolom di bawah 600px (sudah dicoba resize langsung).
- **Kesulitan:** -
```

### `M1.W4.T3.5` — [Wajib Refleksi] Kapan Flexbox, kapan Grid?

**Isi log dengan menjawab (kata sendiri, contoh dari pengalamanmu sendiri bikin navbar & galeri
tadi):** kapan kamu pilih Flexbox, kapan kamu pilih Grid? Kasih 1 contoh kasus nyata masing-masing
(bukan definisi umum copy dari dokumentasi).

**Contoh entry log:**
```markdown
### Task: M1.W4.T3.5
- **Status:** done
- **Capaian:** [jawaban kamu, pakai contoh navbar/galeri yang sudah kamu bikin sendiri]
- **Kesulitan:** -
```

---

## 4. Revamp Project To-Do List Lama

### `M1.W4.T4.1` — Audit "before"

Ambil project to-do list lama kamu (dari sebelum program PKL ini). Screenshot tampilannya
sekarang, dan catat masalah konkret yang ada — contoh: "semua pakai `<div>`", "tidak ada
responsive sama sekali", "layout numpuk kalau layar kecil", dll. Ini jadi pembanding "before" nanti.

**Checklist selesai:** ada screenshot + catatan masalah spesifik (bukan cuma "jelek").

### `M1.W4.T4.2` — Refactor HTML jadi semantik

Terapkan hasil bagian 1 ke project to-do list ini — ganti `<div>` generik jadi elemen semantik yang
sesuai.

### `M1.W4.T4.3` — Refactor CSS pakai Flexbox/Grid + responsive

Terapkan hasil bagian 2 — layout to-do list-nya pakai Flexbox/Grid (pilih sesuai kebutuhan tiap
bagian), dan tambahkan responsive supaya enak dilihat di layar kecil juga.

**Contoh entry log:**
```markdown
### Task: M1.W4.T4.3
- **Status:** done
- **Capaian:** To-do list sekarang pakai Flexbox untuk [bagian], Grid untuk [bagian], responsive di bawah 600px.
- **Kesulitan:** -
```

### `M1.W4.T4.4` — [Wajib Refleksi] Before vs After

Screenshot hasil "after", taruh berdampingan dengan screenshot "before" dari `T3.1`. **Isi log
dengan menjelaskan perubahan spesifik** — bukan "jadi lebih rapi", tapi hal konkret: "navbar yang
tadinya numpuk ke bawah sekarang sejajar pakai flexbox", "kartu task yang tadinya 1 kolom panjang
sekarang jadi grid 3 kolom di layar besar", dst.

**Contoh entry log:**
```markdown
### Task: M1.W4.T4.4
- **Status:** done
- **Capaian:** [daftar perubahan spesifik before -> after]
- **Kesulitan:** -
```

---

## 5. Commit History Rapi & Alur Kerja yang Benar

**Konteks kenapa bagian ini ditekankan lagi:** di Minggu 3, task "merge PR" (`T4.4`) sempat
ditandai `done` padahal task "review bareng mentor" (`T4.3`) yang seharusnya terjadi duluan masih
kosong — artinya proses review-nya belum benar-benar dijalani saat itu ditandai selesai. Minggu
ini, bagian ini dirancang supaya itu tidak terulang.

### `M1.W4.T5.1` — Kerjakan di branch terpisah

Jangan langsung revamp di `main` — buat branch baru (misal `revamp-todo-list`), kerjakan semua
perubahan `T1`-`T3` di situ.

### `M1.W4.T5.2` — Commit per langkah kecil

Minimal 5 commit terpisah, masing-masing 1 langkah jelas, contoh:
1. `refactor: HTML jadi semantik`
2. `style: navbar pakai flexbox`
3. `style: galeri task pakai grid`
4. `feat: responsive breakpoint 600px`
5. `chore: cleanup class CSS yang tidak dipakai`

**Checklist selesai:** `git log --oneline` menunjukkan histori yang bisa dibaca sebagai cerita
perkembangan, bukan 1 commit besar "revamp selesai".

### `M1.W4.T5.3` — Buat PR dan merge sendiri (review digabung ke sesi evaluasi)

1. Push branch, buat PR seperti di Minggu 3.
2. **Merge sendiri setelah kamu yakin** — tidak perlu menunggu mentor review dulu secara terpisah
   kayak yang sempat bikin bingung Minggu 3 kemarin.
3. **Jangan hapus branch-nya dulu** — PR ini akan dibahas & direview bareng mentor sekalian pas
   sesi evaluasi (`T7`). Baru boleh dibersihkan (`git branch -d`) setelah evaluasi selesai.

**Contoh entry log:**
```markdown
### Task: M1.W4.T5.3
- **Status:** done
- **Capaian:** PR [link] sudah dibuat & di-merge. Branch belum dihapus, nunggu dibahas bareng mentor pas evaluasi T7.
- **Kesulitan:** -
```

### `M1.W4.T5.4` — [Wajib Refleksi] Evaluasi `git log` kamu sendiri

Buka `git log --oneline` untuk project revamp ini. **Isi log dengan menjawab jujur:**
1. Kalau orang lain (bukan kamu) baca histori commit ini, apa mereka bisa paham urutan &
   perkembangan pengerjaannya cuma dari pesan commit-nya saja?
2. Ada tidak commit yang pesannya kurang jelas (misal cuma "update" atau "fix")? Kalau ada, gimana
   seharusnya pesan yang lebih baik?

**Contoh entry log:**
```markdown
### Task: M1.W4.T5.4
- **Status:** done
- **Capaian:** [evaluasi jujur histori commit kamu sendiri]
- **Kesulitan:** -
```

---

## 6. Proyek Pengembangan Skill Mandiri Minggu 4 (`M1.W4.T6`)

**Estimasi waktu:** minimal setengah hari kerja (±4 jam), termasuk kalau dibantu AI.

Bikin **1 halaman statis baru dari nol** (bebas topik — landing page sederhana, portofolio mini,
halaman profil, dll) yang menerapkan semua skill minggu ini sekaligus.

### Requirement wajib

1. **HTML semantik penuh** — `<header>`, `<nav>`, `<main>`, minimal 1 `<section>`/`<article>`,
   `<footer>`.
2. **Minimal 1 bagian pakai Flexbox, 1 bagian pakai Grid** — dan kamu bisa jelaskan kenapa masing-
   masing dipilih untuk bagian itu.
3. **Responsive** — minimal 1 breakpoint, dicoba resize beneran (bukan cuma diasumsikan jalan).
4. **Alur kerja benar**: branch → commit rapi (minimal 5 commit) → PR → merge sendiri (sama seperti
   `T5.3`) — **jangan hapus branch/PR-nya**, karena akan dibahas & direview bareng mentor sekalian
   pas evaluasi `T7`.
5. **Bersih dari sisa-sisa iseng**: tidak ada CSS class yang di-declare tapi tidak dipakai, tidak
   ada komentar placeholder ("lorem ipsum", "TODO: nanti diisi") yang ketinggalan pas submit —
   cek ulang sebelum push, seperti pelajaran dari data lelucon yang sempat ketinggalan di project
   Minggu 1.

### Submit

Cukup pastikan repo/PR-nya bisa diakses, cantumkan link di entry log.

**Contoh entry log:**
```markdown
### Task: M1.W4.T6
- **Status:** done
- **Capaian:** [ceritakan halaman apa yang dibuat, bagian mana pakai Flexbox/Grid & kenapa, link PR yang sudah di-merge (branch belum dihapus, nunggu dibahas pas evaluasi)]
- **Kesulitan:** [jujur aja]
```

---

## 7. Evaluasi Minggu 4 (`M1.W4.T7`)

Siapkan demo singkat (~15-20 menit) untuk mentor:

1. **Tunjukkan project revamp (`T4`) dan proyek mandiri (`T6`) langsung di browser** — termasuk
   resize jendela browser live untuk membuktikan responsive-nya beneran jalan.
2. Buka `git log` kedua project — tunjukkan histori commit yang rapi, dan **buka PR-nya di GitHub
   untuk dibahas & direview bareng mentor sekalian di sesi ini** (bukan direview terpisah
   sebelumnya — ini titik review-nya).
3. **Jelaskan pilihan Flexbox vs Grid** di tiap bagian layout — kenapa bagian itu Flexbox, kenapa
   bagian lain Grid.
4. **Demo command Git secara acak dari ingatan** (mentor pilih beberapa command bebas, bukan cuma
   yang ada di cheat sheet pribadimu dari `T1.2`) — ini cek apakah recall drill `T1` beneran
   melekat, bukan cuma latihan sekali lalu lupa lagi.
5. **Mentor akan tanya 2-3 variasi pertanyaan** di luar contoh modul — untuk memastikan pemahaman
   beneran nempel, bukan hafalan langkah.
6. Ceritakan singkat: bagian mana yang paling menantang, bagian mana yang paling gampang.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W4.T7
- **Status:** done
- **Capaian:** Demo ke mentor selesai, HTML semantik/Flexbox/Grid/responsive dikuasai, git log & PR review ditunjukkan, command Git dari ingatan lancar, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- MDN — HTML semantik: https://developer.mozilla.org/en-US/docs/Glossary/Semantics
- MDN — Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
- MDN — Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- Flexbox Froggy (latihan interaktif): https://flexboxfroggy.com/
- Grid Garden (latihan interaktif): https://cssgridgarden.com/
