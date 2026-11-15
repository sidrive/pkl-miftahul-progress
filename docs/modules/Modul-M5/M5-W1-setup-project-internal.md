# Modul Bulan 5 Minggu 1 — Setup Project Internal: SIMASET

> Menemani task `M5.W1.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai. Kerjakan urut dari atas ke bawah.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) untuk definisi "done" pada
> task `[Wajib Refleksi]`.
>
> **🗓️ 5 hari kerja penuh** (Senin 16 – Jumat 20 November 2026). **Transisi besar** — ini minggu
> pertama project nyata, bukan lagi latihan kecil `CobaVue-M3`.
>
> ⚠️ **Minggu ini BEDA FORMAT lagi**: ini minggu PERENCANAAN & SETUP, bukan latihan coding 3
> putaran — wajar kalau sebagian besar waktu habis untuk requirement/wireframe/konfigurasi, bukan
> menulis banyak logic. Minggu depan (`M5.W2`) baru mulai banyak coding lagi.
>
> ## ⚠️ Standar naik mulai project ini — baca dulu sebelum lanjut
>
> Baca bagian **"Standar Kualitas Project Mandiri: 'Do More, Untuk Hasil Better'"** di
> [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — ini aturan baru yang mulai
> berlaku di SIMASET (belum berlaku untuk task latihan Bulan 1-4 yang sudah lewat). Intinya:
> **frontend itu soal UI/UX, bukan cuma logic yang jalan.** Mulai `M5.W2` (minggu depan, saat fitur
> coding beneran dimulai), "selesai" artinya: edge case ditangani, ada loading/empty/error state,
> dicek responsive di lebar HP, DAN memenuhi checklist UI/UX (hierarki visual, konsistensi,
> feedback interaksi, affordance, form usability, aksesibilitas dasar). Minggu ini (perencanaan)
> belum ada kode fitur untuk dicek standar itu, tapi mulai dipikirkan dari tahap wireframe (`T1.2`).
>
> ## Project: SIMASET
>
> **Sistem Informasi Manajemen Aset Kantor Sederhana** — aplikasi internal untuk melacak
> inventaris kantor (laptop, printer, meja, dll): status **tersedia**/**dipinjam**/**maintenance**,
> siapa yang meminjam, dan riwayat peminjaman-pengembalian.
>
> Project ini akan dikembangkan BERTAHAP sepanjang Bulan 5-6 — bukan 1 minggu selesai. Tujuannya
> menyatukan SEMUA skill Bulan 3-4 yang sudah kamu kuasai (Vue Router multi-halaman, Pinia,
> component `Ds*`, composables) jadi 1 aplikasi nyata yang terus berkembang, mensimulasikan kondisi
> kerja project sungguhan.
>
> **Masih simulasi Olsera DS** — alasan sama seperti `M4.W2`/`M4.W3` (tidak ada akses registry
> privat, Vue 3 compat `@olsera/vue-components` belum dikonfirmasi). Pasang ulang component `Ds*`
> yang SUDAH kamu buat, jangan bikin dari nol lagi.
>
> **Lokasi:** folder baru `submissions/M5.Project/simaset/` di repo yang sama ini — BUKAN repo
> GitHub terpisah.

---

## 1. Requirement & Wireframe

### `M5.W1.T1.1` — Tulis requirement sederhana

Tulis dokumen requirement singkat (boleh markdown, taruh di `submissions/M5.Project/simaset/REQUIREMENT.md`
atau sejenisnya) berisi:

1. **Siapa penggunanya?** Minimal 2 peran, misal:
   - **Admin IT** — kelola data aset (tambah/edit/hapus aset, lihat semua riwayat).
   - **Staff** — ajukan/catat peminjaman aset, lihat status aset.
2. **Daftar fitur utama** (minimal):
   - Lihat daftar aset (dengan filter status, search nama).
   - Lihat detail 1 aset.
   - Ajukan/catat peminjaman aset.
   - Tandai aset sebagai "dikembalikan".
   - Lihat riwayat peminjaman (per aset, atau keseluruhan).
3. **1-2 aturan bisnis sederhana**, misal:
   - Aset yang statusnya `"dipinjam"` TIDAK BISA dipinjam lagi sampai dikembalikan.
   - (Boleh tambah aturan lain yang masuk akal menurutmu.)

**Contoh entry log (format saja):**
```markdown
### Task: M5.W1.T1.1
- **Status:** done
- **Capaian:** [ringkasan requirement yang ditulis, link file REQUIREMENT.md]
- **Kesulitan:** [jujur aja]
```

### `M5.W1.T1.2` — Wireframe kasar tiap halaman utama (WAJIB pakai aplikasi mockup)

**Beda dari minggu-minggu lalu yang bentuknya bebas** — kali ini WAJIB pakai aplikasi mockup/desain
beneran: **Figma** (paling umum dipakai di kerja nyata), atau alternatif lain kalau mau coba yang
lain (Penpot, Excalidraw, dll — yang penting bukan lagi cuma teks/sketsa tangan). Ini sekalian
melatih skill tools mockup yang relevan untuk kerja frontend sungguhan — bukan cuma soal
"gambar kotak-kotak", tapi terbiasa dengan alur kerja desain → implementasi yang biasa dipakai tim
produk/desain di kerja nyata.

Tidak perlu desain high-fidelity (warna final, font final) — cukup level wireframe (kotak, garis,
label kasar), tapi dibuat di aplikasi mockup, bukan di kertas/teks.

**Simpan link hasil mockup-nya** (share link Figma, atau export gambar kalau pakai tools lain) di
`DAILY_LOG.md` — mentor akan buka link itu saat evaluasi `T4`.

Wireframe minimal untuk halaman:
1. **Dashboard** — ringkasan (misal: jumlah aset per status, aset yang baru dipinjam).
2. **Daftar Aset** — list + filter status + search (ingat pola dari `M4.W3`).
3. **Detail Aset** — info lengkap 1 aset + riwayat peminjamannya + tombol aksi (pinjam/kembalikan).
4. **Form Tambah/Edit Aset** — field-field data aset.
5. **Halaman Peminjaman/Riwayat** — daftar semua transaksi peminjaman.

**Mulai pikirkan (belum perlu final) poin standar kualitas baru** untuk tiap halaman:
- Elemen AKSI UTAMA mana yang harus paling menonjol (misal tombol "Pinjam" di Detail Aset), dan
  elemen SEKUNDER mana yang cukup diam di belakang (misal tombol "Batal").
- Kondisi apa saja yang perlu loading/empty/error state (misal: Daftar Aset saat data belum
  dimuat, saat filter tidak menghasilkan apa-apa, saat gagal memuat data).

**Contoh entry log (format saja):**
```markdown
### Task: M5.W1.T1.2
- **Status:** done
- **Capaian:** [ceritakan wireframe tiap halaman, link/lokasi filenya]
- **Kesulitan:** [jujur aja]
```

### `M5.W1.T1.3` — [Wajib Refleksi] User flow dari requirement ke wireframe

**Isi log dengan menjawab (kata sendiri):**
1. Jelaskan alur pengguna (user flow) UTAMA — misal dari Dashboard, ke Daftar Aset, ke Detail
   Aset, sampai proses peminjaman selesai. Kenapa urutan/navigasi halaman disusun seperti itu?
2. Ambil 1 aturan bisnis dari `T1.1` (misal "aset dipinjam tidak bisa dipinjam lagi") — di
   wireframe-mu, APA yang terjadi di UI kalau pengguna coba melanggar aturan itu (misal tombol
   "Pinjam" di halaman Detail Aset untuk aset yang sedang dipinjam)? Harus ada JAWABAN KONKRET di
   level wireframe (tombol disabled? pesan error? disembunyikan?), bukan dibiarkan tidak jelas.

**Contoh entry log (format saja):**
```markdown
### Task: M5.W1.T1.3
- **Status:** done
- **Capaian:** [jawaban 2 poin di atas]
- **Kesulitan:** [jujur aja]
```

---

## 2. Setup Repo Project Internal

### `M5.W1.T2.1` — Setup project baru

```bash
cd submissions/M5.Project
npm create vite@latest simaset -- --template vue
cd simaset
npm install
npm install vue-router pinia
```

Struktur dasar Vue 3 + Vite yang sudah berkali-kali kamu buat sejak Bulan 3 — bedanya sekarang ini
project yang akan DIKEMBANGKAN JANGKA PANJANG (bukan sekali pakai untuk 1 task lalu ditinggal).
Setup `router/index.js` dan `main.js` (daftarkan `pinia`+`router`) seperti biasa.

**Contoh entry log (format saja):**
```markdown
### Task: M5.W1.T2.1
- **Status:** done
- **Capaian:** [ceritakan setup project, struktur folder awal]
- **Kesulitan:** [jujur aja]
```

### `M5.W1.T2.2` — Pasang ulang component `Ds*` & token

SALIN (bukan tulis ulang dari nol) component `Ds*` (`DsButton`/`DsCard`/`DsInput`/`DsSelect`/
`DsBadge`) dan `tokens.css` dari `M4.W2`/`M4.W3` (folder `CobaVue-M3`) ke project `simaset` baru
ini. Sesuaikan path import kalau perlu. Buktikan component yang kamu buat untuk LATIHAN benar-benar
bisa dipakai ulang di PROJECT LAIN — ini bukti nyata kenapa reusability itu penting (`M4.W2.T3.3`).

**Contoh entry log (format saja):**
```markdown
### Task: M5.W1.T2.2
- **Status:** done
- **Capaian:** [component/token apa saja yang dipindahkan]
- **Kesulitan:** [jujur aja]
```

### `M5.W1.T2.3` — [Wajib Refleksi] Apa yang dipindah, apa yang disesuaikan

**Isi log dengan menjawab (kata sendiri):**
1. Apa saja yang bisa kamu PINDAHKAN APA ADANYA (copy-paste, langsung jalan) dari project latihan
   ke project baru ini?
2. Apa yang perlu DISESUAIKAN (kalau ada) — misal path import, konfigurasi tertentu?
3. Kaitkan ke alasan kenapa component/token itu didesain reusable sejak awal (`M4.W2.T3.3`) —
   apakah pengalaman nyata ini membuktikan alasan itu benar, atau ada yang di luar dugaan?

**Contoh entry log (format saja):**
```markdown
### Task: M5.W1.T2.3
- **Status:** done
- **Capaian:** [jawaban 3 poin di atas]
- **Kesulitan:** [jujur aja]
```

---

## 3. Laporan Akhir Minggu (`M5.W1.T3`)

Sesuai aturan baku di [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md). Minggu ini
bentuknya **laporan tertulis**, pas untuk minggu perencanaan seperti ini.

Satukan requirement (`T1.1`), wireframe (`T1.2`), dan hasil setup (`T2.1`-`T2.2`) jadi 1 cerita
utuh:
1. Bagaimana wireframe memetakan ke struktur folder/halaman yang sudah di-setup?
2. Fitur mana dari requirement yang akan dikerjakan DULUAN di `M5.W2`, dan kenapa (prioritas apa
   yang kamu pakai untuk memutuskan ini)?

**Contoh entry log (format saja):**
```markdown
### Task: M5.W1.T3
- **Status:** done
- **Capaian:** [isi laporan]
- **Kesulitan:** [jujur aja]
```

---

## 4. Evaluasi (`M5.W1.T4`) — satu-satunya sesi bareng mentor minggu ini

Siapkan untuk mentor:

1. **Presentasikan requirement & wireframe** dari `T1`.
2. **Demo project SIMASET** yang baru di-setup — jalan di browser meski masih kosong/skeleton.
3. **Tunjukkan component `Ds*`** sudah terpasang ulang dengan benar di project baru.
4. **Review bareng mentor:** apakah scope requirement-nya REALISTIS untuk dikerjakan 1 bulan ke
   depan — mentor mungkin minta persempit atau perluas scope-nya.
5. **Mentor menegaskan standar kualitas baru** — jelaskan kenapa mulai `M5.W2` standarnya naik
   (frontend = UI/UX, bukan cuma logic jalan), dan review tidak lagi rubber-stamp (minimal 1 revisi
   diminta tiap sesi ke depan).
6. **Mentor tanya 2-3 pertanyaan** soal keputusan desain wireframe/struktur folder.
7. **Retrospektif wajib:** jawab "kalau dikasih 1 hari lagi untuk requirement/wireframe ini, apa
   yang akan kamu perbaiki?"

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M5.W1.T4
- **Status:** done
- **Capaian:** [ceritakan hasil presentasi, keputusan scope final, demo setup]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Vite — Getting Started: https://vitejs.dev/guide/
- Menulis requirement sederhana (user stories): cari "simple user story format" kalau butuh
  referensi tambahan, tidak wajib pakai format baku tertentu.
