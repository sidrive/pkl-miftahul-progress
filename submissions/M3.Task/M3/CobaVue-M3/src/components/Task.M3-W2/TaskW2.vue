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
          <a href="#" @click.prevent="halamanAktif = 't11'">T1.1 reactive()</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T1.2-W2</p>
          <a href="#" @click.prevent="halamanAktif = 't12'">T1.2 Destructuring reactive()</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T2.1-W2</p>
          <a href="#" @click.prevent="halamanAktif = 't21'">T2.1 Emit dengan payload</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T2.2-W2</p>
          <a href="#" @click.prevent="halamanAktif = 't22'">T2.2 Props Tervalidasi</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T3-W2</p>
          <a href="#" @click.prevent="halamanAktif = 't3'">T3 Skill Mandiri</a>
        </div>
      </div>
    </div>

    <!-- Halaman T1 -->
    <T1_1_W2 v-else-if="halamanAktif === 't11'" />
    <T1_2_W2 v-else-if="halamanAktif === 't12'" />

    <!-- Halaman T2.1 -->
    <!-- ============================================================== -->
     <div v-else-if="halamanAktif === 't21'">
      <h2>Task T2.1 — Emit dengan Payload</h2>
      
      <div>
        <p>Data yang ditangkap dari anak (Induk):</p>
        <pre>{{ dataDariAnak }}</pre>
      </div>
      <hr />

      <T2_1_W2 
        @edit="handleEditP1" 
        @submitForm="handleSubmitP2" 
        @simpan="handleSimpanP3" 
        @batal="handleBatalP3" 
      />
    </div>
    <!-- ============================================================ -->

    <!-- Halaman T2.2 -->
    <div v-else-if="halamanAktif === 't22'">
      <h2>Task T2.2 — Props dengan Validasi Tipe</h2>

      <T2_2_W2 nama="Gazi" :nilai="90" :isBuka="true" :menu="['Nasi Goreng', 'Ayam Kabar']" /><br>

      <hr>
      <br>
      <!-- Memanggil Putaran 3 -->
      <T2_2_P3 namaProduk="Sepatu Running" :harga="250000" :stokTersedia="true" />
    </div>
    
    <div v-else-if="halamanAktif === 't3'">
      <T3 />
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

import T1_1_W2 from './T1.1.M3-W2.vue'
import T1_2_W2 from './T1.2.M3-W2.vue'
import T2_1_W2 from './T2-M3-W2/T2.1.M3-W2.vue'
import T2_2_W2 from './T2-M3-W2/T2.2.M3-W2.vue'
import T2_2_P3 from './T2-M3-W2/T2.2.M3-W2.P3.vue'
import T3 from './T3-M3-W2/MainTodo.vue'

const halamanAktif = ref('beranda')

// T2.1
// ===========================================================
const dataDariAnak = ref('Belum ada data dari anak')

// Fungsi penerima payload Putaran 1
function handleEditP1(payload) {
  console.log('Payload diterima di Induk:', payload)
  dataDariAnak.value = payload
}

// Fungsi penerima payload Putaran 2 (Form Input)
function handleSubmitP2(payload) {
  console.log('Payload Form diterima di Induk:', payload)
  dataDariAnak.value = payload
}

// Handler Putaran 3 (Simpan - Bawa Payload)
function handleSimpanP3(payload) {
  console.log('Simpan diterima:', payload)
  dataDariAnak.value = payload
}

// Handler Putaran 3 (Batal - Tanpa Payload/Kosongan)
function handleBatalP3() {
  console.log('Transaksi dibatalkan')
  dataDariAnak.value = 'Transaksi dibatalkan oleh pengguna (tanpa payload)'
}
// ===========================================================
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
  background-color: #eefd15;
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