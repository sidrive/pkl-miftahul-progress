<template>
  <div>
    <h2>Task T1.1 — Composables Dasar</h2>
    <hr />
    
    <h3>Putaran 1: Pembuktian State Terpisah (useToggle)</h3>
    <KomponenA />
    <KomponenB />

    <br>
    <hr />
    
    <h3>Putaran 2: userCounter</h3>
    <KomponenCounter />

    <br>
    <hr  />

    <h3>Putaran 3: Gabungan 2 komponen</h3>
    <KomponenGabungan />
  </div>
</template>

<script setup>
import KomponenA from './KomponenA.vue'
import KomponenB from './KomponenB.vue'
import KomponenCounter from './KomponenCounter.vue'
import KomponenGabungan from './KomponenGabungan.vue';
</script>