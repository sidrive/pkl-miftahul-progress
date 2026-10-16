<template>
  <div class="kasir-box">
    <h2 class="judul">🛒 Mini App Kasir Sederhana (Pinia)</h2>

    <!-- FORM TAMBAH BARANG BARU -->
    <div class="panel-fitur">
      <h3>➕ Tambah Barang Baru</h3>
      <form @submit.prevent="handleTambahBarang" class="form-tambah">
        <input v-model="namaInput" type="text" placeholder="Nama Barang" required />
        <input v-model.number="hargaInput" type="number" placeholder="Harga (Rp)" required min="500" />
        <input v-model.number="stokInput" type="number" placeholder="Stok" required min="1" />
        <button type="submit" class="btn-tambah">+ Simpan</button>
      </form>
    </div>

    <!-- PENCARIAN BARANG -->
    <div class="panel-fitur">
      <input 
        v-model="kasirStore.kataKunci" 
        type="text" 
        placeholder="🔍 Cari nama barang..." 
        class="input-cari"
      />
    </div>

    <div class="kasir-grid">
      <!-- PANEL ELASTASE BARANG -->
      <div class="panel">
        <h3>📦 Barang ({{ kasirStore.barangTersaring.length }})</h3>
        <div v-if="kasirStore.barangTersaring.length > 0">
          <div v-for="b in kasirStore.barangTersaring" :key="b.id" class="item">
            <div>
              <strong>{{ b.nama }}</strong><br>
              <small>Rp {{ b.harga.toLocaleString('id-ID') }} | Stok: {{ b.stok }}</small>
            </div>
            <button :disabled="b.stok === 0" @click="kasirStore.tambahKeKeranjang(b)">
              + Beli
            </button>
          </div>
        </div>
        <p v-else style="color: #888;">Barang tidak ditemukan.</p>
      </div>

      <!-- PANEL KERANJANG -->
      <div class="panel">
        <h3>🛍️ Keranjang</h3>
        <div v-if="kasirStore.keranjang.length > 0">
          <ul>
            <li v-for="item in kasirStore.keranjang" :key="item.id">
              {{ item.nama }} (x{{ item.jumlah }}) - Rp {{ (item.harga * item.jumlah).toLocaleString('id-ID') }}
            </li>
          </ul>
          <hr />
          <p>Total Item: <strong>{{ kasirStore.totalItem }}</strong></p>
          <p>Total Bayar: <strong>Rp {{ kasirStore.totalHarga.toLocaleString('id-ID') }}</strong></p>
          <button class="btn-hapus" @click="kasirStore.resetKeranjang">🗑️ Kosongkan</button>
        </div>
        <p v-else style="color: #888;">Keranjang kosong.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useKasirStore } from '../stores/kasirStore.js'

const kasirStore = useKasirStore()

// State lokal untuk form input barang baru
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

  // Reset form setelah simpan
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
.kasir-grid { 
    display: flex; 
    gap: 15px; 
    flex-wrap: wrap; 
}
.panel { 
    flex: 1; 
    min-width: 280px; 
    background: #1e1e2e; 
    padding: 15px; 
    border-radius: 8px; 
    border: 1px solid #444; 
}
.panel-fitur {
    background: #1e1e2e;
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid #444;
    margin-bottom: 12px;
}
.panel-fitur h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1rem;
}
.form-tambah {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}
.form-tambah input, .input-cari {
    background: #2a2a3d;
    border: 1px solid #555;
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    flex: 1;
    min-width: 120px;
}
.input-cari {
    width: 100%;
    box-sizing: border-box;
}
.btn-tambah {
    background: #00d2d3;
    color: #111;
}
.item { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 10px; 
    padding: 8px; 
    background: #2a2a3d; 
    border-radius: 6px; 
}
button { 
    background: #00ffb3; 
    color: #111; 
    border: none; 
    padding: 5px 10px; 
    border-radius: 4px; 
    font-weight: bold; 
    cursor: pointer; 
}
button:disabled { 
    background: #555; 
    color: #888; 
    cursor: not-allowed; 
}
.btn-hapus { 
    background: #ff4757; 
    color: white; 
    width: 100%; 
    margin-top: 10px; 
}
ul { 
    padding-left: 20px; 
    margin: 10px 0; 
}
</style>