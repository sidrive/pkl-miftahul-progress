# Task List — Pendampingan PKL Frontend (Miftahul Al Gazi Hermansyah)

> File ini adalah **satu sumber kebenaran** untuk seluruh task program (13 Jul 2026 – 13 Feb 2027).
> Jangan edit checkbox secara manual di sini — checkbox akan **diupdate otomatis** oleh script berdasarkan `DAILY_LOG.md` setiap ada commit baru (lihat `README.md`).
> ID task ditulis dalam komentar HTML `<!-- id: ... -->` di setiap baris — dipakai untuk mencocokkan dengan `DAILY_LOG.md`. Jangan hapus/ubah ID.

---

## Bulan 1 — Fondasi Tools (13 Jul – 12 Ags 2026)

### Minggu 1
- Instalasi & konfigurasi VS Code + ekstensi dasar (dipecah jadi 3 sub-task di bawah — contoh breakdown lebih detail):
  - [ ] <!-- id: M1.W1.T1.1 --> Instal VS Code + login sync settings
  - [ ] <!-- id: M1.W1.T1.2 --> Instal & aktifkan ekstensi ESLint, Prettier, GitLens
  - [ ] <!-- id: M1.W1.T1.3 --> Coba format-on-save & auto-lint di 1 file contoh
- [ ] <!-- id: M1.W1.T2 --> Pengenalan terminal & command line dasar (cd, ls, mkdir, rm, cat)
- [ ] <!-- id: M1.W1.T3 --> Instalasi Node.js & npm, verifikasi versi

### Minggu 2
- [ ] <!-- id: M1.W2.T1 --> Git dasar: init, add, commit, status, log, .gitignore
- [ ] <!-- id: M1.W2.T2 --> Membuat akun GitHub, konsep repository & remote
- [ ] <!-- id: M1.W2.T3 --> Push repo latihan pertama ke GitHub

### Minggu 3
- [ ] <!-- id: M1.W3.T1 --> Git branching & merge dasar
- [ ] <!-- id: M1.W3.T2 --> Alur push/pull, resolve conflict sederhana
- [ ] <!-- id: M1.W3.T3 --> Membuat Pull Request pertama ke repo latihan + review bareng mentor

### Minggu 4
- [ ] <!-- id: M1.W4.T1 --> Review HTML semantik & CSS (flexbox/grid, responsive dasar)
- [ ] <!-- id: M1.W4.T2 --> Revamp 1 project lama (to-do list) dengan HTML/CSS lebih rapi
- [ ] <!-- id: M1.W4.T3 --> Commit history rapi (per fitur/perbaikan, bukan 1 commit besar)

---

## Bulan 2 — JavaScript Modern & Node (13 Ags – 12 Sep 2026)

### Minggu 1
- [ ] <!-- id: M2.W1.T1 --> ES6+ syntax: let/const, arrow function, template literal, destructuring
- [ ] <!-- id: M2.W1.T2 --> Latihan soal kecil ES6+ (5–10 soal)

### Minggu 2
- [ ] <!-- id: M2.W2.T1 --> Array & Object methods: map, filter, reduce, find
- [ ] <!-- id: M2.W2.T2 --> DOM manipulation & event handling (tanpa framework)

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
