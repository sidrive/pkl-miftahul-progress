# Modul Minggu 1 — Fondasi Tools

> Modul ini menemani task `M1.W1.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai mengerjakan satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang
> sesuai (lihat contoh format di setiap bagian). Kerjakan urut dari atas ke bawah — akun GitHub
> dibuat **duluan** karena dipakai untuk login VS Code di bagian berikutnya, dan environment kerja
> ke depan memang berbasis GitHub.
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) sebelum mulai —
> task bertanda **[Wajib Refleksi]** di bawah baru dianggap `done` kalau kamu bisa jelaskan
> pemahamannya pakai kata sendiri, bukan cuma perintahnya berhasil jalan. AI boleh dipakai untuk
> bantu paham/debug, tapi jawaban akhir harus kamu tulis ulang sendiri.

---

## 1. Akun GitHub (`M1.W1.T1`)

1. Buka https://github.com/ → **Sign up**.
2. Isi **username** (disarankan nama yang profesional/konsisten, karena ini akan jadi identitas
   publik kamu sebagai developer — akan sering dipakai untuk melamar kerja/portofolio nanti).
3. Isi email aktif, buat password, lalu verifikasi email (cek inbox untuk kode/link konfirmasi).
4. Setelah akun jadi, lengkapi profil dasar:
   - Foto profil (avatar)
   - **Bio** singkat (misal: "Frontend developer in training")
   - Aktifkan **Two-Factor Authentication (2FA)** di Settings → Password and authentication —
     ini praktik keamanan standar yang wajib dibiasakan sejak awal.
5. (Opsional tapi disarankan) Setup **SSH key** atau **Personal Access Token** supaya nanti tidak
   perlu login manual tiap kali `git push` — tanyakan mentor kalau ingin dibantu setup ini.

**Checklist selesai:** akun aktif, email terverifikasi, 2FA aktif, profil (foto + bio) terisi.

**Contoh entry log:**
```markdown
### Task: M1.W1.T1
- **Status:** done
- **Capaian:** Akun GitHub sudah dibuat, profil lengkap, 2FA aktif.
- **Kesulitan:** -
```

---

## 2. VS Code + Ekstensi Dasar

### `M1.W1.T2.1` — Instal VS Code + login sync settings

1. Unduh & instal Visual Studio Code dari situs resminya: https://code.visualstudio.com/
2. Buka VS Code, lalu login dengan **akun GitHub yang sudah dibuat di bagian 1** (ikon akun di
   pojok kiri bawah) supaya settings & ekstensi bisa sinkron antar perangkat.
3. Coba tutup dan buka lagi VS Code — pastikan tidak ada error saat startup.

**Checklist selesai:** VS Code terbuka normal, status login akun terlihat di pojok kiri bawah.

### `M1.W1.T2.2` — Instal & aktifkan ekstensi ESLint, Prettier, GitLens

Buka tab Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`), cari dan instal:

| Ekstensi | Fungsi singkat |
|---|---|
| **ESLint** | Deteksi error/potensi bug di kode JavaScript/TypeScript saat mengetik |
| **Prettier - Code formatter** | Merapikan format kode otomatis (indentasi, tanda kutip, dll) |
| **GitLens** | Lihat histori commit, blame per baris, langsung di editor |

Setelah instal, buka Settings (`Ctrl+,`), cari `default formatter`, set ke **Prettier**.

**Checklist selesai:** ketiga ekstensi muncul aktif (bukan disabled) di tab Extensions.

### `M1.W1.T2.3` — Coba format-on-save & auto-lint di 1 file contoh

1. Di Settings, cari `format on save`, centang.
2. Buat file percobaan `latihan.js`, tulis kode dengan format berantakan, misalnya:
   ```js
   const x=1
   function halo(  nama ) {
   console.log('halo '+nama)
   }
   ```
3. Simpan (`Ctrl+S`) — Prettier harus otomatis merapikan indentasi & format.
4. Perhatikan garis bawah kuning/merah dari ESLint kalau ada kode yang bermasalah.

**Checklist selesai:** file otomatis rapi setelah save, dan ESLint menampilkan warning/error di editor.

**Contoh entry log setelah bagian 2 selesai:**
```markdown
### Task: M1.W1.T2.2
- **Status:** done
- **Capaian:** ESLint, Prettier, GitLens sudah aktif dan bisa dipakai.
- **Kesulitan:** -
```

### `M1.W1.T2.4` — [Wajib Refleksi] Beda ESLint vs Prettier

Sebelum tanya AI, coba jawab dulu sendiri: **ESLint dan Prettier sama-sama "beresin" kode kamu,
tapi beresin hal yang beda.** Supaya kebayang bedanya, coba percobaan ini:

1. Tulis kode dengan **bug logika sederhana** (bukan cuma berantakan formatnya), misalnya:
   ```js
   let hasil = 5
   if (hasil = 10) {
     console.log("iya")
   }
   ```
   (`=` di dalam `if` itu assignment, bukan perbandingan `===` — ini bug klasik.) Perhatikan:
   Prettier akan merapikan **formatnya** (spasi, indentasi) tapi **tidak** akan menyadari itu bug.
   ESLint yang biasanya menandai ini sebagai warning/error.
2. Sekarang tulis kode yang **benar secara logika tapi berantakan formatnya** (seperti contoh di
   `T2.3`) — kali ini ESLint diam saja (tidak ada bug), tapi Prettier tetap merapikan formatnya.

**Setelah 2 percobaan di atas**, isi log dengan menjawab (dengan kata sendiri, contoh konkretmu
sendiri boleh beda dari di atas):
- ESLint itu ngecek apa? Prettier itu ngecek apa? Kenapa keduanya tetap dipakai bareng-bareng
  (tidak cukup salah satu saja)?

**Contoh entry log (isi bagian Capaian dengan jawabanmu sendiri, bukan contoh ini):**
```markdown
### Task: M1.W1.T2.4
- **Status:** done
- **Capaian:** [tulis jawabanmu sendiri di sini berdasarkan percobaan di atas]
- **Kesulitan:** -
```

---

## 3. Terminal & Command Line Dasar

### `M1.W1.T3.1` — Konsep dasar shell & struktur direktori

Baca/pahami dulu konsepnya sebelum praktik:

- **Terminal/shell** adalah program untuk menjalankan perintah teks ke sistem operasi (bukan
  klik-klik seperti file explorer).
- **Struktur direktori**: semua file/folder berada dalam satu hierarki dimulai dari **root** (`/`
  di Mac/Linux, `C:\` di Windows).
- **Home directory**: folder pribadi user, biasanya `~` (contoh: `/home/gazi` atau
  `/Users/gazi`).
- **Path absolut** vs **path relatif**:
  - Absolut: dimulai dari root, contoh `/home/gazi/project/index.js` — selalu menunjuk lokasi
    yang sama dari mana pun kamu menjalankannya.
  - Relatif: relatif dari folder tempat kamu berada sekarang, contoh `./project/index.js` atau
    `../folder-lain`.

**Latihan cek paham:** buka terminal, ketik `pwd` — itu path absolut posisi kamu sekarang.

### `M1.W1.T3.2` — Praktik navigasi: pwd, cd, ls

| Perintah | Fungsi |
|---|---|
| `pwd` | Tampilkan folder aktif sekarang (path absolut) |
| `cd <folder>` | Pindah ke folder tersebut |
| `cd ..` | Naik satu level ke folder induk |
| `cd ~` | Langsung ke home directory |
| `ls` | Lihat isi folder aktif |
| `ls -l` | Lihat isi folder dengan detail (ukuran, permission, tanggal) |
| `ls -la` | Sama seperti `-l`, tapi termasuk file/folder tersembunyi (diawali `.`) |

**Latihan:** dari home directory, navigasi ke minimal 3 folder berbeda secara berurutan
(`cd folder-a`, `cd folder-b`, `cd ..`, dst), setiap perpindahan cek dengan `pwd` dan `ls`.

### `M1.W1.T3.3` — Praktik manajemen file/folder

| Perintah | Fungsi |
|---|---|
| `mkdir <nama>` | Buat folder baru |
| `touch <nama>` | Buat file kosong baru |
| `cat <file>` | Tampilkan isi file di terminal |
| `cp <sumber> <tujuan>` | Salin file/folder (`cp -r` untuk folder) |
| `mv <sumber> <tujuan>` | Pindah atau rename file/folder |
| `rm <file>` | Hapus file (`rm -r` untuk folder — **hati-hati, tidak ada Recycle Bin di terminal**) |

**Latihan:** buat folder `latihan-terminal`, masuk ke dalamnya, buat 2 file kosong, isi salah
satu pakai editor lalu tampilkan isinya dengan `cat`, salin file itu jadi nama lain, lalu hapus
salah satu file.

### `M1.W1.T3.4` — Latihan mandiri: struktur folder project murni lewat terminal

Tanpa membuka file explorer sama sekali, buat struktur folder berikut **hanya lewat terminal**:

```
latihan-project/
├── src/
│   ├── index.js
│   └── utils.js
├── docs/
│   └── notes.md
└── README.md
```

Verifikasi hasilnya dengan `ls -la` di setiap level, atau `ls -R` (lihat rekursif) kalau tersedia.

**Contoh entry log:**
```markdown
### Task: M1.W1.T3.4
- **Status:** done
- **Capaian:** Bisa bikin struktur folder project lewat terminal tanpa file explorer.
- **Kesulitan:** Sempat salah path pas mkdir nested folder, ternyata harus mkdir -p.
```

### `M1.W1.T3.5` — [Wajib Refleksi] Prediksi-sebelum-eksekusi

Sebelum bagian ini, kamu sudah pernah jalankan semua command dasar (bagian `T3.2`/`T3.3`). Sekarang
baliknya: **jangan langsung eksekusi**. Untuk 5 skenario di bawah, tulis dulu di catatanmu **apa
yang menurutmu akan terjadi**, baru jalankan beneran dan bandingkan.

1. Kamu di `~/project-a`. Jalankan `cd ../project-b`. Kamu akan ada di folder mana? (tulis path
   lengkapnya)
2. Kamu jalankan `mkdir latihan && cd latihan && mkdir sub && cd sub`. Kalau habis itu kamu
   `cd ../..`, kamu ada di folder mana?
3. Kamu jalankan `rm nama-file-yang-belum-ada.txt`. Menurutmu apa yang terjadi? (jangan langsung
   coba, tebak dulu)
4. Kamu jalankan `cp file.txt folder-yang-belum-ada/`. Berhasil atau error? Kenapa?
5. Kamu jalankan `ls` di folder kosong. Apa yang muncul di layar?

**Setelah menjawab semua**, baru coba jalankan satu-satu di terminal beneran. Kalau ada yang
prediksimu meleset, itu justru bagian paling penting — tulis di log **kenapa** kamu awalnya salah
duga dan apa yang ternyata benar terjadi.

**Contoh entry log:**
```markdown
### Task: M1.W1.T3.5
- **Status:** done
- **Capaian:** [tulis prediksi vs hasil aslinya, terutama yang meleset & kenapa]
- **Kesulitan:** -
```

### `M1.W1.T3.6` — [Wajib Refleksi] Kuis pemahaman mandiri (tanpa modul/AI)

**Tutup dulu modul ini dan jangan tanya AI.** Jawab pertanyaan di bawah semampunya. Setelah selesai
menjawab semua, baru boleh buka lagi modul untuk cek jawabanmu.

1. Apa beda path absolut dan path relatif? Kasih 1 contoh masing-masing (bukan dari modul).
2. Command apa yang kamu pakai untuk tahu posisi folder kamu sekarang?
3. Apa beda `rm nama-file` dengan `rm -r nama-folder`? Kenapa perlu `-r` untuk folder?
4. Kalau kamu salah hapus file pakai `rm` di terminal, bisa dikembalikan lagi tidak (seperti buka
   Recycle Bin)? Kenapa itu penting diingat?
5. Apa fungsi `ls -la` yang tidak ada di `ls` biasa?

Setelah menjawab, buka lagi bagian-bagian sebelumnya untuk cek — kalau ada yang salah/meleset,
catat di log yang mana dan pemahaman yang benar seperti apa (jangan cuma tulis "sudah benar semua"
kalau kenyataannya ada yang perlu dikoreksi).

**Contoh entry log:**
```markdown
### Task: M1.W1.T3.6
- **Status:** done
- **Capaian:** [tulis jawaban kamu + koreksi kalau ada yang salah setelah dicek ulang]
- **Kesulitan:** -
```

### `M1.W1.T3.7` — [Wajib Refleksi] Teach-back ke mentor

Ini pengecekan terakhir untuk bagian terminal, dan yang paling penting: **jelaskan lisan ke mentor**
(atau kalau mentor belum sempat, rekam video/voice note singkat ke mentor) — TANPA membaca dari
catatan/modul:

1. Apa itu path absolut vs relatif — pakai analogi/contohmu sendiri (bukan contoh dari modul).
2. Peragakan langsung di terminal (layar dibagikan/direkam): navigasi ke 2-3 folder, buat folder
   baru, buat file, hapus file — sambil dijelaskan tiap langkahnya ngapain.
3. Kalau mentor tanya variasi kecil di luar yang biasa kamu praktikkan (misal folder dengan nama
   beda atau urutan berbeda), coba jawab dengan bernalar dari konsep, bukan menghafal langkah.

Task ini baru `done` kalau teach-back-nya **sudah benar-benar dilakukan** (bukan direncanakan) dan
mentor menganggap penjelasannya cukup jelas — kalau belum sempat, tandai `in-progress` dan jadwalkan
ulang, jangan ditandai selesai duluan.

**Contoh entry log:**
```markdown
### Task: M1.W1.T3.7
- **Status:** done
- **Capaian:** Sudah teach-back ke mentor [tanggal], mentor konfirmasi paham bagian X, Y, Z.
- **Kesulitan:** Sempat kepeleset pas ditanya soal path relatif dari folder yang beda dari contoh.
```

---

## 4. Node.js & npm

### `M1.W1.T4.1` — Instal Node.js versi LTS

Disarankan lewat **nvm** (Node Version Manager) supaya gampang ganti versi Node di masa depan,
daripada instal langsung dari installer situs resmi https://nodejs.org/ (boleh juga, tapi nvm
lebih fleksibel untuk kerja tim):

- Mac/Linux: instal `nvm`, lalu `nvm install --lts`, `nvm use --lts`.
- Windows: gunakan `nvm-windows`, atau instal langsung LTS dari https://nodejs.org/ kalau nvm
  terasa rumit di awal.

### `M1.W1.T4.2` — Verifikasi instalasi

Jalankan di terminal:
```bash
node -v
npm -v
npm config list
```
Pastikan versi Node yang tampil adalah versi LTS (contoh `v20.x.x`), dan `npm -v` menampilkan
angka versi tanpa error.

### `M1.W1.T4.3` — File JS pertama + beda `npm init` vs `npm install`

1. Buat file `hello.js` isi:
   ```js
   console.log("Halo dari Node.js!")
   ```
2. Jalankan: `node hello.js` — harus muncul teks di terminal.
3. Di folder yang sama, jalankan `npm init -y` — perhatikan file `package.json` yang muncul,
   ini **mendeklarasikan** project Node kamu (metadata, dependency list, dll).
4. Coba `npm install <nama-package-apa-saja-yang-ringan>` (misal `npm install chalk`) — perhatikan
   folder `node_modules/` yang muncul dan `package.json` yang ter-update otomatis.
5. Pahami intinya:
   - `npm init` → **membuat/mendeklarasikan** project baru (`package.json`).
   - `npm install <package>` → **mengunduh & memasang** dependency ke project yang sudah ada.

**Checklist selesai:** paham kapan pakai `npm init` (project baru) vs `npm install` (nambah
dependency ke project yang sudah punya `package.json`).

### `M1.W1.T4.4` — [Wajib Refleksi] `package.json` & kenapa `node_modules/` tidak boleh di-commit

Konteks: pas mengerjakan `T4.3` minggu ini, file `node_modules/` (beserta `package.json` &
`package-lock.json`) sempat ikut ter-commit ke repo tracker ini — sudah dibersihkan mentor, tapi
ini kesempatan bagus untuk benar-benar paham kenapa itu masalah, supaya tidak keulang di project
selanjutnya (termasuk project internal nanti).

Coba jawab (boleh cari tahu dulu, tapi tulis ulang pakai kata sendiri):
1. Apa isi `package.json`? Kenapa file ini **wajib** ikut di-commit ke Git?
2. Apa isi `node_modules/`? Dari mana asal isinya (ditulis manual atau di-generate)?
3. Kalau `node_modules/` di-commit ke Git, lalu ada orang lain clone repo-mu — apa masalah yang
   bisa muncul? (petunjuk: ukuran repo, dan apakah isi `node_modules/` selalu sama persis di semua
   OS/environment)
4. Perintah apa yang dipakai supaya orang lain bisa "membangun ulang" `node_modules/` sendiri
   tanpa perlu kamu commit isinya? (sudah kamu pakai waktu `T4.3`)
5. Lihat file `.gitignore` di root repo ini — baris mana yang mencegah `node_modules/` ke-commit
   lagi di masa depan?

**Contoh entry log:**
```markdown
### Task: M1.W1.T4.4
- **Status:** done
- **Capaian:** [jawaban kamu soal package.json vs node_modules, dan kenapa yang satu di-commit yang satu tidak]
- **Kesulitan:** -
```

---

## 5. Proyek Pengembangan Skill Mandiri Minggu 1 (`M1.W1.T5`)

Semua task sebelumnya melatih **satu skill terpisah** (terminal saja, Node saja, dst). Task ini
beda: kamu menggabungkan **semuanya** jadi satu proyek kecil yang benar-benar jalan. Ini juga
latihan pola kerja nyata — di project sungguhan nanti, jarang ada task se-simpel "install X terus
selesai"; biasanya berupa gabungan banyak skill kecil untuk membangun sesuatu yang punya fungsi.

**Estimasi waktu:** minimal setengah hari kerja (±4 jam), **termasuk kalau kamu dibantu AI.** Kalau
kamu selesai jauh lebih cepat dari itu, kemungkinan besar scope-nya kurang dalam — tambah 1-2 fitur
kecil lagi sebelum menandai `done` (lihat bagian "Kalau kerasa kependekan" di bawah).

### Apa yang harus dibangun

Sebuah **CLI tool kecil tapi fungsional** — bebas topiknya, tapi wajib penuhi semua requirement di
bawah. Contoh ide kalau butuh inspirasi (boleh pakai salah satu, boleh juga bikin ide sendiri):
- **"Ringkasan Progress PKL"** — baca file JSON progress bikinanmu sendiri (bukan harus akses repo
  tracker asli, cukup contoh data serupa), tampilkan ringkasan rapi & berwarna di terminal.
- **Pengingat/checklist harian sederhana** — simpan daftar task ke file lokal, bisa tambah/tandai
  selesai lewat argumen terminal.
- **Generator sesuatu yang random** (kutipan motivasi, nama variabel lucu, dll) dari daftar data
  lokal, ditampilkan dengan format/warna menarik.

### Requirement wajib (semua harus dipenuhi)

1. **Struktur folder dibuat 100% lewat terminal** (`mkdir`, `touch`, dst) — bukan klik kanan file
   explorer, sesuai yang sudah dilatih di `T3`.
2. **`npm init` diisi manual** (bukan `npm init -y`) — `name`, `description`, `author` diisi
   sungguhan, bukan default kosong.
3. **Minimal 2 dependency eksternal dari npm**, dan **minimal 1 di antaranya package yang belum
   pernah kamu pakai** (boleh pakai `chalk` lagi buat salah satunya, tapi cari & pasang minimal 1
   yang baru — riset sendiri/tanya AI package apa yang cocok untuk fungsi tool-mu, misalnya untuk
   bikin tabel di terminal, bikin banner teks besar, atau baca input dari user).
4. **Kode dipecah minimal 2 file** — ada file utama (misal `index.js`) yang `require(...)` file lain
   (misal `data.js` atau `utils.js`). Tidak boleh semua logic di 1 file.
5. **Program beneran menghasilkan sesuatu yang berguna** saat dijalankan (`node index.js` atau lewat
   script npm) — bukan cuma `console.log("Hello, World!")` sekali doang.
6. **Bersih dari warning/error ESLint** saat selesai (buka VS Code, pastikan tidak ada garis
   bawah kuning/merah tersisa) — kalau ada dan sengaja dibiarkan, jelaskan kenapa di refleksi.
7. **`README.md` di dalam folder project** menjelaskan: fungsinya apa, cara menjalankannya, package
   apa saja yang dipakai dan untuk apa masing-masing.
8. **Ikuti aturan pakai AI** di `docs/PANDUAN_BELAJAR_DAN_AI.md` — kalau nemu package baru lewat AI,
   tulis di refleksi **apa fungsi package itu dengan kata sendiri**, bukan cuma nama package-nya.

### Kalau kerasa kependekan

Kalau requirement di atas selesai dalam waktu singkat (jauh di bawah target ±4 jam), tambah salah
satu: validasi input dari user (misal kalau argumen kosong, tampilkan pesan error yang jelas,
bukan crash), atau fitur kedua yang saling terhubung dengan fitur pertama, atau baca/tulis ke file
(bukan cuma data hardcoded di kode). Tujuannya bukan menghabiskan waktu asal lama, tapi memastikan
scope-nya cukup dalam untuk benar-benar melatih kombinasi terminal + Node + npm + debugging.

### Submit

Taruh seluruh folder project (kode + `README.md`, **tanpa** `node_modules/` — sudah otomatis
di-`.gitignore`) di `submissions/M1-W1/T5-proyek-mandiri/`. Tambahkan juga screenshot VS Code
yang menunjukkan kode bersih dari warning ESLint.

**Contoh entry log:**
```markdown
### Task: M1.W1.T5
- **Status:** done
- **Capaian:** [ceritakan CLI tool-mu ngapain, package apa yang dipakai & fungsinya, bagian mana yang kamu bangun sendiri vs dibantu AI]
- **Kesulitan:** [jujur aja — misal debugging apa yang paling lama, konsep baru apa yang masih belum 100% jelas]
```

---

## 6. Evaluasi Minggu 1 (`M1.W1.T6`)

Setelah semua bagian di atas selesai (termasuk semua task **[Wajib Refleksi]** dan proyek pengembangan mandiri
`T5`), siapkan demo singkat (~15-20 menit) untuk mentor:

1. Tunjukkan profil GitHub kamu (foto, bio, 2FA aktif).
2. Tunjukkan VS Code dengan ESLint/Prettier/GitLens aktif, dan contoh format-on-save bekerja.
3. Tunjukkan navigasi terminal langsung (bukan screenshot) — buat folder, pindah-pindah, hapus.
4. Tunjukkan `node -v` dan `npm -v`, lalu jalankan `hello.js`.
5. **Demo langsung CLI tool dari `T5`** — jalankan di depan mentor, jelaskan alur kodenya (bukan
   cuma hasil akhirnya), dan kenapa kamu pilih package yang kamu pakai.
6. **Mentor akan tanya 2-3 variasi pertanyaan** yang sedikit beda dari contoh di modul (bukan
   sekadar mengulang langkah yang sama) — ini untuk memastikan pemahamannya beneran nempel, bukan
   hafalan langkah. Kalau ada yang belum lancar, tidak apa — itu justru bahan follow-up, bukan
   kegagalan.
7. Ceritakan singkat: bagian mana yang paling gampang, bagian mana yang paling bikin bingung.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W1.T6
- **Status:** done
- **Capaian:** Demo ke mentor sudah selesai, semua tools jalan normal, CLI tool berhasil didemo, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur — ini bukan nilai, ini bahan mentor bantu kamu)
```

---

## Referensi tambahan (opsional, kalau mau baca lebih dalam)

- GitHub docs — membuat akun: https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github
- VS Code docs: https://code.visualstudio.com/docs
- Node.js docs: https://nodejs.org/en/docs
- npm docs: https://docs.npmjs.com/
