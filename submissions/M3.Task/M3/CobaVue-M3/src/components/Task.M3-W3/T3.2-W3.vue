<template>
  <div>
    <p>Buka devtools untuk melihat progress</p>
    <h3>Putaran 1 - Cleanup setInterval di onUnmounted()</h3>
    <p>Detik berjalan: <strong>{{ hitungan }}</strong></p><br><hr>

    <h3>Putaran 2 - Cleanup Event Listener (Posisi Mouse)</h3>
    <p>Klik didaerah mana aja</p>
    <p>Posisi Mouse: <strong>X: {{ posisiX }}, Y: {{ posisiY }}</strong></p><br>

    <hr>
    <h3>Putaran 3 — Trigger Nyata via v-if</h3>
    <button @click="tampilkanAnak = !tampilkanAnak">
      {{ tampilkanAnak ? 'Sembunyikan' : 'Tampilkan' }} Anak Komponen
    </button>
    <br /><br>
    <!-- Anak Komponen dikontrol langsung pake v-if -->
    <AnakKomponen v-if="tampilkanAnak" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AnakKomponen from './T3.2-W3-Anak.vue' // Impor anak komponen

// Putaran 1
const hitungan = ref(0)
let idInterval = null

// jalan waktu komponen dipasang
onMounted(() => {
  console.log('[PUTARAN 1] Komponen dipasang, interval dimulai.')
  
  // jalankan timer tiap 1000ms (1 detik)
  idInterval = setInterval(() => {
    hitungan.value++
    console.log(`[PUTARAN 1] Timer berjalan: ${hitungan.value}`)
  }, 1000)
})

// jalan waktu komponen dihancurkan / ditutup
onUnmounted(() => {
  console.log('[PUTARAN 1] Komponen dilepas, mematikan interval!')
  
  // wajib dibersihkan biar gak bocor di memori (memory leak)
  clearInterval(idInterval)
})

// Putaran 2
const posisiX = ref(0)
const posisiY = ref(0)

// fungsi callback buat update posisi mouse
const perbaruiPosisiMouse = (event) => {
  posisiX.value = event.clientX
  posisiY.value = event.clientY
  console.log(`[PUTARAN 2] Mouse bergerak: X=${event.clientX}, Y=${event.clientY}`)
}

onMounted(() => {
  // pasang listener gerakan mouse ke window browser saat mounted
  window.addEventListener('mousemove', perbaruiPosisiMouse)
})

onUnmounted(() => {
  // wajib dicopot listener-nya waktu unmounted biar gak meraba gerakan mouse lagi
  window.removeEventListener('mousemove', perbaruiPosisiMouse)
  console.log('[PUTARAN 2] Event listener mousemove berhasil dicopot!')
})

// Putaran 3
const tampilkanAnak = ref(true)
</script>