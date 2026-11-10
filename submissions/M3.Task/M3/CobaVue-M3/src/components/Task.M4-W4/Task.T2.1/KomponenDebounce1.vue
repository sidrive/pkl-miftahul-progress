<template>
  <div style="border: 1px solid gray; padding: 10px; margin-bottom: 10px;">
    <h3>Putaran 1: Input Pencarian Produk</h3>

    <label>Cari Produk: </label>
    <input v-model="inputCari" type="text" placeholder="Ketik nama produk..." />

    <p>Ketik Langsung: <strong>{{ inputCari }}</strong></p>
    <p>Hasil Debounce (500ms): <strong>{{ kataDebounce }}</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDebounce } from '../useDebounce.js'

const inputCari = ref('')
const kataDebounce = useDebounce(inputCari, 500)
</script>