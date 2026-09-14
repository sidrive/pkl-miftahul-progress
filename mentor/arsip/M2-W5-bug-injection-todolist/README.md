# Live Coding — Bug Injection ke To-Do List (Evaluasi `M2.W5.T4`)

> ⚠️ **Khusus mentor.** Jangan diberikan/ditunjukkan ke Gazi sebelum sesi berlangsung.
>
> **BELUM di-push ke branch manapun** — folder ini masih lokal saja, sesuai permintaan.

## Kenapa desain ini

`M2.W5.T4` di `TASKS.md` sudah mensyaratkan: *"mentor sengaja menyuntik 1 bug ke to-do list yang
sudah jalan (live, di depan Gazi) dan menghitung waktu sampai ketemu & terbaiki — dibandingkan
dengan waktu di `T2.1`/`T2.2`."* Folder ini menyiapkan bug spesifik yang akan disuntikkan,
supaya sesinya tidak perlu improvisasi di tempat.

**Baseline pembanding (dari log Gazi sendiri minggu ini):**
- `T2.1` (bug `=` vs `===` di 1 fungsi 4 baris): **37 menit**
- `T2.2` (bug `JSON.parse` terlupa + `tagName` case mismatch, 2 bug di ~9 baris): **32 menit**

Kedua bug itu ada di **potongan kode kecil buatan latihan**. Bug kali ini ditanam di **kode
aslinya sendiri** (`indexT2.js`, sudah 159 baris, sudah dia pahami luar-kepala) — jadi
perbandingannya adil: apakah familiar dengan kodenya sendiri bikin lebih cepat, walau
baris kodenya jauh lebih banyak.

## Bug yang ditanam

**Kategori BARU** (belum pernah ditemui minggu ini — bukan `=`/`===`, bukan case-sensitivity,
bukan `JSON.parse`): **hilangnya 1 tanda negasi (`!`)** di fitur toggle selesai/belum.

Lihat detail lengkap, gejala, dan cara mengujinya di [`spec.md`](./spec.md). Kode yang sudah
disuntik bug ada di [`buggy-indexT2.js`](./buggy-indexT2.js) (+ [`buggy-indexT2.html`](./buggy-indexT2.html)
pendamping) — **inilah yang diberikan ke Gazi saat sesi**, bukan file aslinya.

Kunci jawaban (fix + penjelasan) ada di [`referensi-jawaban.md`](./referensi-jawaban.md`) —
jangan ditunjukkan.

## Alur singkat sesi

1. Beri tahu Gazi: "coba jalankan to-do list ini, ada 1 hal yang gak sesuai harapan — cari &
   perbaiki." Kasih file `buggy-indexT2.html`+`buggy-indexT2.js` (rename jadi `index.html`/`indexT2.js`
   dulu biar tidak menimbulkan kecurigaan dari nama file, atau biarkan saja apa adanya, terserah).
2. Mulai stopwatch begitu dia mulai investigasi.
3. Amati apakah dia pakai teknik minggu ini (breakpoint, bisection, baca error console) atau
   kembali ke coba-coba acak.
4. Catat waktu total, bandingkan dengan 37 & 32 menit di atas.
