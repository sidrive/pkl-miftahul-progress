<template>
  <div class="kasir-box">
    <h2 class="judul">🛒 Mini App Kasir Sederhana (Restyle T4)</h2>

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
          <p>Total Item: <strong>{{ kasirStore.totalItem }}</strong></p>
          <p>Total Bayar: <strong>Rp {{ kasirStore.totalHarga.toLocaleString('id-ID') }}</strong></p>
          
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
}

.judul {
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.sub-judul {
  margin-top: 0;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text);
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

.input-desain {
  background-color: var(--color-input-kasir, #2a2a3d);
  border: 1px solid var(--color-border-kasir, #555555);
  color: var(--color-text);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--spacing-xs);
  flex: 1;
  min-width: 120px;
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
  border: 1px solid var(--color-border-kasir, #444444);
  border-radius: var(--spacing-xs); 
  background-color: var(--color-input-kasir, #2a2a3d);
}

.teks-keterangan {
  color: var(--color-text-secondary, var(--color-grey-500));
}

.daftar-keranjang { 
  padding-left: var(--spacing-md); 
  margin: var(--spacing-xs) 0; 
  color: var(--color-text);
}

.pembatas {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin: var(--spacing-sm) 0;
}

.btn-full {
  width: 100%;
  margin-top: var(--spacing-xs);
}

.teks-kosong {
  color: var(--color-grey-500);
}

/* Menimpa warna surface khusus kartu di halaman kasir */
:deep(.ds-card) {
  background-color: var(--color-surface-kasir, #1e1e2e);
  border-color: var(--color-border-kasir, #444444);
}
</style>