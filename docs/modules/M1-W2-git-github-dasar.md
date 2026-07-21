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

## 2. Eksplorasi Command Git Harian

Bagian ini fokus ke command yang **sering banget dipakai sehari-hari** tapi belum sempat dilatih —
belum masuk branching/merge (itu porsinya Minggu 3), ini lebih ke "cara manipulasi perubahan
sebelum/sesudah commit" yang bakal langsung kepakai begitu kamu mulai kerja beneran.

### `M1.W2.T2.1` — `git diff`

| Perintah | Fungsi |
|---|---|
| `git diff` | Lihat detail baris yang berubah, untuk file yang **belum** di-`add` |
| `git diff --staged` | Lihat detail baris yang berubah, untuk file yang **sudah** di-`add` tapi belum commit |

**Latihan:** edit sebuah file di `latihan-git`, jalankan `git diff` (perhatikan baris yang ditandai
`-` untuk versi lama dan `+` untuk versi baru). Lalu `git add` file itu, jalankan `git diff` lagi
(harusnya kosong — karena sudah staged), lalu `git diff --staged` (nah ini yang nampilin
perubahannya).

**Checklist selesai:** paham kenapa `git diff` "kosong" setelah `git add`, dan kenapa harus pakai
`--staged` untuk lihatnya.

### `M1.W2.T2.2` — `git restore` / `git checkout -- <file>`

Kalau kamu edit file dan ternyata **menyesal**, mau balik ke versi terakhir yang sudah di-commit
(belum sempat `git add`):
```bash
git restore <nama-file>
# atau versi lama: git checkout -- <nama-file>
```

**Latihan:** edit sebuah file sampai berantakan, lalu jalankan `git restore` ke file itu — pastikan
isinya balik seperti commit terakhir (perubahanmu hilang, ini memang tujuannya).

**Checklist selesai:** paham `git restore` cuma bisa mengembalikan perubahan yang **belum**
di-`add` — kalau sudah ter-`add`, perlu `git restore --staged <file>` dulu baru `git restore` lagi.

### `M1.W2.T2.3` — `git reset` (unstage vs batalkan commit)

| Perintah | Fungsi |
|---|---|
| `git reset HEAD <file>` (atau `git restore --staged <file>`) | Batalkan `add` (unstage) — perubahan file tetap ada, cuma tidak lagi "siap commit" |
| `git reset --soft HEAD~1` | Batalkan commit **terakhir**, tapi semua perubahannya tetap ada (jadi staged lagi) |

**Latihan:** `add` sebuah file, lalu `git reset HEAD <file>` — cek `git status`, filenya balik jadi
"belum staged" tapi perubahannya tidak hilang. Lalu coba `git commit`, lalu `git reset --soft
HEAD~1` — cek `git log` (commit terakhir hilang dari histori) dan `git status` (tapi perubahannya
masih ada, siap di-commit ulang).

**Penting:** jangan pernah coba `git reset --hard` di folder ini dulu tanpa ngerti — itu **beneran
menghapus** perubahan yang belum di-commit, tidak bisa dikembalikan. Cukup tahu dulu bahwa opsi itu
ada dan berbahaya; kalau nanti butuh, tanya mentor dulu.

**Contoh entry log:**
```markdown
### Task: M1.W2.T2.3
- **Status:** done
- **Capaian:** Sudah coba git reset HEAD (unstage) dan git reset --soft (batalkan commit terakhir), paham bedanya.
- **Kesulitan:** -
```

### `M1.W2.T2.4` — `git commit --amend`

Kalau kamu baru saja `commit` tapi sadar ada typo di pesannya, atau lupa nambah 1 file kecil, dan
**belum sempat `push`**, kamu bisa revisi commit terakhir itu (bukan bikin commit baru):
```bash
git commit --amend -m "pesan commit yang sudah diperbaiki"
```

**Latihan:** bikin 1 commit dengan pesan sengaja typo, lalu perbaiki pakai `--amend`. Cek `git log`
— harusnya cuma ada 1 commit di titik itu (bukan 2), dengan pesan yang sudah benar.

**Catatan penting:** `--amend` **hanya aman** dipakai untuk commit yang **belum di-push**. Kalau
commit itu sudah ter-push dan orang lain sudah "narik" (pull) versi lama, meng-amend lalu push lagi
bakal butuh `--force` — dan itu sama bahayanya seperti kasus force-push yang sudah dibahas di `T4.4`.

**Checklist selesai:** paham `--amend` itu untuk "membenarkan commit terakhir sebelum dikirim",
bukan untuk commit yang sudah di-push.

### `M1.W2.T2.5` — `git stash`

Kalau kamu lagi di tengah-tengah ngerjain sesuatu (belum siap commit), tapi tiba-tiba perlu pindah
konteks (misal mau `git pull` dulu, atau pindah branch), `git stash` "menyimpan sementara"
perubahanmu tanpa perlu commit:

| Perintah | Fungsi |
|---|---|
| `git stash` | Simpan semua perubahan yang belum commit, balikin folder ke kondisi bersih |
| `git stash list` | Lihat daftar stash yang tersimpan |
| `git stash pop` | Ambil kembali perubahan yang terakhir di-stash (dan hapus dari daftar stash) |

**Latihan:** edit sebuah file (jangan commit), jalankan `git stash` — cek `git status` (bersih,
seolah perubahan hilang). Jalankan `git stash list` (perubahanmu masih "disimpan" di situ). Baru
`git stash pop` — perubahanmu balik lagi.

**Contoh entry log:**
```markdown
### Task: M1.W2.T2.5
- **Status:** done
- **Capaian:** Sudah coba stash - stash list - stash pop, paham gunanya buat nyimpen kerjaan sementara.
- **Kesulitan:** -
```

### `M1.W2.T2.6` — `git log` lanjutan

| Perintah | Fungsi |
|---|---|
| `git log --oneline` | Histori ringkas, 1 baris per commit |
| `git log --graph --oneline` | Sama, plus visualisasi cabang (berguna banget mulai Minggu 3) |
| `git log --stat` | Histori + ringkasan file apa saja yang berubah per commit |
| `git show <hash-commit>` | Lihat detail lengkap 1 commit tertentu (pesan + perubahan baris) |

**Latihan:** coba keempatnya di folder `latihan-git`, bandingkan bedanya. Ambil salah satu hash
commit dari `git log --oneline`, coba `git show <hash>` itu.

**Checklist selesai:** bisa baca histori commit dengan cepat pakai `--oneline`, dan bisa cek detail
1 commit spesifik pakai `git show`.

### `M1.W2.T2.7` — [Wajib Refleksi] `git revert` vs `git reset --hard` + force push

Ini yang paling penting dari seluruh bagian eksplorasi ini, karena **langsung berkaitan** dengan
insiden force-push yang terjadi minggu ini di repo tracker PKL kamu.

- **`git revert <hash-commit>`**: bikin commit **baru** yang isinya "membalikkan" efek dari commit
  tertentu — histori lama **tetap ada** (tidak dihapus), cuma ditambah commit baru yang
  menetralkannya. Ini **aman** dipakai untuk commit yang **sudah di-push** dan sudah dilihat/di-pull
  orang lain.
- **`git reset --hard` + `git push --force`**: **menghapus** commit dari histori dan memaksa remote
  ikut menghapusnya juga. Kalau ada orang lain yang sudah `pull` versi lama, mereka bisa kehilangan
  pekerjaan tanpa sadar — persis yang terjadi minggu ini.

**Latihan:** di folder `latihan-git`, bikin 1 commit baru berisi perubahan yang sengaja "salah"
(misal isi file jadi ngaco), lalu jalankan:
```bash
git revert HEAD
```
Ikuti instruksi (biasanya tinggal simpan pesan default). Cek `git log` — commit yang "salah" tadi
**masih ada** di histori, tapi ada commit baru setelahnya yang membalikkan isinya ke kondisi benar.

**Isi log dengan menjawab (kata sendiri):**
1. Kalau kamu commit sesuatu yang salah dan **sudah** di-push, kenapa `git revert` lebih aman
   dibanding `git reset --hard` + `git push --force`?
2. Kapan (kalau ada) situasi di mana revert **tidak cukup** dan orang benar-benar perlu
   pertimbangkan opsi lain? (Boleh tanya AI untuk bagian ini, tapi tulis ulang pakai kata sendiri)

**Contoh entry log:**
```markdown
### Task: M1.W2.T2.7
- **Status:** done
- **Capaian:** [jawaban kamu soal revert vs reset --hard + force push]
- **Kesulitan:** -
```

---

## 3. Konsep Repository, Remote, Origin

### `M1.W2.T3.1` — Pahami konsepnya

- **Repository (repo)**: folder project yang di-track oleh Git — bisa berupa **repo lokal** (di
  komputer kamu, hasil `git init`) atau **repo remote** (disimpan di server, misal di GitHub).
- **Remote**: "alamat" repo lain (biasanya di server) yang terhubung dengan repo lokal kamu, supaya
  bisa saling kirim (`push`) dan ambil (`pull`) perubahan.
- **`origin`**: nama default yang biasa dipakai untuk menyebut remote utama sebuah repo (bisa
  diganti nama lain, tapi `origin` adalah konvensi standar).
- Alur singkatnya: **repo lokal** (di laptop) ←→ **remote `origin`** (di GitHub) — perubahan tidak
  otomatis tersinkron, harus eksplisit `git push` (kirim) atau `git pull` (ambil).

**Checklist selesai:** paham bedanya "commit" (nyimpen histori lokal) vs "push" (kirim ke remote).

### `M1.W2.T3.2` — [Wajib Refleksi] Kapan perubahan "beneran sampai" ke GitHub?

**Coba jawab dulu sendiri sebelum tanya AI:** kalau kamu `git commit` di laptop tapi belum
`git push`, apakah perubahan itu sudah ada/kelihatan di GitHub? Kalau laptop kamu tiba-tiba rusak
sebelum sempat push, apa yang terjadi ke perubahan itu?

**Isi log dengan jawabanmu**, lalu kaitkan ke pengalaman nyata: minggu lalu kamu sempat push (atau
pull) dan hasilnya kadang beda dari yang diharapkan — coba jelaskan pakai konsep commit vs push ini,
kenapa itu bisa terjadi.

**Contoh entry log:**
```markdown
### Task: M1.W2.T3.2
- **Status:** done
- **Capaian:** [jawaban kamu soal commit vs push]
- **Kesulitan:** -
```

---

## 4. Push Repo Latihan Pertama

### `M1.W2.T4.1` — Buat repo GitHub + hubungkan remote

1. Di GitHub, klik **New repository** → beri nama (misal `latihan-git-pertama`) → **jangan**
   centang "Add a README" dulu (biar bisa praktik push dari repo lokal yang sudah ada isinya).
2. Di terminal, masuk ke folder `latihan-git` dari Bagian 1.
3. Hubungkan repo lokal ke repo GitHub yang baru dibuat:
   ```bash
   git remote add origin https://github.com/<username-kamu>/latihan-git-pertama.git
   ```
4. Cek koneksinya berhasil: `git remote -v` — harus muncul `origin` dengan URL yang benar.

**Checklist selesai:** `git remote -v` menampilkan `origin` mengarah ke repo GitHub kamu.

### `M1.W2.T4.2` — Push pertama

```bash
git branch -M main
git push -u origin main
```

Refresh halaman repo di GitHub — pastikan file & histori commit kamu (3 commit dari bagian 1)
muncul di sana.

**Checklist selesai:** repo di GitHub menampilkan file & histori commit yang sama seperti lokal.

### `M1.W2.T4.3` — Edit, commit, push lagi

Coba edit satu file lagi secara lokal, commit, lalu `git push` lagi (tanpa `-u`, karena `-u` cuma
perlu sekali di awal untuk set default remote/branch). Ulangi sekali lagi supaya minimal ada 2
siklus edit → commit → push yang lengkap.

**Contoh entry log:**
```markdown
### Task: M1.W2.T4.3
- **Status:** done
- **Capaian:** Repo latihan sudah ter-push, minimal 2x siklus edit-commit-push berhasil.
- **Kesulitan:** -
```

### `M1.W2.T4.4` — [Wajib Refleksi — PENTING] Simulasi push ditolak, dan cara benar menyelesaikannya

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
### Task: M1.W2.T4.4
- **Status:** done
- **Capaian:** [ceritakan pengalaman simulasi reject-push kamu + jawaban 3 pertanyaan di atas]
- **Kesulitan:** -
```

---

## 5. Proyek Pengembangan Skill Mandiri Minggu 2 (`M1.W2.T5`)

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
5. **Alami skenario push ditolak minimal sekali** dengan sengaja (sama seperti `T4.4`, edit dari
   GitHub web dulu) dan selesaikan dengan `git pull` — **bukan** `--force`.
6. **Pakai minimal 1 command dari bagian 2 (eksplorasi)** di proses pengerjaannya — misal
   `git stash` waktu pindah konteks, `git commit --amend` buat benerin pesan commit sebelum push,
   atau `git revert` kalau sempat commit sesuatu yang salah. Ceritakan yang mana yang kepakai di
   refleksi log.
7. Cantumkan **link repo GitHub** ini di README project & di entry log.

### Submit

Tidak perlu disalin ke `submissions/` lagi (karena sekarang sudah punya repo sendiri) — cukup
pastikan link repo-nya bisa diakses publik dan dicantumkan di log.

**Contoh entry log:**
```markdown
### Task: M1.W2.T5
- **Status:** done
- **Capaian:** Project CLI Minggu 1 sekarang jadi repo tersendiri: [link repo GitHub]. Ada 6 commit terpisah (setup, fitur A, fitur B, README, bug fix, dst). Sempat alami push ditolak, selesai pakai git pull.
- **Kesulitan:** [jujur aja — misal bagian mana yang masih bikin ragu soal Git]
```

---

## 6. Uji Ulang Pemahaman Mandiri — Case Baru (`M1.W2.T6`)

**Kenapa task ini ada:** evaluasi Minggu 1 (`M1.W1.T6`) kemarin diakui sendiri agak "blank" pas
sesi — grogi, banyak yang lupa, dan proses ngerjain `T5` (CLI monitoring tugas) banyak dibantu AI
dari nol. Itu bukan masalah besar (wajar untuk minggu pertama), tapi task ini dibuat supaya ada
kesempatan **buktiin ulang** pemahaman itu beneran nempel — pakai project **yang berbeda**, bukan
project yang sama yang jawabannya bisa dihafal.

**Estimasi waktu:** menyesuaikan, tapi jangan buru-buru — lebih baik pelan tapi paham, daripada
cepat tapi blank lagi pas ditanya.

### Requirement

1. **Pilih topik project yang BEDA dari CLI monitoring tugas** (bukan variasi/lanjutan dari itu).
   Contoh ide (pilih 1, atau bikin ide sendiri): konverter satuan (suhu/panjang/berat), kalkulator
   sederhana dengan riwayat perhitungan, generator password acak, atau quiz/kuis interaktif via
   input terminal.
2. **Struktur folder dibuat lewat terminal**, kode boleh 1 atau 2 file (tidak wajib serumit `T5`
   Minggu 1) — fokus task ini bukan fitur sebanyak-banyaknya, tapi **kejelasan pemahaman**.
3. **Coba dulu sendiri sebelum tanya AI** — tulis dulu draft logika kasar (boleh di kertas/komentar
   kode, boleh salah), baru kalau stuck tanya AI. Kalau AI kasih kode, jangan langsung copy-paste
   semua — ambil sepotong, pahami, baru lanjut (bukan seperti proses `T5` kemarin).
4. **Git dari awal**: `git init`, histori commit rapi (minimal 4 commit terpisah per langkah), push
   ke repo GitHub baru.
5. **Tidak ada data placeholder/lelucon** ikut ter-submit (`Hiu tes tes` dkk — cek ulang sebelum
   push).
6. Kalau pakai dependency eksternal, pastikan **semua yang di-`package.json` benar-benar dipakai**
   di kode (tidak ada dependency nganggur seperti yang terjadi di `T5` Minggu 1).

### Sesi presentasi (beda formatnya dari `T6` Minggu 1)

Supaya groginya lebih terkendali, sesi ini dibikin **2 tahap**, bukan tanya-jawab dadakan:

1. **Tahap persiapan (dikasih waktu, tidak dadakan):** sebelum sesi, siapkan penjelasan singkat
   (boleh ditulis dulu sebagai catatan pribadi, tapi saat presentasi **tidak boleh dibaca kata per
   kata** — poin-poin saja): apa yang dibangun, kenapa pilih topik itu, bagian mana yang paling
   menantang, dan alur logika program secara garis besar.
2. **Tahap presentasi (~10-15 menit):** jalankan program live, jelaskan alur kodenya baris demi
   baris (boleh buka kode di layar, tapi jelaskan pakai kata sendiri, bukan baca komentar kode).
   Mentor akan tanya 2-3 variasi kecil di luar yang sudah disiapkan — ini untuk cek reaksi spontan,
   bukan jebakan.

**Isi log dengan jujur** — kalau masih ada bagian yang groginya kambuh atau ada yang lupa saat
presentasi, tulis itu apa adanya. Task ini baru `done` kalau presentasinya **benar-benar terlaksana
dan mentor menilai penjelasannya cukup jelas** — sama seperti aturan teach-back di Minggu 1.

**Contoh entry log:**
```markdown
### Task: M1.W2.T6
- **Status:** done
- **Capaian:** [ceritakan project barunya apa, kenapa pilih topik itu, dan bagaimana sesi presentasinya berjalan]
- **Kesulitan:** [jujur — termasuk kalau masih grogi/ada yang lupa, itu bahan follow-up bukan kegagalan]
```

---

## 7. Evaluasi Minggu 2 (`M1.W2.T7`)

Siapkan demo singkat (~15 menit) untuk mentor:

1. Jalankan langsung di terminal: `git init`, `git add`, `git commit`, `git log` di sebuah folder
   contoh.
2. Tunjukkan repo latihan (`T4`) yang sudah ter-push di GitHub, beserta histori commit-nya.
3. **Tunjukkan repo hasil `T5`** — histori commit-nya, dan ceritakan proses waktu push ditolak +
   cara kamu menyelesaikannya.
4. **Mentor akan tanya 2-3 variasi pertanyaan** di luar contoh modul — termasuk kemungkinan
   skenario "kalau push ditolak, apa yang kamu lakukan?" untuk cek betul-betul paham, bukan
   hafalan langkah.
5. Ceritakan singkat: bagian mana yang paling gampang, bagian mana yang masih bikin bingung
   (misal soal `origin`, konflik, atau proses autentikasi push).

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W2.T7
- **Status:** done
- **Capaian:** Demo ke mentor selesai, Git dasar dikuasai, repo latihan & repo T5 sudah ter-push, presentasi mini-project T6 lancar, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- Git basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- GitHub docs — repository & remote: https://docs.github.com/en/get-started/git-basics/about-remote-repositories
- GitHub docs — kenapa push bisa ditolak: https://docs.github.com/en/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors
