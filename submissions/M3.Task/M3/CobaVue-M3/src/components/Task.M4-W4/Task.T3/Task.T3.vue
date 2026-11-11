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
        <DsButton variant="primary" @click="bukaModalTambah">
          + Tambah Pesanan
        </DsButton>
      </div>
    </header>

    <!-- Toolbar Filter & Simulasi Error -->
    <div class="toolbar-section">
      <div class="filter-box">
        <DsSelect
          v-model="filterStatus"
          :options="opsiFilter"
          placeholder="Filter Status"
        />
      </div>
      <div class="simulation-box">
        <DsButton variant="secondary" size="small" :disabled="sedangMemuat" @click="muatDataPesanan(false)">
          🔄 Reload Data
        </DsButton>

        <DsButton variant="danger" size="small" :disabled="sedangMemuat" @click="muatDataPesanan(true)">
          ⚠️ Simulasi Error
        </DsButton>
      </div>
    </div>

    <!-- Area Konten (Loading / Error / Empty) -->
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
    </div>
  </div>
</template>

<script setup>
import { useAntrean } from './useAntrean.js'

// Import komponen UI dari lokasi aslinya di Task.M4-W3
import DsBadge from '../../Task.M4-W3/DsBadge.vue'
import DsSelect from '../../Task.M4-W3/DsSelect.vue'
import FormPesananModal from '../../Task.M4-W3/FormPesananModal.vue'

// Import tombol & card dari Task.M4-W2
import DsButton from '../../Task.M4-W2/DsButton.vue'
import DsCard from '../../Task.M4-W2/DsCard.vue'

// Logika dari Composable useAntrean
const {
  sedangMemuat,
  pesanError,
  filterStatus,
  opsiFilter,
  showModal,
  modeModal,
  pesananYangEdited,
  keyModal,
  daftarPesananFiltered,
  muatDataPesanan,
  bukaModalTambah,
  bukaModalEdit,
  handleSimpanPesanan,
  hapusPesanan
} = useAntrean()
</script>

<style scoped>

</style>