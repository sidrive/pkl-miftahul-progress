# Modul Bulan 5 Minggu 2 — Finalisasi Desain, Skeleton Halaman & Routing Nyata

> Menemani task `M5.W2.*` di `TASKS.md`, satu bagian per ID — isi `DAILY_LOG.md` setiap satu
> bagian selesai.
>
> Baca [`docs/PANDUAN_BELAJAR_DAN_AI.md`](../PANDUAN_BELAJAR_DAN_AI.md) — **Standar Kualitas
> Project Mandiri mulai berlaku PENUH minggu ini**, ini minggu pertama ada kode fitur sungguhan
> untuk diterapkan standarnya (minggu lalu baru requirement/wireframe, belum ada kode).
>
> ## ⚠️ Catatan jadwal
>
> Breakdown minggu ini baru dibuat di TENGAH minggu — Senin-Selasa (23-24 November) kamu sudah
> duluan mengerjakan revisi desain (inisiatif bagus!) berdasarkan feedback evaluasi `M5.W1.T4`,
> tapi pakai ID placeholder yang salah (`M5.W3.T?`) karena breakdown resmi belum ada saat itu.
> **Perbaiki ID di entry `DAILY_LOG.md` tanggal 23 November** dari `M5.W3.T?` jadi `M5.W2.T1` supaya
> terbaca benar oleh script progress. Sisa modul ini untuk 3 hari kerja tersisa (Rabu 25 – Jumat
> 27 November).
>
> ## Kenapa scope dipersempit
>
> Roadmap asli minggu ini ("Struktur folder & skeleton komponen utama" + "Setup routing
> halaman-halaman utama") tetap jalan, tapi skalanya DIKECILKAN menyesuaikan sisa waktu 3 hari
> (bukan 5). Fitur data master aset SUNGGUHAN (CRUD aset beneran) baru mulai `M5.W3` — minggu ini
> fokus ke KERANGKA-nya dulu: skeleton halaman kosong + navigasi beneran.

---

## 1. Finalisasi Revisi Desain UI/UX

### `M5.W2.T1` — Revisi desain UI/UX di Figma

Sudah kamu kerjakan Senin-Selasa — pastikan SEMUA 5 halaman (bukan cuma yang terasa "janggal")
sudah:
- Hierarki visual jelas (aksi utama menonjol, sekunder tidak).
- Konsistensi spacing/warna antar halaman (bukan beda-beda sendiri tiap halaman).
- Elemen posisinya simetris/rapi (kamu sempat sebut ada yang "tidak simetris" — pastikan semua
  sudah dicek, bukan cuma yang kamu temukan pertama kali).

Update link Figma FINAL di `DAILY_LOG.md` (entry baru, pakai ID `M5.W2.T1` yang benar).

**Contoh entry log (format saja):**
```markdown
### Task: M5.W2.T1
- **Status:** done
- **Capaian:** [ceritakan perubahan desain, link Figma final]
- **Kesulitan:** [jujur aja]
```

### `M5.W2.T1.1` — [Wajib Refleksi] Bandingkan desain v1 vs revisi

**Isi log dengan menjawab (kata sendiri):**
Sebutkan MINIMAL 3 perubahan KONKRET dari desain versi 1 (`M5.W1.T1.2`) ke versi revisi ini. Untuk
MASING-MASING perubahan, kaitkan ke 1 poin checklist UI/UX di "Standar Kualitas Project Mandiri"
(`docs/PANDUAN_BELAJAR_DAN_AI.md`) yang coba kamu perbaiki — misal:
- "Saya perbesar tombol Pinjam dan kecilkan tombol Batal" → kaitkan ke **hierarki visual**.
- "Saya samakan warna status di semua halaman" → kaitkan ke **konsistensi**.

**Contoh entry log (format saja):**
```markdown
### Task: M5.W2.T1.1
- **Status:** done
- **Capaian:** [3+ perubahan konkret + kaitan ke checklist UI/UX]
- **Kesulitan:** [jujur aja]
```

---

## 2. Skeleton Halaman & Routing Nyata

### `M5.W2.T2.1` — Struktur folder `src/views/`

Bikin 5 file di `src/views/`, sesuai wireframe final: `DashboardView.vue`, `DaftarAsetView.vue`,
`DetailAsetView.vue`, `FormAsetView.vue`, `RiwayatPeminjamanView.vue`. Isi dulu SKELETON KOSONG
(contoh):

```vue
<template>
  <div>
    <h1>Daftar Aset</h1>
    <p>Halaman ini belum diisi — akan dikerjakan di M5.W3.</p>
  </div>
</template>
```

Belum perlu UI/data lengkap — tujuannya cuma memastikan 5 halaman ADA dan bisa diakses.

**Contoh entry log (format saja):**
```markdown
### Task: M5.W2.T2.1
- **Status:** done
- **Capaian:** [5 file view yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M5.W2.T2.2` — Layout utama (`AppLayout.vue`)

Bikin 1 component layout (sidebar/navbar + area konten) pakai `Ds*` yang sudah terpasang — pastikan
KONSISTEN dipakai di semua 5 halaman (checklist "konsistensi lintas halaman"). Contoh kerangka:

```vue
<!-- AppLayout.vue -->
<template>
  <div class="app-layout">
    <nav class="sidebar">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/aset">Daftar Aset</router-link>
      <router-link to="/riwayat">Riwayat</router-link>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>
```

**Contoh entry log (format saja):**
```markdown
### Task: M5.W2.T2.2
- **Status:** done
- **Capaian:** [ceritakan layout yang dibuat]
- **Kesulitan:** [jujur aja]
```

### `M5.W2.T3.1` — Routing nyata ke 5 halaman

Ganti placeholder `router/index.js` (yang masih arah semua ke `App.vue`) jadi routing nyata:

```js
const routes = [
  { path: '/', name: 'dashboard', component: () => import('../views/DashboardView.vue') },
  { path: '/aset', name: 'daftar-aset', component: () => import('../views/DaftarAsetView.vue') },
  { path: '/aset/:id', name: 'detail-aset', component: () => import('../views/DetailAsetView.vue') },
  { path: '/aset/tambah', name: 'tambah-aset', component: () => import('../views/FormAsetView.vue') },
  { path: '/riwayat', name: 'riwayat', component: () => import('../views/RiwayatPeminjamanView.vue') },
]
```

Pasang navigasi di `AppLayout.vue` (`T2.2`) supaya bisa pindah antar halaman beneran.

**Contoh entry log (format saja):**
```markdown
### Task: M5.W2.T3.1
- **Status:** done
- **Capaian:** [ceritakan routing yang didaftarkan]
- **Kesulitan:** [jujur aja]
```

### `M5.W2.T3.2` — [Wajib Refleksi — PENTING] Route Guard: menerapkan jawaban kuis minggu lalu

Ingat kuis evaluasi `M5.W1.T4` (soal A1): UI yang disembunyikan saja TIDAK CUKUP untuk mencegah
Staff mengakses halaman Admin — sekarang TERAPKAN NYATA:

```js
const routes = [
  // ...
  {
    path: '/aset/tambah',
    name: 'tambah-aset',
    component: () => import('../views/FormAsetView.vue'),
    meta: { role: 'admin' } // <- tandai route ini khusus admin
  },
]

router.beforeEach((to, from) => {
  const roleSaatIni = /* simulasi: ref/Pinia yang nyimpan role aktif, boleh hardcode dulu */
  if (to.meta.role && to.meta.role !== roleSaatIni) {
    return '/' // tolak akses, lempar balik ke dashboard
  }
})
```

**Coba dulu, lalu isi log dengan menjawab (kata sendiri):**
1. Set role simulasi jadi `'staff'`, coba akses URL `/aset/tambah` LANGSUNG (ketik manual di address
   bar, BUKAN klik link yang memang disembunyikan) — amati apakah tetap tercegah.
2. Kenapa cara ini LEBIH AMAN dibanding cuma menyembunyikan link/tombol "Tambah Aset" dari menu
   navigasi?

**Contoh entry log (format saja):**
```markdown
### Task: M5.W2.T3.2
- **Status:** done
- **Capaian:** [hasil percobaan + jawaban 2 poin di atas]
- **Kesulitan:** [jujur aja]
```

---

## 3. Evaluasi (`M5.W2.T4`) — satu-satunya sesi bareng mentor minggu ini

Siapkan untuk mentor:

1. **Demo desain Figma revisi** + **skeleton 5 halaman** yang sudah bisa dinavigasi lewat routing
   nyata.
2. **Demo route guard** `T3.2` — coba akses halaman Admin sebagai role Staff, harus tercegah.
3. **Mentor terapkan standar kualitas PENUH** — ini minggu pertama standar baru benar-benar diuji
   ke kode sungguhan (cek edge case sederhana, cek lebar HP, cek konsistensi layout).
4. **Mentor minta minimal 1 revisi nyata** sebelum PR di-approve (sesuai aturan baku).
5. **Retrospektif wajib**: "Kalau dikasih 1 hari lagi untuk skeleton+routing minggu ini, apa yang
   akan kamu perbaiki?"

Setelah demo, isi entry log terakhir untuk minggu ini:
```markdown
### Task: M5.W2.T4
- **Status:** done
- **Capaian:** [ceritakan demo, hasil revisi yang diminta mentor]
- **Kesulitan:** [jujur aja]
```

---

## Referensi tambahan (opsional)

- Vue Router — Navigation Guards: https://router.vuejs.org/guide/advanced/navigation-guards.html
- Vue Router — Route Meta Fields: https://router.vuejs.org/guide/advanced/meta.html
