# Laporan Analisis Refactor dan Integrasi Component M4.W3 (`M4.W3.T4`)

## 1. Alur Logis Integrasi Component & Handling State di `T3`

Dalam prototipe aplikasi "Antrean Pesanan Restoran / Kafe" (`Task.T3.vue`), seluruh komponen UI Design System (`Ds*`) serta penanganan *async state* saling terhubung dan terintegrasi secara modular:

* **`DsButton`**:
  * Dipakai pada header utama (`Task.T3.vue`) untuk tombol **`+ Tambah Pesanan`** (`variant="primary"`).
  * Dipakai pada toolbar simulasi untuk tombol **`🔄 Reload Data`** (`secondary`) dan **`⚠️ Simulasi Error`** (`danger`).
  * Dipakai pada tiap kartu pesanan untuk aksi **`✏️ Edit`** dan **`🗑️ Hapus`**.
  * Dipakai pada modal form (`FormPesananModal.vue`) untuk tombol **`Batal`** dan **`Simpan/Update Pesanan`**.

* **`DsCard`**:
  * Dipakai sebagai kontainer kartu di daftar pesanan (`grid-pesanan`) dengan varian `outlined` dan efek interaktif `hoverable`.

* **`DsBadge`**:
  * Dipakai di dalam header kartu (`DsCard`) untuk menampilkan status pesanan secara visual (`diproses`, `selesai`, `dibatalkan`) dengan warna yang terpetakan otomatis via *object mapping*.

* **`DsSelect`**:
  * Dipakai di toolbar halaman utama (`Task.T3.vue`) untuk menyaring antrean berdasarkan status.
  * Dipakai di dalam modal form (`FormPesananModal.vue`) untuk memilih status pesanan saat input atau edit data.

* **`DsInput`**:
  * Dipakai di dalam modal form (`FormPesananModal.vue`) untuk menginput **Nama Pemesan** dan **Nomor Meja**, lengkap dengan penanganan pesan error validasi.

* **Handling Async State (Loading / Empty / Error)**:
  * **Loading State**: Menampilkan pesan *"⏳ Sedang memuat antrean pesanan..."* saat `sedangMemuat = true` (menggunakan simulasi `setTimeout` 1.2 detik).
  * **Error State**: Menampilkan banner error merah dan tombol *"Coba Lagi"* saat simulasi error diaktifkan (`pesanError` terisi).
  * **Empty State**: Menampilkan banner *"📭 Tidak ada pesanan untuk ditampilkan."* saat data antrean atau hasil filter bernilai kosong (`daftarPesananFiltered.length === 0`).

---

## 2. Penerapan Nyata Solusi State Pollution / State Nyangkut (`T2.3`)

### A. Potensi Masalah pada Form Reusable
Komponen `FormPesananModal.vue` dirancang sebagai form *2-in-1* yang digunakan bersama (*reusable*) untuk mode **Tambah Pesanan** dan **Edit Pesanan**. Jika komponen ini di-reuse tanpa mekanisme reset yang benar, data ketikan atau pesan error validasi dari sesi edit sebelumnya akan terbawa/nyangkut saat pengguna mencoba membuka form tambah pesanan baru.

### B. Solusi Konkret Menggunakan `:key` Dinamis
Di file induk `Task.T3.vue`, komponen modal dipanggil dengan menyematkan atribut `:key="keyModal"`:

```vue
<FormPesananModal :dataAwal="pesananYangEdited" :key="keyModal" :mode="modeModal" :show="showModal" @close="showModal = false" @submit="handleSimpanPesanan"/>