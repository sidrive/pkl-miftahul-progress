<template>
  <div class="layout">
    <div class="top-nav">
      <!-- Tombol Beranda M3.W2 hanya muncul jika lagi tidak di halaman beranda -->
      <button v-if="halamanAktif !== 'beranda'" class="btn-beranda" @click="halamanAktif = 'beranda'">
      ← Beranda M3.W2
      </button>
    </div>

    <!-- Beranda Minggu 2 -->
    <div v-if="halamanAktif === 'beranda'">
      <h1>M3-VueJs (Minggu 2)</h1>
      <p>Reactivity Lanjutan, Props & Emit</p>
      <hr>

      <div class="nav-tugas">

        <div class="item-tugas">
          <p>Klik untuk ke tugas T1.1-W2</p>
          <a href="#" @click.prevent="halamanAktif = 't11'">
            T1.1 reactive()
          </a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T1.2-W2</p>
          <a href="#" @click.prevent="halamanAktif = 't12'">
            T1.2 Destructuring reactive()
          </a>
        </div>

      </div>
    </div>

    <T1_1_W2 v-else-if="halamanAktif === 't11'" />

    <T1_2_W2 v-else-if="halamanAktif === 't12'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import T1_1_W2 from './T1.1.M3-W2.vue'
import T1_2_W2 from './T1.2.M3-W2.vue'

const halamanAktif = ref('beranda')
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  font-family: sans-serif;
  margin: 0;
}

.top-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;
}

.btn-beranda {
  background-color: #00ffb3;
  color: #1a1a1a;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-beranda:hover {
  opacity: 0.8;
}

.nav-tugas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.item-tugas {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-tugas p {
  margin: 0 0 6px 0;
  font-size: 0.9rem;
}

.nav-tugas a {
  background-color: #00ffb3;
  color: white;
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
}

.nav-tugas a:hover {
  background-color: #990000;
}
</style>