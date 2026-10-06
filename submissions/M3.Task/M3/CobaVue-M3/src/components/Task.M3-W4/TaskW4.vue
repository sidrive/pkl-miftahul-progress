<template>
  <div class="layout">
    <div class="top-nav">
      <button v-if="halamanAktif !== 'beranda'" class="btn-beranda" @click="halamanAktif = 'beranda'">
        ← Beranda M3.W4
      </button>
    </div>

    <div v-if="halamanAktif === 'beranda'">
      <h1>M3-VueJs (Minggu 4)</h1>
      <p>Custom `v-model` & Vue Router 4 Dasar</p>
      <hr />

      <div class="nav-tugas">
        <div class="item-tugas">
          <p>Tugas T1.1 Disini</p>
          <a href="#" @click.prevent="halamanAktif = 't11'">`v-model` native + modifier</a>
        </div>

        <div class="item-tugas">
          <p>Tugas T1.2 Disini</p>
          <a href="#" @click.prevent="halamanAktif = 't12'">`v-model` di component sendiri</a>
        </div>

        <div class="item-tugas">
          <p>Tugas T1.3 Disini</p>
          <a href="#" @click.prevent="halamanAktif = 't13'">percobaan untuk jawab pertanyaan</a>
        </div>

        <div class="item-tugas">
          <p>Tugas T2.1 Disini</p>
          <router-link to="/" @click="halamanAktif = 't21'">routing dasar</router-link>
        </div>

        <div class="item-tugas">
          <p>Tugas T2.2 Disini</p>
          <router-link to="/produk" @click="halamanAktif = 't22'">Dynamic Route Params</router-link>
        </div>

        <div class="item-tugas">
          <p>Tugas T2.3 Disini</p>
          <router-link to="/uji-t23/1" @click="halamanAktif = 't22'">
            Uji Component Reuse (T2.3)
          </router-link>
        </div>

        <div class="item-tugas">
          <p>Tugas T2.4 Disini</p>
          <router-link to="/t24" @click="halamanAktif = 't24'">
            Navigasi & Query Params (T2.4)
          </router-link>
        </div>
      </div>
    </div>

    <div v-else-if="halamanAktif === 't11'">
      <T1_1_W4 />
    </div>

    <div v-else-if="halamanAktif === 't12'">
      <T1_2_W4 />
    </div>

    <div v-else-if="halamanAktif === 't13'">
      <T1_3_W4 />
    </div>

    <div v-else-if="halamanAktif === 't21'">
      <T2_1_W4 />
    </div>

    <div v-else-if="['t22', 't23', 't24'].includes(halamanAktif)">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import T1_1_W4 from './T1-W4/T1.1-W4.vue'
import T1_2_W4 from './T1-W4/T1.2-W4.vue'
import T1_3_W4 from './T1-W4/T1.3-W4.vue'
import T2_1_W4 from './T2-W4/T2.1-W4.vue'

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