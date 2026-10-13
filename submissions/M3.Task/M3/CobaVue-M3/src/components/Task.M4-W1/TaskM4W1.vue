<template>
  <div class="m4w1-container">
    <h2>Bulan 4 Minggu 1 — Pinia Dasar</h2>

    <!-- Tombol Sub-Navigasi Per Task -->
    <div class="sub-nav">
      <button 
        :class="{ aktif: taskAktif === 't11' }" 
        @click="taskAktif = 't11'">
        Task T1.1 (State Dasar)
      </button>

      <button 
        :class="{ aktif: taskAktif === 't21' }" 
        @click="taskAktif = 't21'">
        Task T2.1 (Getters)
      </button>

      <button 
        :class="{ aktif: taskAktif === 't22' }" 
        @click="taskAktif = 't22'">
        Task T2.2 (Actions)
      </button>
    </div>

    <hr class="pemisah" />

    <!-- Area Konten yang Tampil Sesuai Tombol yang Dipilih -->
    <div class="konten-task">
      <T1_1_W1 v-if="taskAktif === 't11'" />
      <T2_1_W1 v-else-if="taskAktif === 't21'" />
      <T2_2_W1 v-else-if="taskAktif === 't22'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import T1_1_W1 from './T1.1-W1.vue'
import T2_1_W1 from './T2.1-W1.vue'
import T2_2_W1 from './T2.2-W1.vue'

// State untuk menyimpan tab mana yang aktif (default T1.1)
const taskAktif = ref('t11')
</script>

<style scoped>
.m4w1-container {
  padding: 20px;
}

.sub-nav {
  display: flex;
  gap: 12px;
  margin-top: 15px;
  justify-content: center;
}

.sub-nav button {
  background-color: #222;
  color: #ccc;
  border: 1px solid #555;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.sub-nav button:hover {
  background-color: #333;
  color: white;
}

/* Style tombol yang sedang aktif */
.sub-nav button.aktif {
  background-color: #00d2d3;
  color: #111;
  border-color: #00d2d3;
}

.pemisah {
  border: 0;
  border-top: 1px solid #444;
  margin: 20px 0;
}

.konten-task {
  margin-top: 15px;
}
</style>