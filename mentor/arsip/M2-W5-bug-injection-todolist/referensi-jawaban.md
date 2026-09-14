# Kunci Jawaban Mentor — Bug Injection To-Do List

> ⚠️ Jangan ditunjukkan ke Gazi.

## Lokasi bug

`buggy-indexT2.js`, di dalam `listEl.addEventListener("click", ...)`, blok `if (target.tagName === "SPAN")`:

```js
if (target.tagName === "SPAN") {
  const todo = daftarTodo.find((t) => t.id === id);

  if (todo) {
    todo.selesai = todo.selesai; // <-- BUG: harusnya todo.selesai = !todo.selesai;

    simpan(daftarTodo);
    render(daftarTodo);
  }
}
```

## Fix

```js
todo.selesai = !todo.selesai;
```

Tambahkan kembali tanda `!` (negasi) yang hilang.

## Penjelasan untuk verifikasi pemahaman Gazi

`todo.selesai = todo.selesai` adalah **assignment ke diri sendiri** — secara sintaks valid,
tidak error, tapi tidak melakukan apa-apa: nilai `selesai` sebelum dan sesudah baris ini identik.
Makanya `render()` tetap terpanggil (list ter-render ulang), `simpan()` tetap menyimpan ke
`localStorage` (menyimpan state yang sama, tidak berubah) — semuanya "kelihatan jalan", cuma efek
yang diharapkan (toggle status) tidak pernah terjadi.

Ini beda dari 3 bug yang sudah dia temukan minggu ini:
- `T2.1`: salah **operator perbandingan** (`=` jadi `===`)
- `T2.2`: lupa **konversi tipe data** (`JSON.parse`) + salah **case string** (`"li"` vs `"LI"`)
- Bug ini: hilangnya **operator negasi** — kategori logika murni, tanpa ada elemen tipe data atau
  perbandingan sama sekali.

## Cara verifikasi dia benar-benar paham (bukan cuma nemu tambal-sulam)

Setelah dia perbaiki, tanya: **"kenapa tadi `todo.selesai = todo.selesai` gak menyebabkan error,
tapi tetap gak berfungsi?"** — kalau dia bisa jelaskan konsep assignment-ke-diri-sendiri dengan
kata sendiri (bukan cuma "oh kurang tanda seru"), itu sinyal paham akar masalahnya, bukan cuma
pattern-matching visual "ketemu tanda yang beda dikit".

## Catatan waktu pembanding

| Task | Waktu | Ukuran kode | Kategori bug |
|---|---|---|---|
| `T2.1` | 37 menit | 4 baris fungsi | Assignment vs comparison (`=`/`===`) |
| `T2.2` | 32 menit | ~9 baris (2 bug) | `JSON.parse` terlupa + case sensitivity |
| Sesi ini | *(isi setelah sesi)* | 159 baris (tapi kode sendiri, familiar) | Negasi (`!`) hilang |

Isi baris terakhir setelah sesi berlangsung, untuk melihat tren kecepatan analisa bug dari minggu
ke minggu.
