<template>
  <div style="border: 1px solid; padding: 10px; margin-bottom: 10px;">
    <h3>Putaran 2: Filter Max Harga (Topik Beda)</h3>

    <label>Filter Max Harga (Rp): </label>
    <input v-model="inputHarga" type="number" placeholder="Misal: 50000" />

    <p>Angka Ditulis: <strong>{{ inputHarga }}</strong></p>
    <p>Filter Aktif (Debounce 800ms): <strong>{{ hargaDebounce }}</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDebounce } from '../useDebounce.js'

const inputHarga = ref('')
// Memakai useDebounce yang sama tapi dengan delay beda (800ms)
const hargaDebounce = useDebounce(inputHarga, 800)
</script>