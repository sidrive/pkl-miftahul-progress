# Spec — Bug Injection: Fitur Toggle Selesai/Belum

## Bug yang ditanam

Di `buggy-indexT2.js`, baris yang menangani toggle status selesai (klik pada teks task):

```js
// ASLI (benar):
todo.selesai = !todo.selesai;

// DISUNTIK (bug):
todo.selesai = todo.selesai;
```

Satu karakter (`!`) dihilangkan. `todo.selesai` di-assign ke dirinya sendiri — nilainya tidak
pernah berubah.

## Gejala yang akan terlihat

- Klik pada teks task **tidak error di console** — tidak ada `TypeError`/`ReferenceError` apapun.
- Tampilan **terlihat seperti berfungsi** sekilas: klik memicu `render()` ulang, list ter-render
  lagi, `simpan()` ke `localStorage` tetap terpanggil — tapi coret teks (`class="selesai"`)
  **tidak pernah muncul/hilang**, apapun berapa kali diklik.
- Ini murni **silent logic bug** — tidak ada sinyal error sama sekali, harus dites langsung
  (klik lalu amati) untuk sadar ada yang salah.

## Kenapa bug ini dipilih

1. **Kategori baru** — minggu ini Gazi sudah menemukan bug kategori: assignment-vs-comparison
   (`=`/`===`), lupa `JSON.parse`, dan `tagName` case-sensitivity. Bug `!` yang hilang ini beda
   lagi: **operator negasi yang hilang**, bukan salah operator perbandingan.
2. **Ditanam di kode ASLI miliknya sendiri** (bukan potongan kode 5-13 baris buatan latihan) —
   menguji apakah familiaritas dengan kode sendiri membantu, walau file-nya jauh lebih panjang
   (159 baris vs 4-13 baris di `T2.1`/`T2.2`).
3. **Tidak memicu error sama sekali** — beda dengan sebagian bug minggu ini yang setidaknya
   punya sedikit sinyal (nilai `NaN`, tampilan kosong). Ini menguji apakah dia bisa curiga dan
   menguji hipotesis ("kemungkinan ada di baris toggle-nya") tanpa dituntun oleh pesan error.

## Cara mengetes (untuk mentor, sebelum sesi)

1. Buka `buggy-indexT2.html` di browser.
2. Klik teks salah satu task.
3. Perhatikan: teks TIDAK pernah tercoret (`text-decoration: line-through`), padahal event listener
   dan `render()` tetap terpanggil (bisa dicek lewat `console.log` tambahan sementara kalau perlu
   verifikasi).

## Rubrik penilaian live

| Aspek | Sinyal bagus | Perlu digali lebih lanjut |
|---|---|---|
| Pendekatan awal | Langsung curiga ke bagian toggle (baca kode, cari fungsi terkait), atau pasang breakpoint di situ | Coba-coba random di banyak bagian kode tanpa hipotesis jelas |
| Teknik yang dipakai | Breakpoint/`console.log` bisection di fungsi toggle, cek nilai `todo.selesai` sebelum & sesudah klik | Baca ulang semua 159 baris dari atas tanpa strategi |
| Waktu total | Lebih cepat dari 32-37 menit (baseline minggu ini) — walau file lebih panjang, ini kode yang sudah dia pahami sendiri | Jauh lebih lama — indikasi belum benar-benar transfer teknik ke kode yang lebih besar/familiar |
| Setelah ketemu | Bisa jelaskan KENAPA `todo.selesai = todo.selesai` tidak melakukan apa-apa (bukan cuma "oh kurang tanda seru") | Cuma memperbaiki tanpa bisa menjelaskan logika kenapa itu bug |

## Estimasi waktu

Target realistis: 10-20 menit (lebih cepat dari baseline 32-37 menit di kode latihan kecil),
karena ini kode miliknya sendiri yang sudah dia pahami struktur & alurnya. Kalau ternyata lebih
lama, itu sinyal jujur bahwa familiaritas kode belum otomatis mempercepat debugging — bahan
diskusi refleksi, bukan kegagalan.
