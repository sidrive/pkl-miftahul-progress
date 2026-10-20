<template>
  <div class="app-container">
    <!-- Header Navigasi Atas -->
    <header class="header-utama">
      <h2 @click="kembaliKeMenuUtama" style="cursor: pointer;">M3 & M4 - Vue Js, Pinia, Ds Design</h2>
      
      <!-- tampilkan tombol Menu Utama kalau lagi di dalam halaman minggu -->
      <div v-if="mingguAktif" class="tombol-nav-header">
        <!-- TOMBOL SAKLAR GLOBAL (PUTARAN 3) -->
        <button class="btn-saklar-global" @click="toggleThemeGlobal">
          Mode: {{ isDark ? 'Dark' : 'Light' }}
        </button>

        <button class="btn-home" @click="kembaliKeMenuUtama">Menu Utama</button>
      </div>

      <!-- Tampilkan tombol saklar juga saat di halaman Menu Utama luar -->
      <div v-else class="tombol-nav-header">
        <button class="btn-saklar-global" @click="toggleThemeGlobal">
          Mode: {{ isDark ? 'Dark' : 'Light' }}
        </button>
      </div>
    </header>

    <!-- Area Konten Utama -->
    <main class="area-konten">
      <!-- 1. Tampilan Awal: Pilihan Tombol Minggu di Tengah Layar -->
      <div v-if="!mingguAktif" class="menu-tengah">
        <h1>Pilih Minggu Tugas</h1>
        <p>Silakan pilih minggu materi yang ingin dibuka:</p>
        
        <div class="seksi-bulan">
          <h3 class="judul-seksi">Bulan 3 — Vue Fundamental & Router</h3>
          <div class="card-pilihan">
            <button class="btn-minggu" @click="pilihMinggu('w1')">
              <h3>Minggu 1 (M3.W1)</h3>
              <p>Dasar Vue, Directive, Event & Migrasi To-Do List</p>
            </button>

            <button class="btn-minggu" @click="pilihMinggu('w2')">
              <h3>Minggu 2 (M3.W2)</h3>
              <p>Reactivity Lanjutan (reactive), Props & Emit</p>
            </button>

            <button class="btn-minggu" @click="pilihMinggu('w3')">
              <h3>Minggu 3 (M3.W3)</h3>
              <p>Computed() Lanjutan, Watch & Lifecycle Hooks</p>
            </button>

            <button class="btn-minggu" @click="pilihMinggu('w4')">
              <h3>Minggu 4 (M3.W4)</h3>
              <p>Custom `v-model` & Vue Router 4 Dasar</p>
            </button>
          </div>
        </div>

        <hr class="garis-pemisah" />

        <div class="seksi-bulan">
          <h3 class="judul-seksi">Bulan 4 — Pinia & Design System</h3>
          <div class="card-pilihan">
            <button class="btn-minggu btn-bulan4" @click="pilihMinggu('m4w1')">
              <h3>Bulan 4 Minggu 1 (M4.W1)</h3>
              <p>Pinia Dasar: State, Getters, Actions</p>
            </button>

            <button class="btn-minggu btn-bulan4" @click="pilihMinggu('m4w2')">
              <h3>Bulan 4 Minggu 2 (M4.W2)</h3>
              <p>Design System Tokens & Dark Mode</p>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Bulan 3 -->
      <TaskW1 v-else-if="mingguAktif === 'w1'" />

      <TaskW2 v-else-if="mingguAktif === 'w2'" />

      <TaskW3 v-else-if="mingguAktif === 'w3'" />

      <TaskW4 v-else-if="mingguAktif === 'w4'" />

      <!-- Bulan 4 -->
      <TaskM4W1 v-else-if="mingguAktif === 'm4w1'" />

      <TaskM4W2 v-else-if="mingguAktif === 'm4w2'" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import TaskW1 from './components/Task.M3-W1/TaskW1.vue'
import TaskW2 from './components/Task.M3-W2/TaskW2.vue'
import TaskW3 from './components/Task.M3-W3/TaskW3.vue'
import TaskW4 from './components/Task.M3-W4/TaskW4.vue'
import TaskM4W1 from './components/Task.M4-W1/TaskM4W1.vue'
import TaskM4W2 from './components/Task.M4-W2/TaskM4W2.vue'

const router = useRouter()
const mingguAktif = ref('')

const pilihMinggu = (kodeMinggu) => {
  mingguAktif.value = kodeMinggu
}

const kembaliKeMenuUtama = () => {
  mingguAktif.value = ''
  router.push('/')
}

// Putaran 3 M4-W2.T2.1
const isDark = ref(false)

function toggleThemeGlobal() {
  const sudahDark = document.documentElement.getAttribute('data-theme') === 'dark'
  
  if (sudahDark) {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
    isDark.value = false
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    isDark.value = true
  }
}

onMounted(() => {
  const temaTersimpan = localStorage.getItem('theme')
  
  if (temaTersimpan === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    isDark.value = true
  } else {
    document.documentElement.removeAttribute('data-theme')
    isDark.value = false
  }
})
</script>

<style scoped>
/* Pilihan Global Saklar: Mengubah warna background seluruh App */
.app-container {
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.header-utama {
  background-color: var(--color-surface);
  color: var(--color-text);
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--color-border);
}

.header-utama h2 {
  margin: 0;
  font-size: 1.2rem;
}

.tombol-nav-header {
  display: flex;
  gap: 8px;
}

.btn-saklar-global {
  background-color: var(--color-navy-500);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
}

.btn-saklar-global:hover {
  background-color: var(--color-navy-700);
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
  padding: 40px 20px;
  text-align: center;
}

.seksi-bulan {
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
}

.judul-seksi {
  color: var(--color-grey-500);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.garis-pemisah {
  width: 80%;
  max-width: 900px;
  border: 0;
  border-top: 1px solid var(--color-border);
  margin: 35px 0;
}

.card-pilihan {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-minggu {
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 2px solid #00ffb3;
  border-radius: 12px;
  padding: 24px;
  width: 240px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  text-align: center;
}

.btn-minggu:hover {
  transform: translateY(-5px);
  opacity: 0.9;
}

.btn-minggu h3 {
  margin: 0 0 10px 0;
  color: #00ffb3;
}

.btn-minggu p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text);
}

.btn-bulan4 {
  border-color: #00d2d3;
}

.btn-bulan4 h3 {
  color: #00d2d3;
}
</style>