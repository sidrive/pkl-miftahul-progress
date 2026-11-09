<template>
  <div style="border: 1px solid #ccc; padding: 10px;">
    <h3>Komponen B</h3>
    <p>Status Lampu B: <strong>{{ aktif ? 'ON (Nyala)' : 'OFF (Mati)' }}</strong></p>
    <button @click="toggle">Pencet Saklar B</button>
  </div>
</template>

<script setup>
import { useToggle } from '../useToggle.js'

// Mengambil alat toggle dari resep composable (dapat mesin saklar B yang terpisah)
const { aktif, toggle } = useToggle(false)
</script>