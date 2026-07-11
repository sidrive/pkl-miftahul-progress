# Modul Minggu 2 — Git Dasar & GitHub

> Modul ini menemani task `M1.W2.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah. Akun GitHub sudah dibuat di Minggu 1
> (`docs/modules/M1-W1-fondasi-tools.md`) — modul ini fokus ke Git dan konsep repo/remote.

---

## 1. Git Dasar (`M1.W2.T1`)

Git adalah **version control system** — alat untuk mencatat histori perubahan kode, supaya bisa
lihat perubahan apa saja yang terjadi, kembali ke versi lama, atau kerja bareng tanpa saling
menimpa pekerjaan orang lain.

| Perintah | Fungsi |
|---|---|
| `git init` | Menjadikan folder saat ini sebagai repository Git baru |
| `git status` | Lihat file mana yang berubah/belum di-track |
| `git add <file>` | Menandai perubahan file untuk masuk ke commit berikutnya (staging) |
| `git add .` | Staging semua perubahan di folder saat ini |
| `git commit -m "pesan"` | Simpan perubahan yang sudah di-staging sebagai satu titik histori |
| `git log` | Lihat histori commit |
| `.gitignore` | File khusus berisi daftar file/folder yang **sengaja tidak** ikut di-track Git (contoh: `node_modules/`, file `.env`) |

**Latihan:**
1. Buat folder baru `latihan-git`, jalankan `git init` di dalamnya.
2. Buat file `catatan.txt` isi bebas, `git add` lalu `git commit -m "commit pertama"`.
3. Edit file itu, cek `git status` (harus muncul sebagai "modified"), commit lagi dengan pesan
   berbeda.
4. Buat file `.gitignore`, tambahkan baris `*.log`, buat file `test.log` — pastikan `git status`
   **tidak** menampilkan `test.log` sebagai perubahan.
5. Jalankan `git log` — pastikan minimal ada 2 commit dengan pesan yang jelas.

**Checklist selesai:** paham beda "staged" vs "belum staged" vs "sudah commit", dan tahu kenapa
`.gitignore` penting (supaya file besar/sensitif tidak ikut ter-commit).

---

## 2. Konsep Repository, Remote, Origin (`M1.W2.T2`)

- **Repository (repo)**: folder project yang di-track oleh Git — bisa berupa **repo lokal** (di
  komputer kamu, hasil `git init`) atau **repo remote** (disimpan di server, misal di GitHub).
- **Remote**: "alamat" repo lain (biasanya di server) yang terhubung dengan repo lokal kamu, supaya
  bisa saling kirim (`push`) dan ambil (`pull`) perubahan.
- **`origin`**: nama default yang biasa dipakai untuk menyebut remote utama sebuah repo (bisa
  diganti nama lain, tapi `origin` adalah konvensi standar).
- Alur singkatnya: **repo lokal** (di laptop) ←→ **remote `origin`** (di GitHub) — perubahan tidak
  otomatis tersinkron, harus eksplisit `git push` (kirim) atau `git pull` (ambil).

**Latihan cek paham:** jelaskan dengan kata-katamu sendiri (tulis di refleksi log) — kalau kamu
`git commit` di laptop tapi belum `git push`, apakah perubahan itu sudah ada di GitHub? (Jawaban:
belum — commit cuma tersimpan di repo lokal sampai di-push.)

---

## 3. Push Repo Latihan Pertama (`M1.W2.T3`)

1. Di GitHub, klik **New repository** → beri nama (misal `latihan-git-pertama`) → **jangan**
   centang "Add a README" dulu (biar bisa praktik push dari repo lokal yang sudah ada isinya).
2. Di terminal, masuk ke folder `latihan-git` dari Bagian 1 tadi.
3. Hubungkan repo lokal ke repo GitHub yang baru dibuat:
   ```bash
   git remote add origin https://github.com/<username-kamu>/latihan-git-pertama.git
   git branch -M main
   git push -u origin main
   ```
4. Refresh halaman repo di GitHub — pastikan file & histori commit kamu muncul di sana.
5. Coba edit satu file lagi secara lokal, commit, lalu `git push` lagi (tanpa `-u`, karena
   `-u` cuma perlu sekali di awal untuk set default remote/branch).

**Checklist selesai:** repo latihan muncul di profil GitHub kamu, dan minimal ada 2 kali push
yang berhasil (push pertama + push setelah edit).

---

## 4. Evaluasi Minggu 2 (`M1.W2.T4`)

Siapkan demo singkat (~10 menit) untuk mentor:

1. Jalankan langsung di terminal: `git init`, `git add`, `git commit`, `git log` di sebuah folder
   contoh.
2. Tunjukkan repo latihan kamu yang sudah ter-push di GitHub, beserta histori commit-nya.
3. Ceritakan singkat: bagian mana yang paling gampang, bagian mana yang masih bikin bingung
   (misal soal `origin`, atau proses autentikasi push).

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W2.T4
- **Status:** done
- **Capaian:** Demo ke mentor selesai, Git dasar dikuasai dan repo latihan sudah ter-push.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- Git basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- GitHub docs — repository & remote: https://docs.github.com/en/get-started/git-basics/about-remote-repositories
