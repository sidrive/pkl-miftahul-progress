# Task List — Pendampingan PKL Frontend (Miftahul Al Gazi Hermansyah)

> File ini adalah **satu sumber kebenaran** untuk seluruh task program (13 Jul 2026 – 13 Feb 2027).
> Jangan edit checkbox secara manual di sini — checkbox akan **diupdate otomatis** oleh script berdasarkan `DAILY_LOG.md` setiap ada commit baru (lihat `README.md`).
> ID task ditulis dalam komentar HTML `<!-- id: ... -->` di setiap baris — dipakai untuk mencocokkan dengan `DAILY_LOG.md`. Jangan hapus/ubah ID.

---

## Bulan 1 — Fondasi Tools (13 Jul – 12 Ags 2026)

### Minggu 1

> 📘 Modul pembelajaran untuk seluruh task minggu ini: [`docs/modules/M1-W1-fondasi-tools.md`](../docs/modules/M1-W1-fondasi-tools.md)
> 🧭 **Wajib baca dulu:** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../docs/PANDUAN_BELAJAR_DAN_AI.md) — aturan pakai AI & apa arti "done" untuk task bertanda **[Wajib Refleksi]** di bawah.

- [x] <!-- id: M1.W1.T1 --> Buat akun GitHub, lengkapi profil dasar (foto, bio), dan aktifkan Two-Factor Authentication (2FA) — dikerjakan duluan karena environment kerja ke depan pakai GitHub
- Instalasi & konfigurasi VS Code + ekstensi dasar (dipecah jadi 4 sub-task di bawah — contoh breakdown lebih detail):
  - [x] <!-- id: M1.W1.T2.1 --> Instal VS Code + login sync settings (pakai akun GitHub dari task sebelumnya)
  - [x] <!-- id: M1.W1.T2.2 --> Instal & aktifkan ekstensi ESLint, Prettier, GitLens
  - [x] <!-- id: M1.W1.T2.3 --> Coba format-on-save & auto-lint di 1 file contoh
  - [x] <!-- id: M1.W1.T2.4 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: beda fungsi ESLint vs Prettier, masing-masing kasih 1 contoh konkret masalah yang mereka tangani (bukan definisi umum)
- Pengenalan terminal & command line dasar (dipecah jadi 7 sub-task — bagian paling banyak latihan penguatan, karena ini area yang kemarin masih rancu):
  - [x] <!-- id: M1.W1.T3.1 --> Pahami konsep dasar shell/terminal & struktur direktori (path absolut vs relatif)
  - [x] <!-- id: M1.W1.T3.2 --> Praktik navigasi: pwd, cd, ls (termasuk opsi -l -a)
  - [x] <!-- id: M1.W1.T3.3 --> Praktik manajemen file/folder: mkdir, touch, cat, cp, mv, rm
  - [x] <!-- id: M1.W1.T3.4 --> Latihan mandiri: buat & rapikan struktur folder project murni lewat terminal (tanpa file explorer)
  - [x] <!-- id: M1.W1.T3.5 --> [Wajib Refleksi] Prediksi-sebelum-eksekusi: untuk 5 command berbeda, tulis dulu prediksi hasil/efeknya SEBELUM dijalankan, baru jalankan & bandingkan (lihat daftar command di modul)
  - [x] <!-- id: M1.W1.T3.6 --> [Wajib Refleksi] Kuis pemahaman mandiri — jawab pertanyaan konsep di modul TANPA buka modul/AI/catatan, baru cek jawabannya setelahnya
  - [x] <!-- id: M1.W1.T3.7 --> [Wajib Refleksi] Teach-back ke mentor: jelaskan lisan (tanpa membaca catatan) beda path absolut vs relatif + fungsi tiap command dasar, pakai contoh bikinan sendiri
- Instalasi Node.js & npm, verifikasi versi (dipecah jadi 4 sub-task):
  - [x] <!-- id: M1.W1.T4.1 --> Instal Node.js versi LTS (disarankan via nvm)
  - [x] <!-- id: M1.W1.T4.2 --> Verifikasi instalasi: node -v, npm -v, npm config list
  - [x] <!-- id: M1.W1.T4.3 --> Jalankan file JavaScript pertama dengan node & pahami beda npm init vs npm install
  - [x] <!-- id: M1.W1.T4.4 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: apa itu `package.json`, dan kenapa `node_modules/` tidak boleh ikut di-commit ke Git (kaitkan ke pengalaman file `node_modules` yang sempat kebawa commit minggu ini)
- [x] <!-- id: M1.W1.T5 --> **[Proyek Pengembangan Skill Mandiri, target ±0,5 hari kerja]** Bangun 1 CLI tool kecil yang fungsional (bukan hello-world) — menggabungkan semua skill minggu ini (terminal, VS Code+lint, Node/npm+package eksternal baru). Lihat detail requirement & acceptance criteria di modul.
- [x] <!-- id: M1.W1.T6 --> Evaluasi Minggu 1: demo singkat ke mentor (profil GitHub, VS Code + ekstensi aktif, navigasi terminal, `node -v`/`npm -v`, DAN demo langsung proyek pengembangan mandiri `T5`) + mentor tanya 2-3 variasi pertanyaan di luar contoh modul (lihat `docs/PANDUAN_BELAJAR_DAN_AI.md` bagian "Untuk mentor") + isi refleksi capaian/kesulitan di modul

### Minggu 2

> 📘 Modul pembelajaran untuk seluruh task minggu ini: [`docs/modules/M1-W2-git-github-dasar.md`](../docs/modules/M1-W2-git-github-dasar.md)
> 🧭 **Wajib baca dulu:** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../docs/PANDUAN_BELAJAR_DAN_AI.md) — sama seperti Minggu 1, task **[Wajib Refleksi]** baru `done` kalau bisa dijelaskan pakai kata sendiri.

- Git dasar: init, add, commit, status, log (dipecah jadi 5 sub-task):
  - [x] <!-- id: M1.W2.T1.1 --> Verifikasi Git terpasang (`git --version`) & konfigurasi identitas (`git config --global user.name`/`user.email`) — supaya commit tercatat sebagai kamu sendiri
  - [x] <!-- id: M1.W2.T1.2 --> Praktik siklus dasar: `git init`, `git status`, `git add`, `git commit` (bikin minimal 3 commit terpisah, bukan 1 commit besar)
  - [x] <!-- id: M1.W2.T1.3 --> Praktik `.gitignore`: pastikan file/folder tertentu (misal `node_modules/`) tidak ikut ter-track
  - [x] <!-- id: M1.W2.T1.4 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: apa itu "staging area", dan kenapa Git punya tahap `add` sebelum `commit` (bukan langsung commit semua perubahan)
  - [x] <!-- id: M1.W2.T1.5 --> [Wajib Refleksi] Kuis mandiri TANPA buka modul/AI/catatan: beda `git status`, `git add`, `git commit`, `git log` — baru cek jawabannya setelahnya
- Eksplorasi command Git harian yang sering dipakai (dipecah jadi 7 sub-task — belum termasuk branching/merge, itu di Minggu 3):
  - [x] <!-- id: M1.W2.T2.1 --> `git diff` — lihat detail perubahan yang belum di-stage, dan `git diff --staged` untuk yang sudah di-stage tapi belum commit
  - [x] <!-- id: M1.W2.T2.2 --> `git restore <file>` (atau `git checkout -- <file>`) — batalkan perubahan file yang belum di-stage, balik ke versi commit terakhir
  - [x] <!-- id: M1.W2.T2.3 --> `git reset HEAD <file>` (unstage) vs `git reset --soft HEAD~1` (batalkan commit terakhir, perubahan tetap ada) — praktik beda-bedanya
  - [x] <!-- id: M1.W2.T2.4 --> `git commit --amend` — revisi pesan/isi commit TERAKHIR (catatan: cuma aman dipakai SEBELUM push)
  - [x] <!-- id: M1.W2.T2.5 --> `git stash` — simpan sementara perubahan yang belum siap commit (`stash`, `stash list`, `stash pop`)
  - [x] <!-- id: M1.W2.T2.6 --> `git log` lanjutan: `--oneline`, `--graph`, `--stat`, dan `git show <hash>` untuk lihat detail 1 commit
  - [x] <!-- id: M1.W2.T2.7 --> **[Wajib Refleksi]** `git revert` vs `git reset --hard` + force push — cara AMAN membatalkan commit yang SUDAH di-push, dikaitkan langsung ke insiden force-push minggu ini
- Konsep repository, remote, origin (dipecah jadi 2 sub-task):
  - [x] <!-- id: M1.W2.T3.1 --> Pahami konsep repository, remote, origin, dan beda repo lokal vs remote (akun GitHub sudah dibuat di Minggu 1)
  - [x] <!-- id: M1.W2.T3.2 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: kapan tepatnya perubahan lokal "beneran sampai" ke GitHub (bukan pas commit, tapi pas apa?)
- Push repo latihan pertama ke GitHub (dipecah jadi 4 sub-task):
  - [x] <!-- id: M1.W2.T4.1 --> Buat repo baru di GitHub + hubungkan repo lokal (`git remote add origin ...`)
  - [x] <!-- id: M1.W2.T4.2 --> Push pertama (`git branch -M main`, `git push -u origin main`) + verifikasi file & commit muncul di GitHub
  - [x] <!-- id: M1.W2.T4.3 --> Edit file lokal, commit, push lagi (siklus edit → commit → push lengkap, minimal 2x)
  - [x] <!-- id: M1.W2.T4.4 --> **[Wajib Refleksi — PENTING]** Simulasi "push ditolak" & cara menyelesaikannya dengan BENAR: edit file repo latihan langsung dari GitHub web (supaya remote punya perubahan yang lokal tidak punya), lalu coba `git push` dari lokal (harus muncul error "rejected"), selesaikan dengan `git pull` (BUKAN `git push --force`), baru push lagi sampai berhasil. Lihat detail lengkap & kaitan ke kejadian nyata di modul.
- [x] <!-- id: M1.W2.T5 --> **[Proyek Pengembangan Skill Mandiri, target ±0,5 hari kerja]** Naikkan project CLI dari Minggu 1 (`T5`) jadi repo GitHub tersendiri dengan histori commit yang rapi (bukan cuma disalin ke folder `submissions/`), dan pakai minimal 1 dari command eksplorasi (`stash`/`amend`/`revert`) di prosesnya — lihat requirement lengkap di modul.
- [x] <!-- id: M1.W2.T6 --> **[Uji Ulang Pemahaman Mandiri — case BARU, beda dari `M1.W1.T5`]** Bangun 1 mini-project kecil dengan topik yang sama sekali berbeda dari CLI monitoring tugas Minggu 1 (bukan lanjutan/variasi dari itu), menggabungkan semua skill Minggu 1+2 (terminal, Node/npm, Git dengan histori commit rapi) — dirancang supaya kamu benar-benar bisa jelaskan logikanya sendiri di sesi presentasi, bukan mengulang jawaban yang sudah dihafal dari project sebelumnya. Lihat requirement & aturan sesi presentasinya di modul.
- [x] <!-- id: M1.W2.T7 --> Evaluasi Minggu 2: demo ke mentor (jalankan git dasar + command eksplorasi langsung, tunjukkan repo latihan yang sudah ter-push, tunjukkan repo hasil `T5`, DAN presentasi mini-project `T6`) + mentor tanya 2-3 variasi pertanyaan (termasuk soal skenario push ditolak & kapan pakai revert) + isi refleksi capaian/kesulitan di modul

### Minggu 3

> 📘 Modul pembelajaran untuk seluruh task minggu ini: [`docs/modules/M1-W3-branching-pr.md`](../docs/modules/M1-W3-branching-pr.md)
> 🧭 **Wajib baca dulu:** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../docs/PANDUAN_BELAJAR_DAN_AI.md) — sama seperti minggu-minggu sebelumnya, task **[Wajib Refleksi]** baru `done` kalau bisa dijelaskan pakai kata sendiri.

- Branching dasar (dipecah jadi 4 sub-task):
  - [x] <!-- id: M1.W3.T1.1 --> Pahami konsep branch: kenapa kerja paralel (fitur A & fitur B bersamaan) butuh branch, bukan langsung di `main`
  - [x] <!-- id: M1.W3.T1.2 --> Praktik: `git branch` (lihat daftar), `git switch -c <nama>` (atau `git checkout -b <nama>`) buat & pindah branch baru, `git switch main` balik ke main
  - [x] <!-- id: M1.W3.T1.3 --> Praktik: `git branch -d <nama>` hapus branch yang sudah tidak dipakai (dan `-D` untuk paksa hapus yang belum di-merge — pakai hati-hati)
  - [x] <!-- id: M1.W3.T1.4 --> [Wajib Refleksi] Kuis mandiri TANPA modul/AI/catatan: apa beda `git branch <nama>` dengan `git switch -c <nama>`? Kenapa perubahan di 1 branch tidak muncul di branch lain sebelum di-merge?
- Merge dasar (dipecah jadi 3 sub-task):
  - [x] <!-- id: M1.W3.T2.1 --> Pahami beda **fast-forward merge** (branch tidak punya commit baru di `main` sejak dipisah) vs **3-way merge** (`main` juga punya commit baru sendiri)
  - [x] <!-- id: M1.W3.T2.2 --> Praktik fast-forward merge: buat branch, commit 1-2x, `git switch main`, `git merge <nama-branch>` — cek `git log --graph` sebelum & sesudah
  - [x] <!-- id: M1.W3.T2.3 --> [Wajib Refleksi] Praktik 3-way merge: bikin commit baru juga di `main` (file lain) sebelum merge branch — jalankan `git merge`, perhatikan muncul "merge commit" baru, jelaskan bedanya dengan fast-forward tadi pakai `git log --graph`
- Resolve conflict (dipecah jadi 3 sub-task — ini yang paling sering bikin panik kalau belum pernah ngalamin):
  - [x] <!-- id: M1.W3.T3.1 --> Simulasi conflict nyata: di 2 branch berbeda, edit **baris yang sama** di file yang sama, lalu coba `git merge` — biarkan conflict-nya muncul, jangan panik
  - [x] <!-- id: M1.W3.T3.2 --> Praktik resolve manual: buka file yang conflict, pahami penanda `<<<<<<<`/`=======`/`>>>>>>>`, putuskan versi mana yang dipakai (atau gabungan keduanya), hapus semua penanda, `git add`, `git commit` untuk menyelesaikan merge
  - [x] <!-- id: M1.W3.T3.3 --> **[Wajib Refleksi]** Jelaskan dengan kata sendiri: kenapa Git tidak bisa auto-merge di kasus itu (apa yang bikin Git "bingung"), dan kaitkan ke pengalaman nyata kalau kamu pernah lihat conflict sebelumnya
- Push branch & Pull Request pertama (dipecah jadi 5 sub-task):
  - [x] <!-- id: M1.W3.T4.1 --> Push branch baru (bukan `main`) ke GitHub: `git push -u origin <nama-branch>`
  - [x] <!-- id: M1.W3.T4.2 --> Buat Pull Request pertama di GitHub: dari branch tadi ke `main`, isi judul & deskripsi yang jelas (apa isi perubahannya, bukan cuma "update")
  - [x] <!-- id: M1.W3.T4.3 --> Review PR bareng mentor: minta mentor kasih komentar/review di PR-nya (lewat GitHub, bukan chat biasa), coba respons/perbaiki kalau ada masukan
  - [x] <!-- id: M1.W3.T4.4 --> Merge PR lewat GitHub (setelah disetujui), lalu di lokal: `git switch main`, `git pull`, dan hapus branch yang sudah di-merge (`git branch -d`)
  - [x] <!-- id: M1.W3.T4.5 --> **[Wajib Refleksi]** Jelaskan dengan kata sendiri: kenapa alur branch → PR → review → merge ini lebih aman dibanding langsung `push` ke `main` (kaitkan ke insiden force-push di repo tracker ini — PR/review itu semacam "lapis pengaman" tambahan)
- [x] <!-- id: M1.W3.T5 --> **[Proyek Pengembangan Skill Mandiri, target ±0,5 hari kerja]** Tambah 1 fitur baru ke salah satu project kamu (CLI Minggu 1 atau mini-project Minggu 2) **lewat alur branch → PR → merge yang benar** (bukan push langsung ke `main`), dan sengaja alami minimal 1 conflict asli di prosesnya. Lihat requirement lengkap di modul.
- [x] <!-- id: M1.W3.T6 --> Evaluasi Minggu 3: demo ke mentor — praktik branching & merge langsung, tunjukkan PR yang sudah dibuat & di-merge di `T5`, ceritakan proses resolve conflict yang dialami + mentor tanya 2-3 variasi pertanyaan + isi refleksi capaian/kesulitan di modul

### Minggu 4

> 📘 Modul pembelajaran untuk seluruh task minggu ini: [`docs/modules/M1-W4-html-css-revamp.md`](../docs/modules/M1-W4-html-css-revamp.md)
> 🧭 **Wajib baca dulu:** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../docs/PANDUAN_BELAJAR_DAN_AI.md) — sama seperti minggu-minggu sebelumnya, task **[Wajib Refleksi]** baru `done` kalau bisa dijelaskan pakai kata sendiri.

- **Git Recall Drill** (dipecah jadi 4 sub-task — **ditambahkan karena evaluasi Minggu 2/3 menunjukkan sebagian command Git masih belum lancar, kadang perlu buka dokumentasi/AI lagi**; ini bukan materi baru, murni latihan mengingat ulang tanpa bantuan):
  - [x] <!-- id: M1.W4.T1.1 --> **TANPA modul/AI/catatan**, lakukan 1 siklus penuh dari nol: `git init`, buat 2 file, `add`+`commit` minimal 3x terpisah, buat branch baru & pindah, commit lagi di branch itu, `merge` balik ke `main`, `push` ke GitHub. Catat jujur command mana yang lancar dari ingatan, mana yang sempat harus buka catatan/AI
  - [x] <!-- id: M1.W4.T1.2 --> [Wajib Refleksi] Buat "cheat sheet pribadi": daftar command yang tadi sempat lupa/ragu di `T1.1`, tulis command + fungsinya pakai bahasamu sendiri (bukan disalin persis dari modul) — ini jadi rujukan cepat pribadi ke depan, bukan pengganti ingatan
  - [x] <!-- id: M1.W4.T1.3 --> Ulangi simulasi "push ditolak" (seperti Minggu 2 `T4.4`) dari nol — kali ini coba selesaikan dulu dari ingatan, TANPA buka modul asli; kalau benar-benar lupa baru boleh cek cheat sheet pribadi dari `T1.2` (bukan langsung ke modul/AI)
  - [x] <!-- id: M1.W4.T1.4 --> Teach-back singkat ke mentor: jelaskan lisan garis besar alur kerja Git harian (branch → commit → push/pull → PR → merge) **tanpa membaca catatan sama sekali**
- HTML Semantik (dipecah jadi 3 sub-task):
  - [x] <!-- id: M1.W4.T2.1 --> Pelajari elemen semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) vs `<div>` generik — apa gunanya masing-masing
  - [x] <!-- id: M1.W4.T2.2 --> Praktik: ambil 1 halaman HTML lama (boleh project to-do list di `T4`), ganti `<div>` yang polos jadi elemen semantik yang sesuai
  - [x] <!-- id: M1.W4.T2.3 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: kenapa HTML semantik penting untuk aksesibilitas (screen reader) dan SEO — bukan cuma "biar rapi keliatannya"
- CSS Flexbox & Grid (dipecah jadi 5 sub-task):
  - [x] <!-- id: M1.W4.T3.1 --> Flexbox dasar: `display: flex`, `justify-content`, `align-items`, `flex-direction`, `gap`
  - [x] <!-- id: M1.W4.T3.2 --> Grid dasar: `display: grid`, `grid-template-columns`, `gap`
  - [x] <!-- id: M1.W4.T3.3 --> Praktik: bikin 1 layout kecil pakai Flexbox (misal navbar horizontal) DAN 1 layout kecil pakai Grid (misal galeri kartu 3 kolom)
  - [x] <!-- id: M1.W4.T3.4 --> Responsive dasar: `@media` query, minimal 1 breakpoint (misal layout berubah di bawah 600px) — coba resize browser langsung, jangan cuma asumsi
  - [x] <!-- id: M1.W4.T3.5 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: kapan pilih Flexbox, kapan pilih Grid — kasih 1 contoh kasus nyata masing-masing (bukan definisi umum dari dokumentasi)
- Revamp project to-do list lama (dipecah jadi 4 sub-task):
  - [x] <!-- id: M1.W4.T4.1 --> Audit project lama: screenshot/catat masalah HTML/CSS yang ada sekarang ("before") — struktur `<div>` generik semua, tidak responsive, dll
  - [x] <!-- id: M1.W4.T4.2 --> Refactor HTML jadi semantik (pakai hasil belajar bagian 2)
  - [x] <!-- id: M1.W4.T4.3 --> Refactor CSS pakai Flexbox/Grid + responsive (pakai hasil belajar bagian 3)
  - [x] <!-- id: M1.W4.T4.4 --> [Wajib Refleksi] Bandingkan before vs after (screenshot keduanya) — jelaskan perubahan spesifik apa saja dan alasannya, bukan cuma "jadi lebih rapi"
- Commit history rapi & alur kerja yang benar (dipecah jadi 4 sub-task — **ini menegakkan lagi pelajaran dari insiden `T4.3`/`T4.4` Minggu 3**, di mana PR sempat ditandai ter-merge padahal belum pernah direview):
  - [x] <!-- id: M1.W4.T5.1 --> Kerjakan seluruh revamp ini di **branch terpisah** (bukan langsung di `main`) — kebiasaan dari Minggu 3
  - [x] <!-- id: M1.W4.T5.2 --> Commit per langkah kecil bermakna (minimal 5 commit terpisah: HTML semantik, layout Flexbox, layout Grid, responsive, cleanup — bukan 1 commit besar "revamp selesai")
  - [x] <!-- id: M1.W4.T5.3 --> Buat PR dan merge sendiri setelah yakin (tidak perlu menunggu review async terpisah) — **PR ini akan dibahas & direview bareng mentor sekalian saat sesi evaluasi `T7`**, jadi jangan dihapus/di-cleanup dulu sebelum evaluasi berlangsung
  - [x] <!-- id: M1.W4.T5.4 --> [Wajib Refleksi] Buka `git log` project ini — apakah histori commit-nya bisa "dibaca sebagai cerita" perkembangan (jelas urutan & isinya), atau malah berantakan/campur aduk? Evaluasi jujur pesan commit kamu sendiri
- [x] <!-- id: M1.W4.T6 --> **[Proyek Pengembangan Skill Mandiri, target ±0,5 hari kerja]** Bikin 1 halaman statis baru dari nol (boleh landing page sederhana, portofolio mini, dll — bebas topik) yang menerapkan semua skill minggu ini: HTML semantik, Flexbox+Grid, responsive, lewat alur branch→PR→merge, commit history rapi, **tanpa** CSS class nganggur/komentar placeholder tersisa (PR-nya dibahas bareng mentor saat evaluasi `T7`, tidak perlu direview terpisah dulu). Lihat requirement lengkap di modul.
- [x] <!-- id: M1.W4.T7 --> Evaluasi Minggu 4: demo ke mentor — tunjukkan project revamp & proyek mandiri `T6` langsung di browser (termasuk resize responsive live), **review bareng PR dari `T5`/`T6` sekalian di sesi ini**, buka `git log`, jelaskan pilihan Flexbox vs Grid di tiap bagian, DAN demo command Git secara acak dari ingatan (cek hasil `T1`) + mentor tanya 2-3 variasi pertanyaan + isi refleksi capaian/kesulitan di modul

---

## Bulan 2 — JavaScript Modern & Node (13 Ags – 12 Sep 2026)

### Minggu 1

> 📘 Modul pembelajaran untuk seluruh task minggu ini: [`docs/modules/M2-W1-es6-modern-js.md`](../docs/modules/M2-W1-es6-modern-js.md)
> 🧭 **Wajib baca dulu:** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../docs/PANDUAN_BELAJAR_DAN_AI.md) — sama seperti minggu-minggu sebelumnya, task **[Wajib Refleksi]** baru `done` kalau bisa dijelaskan pakai kata sendiri.

- `let`/`const` vs `var` (dipecah jadi 2 sub-task):
  - [x] <!-- id: M2.W1.T1.1 --> Praktik: buktikan langsung beda scope `var` (function-scope, "bocor" keluar blok `if`/`for`) vs `let`/`const` (block-scope, terkunci di dalam blok)
  - [x] <!-- id: M2.W1.T1.2 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: kenapa `var` dianggap "berbahaya" di kode modern, dan kapan (kalau ada) masih masuk akal dipakai
- Arrow function (dipecah jadi 3 sub-task — **ini yang paling sering disalahpahami**, mirip kejadian `fr` vs `vh` minggu lalu, arrow function BUKAN cuma "versi singkat" dari function biasa):
  - [x] <!-- id: M2.W1.T2.1 --> Sintaks dasar arrow function, bandingkan dengan `function` biasa untuk kasus sederhana (tanpa `this`)
  - [x] <!-- id: M2.W1.T2.2 --> Praktik: buktikan langsung beda `this` antara arrow function dan `function` biasa di dalam sebuah method objek (bikin 1 objek dengan method versi `function` dan versi arrow, bandingkan `this` di dalamnya)
  - [x] <!-- id: M2.W1.T2.3 --> **[Wajib Refleksi — PENTING]** Jelaskan dengan kata sendiri: arrow function itu BUKAN cuma "versi singkat" dari `function` — apa beda fundamentalnya (soal `this`), dan kasih 1 contoh situasi nyata di mana salah pilih salah satu bisa bikin bug
- Template literal (dipecah jadi 2 sub-task):
  - [x] <!-- id: M2.W1.T3.1 --> Praktik: `${...}` interpolation dan string multi-baris, bandingkan dengan concatenation `+` biasa
  - [x] <!-- id: M2.W1.T3.2 --> [Wajib Refleksi] Kapan pakai template literal, kapan concatenation `+` masih masuk akal — kasih 1 contoh kasus nyata
- Destructuring (dipecah jadi 3 sub-task):
  - [x] <!-- id: M2.W1.T4.1 --> Destructuring array dasar (`const [a, b] = [1, 2]`)
  - [x] <!-- id: M2.W1.T4.2 --> Destructuring object + default value + rename (`const {nama: n = "?"} = obj`)
  - [x] <!-- id: M2.W1.T4.3 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: kenapa destructuring lebih enak dibanding akses manual (`obj.properti` berkali-kali), kasih 1 contoh kode sebelum/sesudah
- Kuis & Latihan Soal (dipecah jadi 2 sub-task):
  - [x] <!-- id: M2.W1.T5.1 --> [Wajib Refleksi] Kuis mandiri TANPA modul/AI/catatan: minimal 8 soal campuran (let/const, `this` arrow vs function, template literal, destructuring) — baru cek jawabannya setelahnya
  - [x] <!-- id: M2.W1.T5.2 --> Latihan soal kecil ES6+ (5-10 soal coding kecil, boleh dicari/dibuat sendiri) — kerjakan dulu semampunya SEBELUM tanya AI
- [x] <!-- id: M2.W1.T6 --> **[Proyek Pengembangan Skill Mandiri, target ±0,5 hari kerja]** Refactor 1 script/bagian kode lama (boleh bagian JS dari project to-do list Minggu 4, boleh script baru) supaya pakai ES6+ penuh (`let`/`const`, arrow function DI TEMPAT YANG TEPAT — bukan asal ganti semua `function`, template literal, destructuring), sengaja sertakan minimal 1 kasus nyata di mana pilihan arrow vs `function` biasa penting (bukan cuma soal gaya penulisan). Lewat alur branch→commit rapi→PR (dibahas bareng mentor saat evaluasi `T7`, tidak perlu direview terpisah). Lihat requirement lengkap di modul.
- [x] <!-- id: M2.W1.T7 --> Evaluasi Minggu ini: demo ke mentor — tunjukkan hasil refactor `T6` di browser/terminal, jelaskan tiap keputusan (kapan arrow vs function biasa, kapan destructuring dipakai), review PR bareng, DAN jawab soal live yang menyasar kesalahpahaman umum (`this` arrow function) + mentor tanya 2-3 variasi pertanyaan + isi refleksi capaian/kesulitan di modul

### Minggu 2

> 📘 Modul pembelajaran untuk seluruh task minggu ini: [`docs/modules/M2-W2-array-methods-dom-events.md`](../docs/modules/M2-W2-array-methods-dom-events.md)
> 🧭 **Wajib baca dulu:** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../docs/PANDUAN_BELAJAR_DAN_AI.md) — sama seperti minggu-minggu sebelumnya, task **[Wajib Refleksi]** baru `done` kalau bisa dijelaskan pakai kata sendiri.
> 🗓️ **Minggu kerja pendek:** Senin 17 Ags 2026 libur — task minggu ini dirancang untuk **4 hari kerja** (Selasa 18 – Jumat 21 Ags 2026), bukan 5 hari seperti biasanya.
>
> ⚠️ **Catatan penting dari evaluasi Minggu 1 Bulan 2:** kelihatan pola "yang penting task ke-checklist selesai" — kode sempat jalan sekali, tidak diulang/didalami, akibatnya beberapa fungsi yang **kamu buat sendiri** tidak bisa kamu jelaskan lagi saat ditanya, dan sempat coba-coba/lihat modul lagi untuk jawab. Mulai `reduce`/`find` (Rabu) di bawah, task praktik inti **sudah berisi minimal 2 putaran dengan data/kasus berbeda di dalam task yang sama** (bukan cuma 1x jalan), ditambah 1 ronde pengulangan penuh dari nol yang ditandai **[Ulangi Tanpa Contek]**. (Bagian `map`/`filter` — task hari Selasa 18 Agustus — tetap versi biasa, tidak ikut dirombak.)
> 👤 **Semua task minggu ini dikerjakan mandiri, sendirian, tanpa sesi bareng mentor** — termasuk task refleksi/teach-back dan uji ulang pemahaman (dikerjakan sendiri, dicatat jujur di log). **Satu-satunya sesi bareng mentor minggu ini adalah evaluasi akhir `T7`.**

- `map` & `filter` (dipecah jadi 3 sub-task):
  - [x] <!-- id: M2.W2.T1.1 --> Praktik `map`: transformasi tiap elemen array jadi array baru (misal array object siswa → array nama saja, atau array angka → array hasil kali 2)
  - [x] <!-- id: M2.W2.T1.2 --> Praktik `filter`: seleksi elemen array berdasarkan kondisi jadi array baru yang lebih pendek (misal filter siswa dengan nilai ≥ 75)
  - [x] <!-- id: M2.W2.T1.3 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: kenapa `map`/`filter` **selalu** menghasilkan array baru (tidak mengubah array asli) — bandingkan dengan `for` loop biasa yang biasa dipakai untuk hal yang sama, kasih 1 contoh kode sebelum/sesudah
- `reduce` & `find` (dipecah jadi 3 sub-task — **ini yang paling sering disalahpahami**, mirip kejadian `fr`/`vh` dan `this` arrow function di minggu-minggu lalu: `reduce` BUKAN cuma "for-loop yang lebih ribet ditulis", tapi cara berpikir akumulasi):
  - [x] <!-- id: M2.W2.T2.1 --> Praktik `find`: cari 1 elemen pertama yang cocok kondisi (misal cari 1 siswa berdasarkan id), bandingkan dengan `filter` (yang hasilnya array, bukan 1 elemen)
  - [x] <!-- id: M2.W2.T2.2 --> Praktik `reduce`: minimal 3 kasus berbeda — (a) total/sum dari array angka, (b) cari nilai max/min, (c) ubah array jadi 1 object (misal array transaksi → object rekap per kategori)
  - [x] <!-- id: M2.W2.T2.3 --> **[Wajib Refleksi — PENTING]** Jelaskan dengan kata sendiri: `reduce` itu BUKAN cuma "`for` loop yang ditulis lebih ribet" — apa beda fundamentalnya (konsep accumulator yang jalan terus dari elemen ke elemen), dan kasih 1 contoh kasus nyata di mana `reduce` lebih pas dipakai dibanding `map`+`filter` digabung manual
- DOM manipulation dasar (dipecah jadi 4 sub-task):
  - [x] <!-- id: M2.W2.T3.1 --> Ambil elemen dari HTML: `document.querySelector`/`querySelectorAll`, bandingkan dengan `getElementById`/`getElementsByClassName` yang lebih lama
  - [x] <!-- id: M2.W2.T3.2 --> Bikin & sisipkan elemen baru secara dinamis: `document.createElement`, `appendChild`/`append`, set atribut (`setAttribute`, `classList.add`)
  - [ ] <!-- id: M2.W2.T3.3 --> Ubah isi elemen: `textContent` vs `innerHTML` — praktik keduanya untuk menampilkan data yang sama
  - [ ] <!-- id: M2.W2.T3.4 --> **[Wajib Refleksi]** Jelaskan dengan kata sendiri: kenapa `innerHTML` berisiko (XSS) kalau isinya berasal dari input user/data luar yang tidak dipercaya, dan kapan `textContent` adalah pilihan yang lebih aman — kasih 1 contoh skenario nyata (misal render nama user dari form ke halaman)
  - [ ] <!-- id: M2.W2.T3.5 --> **[Ulangi Tanpa Contek]** TANPA membuka kode `T3.2`/`T3.3` atau modul, render **1 topik data baru lagi** (beda dari yang sudah dipakai di `T3.1`/`T3.2`) ke DOM dari nol — bikin elemen lewat `createElement`, pakai `textContent` untuk isinya. Catat jujur bagian mana yang sempat lupa command-nya
  - [ ] <!-- id: M2.W2.T3.6 --> [Wajib Refleksi] Kuis mandiri TANPA modul/AI/catatan (5 soal DOM, minimal 1 soal berupa potongan kode `createElement`+`appendChild` yang harus kamu bayangkan/gambarkan tampilan HTML hasilnya SEBELUM dijalankan di browser)
- Event handling — **Jumat 21 Agustus** (dipecah jadi 6 sub-task — termasuk ronde pengulangan):
  - [ ] <!-- id: M2.W2.T4.1 --> Praktik `addEventListener` dasar — **2 putaran, kasus berbeda tiap putaran**: putaran 1 klik tombol + submit form (`event.preventDefault()` supaya form tidak reload halaman); putaran 2 ulangi di form/tombol dengan skenario input yang berbeda (misal input angka + validasi sederhana)
  - [ ] <!-- id: M2.W2.T4.2 --> Pahami & pakai **event object**: `event.target`, `event.currentTarget`, ambil value dari elemen yang memicu event — praktik di list siswa (`T3.2` putaran 1) DAN di list data lain (`T3.2` putaran 2) supaya terbukti bukan hafalan 1 kasus
  - [ ] <!-- id: M2.W2.T4.3 --> Praktik **event delegation** — **2 putaran, data berbeda tiap putaran**: putaran 1 pasang 1 listener di elemen parent (misal `<ul>`) untuk menangani klik semua `<li>` di dalamnya (termasuk yang ditambahkan belakangan lewat `createElement`), bandingkan dengan pasang listener manual di setiap elemen anak satu-satu; putaran 2 ulangi di list data yang berbeda dari putaran 1
  - [ ] <!-- id: M2.W2.T4.4 --> [Wajib Refleksi] Jelaskan dengan kata sendiri: keuntungan event delegation dibanding pasang listener di setiap elemen anak satu-satu — kaitkan langsung ke elemen yang dibuat dinamis lewat `createElement` di `T3.2` (kalau listener dipasang manual per elemen, elemen baru yang dibuat belakangan tidak otomatis punya listener)
  - [ ] <!-- id: M2.W2.T4.5 --> **[Ulangi Tanpa Contek]** TANPA membuka kode `T4.3` atau modul, ulangi event delegation dari nol untuk **ke-3 kalinya**, pakai **1 topik data baru lagi** — kali ini tambahkan **fitur baru** yang belum pernah dicoba sebelumnya: tombol "hapus" di tiap item yang juga ditangani lewat event delegation (bukan listener per-item). Catat jujur bagian mana yang sempat lupa/ragu
  - [ ] <!-- id: M2.W2.T4.6 --> [Wajib Refleksi] Kuis mandiri TANPA modul/AI/catatan (5 soal event handling, minimal 1 soal skenario debug: diberi potongan kode yang listener-nya TIDAK jalan untuk elemen baru — kamu harus temukan & jelaskan kenapa, tanpa mencoba-coba run kode dulu, baru verifikasi jawabanmu dengan menjalankannya)
- [ ] <!-- id: M2.W2.T5 --> **[Uji Ulang Pemahaman Mandiri — kasus pilihan sendiri]** Sebelum mengerjakan proyek mandiri `T6`, sendirian (TIDAK perlu sesi/kehadiran mentor): pilih/karang sendiri 1 kasus kombinasi baru (gabungan minimal 2 dari `map`/`filter`/`reduce`/`find` + render ke DOM + event delegation) dengan topik data yang **belum pernah kamu pakai di task manapun minggu ini** — kerjakan **TANPA membuka modul/AI/catatan/kode task sebelumnya**. Ini bukan untuk dinilai benar/salah sempurna, tapi untuk memverifikasi jujur ke diri sendiri apakah pemahamannya sudah nempel atau masih hafalan/contek dari task-task sebelumnya — kalau macet total di suatu bagian, catat jujur di log dan ulangi bagian itu lagi sebelum lanjut ke `T6`. Hasil sesi ini diceritakan ke mentor nanti pas evaluasi `T7`, bukan sesi terpisah.
- [ ] <!-- id: M2.W2.T6 --> **[Proyek Pengembangan Skill Mandiri, target ±0,5 hari kerja]** Bangun 1 mini-app interaktif tanpa framework (murni HTML+CSS+JS) yang menggabungkan semua skill minggu ini: minimal 1 pemakaian nyata `map`/`filter`/`reduce`/`find` untuk mengolah data (boleh array of object statis di dalam kode), render hasilnya ke DOM lewat `createElement`, dan tangani interaksi user lewat event handling **termasuk event delegation** untuk elemen yang dibuat dinamis. Contoh topik: daftar belanja dengan filter kategori & total harga (`reduce`), atau daftar tugas dengan filter status & pencarian (`filter`/`find`). **Wajib tambahkan komentar singkat di kode untuk tiap fungsi array (`map`/`filter`/`reduce`/`find`) yang menjelaskan KENAPA fungsi itu yang dipilih** (bukan cuma kode-nya jalan) — ini jadi bukti tertulis pemahaman, bukan cuma hasil coba-coba. Lewat alur branch→commit rapi→PR (dibahas bareng mentor saat evaluasi `T7`, tidak perlu direview terpisah). Lihat requirement lengkap di modul.
- [ ] <!-- id: M2.W2.T7 --> **Evaluasi Minggu ini (satu-satunya sesi bareng mentor minggu ini):** demo ke mentor — jalankan mini-app `T6` langsung di browser, jelaskan tiap keputusan (kapan pakai `map` vs `filter` vs `reduce` vs `find`, kapan `textContent` vs `innerHTML`, kenapa perlu event delegation) berdasarkan komentar kode yang ditulis di `T6`, review PR bareng, ceritakan hasil teach-back mandiri `T2.5` dan sesi uji ulang mandiri `T5` (bagian mana yang sempat macet), jawab soal live yang menyasar kesalahpahaman umum (`reduce` dikira "cuma for-loop ribet") **DAN mentor akan minta modifikasi kecil dadakan langsung di kode `T6`** (misal tambah 1 fitur filter baru) di tempat, tanpa buka modul, untuk memastikan pemahamannya bukan hafalan + mentor tanya 2-3 variasi pertanyaan lain + isi refleksi capaian/kesulitan di modul

### Minggu 3

- [ ] <!-- id: M2.W3.T1 --> Async/await & Promise dasar
- [ ] <!-- id: M2.W3.T2 --> Konsumsi public API sederhana dengan fetch (tampilkan data ke DOM)

### Minggu 4

- [ ] <!-- id: M2.W4.T1 --> Intro Node.js & npm (menjalankan script, install package)
- [ ] <!-- id: M2.W4.T2 --> Project mini: to-do list vanilla JS + localStorage
- [ ] <!-- id: M2.W4.T3 --> Git workflow lengkap untuk project mini (branch per fitur + PR)

---

## Bulan 3 — Vue 3 Fundamental (13 Sep – 12 Okt 2026)

### Minggu 1

- [ ] <!-- id: M3.W1.T1 --> Setup project Vue 3 + Vite dari nol
- [ ] <!-- id: M3.W1.T2 --> Konsep Single File Component (.vue): template/script/style

### Minggu 2

- [ ] <!-- id: M3.W2.T1 --> Reactivity: ref & reactive
- [ ] <!-- id: M3.W2.T2 --> Props & emit events antar komponen

### Minggu 3

- [ ] <!-- id: M3.W3.T1 --> Computed & watch
- [ ] <!-- id: M3.W3.T2 --> Lifecycle hooks (onMounted, dll)

### Minggu 4

- [ ] <!-- id: M3.W4.T1 --> Latihan v-if / v-for / v-model (counter, form, list dinamis)
- [ ] <!-- id: M3.W4.T2 --> Vue Router 4 dasar: routing antar halaman

---

## Bulan 4 — Pinia, Olsera Design System & Code Reading (13 Okt – 12 Nov 2026)

### Minggu 1

- [ ] <!-- id: M4.W1.T1 --> Pinia dasar: state, getters, actions
- [ ] <!-- id: M4.W1.T2 --> Refactor mini project bulan 3 pakai Pinia

### Minggu 2

- [ ] <!-- id: M4.W2.T1 --> Instalasi & pemakaian Olsera Design System (`@olsera/tokens`, `DsButton`, dll)
- [ ] <!-- id: M4.W2.T2 --> Styling dengan design token & dark mode dasar

### Minggu 3

- [ ] <!-- id: M4.W3.T1 --> Prototipe UI kecil (halaman list + form) pakai Olsera DS

### Minggu 4

- [ ] <!-- id: M4.W4.T1 --> Sesi membaca struktur modul nyata di `frontend-olseraV2`/`frontend-zenwell` (bareng mentor, observasi saja)
- [ ] <!-- id: M4.W4.T2 --> Tulis catatan observasi: apa yang dipahami, apa yang masih bingung

---

## Bulan 5 — Mulai Project Aplikasi Internal (13 Nov – 12 Des 2026)

### Minggu 1

- [ ] <!-- id: M5.W1.T1 --> Breakdown requirement & wireframe project internal
- [ ] <!-- id: M5.W1.T2 --> Setup repo project internal (Vue 3 + Vite + Pinia + Olsera DS)

### Minggu 2

- [ ] <!-- id: M5.W2.T1 --> Struktur folder & skeleton komponen utama
- [ ] <!-- id: M5.W2.T2 --> Setup routing halaman-halaman utama

### Minggu 3

- [ ] <!-- id: M5.W3.T1 --> Implementasi fitur inti #1
- [ ] <!-- id: M5.W3.T2 --> Implementasi fitur inti #2

### Minggu 4

- [ ] <!-- id: M5.W4.T1 --> Implementasi fitur inti #3
- [ ] <!-- id: M5.W4.T2 --> Integrasi API/dummy data

---

## Bulan 6 — Lanjut Internal + Mulai Project Pribadi (13 Des 2026 – 12 Jan 2027)

### Minggu 1

- [ ] <!-- id: M6.W1.T1 --> Lanjutan fitur project internal (sisa dari bulan 5)
- [ ] <!-- id: M6.W1.T2 --> Bug fixing ringan project internal

### Minggu 2

- [ ] <!-- id: M6.W2.T1 --> Definisikan scope project pribadi (kecil & realistis)
- [ ] <!-- id: M6.W2.T2 --> Setup repo & skeleton project pribadi

### Minggu 3

- [ ] <!-- id: M6.W3.T1 --> Implementasi awal project pribadi (fitur inti #1)

### Minggu 4

- [ ] <!-- id: M6.W4.T1 --> Progres paralel kedua project
- [ ] <!-- id: M6.W4.T2 --> Review gabungan bareng mentor (cek keselarasan target bulan 7)

---

## Bulan 7 — Finalisasi (13 Jan – 13 Feb 2027)

### Minggu 1

- [ ] <!-- id: M7.W1.T1 --> Bug fixing & cleanup kode project internal
- [ ] <!-- id: M7.W1.T2 --> Bug fixing & cleanup kode project pribadi

### Minggu 2

- [ ] <!-- id: M7.W2.T1 --> Dokumentasi README project internal
- [ ] <!-- id: M7.W2.T2 --> Dokumentasi README project pribadi

### Minggu 3

- [ ] <!-- id: M7.W3.T1 --> Deployment project internal (Netlify/Vercel/GitHub Pages)
- [ ] <!-- id: M7.W3.T2 --> Deployment project pribadi

### Minggu 4

- [ ] <!-- id: M7.W4.T1 --> Latihan presentasi
- [ ] <!-- id: M7.W4.T2 --> Sesi presentasi akhir ke mentor/tim

---

## Backlog / Task Tambahan (Ad-hoc)

> Section ini untuk task **di luar roadmap awal** — issue yang ditemukan di tengah jalan, request eksternal, atau task dadakan. Boleh tambah heading `###` baru kapan saja untuk mengelompokkan (misal per bulan ditemukan, atau per jenis). ID bebas asal unik dan belum dipakai di section lain.

### Issue & Task Eksternal

- [ ] <!-- id: ADHOC.1 --> Contoh: perbaiki bug tampilan yang ditemukan mentor saat review (hapus/ganti dengan task asli)
