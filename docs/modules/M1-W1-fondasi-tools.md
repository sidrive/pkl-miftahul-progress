# Modul Minggu 1 — Fondasi Tools

> Modul ini menemani task `M1.W1.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai mengerjakan satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang
> sesuai (lihat contoh format di setiap bagian). Kerjakan urut dari atas ke bawah.

---

## 1. VS Code + Ekstensi Dasar

### `M1.W1.T1.1` — Instal VS Code + login sync settings

1. Unduh & instal Visual Studio Code dari situs resminya: https://code.visualstudio.com/
2. Buka VS Code, lalu login dengan akun GitHub/Microsoft (ikon akun di pojok kiri bawah) supaya
   settings & ekstensi bisa sinkron antar perangkat.
3. Coba tutup dan buka lagi VS Code — pastikan tidak ada error saat startup.

**Checklist selesai:** VS Code terbuka normal, status login akun terlihat di pojok kiri bawah.

### `M1.W1.T1.2` — Instal & aktifkan ekstensi ESLint, Prettier, GitLens

Buka tab Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`), cari dan instal:

| Ekstensi | Fungsi singkat |
|---|---|
| **ESLint** | Deteksi error/potensi bug di kode JavaScript/TypeScript saat mengetik |
| **Prettier - Code formatter** | Merapikan format kode otomatis (indentasi, tanda kutip, dll) |
| **GitLens** | Lihat histori commit, blame per baris, langsung di editor |

Setelah instal, buka Settings (`Ctrl+,`), cari `default formatter`, set ke **Prettier**.

**Checklist selesai:** ketiga ekstensi muncul aktif (bukan disabled) di tab Extensions.

### `M1.W1.T1.3` — Coba format-on-save & auto-lint di 1 file contoh

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

**Contoh entry log setelah bagian 1 selesai:**
```markdown
### Task: M1.W1.T1.2
- **Status:** done
- **Capaian:** ESLint, Prettier, GitLens sudah aktif dan bisa dipakai.
- **Kesulitan:** -
```

---

## 2. Terminal & Command Line Dasar

### `M1.W1.T2.1` — Konsep dasar shell & struktur direktori

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

### `M1.W1.T2.2` — Praktik navigasi: pwd, cd, ls

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

### `M1.W1.T2.3` — Praktik manajemen file/folder

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

### `M1.W1.T2.4` — Latihan mandiri: struktur folder project murni lewat terminal

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
### Task: M1.W1.T2.4
- **Status:** done
- **Capaian:** Bisa bikin struktur folder project lewat terminal tanpa file explorer.
- **Kesulitan:** Sempat salah path pas mkdir nested folder, ternyata harus mkdir -p.
```

---

## 3. Node.js & npm

### `M1.W1.T3.1` — Instal Node.js versi LTS

Disarankan lewat **nvm** (Node Version Manager) supaya gampang ganti versi Node di masa depan,
daripada instal langsung dari installer situs resmi https://nodejs.org/ (boleh juga, tapi nvm
lebih fleksibel untuk kerja tim):

- Mac/Linux: instal `nvm`, lalu `nvm install --lts`, `nvm use --lts`.
- Windows: gunakan `nvm-windows`, atau instal langsung LTS dari https://nodejs.org/ kalau nvm
  terasa rumit di awal.

### `M1.W1.T3.2` — Verifikasi instalasi

Jalankan di terminal:
```bash
node -v
npm -v
npm config list
```
Pastikan versi Node yang tampil adalah versi LTS (contoh `v20.x.x`), dan `npm -v` menampilkan
angka versi tanpa error.

### `M1.W1.T3.3` — File JS pertama + beda `npm init` vs `npm install`

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

---

## 4. Evaluasi Minggu 1 (`M1.W1.T4`)

Setelah semua bagian di atas selesai, siapkan demo singkat (~10 menit) untuk mentor:

1. Tunjukkan VS Code dengan ESLint/Prettier/GitLens aktif, dan contoh format-on-save bekerja.
2. Tunjukkan navigasi terminal langsung (bukan screenshot) — buat folder, pindah-pindah, hapus.
3. Tunjukkan `node -v` dan `npm -v`, lalu jalankan `hello.js`.
4. Ceritakan singkat: bagian mana yang paling gampang, bagian mana yang paling bikin bingung.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W1.T4
- **Status:** done
- **Capaian:** Demo ke mentor sudah selesai, semua tools jalan normal.
- **Kesulitan:** (isi refleksi jujur — ini bukan nilai, ini bahan mentor bantu kamu)
```

---

## Referensi tambahan (opsional, kalau mau baca lebih dalam)

- VS Code docs: https://code.visualstudio.com/docs
- Node.js docs: https://nodejs.org/en/docs
- npm docs: https://docs.npmjs.com/
