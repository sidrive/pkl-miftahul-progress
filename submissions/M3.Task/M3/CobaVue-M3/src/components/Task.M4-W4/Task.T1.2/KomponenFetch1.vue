<template>
  <div style="border: 1px solid; padding: 15px; margin-bottom: 15px;">
    <h3>Putaran 1: Fetch Data Produk Kasir</h3>

    <!-- Tampilan 1: Kalau lagi Loading -->
    <div v-if="loading">
      <p>⏳ Sedang mengambil data produk dari server...</p>
    </div>

    <!-- Tampilan 2: Kalau Error -->
    <div v-else-if="error">
      <p style="color: red;">❌ {{ error }}</p>
    </div>

    <!-- Tampilan 3: Kalau Sukses Data Ada -->
    <div v-else>
      <ul>
        <li v-for="item in produkList" :key="item.id">
          {{ item.nama }} - Rp {{ item.harga }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '../useFetch.js'

// Data dummy produk yang pura-pura diambil dari server
const dataProdukDummy = [
  { id: 1, nama: 'Kopi Hitam', harga: 10000 },
  { id: 2, nama: 'Teh Manis', harga: 5000 },
  { id: 3, nama: 'Roti Bakar', harga: 12000 }
]

// Panggil composable useFetch
const { data: produkList, loading, error } = useFetch(dataProdukDummy)
</script>