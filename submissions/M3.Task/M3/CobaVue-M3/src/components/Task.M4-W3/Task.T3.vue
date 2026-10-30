<template>
    <div class="judul">
        <h3>Task T3 - MiniApp Aplikasi Antrian Refactor</h3>
    </div>
  <div class="container-t3">
    <header class="header-section">
      <div>
        <h2>📋 Antrean Pesanan</h2>
        <p class="subtitle">Prototipe UI Order & Status Antrian</p>
      </div>
      <div class="header-actions">
        <!-- Tombol Tambah Pesanan Baru -->
        <DsButton variant="primary" @click="bukaModalTambah">
          + Tambah Pesanan
        </DsButton>
      </div>
    </header>

    <!-- Toolbar Filter & Simulasi Error -->
    <div class="toolbar-section">
      <div class="filter-box">
        <!-- Filter Status pakai DsSelect -->
        <DsSelect
          v-model="filterStatus"
          :options="opsiFilter"
          placeholder="Filter Status"/>
      </div>
      <div class="simulation-box">
        <!-- Tombol Pengetesan Async State (Loading & Error dari T2.2) -->
        <DsButton variant="secondary" size="small" :disabled="sedangMemuat" @click="muatDataPesanan(false)">
          🔄 Reload Data
        </DsButton>

        <DsButton variant="danger" size="small" :disabled="sedangMemuat" @click="muatDataPesanan(true)">
          ⚠️ Simulasi Error
        </DsButton>
      </div>
    </div>

    <!-- Area Konten (Loading / Error / Empty / Data List) -->
    <div class="content-section">
      <!-- State Loading -->
      <div v-if="sedangMemuat" class="state-box loading">
        <p>⏳ Sedang memuat antrean pesanan...</p>
      </div>

      <!-- State Error -->
      <div v-else-if="pesanError" class="state-box error">
        <p>⚠️ {{ pesanError }}</p>
        <DsButton variant="secondary" size="small" @click="muatDataPesanan(false)">Coba Lagi</DsButton>
      </div>

      <!-- State Empty (Kosong) -->
      <div v-else-if="daftarPesananFiltered.length === 0" class="state-box empty">
        <p>📭 Tidak ada pesanan untuk ditampilkan.</p>
      </div>

      <!-- Success State (Tampilan Daftar Pesanan) -->
      <div v-else class="grid-pesanan">
        <DsCard
          v-for="item in daftarPesananFiltered"
          :key="item.id"
          variant="outlined"
          hoverable>

          <div class="card-header">
            <h4>{{ item.namaPemesan }}</h4>
            <DsBadge :status="item.status" />
          </div>
          <p class="meja-info">📍 {{ item.noMeja }}</p>

          <div class="card-actions">
            <DsButton variant="secondary" size="small" @click="bukaModalEdit(item)">
              ✏️ Edit
            </DsButton>
            <DsButton variant="danger" size="small" @click="hapusPesanan(item.id)">
              🗑️ Hapus
            </DsButton>
          </div>
        </DsCard>
      </div>
    </div>

    <!-- Form Modal 2-in-1 (Dengan trik :key dari T2.3 agar state tidak nyangkut) -->
    <FormPesananModal
      :key="keyModal"
      :show="showModal"
      :mode="modeModal"
      :dataAwal="pesananYangEdited"
      @close="showModal = false"
      @submit="handleSimpanPesanan"/>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DsBadge from './DsBadge.vue'
import DsInput from './DsInput.vue'
import DsSelect from './DsSelect.vue'
import FormPesananModal from './FormPesananModal.vue'
import DsButton from '../Task.M4-W2/DsButton.vue'
import DsCard from '../Task.M4-W2/DsCard.vue'

// State Data Pesanan & Async (T2.2)
const sedangMemuat = ref(true)
const pesanError = ref('')
const daftarPesanan = ref([])

// State Filter Status
const filterStatus = ref('')
const opsiFilter = [
  { value: '', label: 'Semua Status' },
  { value: 'diproses', label: 'Diproses' },
  { value: 'selesai', label: 'Selesai' },
  { value: 'dibatalkan', label: 'Dibatalkan' }
]

// State Modal & Solution Key (T2.3)
const showModal = ref(false)
const modeModal = ref('tambah') // 'tambah' | 'edit'
const pesananYangEdited = ref(null)
const keyModal = ref(0) // Untuk me-remount modal

// Simulasi Fetch Data Pesanan dari Server (T2.2)
function muatDataPesanan(simulasiGagal = false) {
  sedangMemuat.value = true
  pesanError.value = ''
  daftarPesanan.value = []

  setTimeout(() => {
    if (simulasiGagal) {
      pesanError.value = 'Gagal memuat data antrean pesanan dari server!'
    } else {
      daftarPesanan.value = [
        { id: 101, namaPemesan: 'Budi Santoso', noMeja: 'Meja 03', status: 'diproses' },
        { id: 102, namaPemesan: 'Siti Rahma', noMeja: 'Meja 07', status: 'selesai' },
        { id: 103, namaPemesan: 'Andi Pratama', noMeja: 'Meja 01', status: 'dibatalkan' }
      ]
    }
    sedangMemuat.value = false
  }, 1200)
}

// Data Computed berdasarkan Filter Status
const daftarPesananFiltered = computed(() => {
  if (!filterStatus.value) return daftarPesanan.value
  return daftarPesanan.value.filter(item => item.status === filterStatus.value)
})

// Fungsi Buka Modal Mode TAMBAH
function bukaModalTambah() {
  modeModal.value = 'tambah'
  pesananYangEdited.value = null
  keyModal.value = Date.now() // Trigger remount modal baru (T2.3)
  showModal.value = true
}

// Fungsi Buka Modal Mode EDIT
function bukaModalEdit(item) {
  modeModal.value = 'edit'
  pesananYangEdited.value = { ...item }
  keyModal.value = Date.now() // Trigger remount modal baru (T2.3)
  showModal.value = true
}

// Fungsi Simpan (Tambah / Update)
function handleSimpanPesanan(dataForm) {
  if (modeModal.value === 'tambah') {
    daftarPesanan.value.unshift({
      id: Date.now(),
      ...dataForm
    })
  } else {
    const index = daftarPesanan.value.findIndex(item => item.id === pesananYangEdited.value.id)
    if (index !== -1) {
      daftarPesanan.value[index] = { ...daftarPesanan.value[index], ...dataForm }
    }
  }
  showModal.value = false
}

// Fungsi Hapus Pesanan
function hapusPesanan(id) {
  if (confirm('Yakin ingin menghapus pesanan ini?')) {
    daftarPesanan.value = daftarPesanan.value.filter(item => item.id !== id)
  }
}

onMounted(() => {
  muatDataPesanan(false)
})
</script>

<style scoped>
.judul {
    font-size: 35px;
    font-family: 'Times New Roman', Times, serif;
    border-style: dotted;
    border-radius: 10px;
    font-size: 2rem;
    animation: stroboskop 0.700s steps(1) infinite;
}

@keyframes stroboskop {
  0%   { color: #ff0000; opacity: 1; text-shadow: 0 0 20px #ff0000; }
  20%  { color: #00ff00; opacity: 0; } /* Hilang */
  40%  { color: #ffff00; opacity: 1; text-shadow: 0 0 20px #ffff00; }
  60%  { color: #00ffff; opacity: 0; } /* Hilang */
  80%  { color: #ff00ff; opacity: 1; text-shadow: 0 0 20px #ff00ff; }
  100% { color: #ffffff; opacity: 1; text-shadow: 0 0 20px #33ff00; }
}

.container-t3 {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  color: var(--color-text, #212529);
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border, #e9ecef);
}

.header-section h2 {
  margin: 0;
  color: var(--color-text, #212529);
}

.subtitle {
  margin: 4px 0 0 0;
  font-size: 0.9rem;
  color: var(--color-grey-500, #6c757d);
}

.toolbar-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-box {
  min-width: 200px;
}

.simulation-box {
  display: flex;
  gap: 10px;
  border-radius: 10px;
}

.content-section {
  min-height: 200px;
}

.state-box {
  width: 100%;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.state-box.loading {
  background-color: rgba(0, 123, 255, 0.08);
  color: var(--color-navy-500, #007bff);
}

.state-box.empty {
  background-color: rgba(108, 117, 125, 0.08);
  color: var(--color-grey-500, #6c757d);
}

.state-box.error {
  background-color: rgba(220, 53, 69, 0.08);
  color: var(--color-danger-500, #dc3545);
}

.grid-pesanan {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.card-header h4 {
  margin: 0;
  font-size: 1.05rem;
  color: var(--color-text, #212529);
}

.meja-info {
  margin: 0 0 16px 0;
  font-size: 0.88rem;
  color: var(--color-grey-500, #6c757d);
}

.card-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  border-top: 1px solid var(--color-border, #eee);
  padding-top: 12px;
}
</style>