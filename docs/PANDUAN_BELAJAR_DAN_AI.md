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

## Definisi "Done" yang baru (mulai Minggu 1 breakdown lanjutan)

Untuk task yang punya tanda **[Wajib Refleksi]** di `TASKS.md`, status `done` di `DAILY_LOG.md`
baru valid kalau kolom `Capaian` juga berisi jawaban/penjelasan dengan kata sendiri sesuai yang
diminta task tersebut — bukan cuma "sudah selesai" atau "berhasil dijalankan". Kalau belum bisa
jelaskan, tulis status `in-progress` dan `Kesulitan`-nya apa, supaya mentor tahu perlu dibantu di
bagian mana — **ini bukan soal nilai, jujur soal paham/belum jauh lebih berguna daripada checklist
penuh tapi kosong di dalam.**

## Untuk mentor (review checkpoint)

Saat demo/evaluasi mingguan (task `T*.Evaluasi`), jangan cuma minta Gazi menjalankan ulang
perintah dari modul — tanya **secara acak** hal yang sedikit beda dari contoh di modul (misal:
"kalau kamu di folder ini, terus `cd ..` dua kali, kamu ada di mana?"). Kalau jawabannya lancar
tanpa buka catatan/AI, itu sinyal bagus. Kalau tidak, task terkait belum benar-benar selesai
meski checkbox sudah tercentang — catat di refleksi evaluasi minggu itu, dan pertimbangkan minta
diulang sebelum lanjut ke minggu berikutnya.
