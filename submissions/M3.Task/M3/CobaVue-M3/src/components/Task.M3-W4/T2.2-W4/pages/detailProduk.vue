<template>
  <div>
    <!-- Putaran 1: Halaman Detail Produk yang membaca params URL -->
    <h2>Detail Produk</h2>
    <div v-if="produk">
      <p><strong>ID Produk:</strong> {{ route.params.id }}</p>
      <p><strong>Nama:</strong> {{ produk.nama }}</p>
      <p><strong>Harga:</strong> {{ produk.harga }}</p>
      <p><strong>Deskripsi:</strong> {{ produk.deskripsi }}</p>
    </div>
    <div v-else>
      <p>Produk tidak ditemukan!</p>
    </div>
    <br />
    <router-link to="/produk">← Kembali ke Daftar Produk</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { daftarProduk } from '../dataDummy/produkDummy'

const route = useRoute()

// Mencari data produk berdasarkan parameter ID dari URL
const produk = computed(() => {
  return daftarProduk.find(item => item.id === route.params.id)
})
</script>