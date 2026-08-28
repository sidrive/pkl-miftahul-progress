# Spec — Live Coding: Cek Stok Barang

## Latar belakang

Task ini menggabungkan skill Minggu 2 (`find`, DOM manipulation, event delegation) dan Minggu 3
(Promise/`async`/`await`) dalam satu sesi live coding singkat — dirancang untuk memverifikasi
transfer skill nyata, bukan hafalan skenario yang sudah 3-4 kali diulang minggu ini (cek koneksi,
cek stok barang di modul, download game).

## Requirement — Tingkat Dasar (WAJIB, ±15-20 menit)

1. Data: array of object `{id, nama, stok}` — lihat [`data-contoh.js`](./data-contoh.js).
2. Render list awal ke DOM: **nama barang saja** (stok belum ditampilkan), tiap baris punya
   tombol "Cek Stok". Wajib pakai `createElement`+`textContent`, bukan `innerHTML`.
3. **1 event listener** di elemen parent (event delegation) — bukan listener terpisah di tiap
   tombol.
4. Saat tombol "Cek Stok" diklik: pakai **`find`** untuk mencari data barang berdasarkan `id` yang
   sesuai baris itu, lalu tampilkan stoknya di sebelah nama (misal ganti isi elemen kosong di
   baris yang sama).

## Requirement — Tingkat Lanjutan (PENGAYAAN, kalau dia selesai cepat)

5. Saat tombol diklik, tampilkan teks **"Mengecek stok..."** dulu, baru setelah jeda (`setTimeout`
   dibungkus `Promise`, dipanggil pakai `async`/`await`) stoknya baru muncul.
6. Ini skenario **BARU** (bukan cek koneksi/stok-generik/download yang sudah dia pakai berulang
   minggu ini) — jadi ukuran murni transfer pemahaman Promise/`async`/`await` ke konteks lain.

## Starter yang diberikan ke Gazi

- `starter.html` — cuma `<ul id="daftar-barang"></ul>` di dalam skeleton HTML kosong.
- `data-contoh.js` — array data barang siap pakai (supaya tidak buang waktu mengetik data).

Jangan berikan `referensi-jawaban.js` atau spec ini ke Gazi.

## Rubrik penilaian live

| Aspek | Sinyal bagus | Perlu digali lebih lanjut |
|---|---|---|
| Render list awal | `forEach`/`map` + `createElement`, tombol dibuat per baris | `innerHTML` dengan template string — tanya kenapa, kaitkan ke `T1.3`/`T3.4` |
| Cari data saat tombol diklik | Pakai `find` (ambil 1 objek langsung) | Pakai `filter(...)[0]` atau `for` loop manual — tanya alasan pemilihannya |
| Pemasangan listener tombol | 1 listener di elemen `<ul>`/parent (delegation), cek `event.target` | Listener dipasang manual di tiap tombol saat render — ingatkan pelajaran `T4.4` Minggu 2 (elemen baru tidak otomatis dapat listener kalau dipasang begini) |
| (Lanjutan) loading state | `async function`, tampilkan "Mengecek..." SEBELUM `await` selesai, baru update setelah selesai | Lupa tampilkan status loading, atau pakai `setTimeout` polos tanpa Promise/`async`-`await` |
| (Lanjutan) penanganan hasil | `await` dipakai wajar, tidak ada `.then()` bercampur `await` tanpa alasan | Bingung membedakan Promise chain vs `async`/`await`, atau lupa `try`/`catch` |

## Estimasi waktu

Tingkat dasar realistis 15-20 menit termasuk debugging kecil (berkaca dari fluency drill `T2`
minggu ini yang makan 48 menit untuk app serupa tanpa data/starter siap pakai — dengan starter file
harusnya lebih cepat). Kalau tingkat dasar selesai jauh di bawah estimasi, lanjut ke tingkat
lanjutan. Kalau tidak, cukup sampai tingkat dasar — itu sudah representatif untuk menilai transfer
skill secara live.
