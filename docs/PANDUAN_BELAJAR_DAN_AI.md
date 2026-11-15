# Panduan Belajar & Penggunaan AI

> Berlaku untuk **semua task** di `TASKS.md`, semua bulan. Baca ini dulu sebelum mulai — beberapa
> task ke depan (mulai Minggu 1) secara eksplisit mensyaratkan cara kerja di bawah ini sebagai
> bagian dari "selesai", bukan cuma perintahnya jalan.

## Kenapa panduan ini dibuat

Dari review `DAILY_LOG.md` Minggu 1, ditemukan pola: beberapa task terminal ditandai **done**,
tapi di kolom "Kesulitan" tertulis hal-hal seperti *"kurang paham apa yang dilakukan"* atau
*"fungsi belum tau"*. Artinya perintahnya berhasil dijalankan (kadang dengan bantuan AI), tapi
**konsepnya belum benar-benar dipahami**. Task yang seperti ini gampang ketahuan lagi begitu masuk
ke task lanjutan yang butuh konsep itu sebagai dasar.

Tujuan program ini bukan sekadar mencentang checklist — tapi supaya Gazi benar-benar bisa kerja
mandiri di project nyata nanti. Jadi mulai sekarang, "done" = **paham + bisa jelaskan ulang**,
bukan cuma "sudah jalan".

## Aturan pakai AI (ChatGPT, Copilot, Claude, dll)

1. **Coba dulu sendiri sebelum tanya AI.** Baca modul, coba jalankan/pikirkan sendiri dulu minimal
   1 kali percobaan. Kalau stuck, baru tanya AI.
2. **AI untuk membantu paham, bukan mengerjakan gantiin kamu.** Kalau tanya AI, jangan cuma minta
   "kasih perintahnya" — minta AI **menjelaskan kenapa** perintah/kode itu bekerja seperti itu.
   Contoh prompt yang bagus: *"Aku coba jalankan `rm -r folder` dan errornya X, kenapa ya, dan apa
   yang sebenarnya dilakukan perintah itu?"* — bukan cuma *"kasih perintah buat hapus folder"*.
3. **Setelah AI menjelaskan, tulis ulang pemahamanmu pakai kata-katamu sendiri** (bukan copy-paste
   jawaban AI) di kolom `Capaian` pada `DAILY_LOG.md`, atau di tempat yang diminta task terkait.
   Kalau kamu tidak bisa menuliskannya tanpa buka lagi jawaban AI, tandanya belum benar-benar paham
   — ulangi dulu sebelum tandai `done`.
4. **Boleh banget pakai AI untuk:** debugging error, mempercepat riset dokumentasi, cek apakah
   pemahamanmu sudah benar (misal "aku pikir X begini, benar tidak?").
5. **Sebisa mungkin hindari:** minta AI langsung generate seluruh jawaban/kode tanpa kamu coba
   pahami dulu prosesnya — nanti pas ditanya mentor secara langsung (tanpa AI), jawabannya kosong.

## Contoh kode di modul: tidak ada kunci jawaban (mulai Bulan 2 Minggu 3)

Modul-modul sebelumnya sering menulis hasil `console.log` langsung di komentar kode, misal:
```js
const daftarNama = siswa.map((s) => s.nama)
console.log(daftarNama) // ["Ani", "Budi", "Citra"]
```
Ini membuat Gazi bisa tahu jawabannya tanpa perlu benar-benar menjalankan kodenya. **Mulai
modul Bulan 2 Minggu 3 dan seterusnya, kunci jawaban seperti ini dihapus** dari contoh kode.

Konsekuensinya:
1. **Gazi wajib menjalankan sendiri** tiap contoh kode di modul, lihat hasil aslinya di
   console/browser — bukan menyimpulkan dari membaca kode saja.
2. **Hasil yang benar-benar dilihat itu yang ditulis** di kolom `Capaian` `DAILY_LOG.md` (bukan
   ditebak, bukan disalin dari modul karena memang tidak ada lagi jawabannya di sana).
3. Kalau prediksinya beda dari hasil asli, itu justru bagus dicatat jujur — jadi bahan refleksi
   dan bahan tanya ke mentor, bukan sesuatu yang perlu ditutup-tutupi.

**Untuk mentor (aturan menulis modul ke depan):** jangan lagi menaruh nilai hasil `console.log`
di komentar contoh kode pada modul manapun mulai sekarang. Boleh tetap menjelaskan *konsep*/*alur*
di teks di luar blok kode (misal "perhatikan array aslinya tidak berubah"), tapi jangan
mencantumkan nilai/isi hasil eksekusi yang seharusnya Gazi temukan sendiri dengan menjalankan
kodenya.

## Definisi "Done" yang baru (mulai Minggu 1 breakdown lanjutan)

Untuk task yang punya tanda **[Wajib Refleksi]** di `TASKS.md`, status `done` di `DAILY_LOG.md`
baru valid kalau kolom `Capaian` juga berisi jawaban/penjelasan dengan kata sendiri sesuai yang
diminta task tersebut — bukan cuma "sudah selesai" atau "berhasil dijalankan". Kalau belum bisa
jelaskan, tulis status `in-progress` dan `Kesulitan`-nya apa, supaya mentor tahu perlu dibantu di
bagian mana — **ini bukan soal nilai, jujur soal paham/belum jauh lebih berguna daripada checklist
penuh tapi kosong di dalam.**

## Laporan/Mini App Akhir Minggu (mulai Bulan 3 Minggu 4 dan seterusnya)

Mulai minggu ini, **setiap akhir minggu** ada 1 task tambahan sebelum evaluasi: menyatukan SEMUA
task praktik minggu itu (semua putaran, bukan cuma proyek pengembangan skill mandiri) jadi **1
kesatuan yang saling terhubung** — bukan potongan-potongan latihan terpisah seperti biasanya
(masing-masing cuma component/file sendiri-sendiri, dipanggil manual lewat 1 file switch).

Pilih salah satu bentuk tiap minggunya:

1. **Mini App** — satukan seluruh component/latihan minggu itu jadi 1 aplikasi navigasi beneran
   (pakai konsep routing/navigasi yang relevan di minggu itu, atau cara lain yang masuk akal kalau
   minggu itu belum belajar routing) — 1 halaman/bagian per task atau per kelompok task yang
   berhubungan, bisa di-demo end-to-end dalam 1 aplikasi yang jalan.
2. **Laporan tertulis** — dokumen (boleh markdown) yang menjelaskan **alur logis** keseluruhan
   minggu: bagaimana satu konsep yang dipelajari di awal minggu dipakai lagi/berhubungan dengan
   konsep di task-task berikutnya, bukan ringkasan terpisah per task seperti isi `DAILY_LOG.md`
   biasa.

**Kenapa ini ditambahkan:** mengerjakan task satu-satu sampai checklist penuh itu perlu, tapi belum
tentu menunjukkan Gazi bisa melihat **gambaran besarnya** — bagaimana potongan-potongan konsep yang
dipelajari terpisah sebenarnya saling mendukung dalam 1 alur kerja nyata. Ini juga melatih
kebiasaan yang relevan di kerja nyata nanti: fitur jarang berdiri sendiri, biasanya saling
berhubungan dengan fitur lain dalam 1 aplikasi.

**Untuk mentor (aturan menulis task ke depan):** setiap breakdown mingguan baru (mulai Bulan 3
Minggu 4), selalu sisipkan 1 task "Laporan/Mini App Akhir Minggu" di antara task praktik terakhir
minggu itu dan task evaluasi — letakkan SETELAH proyek pengembangan skill mandiri (kalau ada
minggu itu) dan SEBELUM evaluasi, supaya bisa ikut didemokan ke mentor di sesi yang sama. Sesuaikan
pilihan bentuknya (mini app vs laporan) dengan topik minggu itu — mini app lebih masuk akal kalau
minggu itu belajar sesuatu yang relevan untuk navigasi/komposisi (misal routing, komponen), laporan
tertulis lebih masuk akal kalau minggu itu topiknya lebih konseptual/abstrak dan sulit disatukan
jadi 1 app secara alami.

## Standar Kualitas Project Mandiri: "Do More, Untuk Hasil Better" (mulai Bulan 5)

Dari pengamatan sepanjang Bulan 1-4: Gazi konsisten mengejar "selesai" (fitur jalan), tapi belum
terbiasa dengan pola kerja "selesai jalan" ≠ "selesai berkualitas". Ini wajar untuk tahap latihan
konsep (tujuannya memang paham konsep, bukan produksi), TAPI mulai **project mandiri (Bulan 5 —
SIMASET dan seterusnya)**, standarnya dinaikkan — mendekati ekspektasi kerja nyata: **frontend itu
soal UI/UX, bukan cuma logic yang jalan.** Tidak asal jadi, tidak asal jalan, tidak asal rapi —
UI/UX-nya harus benar-benar berkualitas.

### 1. Definisi "Selesai" diperketat untuk project mandiri

Mulai Bulan 5, 1 fitur BARU boleh ditandai `done` kalau SEMUA ini terpenuhi (bukan cuma "jalan di
skenario normal"):
- **Edge case ditangani**: input kosong, input terlalu panjang/pendek, karakter aneh/spesial,
  angka negatif/nol (kalau relevan) — bukan cuma kasus "pengguna mengisi dengan benar".
- **Setiap operasi data punya 3 state**: loading, kosong (empty), dan error — bukan cuma kondisi
  "data berhasil tampil".
- **Dicek di lebar layar HP** (~400px), bukan cuma di layar laptop tempat dia ngoding.
- **Daftar skenario yang diuji ditulis eksplisit** di `DAILY_LOG.md`/`Capaian` — termasuk skenario
  GAGAL/ANEH yang sengaja dicoba, bukan cuma kalimat umum "sudah dicoba dan jalan".

### 2. Standar UI/UX — bukan cuma "rapi", tapi BERKUALITAS

Setiap halaman/fitur baru di project mandiri wajib memenuhi checklist ini sebelum `done`:

- **Hierarki visual jelas**: elemen penting (misal tombol aksi utama) harus terlihat LEBIH MENONJOL
  dari elemen sekunder (misal tombol batal) — lewat warna/ukuran/posisi, bukan semua elemen
  "berbobot sama" di layar.
- **Konsistensi lintas halaman**: spacing, warna, ukuran font HARUS konsisten di semua halaman
  (manfaatkan token/`Ds*` yang sudah dibangun — kalau 1 halaman "beda sendiri", itu bukan variasi,
  itu inkonsistensi).
- **Feedback interaksi jelas**: SETIAP aksi pengguna (klik tombol, submit form, hover, loading,
  error, sukses) harus ada respons VISUAL yang jelas — jangan ada aksi yang "diam saja" tanpa
  tanda apa pun ke pengguna bahwa sesuatu terjadi.
- **Affordance**: elemen yang bisa diklik harus TERLIHAT bisa diklik (`cursor: pointer`, warna/
  state hover berbeda) — jangan ada tombol/link yang kelihatan seperti teks biasa.
- **Form usability**: label jelas (bukan cuma placeholder sebagai pengganti label), pesan error
  SPESIFIK (misal "Nomor telepon harus 10-13 digit", bukan sekadar "Input tidak valid").
- **Empty/error state informatif**: bukan cuma "Tidak ada data", tapi beri konteks/aksi lanjutan
  (misal "Belum ada aset terdaftar — tambah aset pertama" + tombol tambah).
- **Aksesibilitas dasar**: kontras warna teks vs background cukup terbaca (bukan abu-abu tipis di
  atas putih), setiap `<input>` punya `<label>` yang terhubung.

### 3. "Polish Pass" wajib setelah tiap fitur utama

Mulai `M5.W2` dan seterusnya, pola kerja per fitur BUKAN lagi "implementasi → langsung fitur
berikutnya", tapi: **implementasi (happy path) → task TERPISAH khusus "polish" fitur itu** (terapkan
checklist di atas: edge case, loading/empty/error state, UI/UX, cek responsive) → baru lanjut fitur
berikutnya. Mentor akan menyisipkan task "Polish: [nama fitur]" di breakdown mingguan sebagai
pengingat eksplisit, bukan berharap ini terjadi otomatis.

### 4. Review mentor jadi review sungguhan, bukan rubber-stamp

Untuk project mandiri, evaluasi mingguan TIDAK cukup "demo jalan, selesai". Mentor WAJIB:
- Sengaja mencoba minimal 1 skenario aneh/edge case saat demo (input kosong, resize ke lebar HP,
  klik cepat berulang, dll) — kalau rusak, itu bahan revisi, PR BELUM di-approve.
- Minta minimal 1 perbaikan nyata tiap sesi review (soal UI/UX, struktur kode, atau penanganan
  error) — simulasi kondisi kerja nyata yang jarang approve di percobaan pertama.
- Catat di refleksi evaluasi: apa yang diminta revisi, dan apakah Gazi menemukan sendiri bagian
  yang lemah SEBELUM ditunjukkan mentor (sinyal makin dia berkembang, makin jarang perlu
  ditunjukkan).

### 5. Retrospektif tiap milestone

Di setiap evaluasi mingguan project mandiri, tambahkan 1 pertanyaan wajib: **"Kalau dikasih 1 hari
lagi untuk fitur ini, apa yang akan kamu perbaiki?"** — melatih dia melihat celah dari sudut
pandangnya sendiri, bukan menunggu mentor yang menemukan.

**Catatan penting:** aturan ini KHUSUS project mandiri (Bulan 5 — SIMASET dan seterusnya), BUKAN
untuk task latihan konsep kecil (Bulan 1-4 polanya tetap sama seperti sebelumnya, fokus ke
pemahaman konsep). Alasannya: di tahap latihan, kecepatan memahami konsep baru lebih penting;
begitu masuk project mandiri yang mensimulasikan kerja nyata, kecepatan TIDAK LAGI jadi ukuran
utama — kualitas yang jadi ukuran utama.

## Untuk mentor (review checkpoint)

Saat demo/evaluasi mingguan (task `T*.Evaluasi`), jangan cuma minta Gazi menjalankan ulang
perintah dari modul — tanya **secara acak** hal yang sedikit beda dari contoh di modul (misal:
"kalau kamu di folder ini, terus `cd ..` dua kali, kamu ada di mana?"). Kalau jawabannya lancar
tanpa buka catatan/AI, itu sinyal bagus. Kalau tidak, task terkait belum benar-benar selesai
meski checkbox sudah tercentang — catat di refleksi evaluasi minggu itu, dan pertimbangkan minta
diulang sebelum lanjut ke minggu berikutnya.
