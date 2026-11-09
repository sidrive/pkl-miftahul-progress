<template>
  <div style="border: 1px solid; padding: 10px; margin-top: 15px;">
    <h3>Putaran 2: Component Counter (Mulai: 10, Step: +2)</h3>
    <p>Angka Sekarang: <strong>{{ hitungan }}</strong></p>
    
    <button @click="tambah">+2</button>
    <button @click="kurang" style="margin: 0 5px;">-2</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { useCounter } from '../useCounter.js'

// Mulai dari angka 10, nambah/kurang sebanyak 2 tiap kali tombol dipencet
const { hitungan, tambah, kurang, reset } = useCounter(10, 2)
</script>