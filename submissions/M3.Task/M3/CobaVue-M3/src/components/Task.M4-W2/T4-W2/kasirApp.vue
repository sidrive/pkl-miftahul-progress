<template>
  <!-- Atribut data-theme dipasang lokal di kontainer kasir -->
  <div class="kasir-box" :data-theme="isDarkKasir ? 'dark' : 'light'">
    <div class="header-kasir">
      <h2 class="judul">🛒 Mini App Kasir Sederhana (Restyle T4)</h2>
      
      <!-- TOMBOL TOGGLE DARK MODE KHUSUS KASIR -->
      <DsButton variant="secondary" size="small" @click="toggleThemeKasir">
        {{ isDarkKasir ? '☀️ Light Mode' : '🌙 Dark Mode' }}
      </DsButton>
    </div>

    <!-- FORM TAMBAH BARANG BARU (Menggunakan DsCard & DsButton) -->
    <DsCard variant="outlined" class="mb-sm">
      <h3 class="sub-judul">➕ Tambah Barang Baru</h3>
      <form @submit.prevent="handleTambahBarang" class="form-tambah">
        <input v-model="namaInput" type="text" placeholder="Nama Barang" required class="input-desain" />
        <input v-model.number="hargaInput" type="number" placeholder="Harga (Rp)" required min="500" class="input-desain" />
        <input v-model.number="stokInput" type="number" placeholder="Stok" required min="1" class="input-desain" />
        
        <DsButton variant="success" size="medium" type="submit">
          + Simpan
        </DsButton>
      </form>
    </DsCard>

    <!-- PENCARIAN BARANG (Menggunakan DsCard) -->
    <DsCard variant="outlined" class="mb-sm">
      <input 
        v-model="kasirStore.kataKunci" 
        type="text" 
        placeholder="🔍 Cari nama barang..." 
        class="input-desain input-cari"
      />
    </DsCard>

    <div class="kasir-grid">
      <!-- PANEL ETALASE BARANG (Menggunakan DsCard & DsButton) -->
      <DsCard variant="outlined" class="panel-kartu">
        <h3 class="sub-judul">📦 Barang ({{ kasirStore.barangTersaring.length }})</h3>
        <div v-if="kasirStore.barangTersaring.length > 0">
          <div v-for="b in kasirStore.barangTersaring" :key="b.id" class="item">
            <div>
              <strong>{{ b.nama }}</strong><br>
              <small class="teks-keterangan">Rp {{ b.harga.toLocaleString('id-ID') }} | Stok: {{ b.stok }}</small>
            </div>
            
            <DsButton variant="success" size="small" :disabled="b.stok === 0" @click="kasirStore.tambahKeKeranjang(b)">
                + Beli
            </DsButton>
          </div>
        </div>
        <p v-else class="teks-kosong">Barang tidak ditemukan.</p>
      </DsCard>

      <!-- PANEL KERANJANG (Menggunakan DsCard & DsButton) -->
      <DsCard variant="outlined" class="panel-kartu">
        <h3 class="sub-judul">🛍️ Keranjang</h3>
        <div v-if="kasirStore.keranjang.length > 0">
          <ul class="daftar-keranjang">
            <li v-for="item in kasirStore.keranjang" :key="item.id">
              {{ item.nama }} (x{{ item.jumlah }}) - Rp {{ (item.harga * item.jumlah).toLocaleString('id-ID') }}
            </li>
          </ul>
          <hr class="pembatas" />
          <p class="teks-total">Total Item: <strong>{{ kasirStore.totalItem }}</strong></p>
          <p class="teks-total">Total Bayar: <strong>Rp {{ kasirStore.totalHarga.toLocaleString('id-ID') }}</strong></p>
          
          <DsButton 
            variant="danger" 
            size="medium" 
            class="btn-full" 
            @click="kasirStore.resetKeranjang"
          >
            🗑️ Kosongkan
          </DsButton>
        </div>
        <p v-else class="teks-kosong">Keranjang kosong.</p>
      </DsCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useKasirStore } from './kasirStore1.js'
import DsButton from '../DsButton.vue'
import DsCard from '../DsCard.vue'

const kasirStore = useKasirStore()

const namaInput = ref('')
const hargaInput = ref('')
const stokInput = ref('')

// State lokal khusus tema Kasir
const isDarkKasir = ref(true)

function toggleThemeKasir() {
  isDarkKasir.value = !isDarkKasir.value
}

function handleTambahBarang() {
  if (!namaInput.value || !hargaInput.value || !stokInput.value) return

  kasirStore.tambahBarangBaru(
    namaInput.value,
    hargaInput.value,
    stokInput.value
  )

  namaInput.value = ''
  hargaInput.value = ''
  stokInput.value = ''
}
</script>

<style scoped>
.kasir-box { 
  width: 100%; 
  max-width: 700px; 
  margin: 0 auto; 
  text-align: left; 
  padding: var(--spacing-md);
  border-radius: var(--spacing-sm);
  transition: all 0.3s ease;
}

.header-kasir {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.judul {
  margin: 0;
}

.sub-judul {
  margin-top: 0;
  margin-bottom: var(--spacing-xs);
}

.mb-sm {
  margin-bottom: var(--spacing-sm);
}

.form-tambah {
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
  align-items: center;
}

.input-cari {
  width: 100%;
  box-sizing: border-box;
}

.kasir-grid { 
  display: flex; 
  gap: var(--spacing-sm); 
  flex-wrap: wrap; 
}

.panel-kartu {
  flex: 1;
  min-width: 280px;
}

.item { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: var(--spacing-xs); 
  padding: var(--spacing-xs); 
  border-radius: var(--spacing-xs); 
}

.daftar-keranjang { 
  padding-left: var(--spacing-md); 
  margin: var(--spacing-xs) 0; 
}

.btn-full {
  width: 100%;
  margin-top: var(--spacing-xs);
}

/* ===================================================
   TEMA LOKAL KASIR: DARK MODE (default)
   =================================================== */
.kasir-box[data-theme="dark"] {
  background-color: #121318;
  color: #ffffff;
}

.kasir-box[data-theme="dark"] .judul,
.kasir-box[data-theme="dark"] .sub-judul,
.kasir-box[data-theme="dark"] .daftar-keranjang,
.kasir-box[data-theme="dark"] .teks-total {
  color: #ffffff !important;
}

.kasir-box[data-theme="dark"] :deep(.ds-card) {
  background-color: #1e1e2e !important;
  border-color: #444444 !important;
  color: #ffffff !important;
}

.kasir-box[data-theme="dark"] .input-desain {
  background-color: #2a2a3d;
  border: 1px solid #555555;
  color: #ffffff !important;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--spacing-xs);
  flex: 1;
  min-width: 120px;
}

.kasir-box[data-theme="dark"] .input-desain::placeholder {
  color: #a0a0a0 !important;
}

.kasir-box[data-theme="dark"] .item {
  background-color: #2a2a3d;
  border: 1px solid #444444;
  color: #ffffff !important;
}

.kasir-box[data-theme="dark"] .teks-keterangan {
  color: #aaaaaa !important;
}

.kasir-box[data-theme="dark"] .teks-kosong {
  color: #888888;
}

.kasir-box[data-theme="dark"] .pembatas {
  border: 0;
  border-top: 1px solid #444444;
  margin: var(--spacing-sm) 0;
}

/* ===================================================
   TEMA LOKAL KASIR: LIGHT MODE
   =================================================== */
.kasir-box[data-theme="light"] {
  background-color: #f8f9fa;
  color: #212529;
  border: 1px solid #dee2e6;
}

.kasir-box[data-theme="light"] .judul,
.kasir-box[data-theme="light"] .sub-judul,
.kasir-box[data-theme="light"] .daftar-keranjang,
.kasir-box[data-theme="light"] .teks-total {
  color: #212529 !important;
}

.kasir-box[data-theme="light"] :deep(.ds-card) {
  background-color: #ffffff !important;
  border-color: #e0e0e0 !important;
  color: #212529 !important;
}

.kasir-box[data-theme="light"] .input-desain {
  background-color: #f1f3f5;
  border: 1px solid #ced4da;
  color: #212529 !important;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--spacing-xs);
  flex: 1;
  min-width: 120px;
}

.kasir-box[data-theme="light"] .input-desain::placeholder {
  color: #6c757d !important;
}

.kasir-box[data-theme="light"] .item {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  color: #212529 !important;
}

.kasir-box[data-theme="light"] .teks-keterangan {
  color: #6c757d !important;
}

.kasir-box[data-theme="light"] .teks-kosong {
  color: #6c757d;
}

.kasir-box[data-theme="light"] .pembatas {
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin: var(--spacing-sm) 0;
}
</style>