<template>
  <div>
    <h2>Percobaan T2.3</h2>
    
    <div v-if="produk">
      <p><strong>ID Produk:</strong> {{ route.params.id }}</p>
      <p><strong>Nama:</strong> {{ produk.nama }}</p>
    </div>

    <hr />

    <!-- Link internal buat tes pindah ID tanpa reload -->
    <p>Klik tombol di bawah:</p>
    <ul>
      <li><router-link to="/uji-t23/1">Buka Produk 1</router-link></li>
      <li><router-link to="/uji-t23/2">Buka Produk 2</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { daftarProduk } from '../dataDummy/produkDummy'

const route = useRoute()

// Biar pas klik Produk 2, nama barangnya otomatis ganti
const produk = computed(() => {
  return daftarProduk.find(item => item.id === route.params.id)
})
</script>