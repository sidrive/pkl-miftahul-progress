# Requirement Aplikasi — SIMASET
**Sistem Informasi Manajemen Aset Kantor Sederhana**

Aplikasi internal untuk melacak inventaris kantor (laptop, printer, meja, dll) beserta status ketersediaan, peminjam aktif, dan riwayat peminjaman-pengembalian.

---

## 1. Peran Pengguna (User Roles)
1. **Admin IT**
   - Bertanggung jawab penuh atas pengelolaan master data aset kantor (tambah, edit, dan hapus aset).
   - Memantau seluruh riwayat peminjaman dan pengembalian aset dari semua karyawan.
2. **Staff**
   - Melihat daftar inventaris kantor beserta status ketersediaannya.
   - Mengajukan/mencatat peminjaman aset yang tersedia dan melakukan pengembalian aset.

---

## 2. Daftar Fitur Utama
1. **Dashboard Ringkasan**
   - Menampilkan statistik cepat jumlah aset berdasarkan status (`Tersedia`, `Dipinjam`, `Maintenance`) dan daftar aktivitas peminjaman terbaru.
2. **Daftar Aset (List, Filter & Search)**
   - Menampilkan seluruh inventaris kantor.
   - Dilengkapi fitur pencarian berdasarkan nama/kode aset dan filter berdasarkan status aset.
3. **Detail Aset**
   - Menampilkan informasi lengkap satu aset (spesifikasi, kondisi, status saat ini) beserta riwayat siapa saja yang pernah meminjam aset tersebut.
4. **Kelola Data Aset (Khusus Admin IT)**
   - Form untuk menambah aset baru, mengubah informasi/status aset (misal mengubah status menjadi `Maintenance`), dan menghapus data aset.
5. **Peminjaman & Pengembalian Aset**
   - Mencatat peminjaman aset oleh Staff (nama peminjam, tanggal pinjam, keperluan).
   - Menandai aset yang sedang dipinjam sebagai **"Dikembalikan"**.
6. **Riwayat Peminjaman (Keseluruhan)**
   - Menampilkan log seluruh transaksi peminjaman dan pengembalian aset dari waktu ke waktu.

---

## 3. Aturan Bisnis (Business Rules)
1. **Validasi Status Peminjaman:** Aset yang berstatus **`Dipinjam`** atau **`Maintenance`** **TIDAK BISA** dipinjam lagi oleh siapa pun sampai aset tersebut berstatus **`Tersedia`** kembali.
2. **Pembatasan Penghapusan Aset:** Aset yang sedang berstatus **`Dipinjam`** **TIDAK BISA** dihapus oleh Admin IT sebelum aset tersebut dikembalikan terlebih dahulu.