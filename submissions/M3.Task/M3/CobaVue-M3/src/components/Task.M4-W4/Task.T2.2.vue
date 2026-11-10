<template>
  <div style="border: 1px solid red; padding: 15px; text-align: left;">
    <h3>Task T2.2 — Eksperimen Composable Lupa Return Ref</h3>
    
    <p>Nilai Saat Ini: <strong>{{ nilai }}</strong></p>
    <button @click="tambah">Tambah Angka (+1)</button>

    <p style="color: gray; font-size: 0.9rem;">
      *Buka Console Browser (F12) pas pencet tombol buat liat bedanya!
    </p>
  </div>
</template>

<script setup>
import { useHitungSesuatu } from './useHitungSesuatu.js'

const { nilai, tambah } = useHitungSesuatu()
</script>