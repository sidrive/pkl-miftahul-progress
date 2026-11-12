<template>
  <div class="playground-container">
    <h2>🚀 Composables Playground (M4.W4.T5)</h2>
    <p class="subtitle">Showcase & Demo Interaktif Logic Composables Minggu 4</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import Composables dari folder utama M4-W4
import { useToggle } from '../useToggle.js'
import { useCounter } from '../useCounter.js'
import { useFetch } from '../useFetch.js'
import { useDebounce } from '../useDebounce.js'
import { useLocalStorage } from './useLocalStorage.js'

// Setup Demo Toggle & Counter (T1.1)
const { aktif: statusLampu, toggle: saklarLampu } = useToggle(false)
const { hitungan, tambah, kurang, reset } = useCounter(0, 1)

// Setup Demo Fetch (T1.2)
const urlPromo = ref('/api/promo')
const { data: dataPromo, loading: loadingPromo, error: errorPromo } = useFetch(urlPromo)

// Setup Demo Debounce & LocalStorage (T2.1)
const inputCari = ref('')
const kataDebounce = useDebounce(inputCari, 500)
const { data: hasilCariProduk, loading: loadingCari } = useFetch(kataDebounce)

const catatansaya = useLocalStorage('catatan_playground_t5', 'Catatan ini otomatis tersimpan di LocalStorage!')
</script>

<style scoped>
</style>