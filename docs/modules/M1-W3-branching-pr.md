# Modul Minggu 3 — Branching, Merge, Conflict & Pull Request

> Modul ini menemani task `M1.W3.*` di `TASKS.md`. Setiap bagian dipetakan ke satu ID task —
> setelah selesai satu bagian, langsung isi entry di `DAILY_LOG.md` dengan ID yang sesuai.
> Kerjakan urut dari atas ke bawah — branching dulu, baru merge, baru conflict (biar kebayang
> kenapa conflict bisa terjadi), baru alur Pull Request yang menggabungkan semuanya.
>
> **Baca dulu** [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — task bertanda
> **[Wajib Refleksi]** baru dianggap `done` kalau kamu bisa jelaskan pemahamannya pakai kata
> sendiri, bukan cuma perintahnya berhasil jalan.

---

## 1. Branching Dasar

### `M1.W3.T1.1` — Kenapa butuh branch?

Bayangkan kamu lagi ngerjain fitur baru di project, tapi di tengah jalan tiba-tiba ada bug urgent
di versi yang sudah jalan — kalau semua kerjaan (fitur baru yang belum selesai + fix bug) numpuk
jadi satu di `main`, bakal berantakan. **Branch** memecah ini: kamu bisa kerja di jalur terpisah
(`fitur-baru`) tanpa mengganggu `main` yang stabil, sambil tetap bisa `switch` ke `main` buat fix
bug mendesak kapan saja.

- **`main`** (atau `master`): branch utama, biasanya berisi kode yang sudah stabil/siap pakai.
- **Branch lain**: salinan histori dari titik tertentu, tempat kamu bereksperimen/ngembangin
  fitur tanpa menyentuh `main` dulu.
- Perubahan di 1 branch **tidak otomatis muncul** di branch lain — harus di-**merge** dulu (bagian 2).

**Checklist selesai:** paham kenapa kerja paralel (2 fitur beda arah sekaligus) butuh branch
terpisah, bukan dikerjakan berurutan di 1 branch yang sama.

### `M1.W3.T1.2` — Praktik: buat & pindah branch

| Perintah | Fungsi |
|---|---|
| `git branch` | Lihat daftar branch yang ada (tanda `*` = branch aktif sekarang) |
| `git switch -c <nama>` (atau `git checkout -b <nama>`) | Buat branch baru **dan langsung pindah** ke situ |
| `git switch <nama>` (atau `git checkout <nama>`) | Pindah ke branch yang sudah ada |

**Latihan:**
1. Di folder `latihan-git` (dari Minggu 2), jalankan `git branch` — pastikan cuma ada `main`.
2. `git switch -c fitur-percobaan` — cek `git branch` lagi, sekarang ada 2, dan `*` pindah ke
   `fitur-percobaan`.
3. Buat file baru di branch ini, `add`, `commit`.
4. `git switch main` — perhatikan file yang baru kamu buat tadi **hilang** dari folder (bukan
   kehapus, cuma "disembunyikan" karena belum ada di `main`).
5. `git switch fitur-percobaan` lagi — file itu muncul lagi.

**Checklist selesai:** paham kalau pindah branch itu mengubah isi folder kerja sesuai histori
branch itu, dan itu bukan berarti data hilang.

### `M1.W3.T1.3` — Praktik: hapus branch

```bash
git branch -d nama-branch     # hapus branch yang SUDAH di-merge (aman)
git branch -D nama-branch     # paksa hapus meski BELUM di-merge (hati-hati! bisa kehilangan kerjaan)
```

**Latihan:** buat 1 branch percobaan baru, jangan commit apa-apa, langsung `git branch -d` —
harus berhasil (karena kosong/belum ada perubahan penting). Coba juga hapus branch yang **sudah**
kamu merge di `T2.2` nanti (kerjakan setelah bagian 2 selesai).

**Contoh entry log:**
```markdown
### Task: M1.W3.T1.2
- **Status:** done
- **Capaian:** Bisa bikin, pindah, dan lihat isi folder berubah sesuai branch aktif.
- **Kesulitan:** -
```

### `M1.W3.T1.4` — [Wajib Refleksi] Kuis mandiri (tanpa modul/AI)

**Tutup dulu modul ini, jangan tanya AI.** Jawab semampunya, baru boleh cek jawaban setelahnya.

1. Apa beda `git branch <nama>` dengan `git switch -c <nama>`?
2. Kenapa perubahan/commit di 1 branch tidak muncul di branch lain sebelum di-merge?
3. Kalau kamu hapus branch pakai `git branch -d` tapi Git menolak dengan pesan error, kira-kira
   kenapa? (petunjuk: baca lagi bagian `-d` vs `-D` di atas)

**Contoh entry log:**
```markdown
### Task: M1.W3.T1.4
- **Status:** done
- **Capaian:** [jawaban kamu + koreksi kalau ada yang salah setelah dicek ulang]
- **Kesulitan:** -
```

---

## 2. Merge Dasar

### `M1.W3.T2.1` — Fast-forward vs 3-way merge

- **Fast-forward merge**: terjadi kalau `main` **tidak punya commit baru** sejak branch-nya
  dipisah. Git cuma "menggeser" pointer `main` maju ke commit terakhir branch itu — simpel,
  tidak ada commit gabungan baru.
- **3-way merge**: terjadi kalau `main` **juga sudah punya commit baru sendiri** (dari orang lain,
  atau kamu commit langsung di `main`) sejak branch dipisah. Git harus menggabungkan 2 jalur
  histori jadi satu, dan otomatis membuat **"merge commit"** baru yang punya 2 parent.

**Checklist selesai:** paham kedua istilah ini sebelum praktik di bawah.

### `M1.W3.T2.2` — Praktik fast-forward merge

1. Dari `main`, buat branch baru: `git switch -c fitur-a`.
2. Commit 1-2 perubahan di branch ini.
3. `git switch main` — pastikan kamu **tidak** commit apa pun di `main` sejak tadi.
4. `git merge fitur-a` — perhatikan pesannya: harusnya bilang "Fast-forward".
5. `git log --graph --oneline` — histori terlihat **lurus** (tidak ada percabangan/merge commit).

**Contoh entry log:**
```markdown
### Task: M1.W3.T2.2
- **Status:** done
- **Capaian:** Berhasil fast-forward merge, git log --graph nunjukkin histori lurus tanpa merge commit.
- **Kesulitan:** -
```

### `M1.W3.T2.3` — [Wajib Refleksi] Praktik 3-way merge

1. Buat branch baru lagi: `git switch -c fitur-b`, commit 1 perubahan.
2. `git switch main`, lalu buat **1 commit baru di `main` juga** (edit file lain, supaya beda dari
   yang diubah `fitur-b`).
3. `git merge fitur-b` — kali ini Git akan buka editor minta pesan "merge commit" (simpan saja
   pesan default, tutup editornya).
4. `git log --graph --oneline` — sekarang histori **bercabang lalu menyatu lagi**, ada 1 commit
   ekstra (merge commit) yang tidak ada di fast-forward tadi.

**Isi log dengan menjawab (kata sendiri):** kenapa kali ini Git bikin commit ekstra ("merge
commit"), padahal tadi di `T2.2` tidak?

**Contoh entry log:**
```markdown
### Task: M1.W3.T2.3
- **Status:** done
- **Capaian:** [jawaban kamu soal kenapa 3-way merge butuh merge commit ekstra, berdasarkan perbandingan git log --graph]
- **Kesulitan:** -
```

---

## 3. Resolve Conflict

Ini bagian yang paling sering bikin panik kalau belum pernah ngalamin — padahal kalau sudah tahu
polanya, resolve conflict itu rutin banget di kerja tim beneran.

### `M1.W3.T3.1` — Simulasi conflict nyata

1. Dari `main`, buat 2 branch: `git switch -c branch-x`, edit **baris pertama** sebuah file jadi
   teks A, commit. Lalu `git switch main`, buat branch lain `git switch -c branch-y`, edit **baris
   yang SAMA PERSIS** di file yang sama jadi teks B (berbeda dari teks A), commit.
2. `git switch main`, lalu `git merge branch-x` (harusnya lancar/fast-forward).
3. `git merge branch-y` — **sekarang harus muncul conflict**, kira-kira:
   ```
   Auto-merging nama-file.txt
   CONFLICT (content): Merge conflict in nama-file.txt
   Automatic merge failed; fix conflicts and then commit the result.
   ```
   Ini **wajar**, bukan berarti ada yang rusak — lanjut ke bagian berikutnya.

### `M1.W3.T3.2` — Praktik resolve manual

Buka file yang conflict, isinya akan ada penanda seperti ini:
```
<<<<<<< HEAD
teks dari branch-x (versi main sekarang)
=======
teks dari branch-y (versi yang mau di-merge)
>>>>>>> branch-y
```

1. Putuskan: mau pakai versi `branch-x`, versi `branch-y`, gabungan keduanya, atau versi baru sama
   sekali.
2. **Hapus semua penanda** (`<<<<<<<`, `=======`, `>>>>>>>`) — sisakan cuma teks final yang kamu
   pilih.
3. `git add nama-file.txt` (menandai conflict sudah selesai untuk file itu).
4. `git commit` — ini menyelesaikan merge-nya (Git otomatis siapkan pesan "Merge branch...").

**Checklist selesai:** file sudah bersih dari penanda conflict, dan `git status` menunjukkan
working tree bersih setelah commit.

**Contoh entry log:**
```markdown
### Task: M1.W3.T3.2
- **Status:** done
- **Capaian:** Berhasil resolve conflict manual, pilih versi [x], commit selesai tanpa penanda tersisa.
- **Kesulitan:** -
```

### `M1.W3.T3.3` — [Wajib Refleksi] Kenapa Git bisa "bingung"?

**Isi log dengan menjawab (kata sendiri):**
1. Kenapa Git tidak bisa otomatis menggabungkan perubahan di kasus tadi (padahal biasanya bisa
   otomatis kalau editnya di baris/file berbeda)?
2. Kalau kamu pernah lihat/dengar soal "merge conflict" sebelum belajar ini, ceritakan — apakah
   dulu kelihatan menakutkan? Sekarang setelah coba sendiri, apa bedanya?

**Contoh entry log:**
```markdown
### Task: M1.W3.T3.3
- **Status:** done
- **Capaian:** [jawaban kamu soal kenapa Git bingung, dan perbandingan persepsi sebelum vs sesudah coba sendiri]
- **Kesulitan:** -
```

---

## 4. Push Branch & Pull Request Pertama

### `M1.W3.T4.1` — Push branch (bukan `main`)

Setelah kamu punya branch dengan commit yang mau diusulkan (bukan langsung ke `main`):
```bash
git push -u origin nama-branch-kamu
```
Ini push branch itu ke GitHub sebagai branch terpisah — **bukan** menimpa `main`.

**Checklist selesai:** buka repo di GitHub, pastikan branch baru itu muncul di dropdown branch
(bukan cuma `main`).

### `M1.W3.T4.2` — Buat Pull Request pertama

1. Di GitHub, biasanya muncul banner "Compare & pull request" setelah push branch baru — klik itu
   (atau buka tab **Pull requests** → **New pull request** manual).
2. Pastikan arahnya: `base: main` ← `compare: nama-branch-kamu`.
3. **Isi judul & deskripsi yang jelas** — jelaskan apa yang diubah dan kenapa, bukan cuma "update"
   atau "fix". Contoh judul bagus: "Tambah fitur hapus task berdasarkan ID".
4. Klik **Create pull request**.

**Checklist selesai:** PR muncul di tab Pull Requests repo, statusnya "Open".

### `M1.W3.T4.3` — Review bareng mentor

Minta mentor buka PR-mu di GitHub dan kasih komentar/review **lewat fitur review GitHub**
(bukan cuma chat WA) — klik **Files changed** → kasih komentar di baris tertentu kalau ada. Kalau
ada masukan, perbaiki di branch yang sama (commit baru, push lagi — PR otomatis update).

**Contoh entry log:**
```markdown
### Task: M1.W3.T4.3
- **Status:** done
- **Capaian:** PR sudah direview mentor, ada masukan soal [x], sudah diperbaiki & push ulang.
- **Kesulitan:** -
```

### `M1.W3.T4.4` — Merge PR & bersih-bersih

1. Setelah disetujui, klik **Merge pull request** di GitHub (pilih **Merge commit** — opsi default,
   paling gampang dipahami untuk pemula; ada juga "Squash and merge" / "Rebase and merge" tapi itu
   opsional untuk dieksplorasi belakangan).
2. Di lokal: `git switch main`, `git pull` (ambil hasil merge dari GitHub).
3. Hapus branch yang sudah selesai: `git branch -d nama-branch-kamu` (lokal), dan boleh hapus juga
   branch remote-nya lewat GitHub (tombol "Delete branch" di halaman PR yang sudah di-merge).

**Checklist selesai:** `main` di lokal sudah punya perubahan dari PR, dan branch fitur sudah bersih
dihapus (baik lokal maupun remote).

### `M1.W3.T4.5` — [Wajib Refleksi] Kenapa alur ini lebih aman?

**Konteks:** minggu-minggu lalu, `main` di repo tracker PKL ini sempat ke-force-push langsung
tanpa proses review apa pun. Alur branch → PR → review → merge itu punya "lapis pengaman" yang
tidak ada kalau langsung `push` ke `main`.

**Isi log dengan menjawab (kata sendiri):**
1. Apa yang bisa "ketangkep" lewat proses review PR yang **tidak akan ketangkep** kalau langsung
   push ke `main` tanpa review?
2. Kalau alur branch → PR ini yang dipakai dari awal minggu lalu, menurutmu apakah insiden
   force-push kemarin bisa dicegah/lebih gampang ketauan? Kenapa?

**Contoh entry log:**
```markdown
### Task: M1.W3.T4.5
- **Status:** done
- **Capaian:** [jawaban kamu soal manfaat review PR + kaitan ke insiden force-push]
- **Kesulitan:** -
```

---

## 5. Proyek Pengembangan Skill Mandiri Minggu 3 (`M1.W3.T5`)

**Estimasi waktu:** minimal setengah hari kerja (±4 jam), termasuk kalau dibantu AI.

Sekarang gabungkan semua yang dipelajari minggu ini jadi 1 alur kerja nyata: tambah **1 fitur baru**
ke salah satu project kamu yang sudah ada (CLI Minggu 1, atau mini-project Minggu 2) — tapi kali ini
**wajib lewat branch → PR → merge**, bukan commit+push langsung ke `main`.

### Requirement wajib

1. **Pilih 1 fitur kecil** yang belum ada di project itu (contoh: fitur hapus data, fitur export ke
   file, validasi input tambahan — bebas, yang penting jelas scope-nya).
2. **Buat branch baru** khusus fitur ini (nama deskriptif, misal `fitur-hapus-task`), jangan
   kerjakan langsung di `main`.
3. **Commit histori rapi** di branch itu (minimal 3 commit terpisah per langkah, sama seperti
   kebiasaan Minggu 2).
4. **Sengaja alami minimal 1 conflict asli**: sebelum bikin PR, buat 1 commit kecil langsung di
   `main` (misal update `README.md`) yang **menyentuh bagian file yang sama** dengan fiturmu, supaya
   nanti PR-nya (atau saat kamu update branch dari `main`) beneran conflict, bukan simulasi kosong.
   Resolve conflict itu sendiri (pakai cara di bagian 3).
5. **Push branch, buat PR, minta review mentor**, perbaiki kalau ada masukan, baru merge.
6. **Bersihkan branch** setelah merge (lokal & remote).

### Submit

Cukup pastikan PR-nya ada di repo GitHub project terkait (tidak perlu disalin ke `submissions/`) —
cantumkan link PR di entry log.

**Contoh entry log:**
```markdown
### Task: M1.W3.T5
- **Status:** done
- **Capaian:** Fitur [nama fitur] ditambahkan lewat branch+PR: [link PR]. Sempat conflict asli di [file], berhasil resolve manual. PR sudah direview & di-merge.
- **Kesulitan:** [jujur aja — misal bagian mana yang masih bikin ragu soal branching/conflict]
```

---

## 6. Evaluasi Minggu 3 (`M1.W3.T6`)

Siapkan demo singkat (~15-20 menit) untuk mentor:

1. Praktik langsung di terminal: buat branch, commit, merge (fast-forward), lalu sekali lagi
   dengan 3-way merge — jelaskan bedanya sambil dipraktikkan.
2. **Tunjukkan PR dari `T5`** yang sudah di-merge — ceritakan proses conflict yang dialami dan cara
   resolve-nya.
3. **Mentor akan tanya 2-3 variasi pertanyaan** di luar contoh modul — termasuk kemungkinan
   skenario conflict baru untuk cek pemahaman, bukan hafalan langkah.
4. Ceritakan singkat: bagian mana yang paling menantang (biasanya conflict pertama kali memang
   bikin deg-degan — itu normal), bagian mana yang paling gampang.

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M1.W3.T6
- **Status:** done
- **Capaian:** Demo ke mentor selesai, branching/merge/conflict/PR dikuasai, pertanyaan variasi mentor terjawab.
- **Kesulitan:** (isi refleksi jujur)
```

---

## Referensi tambahan (opsional)

- Git branching (interaktif, visual): https://learngitbranching.js.org/?locale=id_ID
- GitHub docs — about pull requests: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
- GitHub docs — resolving a merge conflict: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
