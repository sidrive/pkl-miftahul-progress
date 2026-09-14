# Live Coding — CADANGAN: Bug Hunting "Manajemen Stok Gudang" (Evaluasi `M2.W5.T4`)

> ⚠️ **Khusus mentor.** Jangan diberikan/ditunjukkan ke Gazi sebelum sesi berlangsung.
>
> **BELUM di-push ke branch manapun** — folder ini masih lokal saja.
>
> **Ini task CADANGAN** — dipakai kalau bug injection utama (`M2-W5-bug-injection-todolist`,
> hilangnya tanda `!` di toggle) dirasa terlalu mudah/cepat ketemu. Task ini jelas lebih sulit:
> **3 bug** di kode yang **sama sekali baru** (bukan kode Gazi sendiri, jadi tidak ada keuntungan
> familiaritas), dengan tingkat kesulitan campur — 1 lumayan kelihatan, 1 murni typo, dan 1
> **sengaja intermiten** (kadang kelihatan jalan, kadang tidak, tergantung persis di mana diklik).

## Kenapa lebih sulit dari task utama

| | Task utama (`!` hilang) | Task cadangan ini |
|---|---|---|
| Kode | Miliknya sendiri (familiar) | Kode baru, belum pernah dilihat |
| Jumlah bug | 1 | 3 (harus ditemukan semua) |
| Jenis bug | Silent, konsisten (selalu gagal dengan cara sama) | Campuran: 1 terlihat aneh, 1 typo, 1 **intermiten** (tergantung titik klik persis) |
| Kesulitan menemukan | Sedang | Tinggi — terutama bug intermiten butuh dipahami konsep `event.target` vs elemen anak di dalam tombol |

## Isi folder

- [`spec.md`](./spec.md) — daftar 3 bug, gejala, rubrik, estimasi waktu.
- [`stok-gudang.html`](./stok-gudang.html) + [`stok-gudang.js`](./stok-gudang.js) — kode yang
  sudah disuntik ketiga bug, diberikan ke Gazi.
- [`referensi-jawaban.md`](./referensi-jawaban.md) — kunci jawaban, jangan ditunjukkan.

## Alur singkat sesi

1. Kasih kedua file, minta dijalankan: "ada beberapa hal yang gak sesuai harapan di app stok
   gudang ini — cari & perbaiki semuanya" (jumlah bug TIDAK diberi tahu, biar dia sendiri yang
   memastikan sudah semua atau belum).
2. Mulai stopwatch begitu dia mulai investigasi.
3. **Perhatikan khusus reaksinya ke bug tombol restock** (bug #2 di `spec.md`) — ini yang paling
   menguji, karena gejalanya tidak konsisten. Amati apakah dia menyadari pola "kadang jalan kadang
   tidak" dan mengaitkannya ke posisi klik, atau malah bingung/menyerah menganggap "random error".
4. Catat waktu total & bandingkan dengan baseline minggu ini (37 & 32 menit di kode latihan kecil).
