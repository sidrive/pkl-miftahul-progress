# Kunci Jawaban Mentor — Stok Gudang (3 Bug)

> ⚠️ Jangan ditunjukkan ke Gazi.

## Bug #1 — Total stok jadi string gabungan

**Lokasi:** `hitungTotalStok`
```js
return data.reduce((acc, item) => acc + item.stok, "");
```
**Fix:**
```js
return data.reduce((acc, item) => acc + item.stok, 0);
```
Ganti nilai awal dari `""` (string) ke `0` (angka).

## Bug #2 — Tombol restock tidak konsisten merespons

**Lokasi:** event delegation di `listEl`
```js
if (event.target.classList.contains("btn-restock")) {
```
**Fix (pilih salah satu):**
```js
// Opsi A — closest() cari elemen terdekat yang cocok, naik ke atas dari target sampai ketemu
const tombol = event.target.closest(".btn-restock");
if (tombol) {
  const id = Number(tombol.dataset.id);
  ...
}
```
```js
// Opsi B — hapus <span> pembungkus teks, textContent langsung di <button>
btnRestock.textContent = "+10 Stok"; // tanpa iconSpan
```
Opsi A lebih baik diajarkan karena `closest()` adalah solusi umum untuk pola ini (elemen anak di
dalam elemen yang jadi target event delegation) — akan sering ditemui lagi ke depannya.

## Bug #3 — Filter kategori selalu kosong

**Lokasi:** filter change handler
```js
const hasil = daftarBarang.filter((item) => item.katagori === kategori);
```
**Fix:**
```js
const hasil = daftarBarang.filter((item) => item.kategori === kategori);
```
Typo `katagori` → `kategori` (samakan dengan nama properti di data `daftarBarang`).

## Cara verifikasi pemahaman (bukan cuma tambal-sulam)

- **Bug #1:** tanya "kenapa hasilnya jadi gabungan angka kaya gitu, bukan cuma salah angka
  biasa?" — jawaban yang bagus menyebutkan JS otomatis mengubah angka jadi string kalau salah
  satu operand `+` adalah string (type coercion).
- **Bug #2:** tanya "kenapa kadang jalan kadang tidak — apa yang beda antara klik yang berhasil
  vs yang gagal?" — jawaban bagus: posisi klik menentukan `event.target` jadi elemen mana persis
  (button atau span di dalamnya).
- **Bug #3:** tanya "gimana cara kamu ketahuan itu typo, bukan salah logic filter?" — jawaban
  bagus: cek isi objek di console (`console.log(item)`) untuk lihat nama properti yang benar.

## Catatan waktu pembanding

| Task | Waktu | Konteks |
|---|---|---|
| `T2.1` | 37 menit | 1 bug, 4 baris, kode latihan |
| `T2.2` | 32 menit | 2 bug, ~9 baris, kode latihan |
| Task cadangan ini | *(isi setelah sesi)* | 3 bug, ~55 baris, kode BARU (bukan miliknya) |
