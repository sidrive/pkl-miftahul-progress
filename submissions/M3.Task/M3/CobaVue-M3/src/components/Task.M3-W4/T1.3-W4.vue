<template>
  <div>
    <h3>Eksperimen Task T1.3: Sengaja Merusak Pasangan Prop/Emit</h3>

    <!-- Parent tetap memanggil v-model biasa -->
    <AnakRusak v-model="teksParent" />

    <p>Nilai di Parent: <strong>"{{ teksParent }}"</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnakRusak from './T1.3-W4.anak.vue'

const teksParent = ref('Nilai Awal')
</script>