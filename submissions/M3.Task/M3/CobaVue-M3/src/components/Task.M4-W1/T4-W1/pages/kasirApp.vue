<template>
  <div class="kasir-box">
    <h2 class="judul">🛒 Mini App Kasir Sederhana (Pinia)</h2>

    <div class="kasir-grid">
      <div class="panel">
        <h3>📦 Barang</h3>
        <div v-for="b in kasirStore.daftarBarang" :key="b.id" class="item">
          <div>
            <strong>{{ b.nama }}</strong><br>
            <small>Rp {{ b.harga.toLocaleString('id-ID') }} | Stok: {{ b.stok }}</small>
          </div>
          <button :disabled="b.stok === 0" @click="kasirStore.tambahKeKeranjang(b)">
            + Beli
          </button>
        </div>
      </div>

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
import { useKasirStore } from '../stores/kasirStore.js'
const kasirStore = useKasirStore()
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