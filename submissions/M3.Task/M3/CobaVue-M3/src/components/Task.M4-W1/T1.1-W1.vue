<script setup>
import { useCounterStore } from '../../stores/counterStore'
import { useUserStore } from '../../stores/userStore'
import { useProdukStore } from '../../stores/produkStore'

// Memanggil Putaran 1
const counterStore = useCounterStore()

// Memanggil Putaran 2
const userStore = useUserStore()

// Memanggil Putaran 3
const produkStore = useProdukStore()
</script>

<template>
  <div>
    <h3>Task T1.1: Setup & State Dasar</h3>

    <!-- Putaran 1 -->
    <div>
      <h4>Putaran 1: Store Sederhana (1 Data)</h4>
      <p>Jumlah saat ini: {{ counterStore.jumlah }}</p>
    </div>

    <hr />

    <!-- Putaran 2 -->
    <div>
      <h4>Putaran 2: Store User (>1 Data Properti)</h4>
      <p>Nama: {{ userStore.nama }}</p>
      <p>Peran: {{ userStore.peran }}</p>
      <p>Status: {{ userStore.statusAktif ? 'Aktif' : 'Non-Aktif' }}</p>
    </div>

    <hr />

    <!-- Putaran 3 -->
    <div>
      <h4>Putaran 3: Store Produk (Data Kompleks / Array)</h4>
      <ul>
        <li v-for="item in produkStore.daftarProduk" :key="item.id">
          {{ item.nama }} - Rp{{ item.harga }} (Stok: {{ item.stok }})
        </li>
      </ul>
    </div>
  </div>
</template>