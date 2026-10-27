<template>
  <div class="container-task">
    <h2>Task T2.2 — Loading, Empty & Error State</h2>

    <section class="card-section">
      <h3>Putaran 1: Daftar Kategori Produk</h3>      
      <button @click="muatDataKategori" :disabled="sedangMemuatKategori" class="btn-fetch">
        {{ sedangMemuatKategori ? 'Memuat...' : 'Muat Ulang Data' }}
      </button>

      <div class="data-container">
        <!-- State 1: Loading -->
        <div v-if="sedangMemuatKategori" class="state-box loading">
          <p>⏳ Sedang memuat data kategori...</p>
        </div>

        <!-- State 2: Empty State -->
        <div v-else-if="kategoriList.length === 0" class="state-box empty">
          <p>📭 Belum ada data kategori produk.</p>
        </div>

        <!-- State 3: Success Data List -->
        <ul v-else class="data-list">
          <li v-for="item in kategoriList" :key="item.id">
            <strong>{{ item.nama }}</strong> — {{ item.jumlahProduk }} Produk
          </li>
        </ul>
      </div>
    </section>

    <section class="card-section">
      <h3>Putaran 2: Riwayat Transaksi (Topik Berbeda - Empty State)</h3>
      <button @click="muatDataTransaksi" :disabled="sedangMemuatTransaksi" class="btn-fetch">
        {{ sedangMemuatTransaksi ? 'Memuat...' : 'Cek Transaksi' }}
      </button>

      <div class="data-container">
        <!-- State 1: Loading -->
        <div v-if="sedangMemuatTransaksi" class="state-box loading">
          <p>⏳ Sedang memuat riwayat transaksi...</p>
        </div>

        <!-- State 2: Empty State -->
        <div v-else-if="transaksiList.length === 0" class="state-box empty">
          <p>📜 Belum ada riwayat transaksi hari ini.</p>
        </div>

        <!-- State 3: Success Data List -->
        <ul v-else class="data-list">
          <li v-for="trx in transaksiList" :key="trx.id">
            <strong>{{ trx.kode }}</strong> — Rp {{ trx.total.toLocaleString('id-ID') }}
          </li>
        </ul>
      </div>
    </section>

    <section class="card-section">
      <h3>Putaran 3: Daftar Pelanggan (Simulasi Error State)</h3>      
      <div class="action-group">
        <button @click="muatDataPelanggan(false)" :disabled="sedangMemuatPelanggan" class="btn-fetch">
          Fetch Normal
        </button>
        <button @click="muatDataPelanggan(true)" :disabled="sedangMemuatPelanggan" class="btn-fetch btn-danger">
          Simulasi Gagal / Error
        </button>
      </div>

      <div class="data-container">
        <!-- State 1: Loading -->
        <div v-if="sedangMemuatPelanggan" class="state-box loading">
          <p>⏳ Sedang memuat data pelanggan...</p>
        </div>

        <!-- State 2: Error State (Jika ada pesan error) -->
        <div v-else-if="pesanErrorPelanggan" class="state-box error">
          <p>⚠️ {{ pesanErrorPelanggan }}</p>
        </div>

        <!-- State 3: Empty State (Jika tidak error tapi data 0) -->
        <div v-else-if="pelangganList.length === 0" class="state-box empty">
          <p>👥 Belum ada data pelanggan terdaftar.</p>
        </div>

        <!-- State 4: Success Data List -->
        <ul v-else class="data-list">
          <li v-for="pel in pelangganList" :key="pel.id">
            <strong>{{ pel.nama }}</strong> - {{ pel.telepon }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State Putaran 1 (Barang)
const sedangMemuatKategori = ref(true)
const kategoriList = ref([])

function muatDataKategori() {
  sedangMemuatKategori.value = true
  kategoriList.value = []

  setTimeout(() => {
    kategoriList.value = [
      { id: 1, nama: 'Makanan & Camilan', jumlahProduk: 24 },
      { id: 2, nama: 'Minuman Segar', jumlahProduk: 18 },
      { id: 3, nama: 'Bumbu Dapur', jumlahProduk: 10 }
    ]
    sedangMemuatKategori.value = false
  }, 1500)
}

// State Putaran 2 (Transaksi)
const sedangMemuatTransaksi = ref(true)
const transaksiList = ref([])

function muatDataTransaksi() {
  sedangMemuatTransaksi.value = true
  transaksiList.value = []

  setTimeout(() => {
    transaksiList.value = []
    sedangMemuatTransaksi.value = false
  }, 1200)
}

// State Putaran 3 (Handling Error)
const sedangMemuatPelanggan = ref(true)
const pelangganList = ref([])
const pesanErrorPelanggan = ref('')

function muatDataPelanggan(simulasiGagal = false) {
  sedangMemuatPelanggan.value = true
  pesanErrorPelanggan.value = ''
  pelangganList.value = []

  setTimeout(() => {
    if (simulasiGagal) {
      // Simulasi error (misal 500 Internal Server Error)
      pesanErrorPelanggan.value = 'Gagal terhubung ke server! Periksa koneksi internet Anda.'
    } else {
      // Simulasi berhasil
      pelangganList.value = [
        { id: 1, nama: 'Alex Santoso Wijaya', telepon: '+1 3456 7890' },
        { id: 2, nama: 'James Milss Molls', telepon: '+61 5601 234' }
      ]
    }
    sedangMemuatPelanggan.value = false
  }, 1200)
}

onMounted(() => {
  muatDataKategori()
  muatDataTransaksi()
  muatDataPelanggan(false)
})
</script>

<style scoped>
.container-task {
  max-width: 550px;
  margin: 0 auto;
  text-align: left;
  color: var(--color-text, #212529);
}

h2, h3 {
  color: var(--color-text, #212529);
}

.card-section {
  padding: 16px;
  border: 1px solid var(--color-border, #6c757d);
  border-radius: 8px;
  background-color: var(--color-surface, #ffffff);
  margin-bottom: 20px;
}

.action-group {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.btn-fetch {
  padding: 8px 14px;
  cursor: pointer;
  background-color: var(--color-navy-500, #007bff);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
}

.btn-danger {
  background-color: var(--color-danger-500, #dc3545);
}

.btn-fetch:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.data-container {
  min-height: 100px;
  display: flex;
  align-items: center;
}

.state-box {
  width: 100%;
  padding: 16px;
  text-align: center;
  border-radius: 6px;
  font-weight: 500;
}

.state-box.loading {
  background-color: rgba(0, 123, 255, 0.1);
  color: var(--color-navy-500, #007bff);
}

.state-box.empty {
  background-color: rgba(108, 117, 125, 0.1);
  color: var(--color-grey-500, #6c757d);
}

.state-box.error {
  background-color: rgba(220, 53, 69, 0.1);
  color: var(--color-danger-500, #dc3545);
}

.data-list {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}

.data-list li {
  padding: 10px 12px;
  border-bottom: 1px solid var(--color-border, #ccc);
}

.data-list li:last-child {
  border-bottom: none;
}
</style>