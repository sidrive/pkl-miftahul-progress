<template>
  <div style="border: 1px solid orange; padding: 10px; margin-bottom: 10px; text-align: left;">
    <h3>Putaran 3: Kombinasi search-as-you-type (useDebounce + useFetch)</h3>

    <label>Cari Produk Real-time: </label>
    <input v-model="kataKunciInput" type="text" placeholder="Ketik kopi / teh / matcha..." />

    <p>Kata Diketik: <strong>{{ kataKunciInput || '-' }}</strong></p>
    <p>Kata Didebounce (500ms): <strong>{{ kataDidebounce || '-' }}</strong></p>

    <div v-if="loading">
      <p>⏳ Lagi mencari data ke server...</p>
    </div>

    <div v-else-if="error">
      <p style="color: red;">{{ error }}</p>
    </div>

    <div v-else>
      <h4>Hasil Pencarian Produk:</h4>
      <ul v-if="daftarProduk && daftarProduk.length > 0">
        <li v-for="item in daftarProduk" :key="item.id">
          {{ item.nama }} — Rp {{ item.harga.toLocaleString() }}
        </li>
      </ul>
      <p v-else style="color: red;">Produk tidak ditemukan!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDebounce } from '../useDebounce.js'
import { useFetch } from '../useFetch.js'

const kataKunciInput = ref('')
const kataDidebounce = useDebounce(kataKunciInput, 500)
const { data: daftarProduk, loading, error } = useFetch(kataDidebounce)
</script>