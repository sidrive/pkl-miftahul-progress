<!-- Putaran 3: Membaca Lebih dari 1 Parameter Dinamis (kategoriId & produkId) -->
<template>
  <div>
    <h2>Detail Produk Multi-Param</h2>
    <div v-if="detail">
      <!-- Membaca 2 parameter dari URL secara bersamaan -->
      <p><strong>Param Kategori ID:</strong> {{ route.params.kategoriId }}</p>
      <p><strong>Param Produk ID:</strong> {{ route.params.produkId }}</p>
      <hr />
      <p><strong>Kategori:</strong> {{ detail.namaKategori }}</p>
      <p><strong>Nama Produk:</strong> {{ detail.nama }}</p>
      <p><strong>Harga:</strong> {{ detail.harga }}</p>
    </div>
    <div v-else>
      <p>Data multi-param tidak ditemukan!</p>
    </div>
    <br />
    <router-link to="/kategori">← Kembali ke Daftar Kategori</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { daftarKategori } from '../dataDummy/kategoriDummy'

const route = useRoute()

// Mencari data berdasarkan 2 parameter sekaligus dari route.params
const detail = computed(() => {
  const kat = daftarKategori.find(k => k.id === route.params.kategoriId)
  if (!kat) return null
  
  const prod = kat.produk.find(p => p.id === route.params.produkId)
  if (!prod) return null

  return {
    namaKategori: kat.nama,
    nama: prod.nama,
    harga: prod.harga
  }
})
</script>