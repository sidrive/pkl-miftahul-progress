<template>
  <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
    <h3>Komponen A</h3>
    <p>Status Lampu A: <strong>{{ aktif ? 'ON (Nyala)' : 'OFF (Mati)' }}</strong></p>
    <button @click="toggle">Pencet Saklar A</button>
  </div>
</template>

<script setup>
import { useToggle } from '../useToggle.js'

// Mengambil alat toggle dari resep composable (dapat mesin saklar A)
const { aktif, toggle } = useToggle(false)
</script>
