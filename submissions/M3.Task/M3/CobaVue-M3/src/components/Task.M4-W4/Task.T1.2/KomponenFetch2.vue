<template>
  <div style="border: 1px solid; padding: 15px; margin-top: 15px;">
    <h3>Putaran 2: Fetch Data Kategori Kasir (Reusability)</h3>

    <!-- Status 1: Loading -->
    <div v-if="loadingKategori">
      <p>⏳ Lagi memuat daftar kategori...</p>
    </div>

    <!-- Status 2: Error -->
    <div v-else-if="errorKategori">
      <p style="color: red;">❌ {{ errorKategori }}</p>
    </div>

    <!-- Status 3: Sukses -->
    <div v-else>
      <ul>
        <li v-for="kat in kategoriList" :key="kat.id">
          {{ kat.namaKategori }} (Total: {{ kat.totalItem }} item)
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '../useFetch.js'

// Data dummy kedua dengan topik BERBEDA (Kategori)
const dataKategoriDummy = [
  { id: 101, namaKategori: 'Minuman', totalItem: 12 },
  { id: 102, namaKategori: 'Makanan Utama', totalItem: 8 },
  { id: 103, namaKategori: 'Camilan', totalItem: 5 }
]

// Pakai composable useFetch yang sama kaya rename destructuring
const { 
  data: kategoriList, 
  loading: loadingKategori, 
  error: errorKategori 
} = useFetch(dataKategoriDummy)
</script>