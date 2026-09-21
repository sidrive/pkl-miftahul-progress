<template>
  <div class="app-container">
    <!-- Header Navigasi Atas -->
    <header class="header-utama">
      <h2 @click="mingguAktif = ''" style="cursor: pointer;">M3 - Progress Belajar Vue</h2>
      
      <!-- Cuma tampilkan tombol Menu Utama kalau lagi di dalam halaman minggu -->
      <div v-if="mingguAktif" class="tombol-nav-header">
        <button class="btn-home" @click="mingguAktif = ''">Menu Utama</button>
      </div>
    </header>

    <!-- Area Konten Utama -->
    <main class="area-konten">
      <!-- 1. Tampilan Awal: Pilihan Tombol Minggu di Tengah Layar -->
      <div v-if="!mingguAktif" class="menu-tengah">
        <h1>Pilih Minggu Tugas</h1>
        <p>Silakan pilih minggu materi yang ingin dibuka:</p>
        
        <div class="card-pilihan">
          <button class="btn-minggu" @click="mingguAktif = 'w1'">
            <h3>Minggu 1 (M3.W1)</h3>
            <p>Dasar Vue, Directive, Event & Migrasi To-Do List</p>
          </button>

          <button class="btn-minggu" @click="mingguAktif = 'w2'">
            <h3>Minggu 2 (M3.W2)</h3>
            <p>Reactivity Lanjutan (reactive), Props & Emit</p>
          </button>
        </div>
      </div>

      <!-- 2. Tampilan Minggu 1 -->
      <TaskW1 v-else-if="mingguAktif === 'w1'" />

      <!-- 3. Tampilan Minggu 2 -->
      <TaskW2 v-else-if="mingguAktif === 'w2'" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskW1 from './components/Task.M3-W1/TaskW1.vue'
import TaskW2 from './components/Task.M3-W2/TaskW2.vue'

const mingguAktif = ref('')
</script>

<style scoped>
.app-container {
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header-utama {
  background-color: #1a1a1a;
  color: white;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #333;
}

.header-utama h2 {
  margin: 0;
  font-size: 1.2rem;
}

.tombol-nav-header {
  display: flex;
  gap: 8px;
}

.btn-home {
  background-color: #ff4757;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.btn-home:hover {
  background-color: #e84118;
}

.area-konten {
  flex: 1;
}

.menu-tengah {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.card-pilihan {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-minggu {
  background-color: #222;
  color: white;
  border: 2px solid #00ffb3;
  border-radius: 12px;
  padding: 24px;
  width: 260px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  text-align: center;
}

.btn-minggu:hover {
  transform: translateY(-5px);
  background-color: #333;
}

.btn-minggu h3 {
  margin: 0 0 10px 0;
  color: #00ffb3;
}

.btn-minggu p {
  margin: 0;
  font-size: 0.85rem;
  color: #ccc;
}
</style>