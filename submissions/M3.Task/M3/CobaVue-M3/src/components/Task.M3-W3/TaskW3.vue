<template>
  <div class="layout">
    <div class="top-nav">
      <button v-if="halamanAktif !== 'beranda'" class="btn-beranda" @click="halamanAktif = 'beranda'">
        ← Beranda M3.W3
      </button>
    </div>

    <!-- Beranda Minggu 3 -->
    <div v-if="halamanAktif === 'beranda'">
      <h1>M3-VueJs (Minggu 3)</h1>
      <p>Computed() Lanjutan, Watch & Lifecycle Hooks</p>
      <hr />

      <div class="nav-tugas">
        <div class="item-tugas">
          <p>Klik untuk ke tugas T1.1-W3</p>
          <a href="#" @click.prevent="halamanAktif = 't11'">T1.1 Computed() Lanjutan</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T1.2-W3</p>
          <a href="#" @click.prevent="halamanAktif = 't12'">T1.2 Computed vs Method</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T2.1-W3</p>
          <a href="#" @click.prevent="halamanAktif = 't21'">T2.1 Watch() dasar</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T2.2-W3</p>
          <a href="#" @click.prevent="halamanAktif = 't22'">T2.2 Percobaan</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T2.3-W3</p>
          <a href="#" @click.prevent="halamanAktif = 't23'">T2.3 Watch() Dasar Pt 2</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T3.1-W3</p>
          <a href="#" @click.prevent="halamanAktif = 't31'">T3.1 onMounted()</a>
        </div>

        <div class="item-tugas">
          <p>Klik untuk ke tugas T3.2-W3</p>
          <a href="#" @click.prevent="halamanAktif = 't32'">T3.2 onMounted() Pt 2</a>
        </div>
      </div>
    </div>

    <div v-else-if="halamanAktif === 't11'">
      <T1_1_W3 />
    </div>

    <div v-else-if="halamanAktif === 't12'">
      <T1_2_W3 />
    </div>

    <div v-else-if="halamanAktif === 't21'">
      <T2_1_W3 />
    </div>

    <div v-else-if="halamanAktif === 't22'">
      <T2_2_W3 />
    </div>

    <div v-else-if="halamanAktif === 't23'">
      <T2_3_W3 />
    </div>

    <div v-else-if="halamanAktif === 't31'">
      <T3_1_W3 />
    </div>

    <div v-else-if="halamanAktif === 't32'">
      <T3_2_W3 />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import T1_1_W3 from './T1.1-W3.vue'
import T1_2_W3 from './T1.2-W3.vue'
import T2_1_W3 from './T2.1-W3.vue'
import T2_2_W3 from './T2.2-W3.vue'
import T2_3_W3 from './T2.3-W3.vue'
import T3_1_W3 from './T3.1-W3.vue'
import T3_2_W3 from './T3.2-W3.vue'

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