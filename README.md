# PKL Progress Tracker — Miftahul Al Gazi Hermansyah

Repo ini adalah sistem monitoring harian untuk program pendampingan PKL/magang frontend (13 Jul 2026 – 13 Feb 2027). Dibangun dari 3 file inti + 1 dashboard otomatis:

| File/Folder | Fungsi |
|---|---|
| `TASKS.md` | Checklist **semua task** dari roadmap 7 bulan. Sumber kebenaran tunggal. Checkbox-nya **jangan diedit manual** — otomatis diupdate oleh script. |
| `DAILY_LOG.md` | Tempat peserta lapor **setiap hari** (append di bawah, jangan edit entry lama). |
| `scripts/update_progress.js` | Script Node.js (tanpa dependency eksternal) yang membaca `TASKS.md` + `DAILY_LOG.md`, update checkbox, dan generate data JSON untuk dashboard. |
| `.github/workflows/update-progress.yml` | GitHub Action yang otomatis jalankan script di atas setiap ada push ke `DAILY_LOG.md`/`TASKS.md`, lalu commit hasilnya balik ke repo. |
| `docs/index.html` | Dashboard HTML — progress bar per bulan, checklist, timeline capaian/kesulitan harian. Dihosting via GitHub Pages. |
| `docs/modules/` | Modul pembelajaran (opsional) yang menemani sekelompok task tertentu — berisi penjelasan, langkah praktik, dan latihan. Diberi nama `M<bulan>-W<minggu>-<judul-singkat>.md` dan ditautkan langsung dari `TASKS.md` di baris minggu yang sesuai. |

---

## Setup (sekali di awal)

1. **Buat repo baru di GitHub** (misal `pkl-miftahul-progress`), lalu push seluruh isi folder ini sebagai commit pertama di branch `main`.
2. **Aktifkan GitHub Pages:** Settings → Pages → Source: `Deploy from a branch` → Branch: `main`, folder `/docs`. Setelah aktif, dashboard bisa diakses di `https://<username>.github.io/<repo>/`.
3. **Beri izin Action untuk commit balik:** Settings → Actions → General → Workflow permissions → pilih **"Read and write permissions"**. Tanpa ini, Action akan gagal saat mencoba push hasil update.
4. Pastikan peserta (Miftahul) punya akses **write/collaborator** ke repo ini agar bisa push commit harian.

## Alur kerja harian peserta

1. Kerjakan task sesuai `TASKS.md` (cek ID task yang sedang dikerjakan, format `M<bulan>.W<minggu>.T<nomor>`).
2. Di akhir hari, buka `DAILY_LOG.md`, tambahkan entry baru **di bagian paling bawah**:
   ```markdown
   ## 2026-07-14
   <!-- ENTRY START -->
   ### Task: M1.W1.T2
   - **Status:** done
   - **Capaian:** Sudah paham perintah dasar terminal (cd, ls, mkdir).
   - **Kesulitan:** Masih bingung path relatif vs absolut.
   <!-- ENTRY END -->
   ```
   - Kalau tanggal hari itu sudah ada headingnya (karena lapor beberapa task), tinggal tambah blok `<!-- ENTRY START -->...<!-- ENTRY END -->` baru di bawah heading tanggal yang sama.
   - `Status` hanya boleh: `in-progress`, `done`, atau `blocked`.
3. Commit & push dengan pesan yang jelas, contoh: `log: 2026-07-14 - M1.W1.T2 done`.
4. Setelah push, GitHub Action otomatis jalan (~30–60 detik), update `TASKS.md` (centang task yang `done`) dan regenerate data dashboard. Tidak perlu tindakan manual apa pun.
5. Mentor/pihak lain cukup buka link GitHub Pages untuk lihat progress terbaru — tidak perlu clone repo.

## Menjalankan script secara manual (opsional, untuk debug)

```bash
node scripts/update_progress.js
```

Ini akan langsung mengupdate `TASKS.md` dan file di `docs/data/` di lokal, tanpa perlu menunggu GitHub Action — berguna untuk cek hasil sebelum push.

## Menambah / breakdown task kapan saja

Didukung penuh — `TASKS.md` bukan file statis. Yang **tidak boleh** diedit manual cuma checkbox `[x]`/`[ ]` (itu yang diotomatisasi); teks, heading, dan baris task boleh diubah kapan saja:

- **Breakdown task mingguan jadi lebih detail:** ganti baris task jadi teks biasa (tanpa checkbox) sebagai judul ringkasan, lalu tambah sub-task di bawahnya dengan checkbox + ID baru yang unik (pola `M1.W1.T1.1`, `.T1.2`, dst.). Contoh sudah ada di bagian `Minggu 1` bulan 1 pada `TASKS.md`. Bisa Anda buat sendiri, atau minta saya breakdown-kan — cukup sebut task mana yang mau dipecah.
- **Task ad-hoc / issue / request eksternal di luar roadmap:** tambahkan di bawah section `## Backlog / Task Tambahan (Ad-hoc)` di paling bawah `TASKS.md`. Boleh buat sub-heading (`###`) baru sesuka Anda untuk mengelompokkan (per issue, per minggu ditemukan, dll). Heading di section ini **tidak wajib** mengikuti format "Bulan N"/"Minggu N" — heading apa pun setelah `##`/`###` otomatis dikenali sebagai grup baru oleh script.
- Setelah menambah task apa pun, jalankan `node scripts/update_progress.js` (atau tunggu commit `DAILY_LOG.md` berikutnya memicu Action) — `docs/data/*.json` dan dashboard otomatis menghitung ulang total & persentase, termasuk section ad-hoc yang baru ditambah.
- Satu-satunya syarat: **ID task harus unik** di seluruh file (tidak boleh dipakai dua kali) supaya tidak salah mencocokkan dengan `DAILY_LOG.md`.

## Catatan desain

- Task dianggap **selesai** kalau ada minimal satu entry log dengan status `done` untuk ID tersebut (bukan berdasarkan urutan terakhir), jadi begitu ditandai `done`, checkbox akan tetap tercentang meski besok ada entry lain untuk task berbeda.
- **Blocked tasks** di dashboard diambil dari status **terakhir** yang dilaporkan untuk task tersebut — begitu ada entry baru dengan status `done`/`in-progress` untuk task yang sama, otomatis tidak lagi dianggap blocked.
- **Streak harian** dihitung dari tanggal log terbaru mundur ke belakang, terputus begitu ada hari tanpa entry.
- Semua ID task harus persis sama antara `TASKS.md` dan `DAILY_LOG.md` (case-sensitive) agar terhubung dengan benar. Kalau salah ketik ID, task tidak akan tercentang dan entry-nya tidak muncul terhubung ke checklist (tapi tetap tercatat di timeline log).
