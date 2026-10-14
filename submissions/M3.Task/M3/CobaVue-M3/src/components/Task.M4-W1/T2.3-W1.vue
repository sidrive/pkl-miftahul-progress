<template>
  <div class="eksperimen-box">
    <h3>Task M4.W1.T2.3: Uji Coba Destructuring & Reactivity Pinia</h3>

    <!-- Uji Coba 1 -->
    <div class="card-tes">
      <h4>1. Pakai Destructuring Biasa (Rusak / Putus):</h4>
      <p>Nilai Angka: <strong>{{ jumlah }}</strong></p>
      <button @click="tambahLangsung">Tambah dari Store Langsung (+1)</button>
    </div>

    <!-- Uji Coba 2 -->
    <div class="card-tes">
      <h4>2. Tanpa Destructuring (Langsung counterStore.jumlah):</h4>
      <p>Nilai Angka: <strong>{{ counterStore.jumlah }}</strong></p>
      <button @click="counterStore.tambah">Tambah dari Store (+1)</button>
    </div>

    <!-- Uji Coba 3 (SOLUSI) -->
    <div class="card-tes">
      <h4>3. Destructuring Pakai storeToRefs() (Solusi Resmi):</h4>
      <p>Nilai Angka: <strong>{{ jumlahRef }}</strong></p>
      <p>Action (Fungsi): <strong>Berhasil panggil tambahAction()</strong></p>
      <button @click="tambahAction">Tambah Pakai Action (+1)</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia' // <--- 1. Import storeToRefs dari 'pinia'
import { useCounterStore } from '../../stores/counterStore'

const counterStore = useCounterStore()

// CARA 1: Destructuring Biasa (Bikin Reactivity Putus)
const { jumlah } = counterStore

// CARA 3: Destructuring Pakai storeToRefs() untuk State/Getters
const { jumlah: jumlahRef } = storeToRefs(counterStore)

// Untuk Actions (Fungsi), BISA di-destructure langsung TANPA storeToRefs()
const { tambah: tambahAction } = counterStore

const tambahLangsung = () => {
  counterStore.jumlah++
  console.log('Nilai di dalam store asli sekarang:', counterStore.jumlah)
  console.log('Nilai variabel hasil destructuring biasa:', jumlah)
}
</script>

<style scoped>
.eksperimen-box {
  padding: 15px;
}
.card-tes {
  background-color: #222;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #444;
}
button {
  padding: 8px 12px;
  background-color: #00d2d3;
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
</style>