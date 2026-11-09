<template>
  <div style="border: 2px dashed; padding: 15px; margin-top: 20px;">
    <h3>Putaran 3: Penggabungan 2 Composable (useToggle + useCounter)</h3>
    
    <!-- Fitur 1: Pakai useToggle -->
    <div style="margin-bottom: 15px;">
      <p>Status Fitur Bonus: <strong>{{ bonusAktif ? '🎉 AKTIF' : '❌ NON-AKTIF' }}</strong></p>
      <button @click="toggleBonus">Saklar Bonus</button>
    </div>

    <!-- Fitur 2: Pakai useCounter -->
    <div>
      <p>Jumlah Poin Belanja: <strong>{{ poin }} Poin</strong></p>
      <button @click="tambahPoin">+5 Poin</button> |
      <button @click="kurangPoin">-5 Poin</button> |
      <button @click="resetPoin" style="margin-left: 5px;">Reset Poin</button>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from '../useToggle.js'
import { useCounter } from '../useCounter.js'

// Pakai useToggle (misal: saklar fitur bonus)
const { aktif: bonusAktif, toggle: toggleBonus } = useToggle(false)

// Pakai useCounter (misal: penghitung poin belanja, nambah +5 tiap klik)
const { hitungan: poin, tambah: tambahPoin, kurang: kurangPoin, reset: resetPoin } = useCounter(0, 5)
</script>