<template>
  <div class="layout">
    <!-- Navbar Internal Refactor Token -->
    <nav class="navbar">
      <div class="logo">M3-VueJs (Minggu 1)</div>
      <div class="menu">
        <a href="#" @click.prevent="halamanAktif = 'beranda'">Beranda</a>
        <a href="#" @click.prevent="halamanAktif = 'tentang'">Tentang</a>
        <a href="#" @click.prevent="halamanAktif = 'kontak'">Kontak</a>
      </div>
    </nav>

    <main class="konten">
      <!-- Tampil pas halamanAktif 'beranda' -->
      <div v-if="halamanAktif === 'beranda'">
        <h1>Selamat Datang di Vue 3!</h1>
        <p>Ini adalah halaman web sederhana pertama yang dibuat pakai Vue + Vite.</p>

        <br>
        <button class="btn-klik" @click="tambahKlik">Klik saya</button>
        <p>Sudah diklik {{ jumlahKlik }} kali</p>
        <hr>

        <br>
        <p>Daftar nama:</p>
        <ul>
          <li v-for="nama in daftarNama" :key="nama">
            {{ nama }}
          </li>
        </ul>
      </div>

      <!-- Komponen Hal Lain -->
      <Tentang v-else-if="halamanAktif === 'tentang'" />
      <Kontak v-else-if="halamanAktif === 'kontak'" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Tentang from './Tentang.vue'
import Kontak from './Kontak.vue'

const halamanAktif = ref('beranda')
const jumlahKlik = ref(0)

function tambahKlik() {
  jumlahKlik.value++
}

const daftarNama = ref(['Jeki', 'Marko', 'Andi'])
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  font-family: sans-serif;
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--spacing-xs);
}

.logo {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-navy-100);
}

.menu a {
  color: var(--color-grey-0);
  text-decoration: none;
  margin-left: var(--spacing-md);
  font-size: var(--font-size-md);
}

.menu a:hover {
  color: var(--color-navy-100);
}

.konten {
  flex: 1;
  padding: var(--spacing-md) 0;
  text-align: center;
}

.btn-klik {
  background-color: var(--color-navy-500);
  color: var(--color-grey-0);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--spacing-xs);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
}

ul {
  display: inline-block;
  text-align: left;
  padding-left: var(--spacing-lg);
}
</style>