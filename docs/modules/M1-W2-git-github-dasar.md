# Modul Minggu 2 — Git Dasar & GitHub

> Modul ini menemani task `M1.W2.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah. Akun GitHub sudah dibuat di Minggu 1
> (`docs/modules/M1-W1-fondasi-tools.md`) — modul ini fokus ke Git dan konsep repo/remote.
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — task bertanda
> **[Wajib Refleksi]** baru dianggap `done` kalau kamu bisa jelaskan pemahamannya pakai kata
> sendiri, bukan cuma perintahnya berhasil jalan.

---

## 1. Git Dasar

Git adalah **version control system** — alat untuk mencatat histori perubahan kode, supaya bisa
lihat perubahan apa saja yang terjadi, kembali ke versi lama, atau kerja bareng tanpa saling
menimpa pekerjaan orang lain.

### `M1.W2.T1.1` — Verifikasi Git & konfigurasi identitas

1. Cek Git sudah terpasang: `git --version`.
2. Set identitas kamu (dipakai sebagai "author" di setiap commit):
   ```bash
   git config --global user.name "Nama Kamu"
   git config --global user.email "email-kamu@example.com"
   ```
3. Cek hasilnya: `git config --global user.name` dan `git config --global user.email`.

**Checklist selesai:** `git --version` menampilkan versi tanpa error, dan identitas sudah ter-set
(bukan default kosong).

### `M1.W2.T1.2` — Praktik siklus dasar: init, status, add, commit

| Perintah | Fungsi |
|---|---|
| `git init` | Menjadikan folder saat ini sebagai repository Git baru |
| `git status` | Lihat file mana yang berubah/belum di-track |
| `git add <file>` | Menandai perubahan file untuk masuk ke commit berikutnya (staging) |
| `git add .` | Staging semua perubahan di folder saat ini |
| `git commit -m "pesan"` | Simpan perubahan yang sudah di-staging sebagai satu titik histori |
| `git log` | Lihat histori commit |

**Latihan:**
1. Buat folder baru `latihan-git`, jalankan `git init` di dalamnya.
2. Buat file `catatan.txt` isi bebas, `git add` lalu `git commit -m "commit pertama"`.
3. Edit file itu, cek `git status` (harus muncul sebagai "modified"), commit lagi dengan pesan
   berbeda.
4. Tambah 1 file baru lagi, commit lagi dengan pesan yang jelas.
5. Jalankan `git log` — pastikan minimal ada **3 commit terpisah** dengan pesan yang jelas
   (bukan 1 commit besar yang isinya semua perubahan sekaligus — kebiasaan ini penting dibiasakan
   dari sekarang, bakal dipakai lagi di `M1.W4.T3` nanti: "commit history rapi per fitur").

**Checklist selesai:** minimal 3 commit terpisah di `git log`, masing-masing pesannya jelas
menjelaskan perubahan apa yang terjadi.

### `M1.W2.T1.3` — Praktik `.gitignore`

1. Di folder `latihan-git`, buat file `.gitignore`, isi 1 baris: `*.log`.
2. Buat file `test.log` — jalankan `git status`, pastikan `test.log` **tidak** muncul sebagai
   perubahan yang perlu di-track.
3. Buat juga folder `data-rahasia/` isi 1 file di dalamnya, tambahkan baris `data-rahasia/` ke
   `.gitignore`, pastikan folder itu juga tidak muncul di `git status`.

**Checklist selesai:** `git status` bersih dari file/folder yang sudah masuk `.gitignore`.

**Contoh entry log setelah bagian 1 selesai:**
```markdown
### Task: M1.W2.T1.2
- **Status:** done
- **Capaian:** Sudah bikin 3 commit terpisah di folder latihan-git, git log nampilin histori dengan benar.
- **Kesulitan:** -
```

### `M1.W2.T1.4` — [Wajib Refleksi] Kenapa ada "staging area"?

Sebelum tanya AI, coba pikirkan dulu: kenapa Git tidak langsung `commit` semua perubahan begitu
saja — kenapa harus `add` dulu (staging), baru `commit`?

Coba percobaan ini: edit **2 file berbeda** sekaligus (misal `a.txt` dan `b.txt`), tapi kamu cuma
mau commit perubahan di `a.txt` dulu (anggap `b.txt` belum selesai/belum siap). Coba `git add a.txt`
saja (bukan `git add .`), lalu `git commit`. Cek `git status` — `b.txt` masih berubah tapi belum
ter-commit.

**Isi log dengan menjawab (kata sendiri):** apa gunanya bisa milih sebagian file buat di-commit,
bukan semuanya sekaligus? Kasih contoh situasi nyata kapan ini berguna.

**Contoh entry log:**
```markdown
### Task: M1.W2.T1.4
- **Status:** done
- **Capaian:** [jawaban kamu soal staging area, berdasarkan percobaan di atas]
- **Kesulitan:** -
```

### `M1.W2.T1.5` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup dulu modul ini, jangan tanya AI.** Jawab semampunya, baru boleh cek jawaban setelahnya.

1. Apa fungsi `git status`?
2. Apa beda `git add <file>` dengan `git add .`?
3. Setelah `git commit`, apakah perubahan itu otomatis sudah ada di GitHub? Kenapa?
4. Apa fungsi `git log`?
5. Kalau kamu lupa isi `.gitignore` dan sebuah file besar/sensitif terlanjur ter-commit, apa
   akibatnya (ingat pengalaman `node_modules` Minggu 1)?

**Contoh entry log:**
```markdown
### Task: M1.W2.T1.5
- **Status:** done
- **Capaian:** [jawaban kamu + koreksi kalau ada yang salah setelah dicek ulang]
- **Kesulitan:** -
```

---

## 2. Konsep Repository, Remote, Origin

### `M1.W2.T2.1` — Pahami konsepnya

- **Repository (repo)**: folder project yang di-track oleh Git — bisa berupa **repo lokal** (di
  komputer kamu, hasil `git init`) atau **repo remote** (disimpan di server, misal di GitHub).
- **Remote**: "alamat" repo lain (biasanya di server) yang terhubung dengan repo lokal kamu, supaya
  bisa saling kirim (`push`) dan ambil (`pull`) perubahan.
- **`origin`**: nama default yang biasa dipakai untuk menyebut remote utama sebuah repo (bisa
  diganti nama lain, tapi `origin` adalah konvensi standar).
- Alur singkatnya: **repo lokal** (di laptop) ←→ **remote `origin`** (di GitHub) — perubahan tidak
  otomatis tersinkron, harus eksplisit `git push` (kirim) atau `git pull` (ambil).

**Checklist selesai:** paham bedanya "commit" (nyimpen histori lokal) vs "push" (kirim ke remote).

### `M1.W2.T2.2` — [Wajib Refleksi] Kapan perubahan "beneran sampai" ke GitHub?

**Coba jawab dulu sendiri sebelum tanya AI:** kalau kamu `git commit` di laptop tapi belum
`git push`, apakah perubahan itu sudah ada/kelihatan di GitHub? Kalau laptop kamu tiba-tiba rusak
sebelum sempat push, apa yang terjadi ke perubahan itu?

**Isi log dengan jawabanmu**, lalu kaitkan ke pengalaman nyata: minggu lalu kamu sempat push (atau
pull) dan hasilnya kadang beda dari yang diharapkan — coba jelaskan pakai konsep commit vs push ini,
kenapa itu bisa terjadi.

**Contoh entry log:**
```markdown
### Task: M1.W2.T2.2
- **Status:** done
- **Capaian:** [jawaban kamu soal commit vs push]
- **Kesulitan:** -
```

---

## 3. Push Repo Latihan Pertama

### `M1.W2.T3.1` — Buat repo GitHub + hubungkan remote

1. Di GitHub, klik **New repository** → beri nama (misal `latihan-git-pertama`) → **jangan**
   centang "Add a README" dulu (biar bisa praktik push dari repo lokal yang sudah ada isinya).
2. Di terminal, masuk ke folder `latihan-git` dari Bagian 1.
3. Hubungkan repo lokal ke repo GitHub yang baru dibuat:
   ```bash
   git remote add origin https://github.com/<username-kamu>/latihan-git-pertama.git
   ```
4. Cek koneksinya berhasil: `git remote -v` — harus muncul `origin` dengan URL yang benar.

**Checklist selesai:** `git remote -v` menampilkan `origin` mengarah ke repo GitHub kamu.

### `M1.W2.T3.2` — Push pertama

```bash
git branch -M main
git push -u origin main
```

Refresh halaman repo di GitHub — pastikan file & histori commit kamu (3 commit dari bagian 1)
muncul di sana.

**Checklist selesai:** repo di GitHub menampilkan file & histori commit yang sama seperti lokal.

### `M1.W2.T3.3` — Edit, commit, push lagi

Coba edit satu file lagi secara lokal, commit, lalu `git push` lagi (tanpa `-u`, karena `-u` cuma
perlu sekali di awal untuk set default remote/branch). Ulangi sekali lagi supaya minimal ada 2
siklus edit → commit → push yang lengkap.

**Contoh entry log:**
```markdown
### Task: M1.W2.T3.3
- **Status:** done
- **Capaian:** Repo latihan sudah ter-push, minimal 2x siklus edit-commit-push berhasil.
- **Kesulitan:** -
```

### `M1.W2.T3.4` — [Wajib Refleksi — PENTING] Simulasi push ditolak, dan cara benar menyelesaikannya

**Konteks kenapa task ini ada:** minggu lalu, `main` di repo tracker PKL ini sempat **ke-force-push**
beberapa kali — artinya sebagian history commit sempat tertimpa/hilang. Ini biasanya terjadi karena
push ditolak (remote punya perubahan yang lokal tidak punya), lalu diselesaikan dengan cara yang
salah (`git push --force`) alih-alih cara yang benar (`git pull` dulu). Task ini supaya kamu
**mengalami sendiri** skenario itu dalam kondisi aman (repo latihan, bukan repo penting), dan
paham cara menyelesaikannya dengan benar.

**Langkah-langkah:**
1. Buka repo `latihan-git-pertama` kamu **di browser GitHub** (bukan lewat lokal). Klik salah satu
   file, edit langsung di web, commit langsung dari web (GitHub kasih tombol "Commit changes").
   Sekarang remote (GitHub) punya 1 commit yang **lokal kamu tidak punya**.
2. Balik ke lokal, edit file lain (boleh file berbeda), commit seperti biasa.
3. Coba `git push` — **harus muncul error**, kira-kira begini:
   ```
   ! [rejected]        main -> main (fetch first)
   error: failed to push some refs...
   hint: Updates were rejected because the remote contains work that you do not have locally.
   ```
   Ini **normal dan wajar** — bukan berarti ada yang rusak. Artinya Git melindungi kamu supaya
   tidak menimpa perubahan orang lain (atau perubahanmu sendiri dari device lain) tanpa sadar.
4. **Cara menyelesaikan yang BENAR:**
   ```bash
   git pull origin main
   ```
   Ini akan mengambil commit dari GitHub dan menggabungkannya dengan commit lokalmu (biasanya
   otomatis, karena beda file). Kalau editor muncul minta isi pesan merge commit, simpan saja
   dengan pesan default lalu tutup editornya.
5. Setelah `pull` berhasil, coba `git push` lagi — sekarang harus berhasil tanpa error.

**Yang TIDAK BOLEH dilakukan:** `git push --force` atau `git push -f`. Command ini **memaksa**
remote menerima versi lokalmu apa adanya, **menghapus/menimpa** commit apa pun yang ada di remote
tapi tidak ada di lokalmu — termasuk kalau itu pekerjaan orang lain (atau pekerjaanmu sendiri dari
device lain). Kalau suatu saat kamu benar-benar mentok dan berpikir perlu force push, **tanya
mentor dulu sebelum menjalankannya** — jangan pernah pakai `--force` sebagai solusi cepat untuk
error "rejected".

**Isi log dengan menjawab (kata sendiri):**
1. Kenapa push kamu ditolak tadi?
2. Apa bedanya efek `git pull` vs `git push --force` kalau dipakai untuk menyelesaikan error itu?
3. Kalau kamu pernah (secara tidak sengaja) pakai `--force` sebelumnya, ceritakan apa yang terjadi
   dan apa yang akan kamu lakukan beda kalau ketemu situasi serupa lagi.

**Contoh entry log:**
```markdown
### Task: M1.W2.T3.4
- **Status:** done
- **Capaian:** [ceritakan pengalaman simulasi reject-push kamu + jawaban 3 pertanyaan di atas]
- **Kesulitan:** -
```

---

## 4. Proyek Pengembangan Skill Mandiri Minggu 2 (`M1.W2.T4`)

**Estimasi waktu:** minimal setengah hari kerja (±4 jam), termasuk kalau dibantu AI.

Project CLI kamu dari Minggu 1 (`M1.W1.T5`) sekarang cuma berupa kumpulan file di
`submissions/M1-W1/T5-proyek-mandiri/` — itu bagus sebagai bukti kerja, tapi **belum benar-benar
"versioned"** dengan Git. Task ini: jadikan project itu (boleh dikembangkan lagi fiturnya, boleh
juga tetap) sebagai **repo GitHub tersendiri**, dengan histori commit yang mencerminkan proses
pengerjaannya — bukan 1 commit besar berisi semua kode sekaligus.

### Requirement wajib

1. **Buat folder project baru** (boleh salin dari `submissions/M1-W1/T5-proyek-mandiri/`, boleh
   lanjutkan dari situ), lalu `git init` di folder itu — ini jadi repo Git tersendiri, terpisah
   dari repo tracker PKL ini.
2. **`.gitignore` benar sejak awal** — pastikan `node_modules/` tidak pernah ter-track sama sekali
   (bukan dihapus belakangan seperti insiden Minggu 1).
3. **Histori commit rapi, minimal 5 commit terpisah**, masing-masing mewakili satu langkah/fitur
   yang jelas. Contoh urutan yang masuk akal:
   - commit 1: setup awal (`package.json`, `.gitignore`)
   - commit 2: fitur inti pertama
   - commit 3: fitur/perbaikan berikutnya
   - commit 4: `README.md`
   - commit 5: perbaikan kecil/bug fix
   (Urutan bebas sesuai proses kamu — intinya jangan 1 commit isinya "semua fitur sekaligus".)
4. **Buat repo baru di GitHub** khusus untuk project ini (nama bebas, misal
   `pkl-cli-monitoring-tugas`), hubungkan (`git remote add origin ...`), lalu push semua commit.
5. **Alami skenario push ditolak minimal sekali** dengan sengaja (sama seperti `T3.4`, edit dari
   GitHub web dulu) dan selesaikan dengan `git pull` — **bukan** `--force`.
6. Cantumkan **link repo GitHub** ini di README project & di entry log.

### Submit

Tidak perlu disalin ke `submissions/` lagi (karena sekarang sudah punya repo sendiri) — cukup
pastikan link repo-nya bisa diakses publik dan dicantumkan di log.

**Contoh entry log:**
```markdown
### Task: M1.W2.T4
- **Status:** done
- **Capaian:** Project CLI Minggu 1 sekarang jadi repo tersendiri: [link repo GitHub]. Ada 6 commit terpisah (setup, fitur A, fitur B, README, bug fix, dst). Sempat alami push ditolak, selesai pakai git pull.
- **Kesulitan:** [jujur aja — misal bagian mana yang masih bikin ragu soal Git]
```

---

## 5. Evaluasi Minggu 2 (`M1.W2.T5`)

Siapkan demo singkat (~15 menit) untuk mentor:

1. Jalankan langsung di terminal: `git init`, `git add`, `git commit`, `git log` di sebuah folder
   contoh.
2. Tunjukkan repo latihan (`T3`) yang sudah ter-push di GitHub, beserta histori commit-nya.
3. **Tunjukkan repo hasil `T4`** — histori commit-nya, dan ceritakan proses waktu push ditolak +
   cara kamu menyelesaikannya.
4. **Mentor akan tanya 2-3 variasi pertanyaan** di luar contoh modul — termasuk kemungkinan
   skenario "kalau push ditolak, apa yang kamu lakukan?" untuk cek betul-betul paham, bukan
   hafalan langkah.
5. Ceritakan singkat: bagian mana yang paling gampang, bagian mana yang masih bikin bingung
   (misal soal `origin`, konflik, atau proses autentikasi push).

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W2.T5
- **Status:** done
- **Capaian:** Demo ke mentor selesai, Git dasar dikuasai, repo latihan & repo T4 sudah ter-push, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- Git basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- GitHub docs — repository & remote: https://docs.github.com/en/get-started/git-basics/about-remote-repositories
- GitHub docs — kenapa push bisa ditolak: https://docs.github.com/en/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors
