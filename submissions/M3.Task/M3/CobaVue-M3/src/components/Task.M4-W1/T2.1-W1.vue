<script setup>
import { useProdukStore } from '../../stores/produkStore'
import { useUserStore } from '../../stores/userStore'

const produkStore = useProdukStore()
const userStore = useUserStore()
</script>

<template>
  <div>
    <h3>Task M4.W1.T2.1: Getters (Nilai Turunan State)</h3>

    <!-- Putaran 1 -->
    <div>
      <h4>Putaran 1: Getter Sederhana</h4>
      <p>Total Jenis Produk di Toko: <strong>{{ produkStore.totalJenisProduk }} jenis</strong></p>
    </div>
    <hr />

    <!-- Putaran 2 -->
    <div>
      <h4>Putaran 2: Getter Gabungan (>1 Properti State)</h4>
      <p>Profil User: <strong>{{ userStore.profilLengkap }}</strong></p>
    </div>
    <hr />

    <!-- Putaran 3 -->
    <div>
      <h4>Putaran 3: Getter Saling Bergantung (Memanggil Getter Lain)</h4>
      <p>Total Stok: <strong>{{ produkStore.totalStokBarang }} unit</strong></p>
      <p>Ringkasan Toko: <strong>{{ produkStore.ringkasanToko }}</strong></p>
    </div>
  </div>
</template>