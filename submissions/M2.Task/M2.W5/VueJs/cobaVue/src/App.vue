<template>
  <div class="layout">
    <!-- 1. Navbar -->
    <nav class="navbar">
      <div class="logo">Websiteku</div>
      <div class="menu">
      <!-- //@click.prevent="halamanAktif = 'beranda'" ini lagi buat pas diklik, 
      nilai halamanAktif berubah jadi "beranda" -->
        <a href="#" @click.prevent="halamanAktif = 'beranda'">Beranda</a>
        <a href="#" @click.prevent="halamanAktif = 'tentang'">Tentang</a>
        <a href="#">Kontak</a>
      </div>
    </nav>

    <main class="konten">
      <!-- Tampil pas halamanAktif 'beranda' -->
      <!-- // v-if="halamanAktif === 'beranda'" ini buat ngecek nilai halamanAktif,
      kalo nilainya 'beranda', maka konten beranda ditampilkan. -->
      <div v-if="halamanAktif === 'beranda'">
        <h1>Selamat Datang di Vue 3!</h1>
        <p>Ini adalah halaman web sederhana pertama yang dibuat pakai Vue + Vite.</p>
      </div>

      <!-- Tampil pas halamanAktif 'tentang' -->
      <Tentang v-else-if="halamanAktif === 'tentang'" /> <!-- // Tentang v-else-if="halamanAktif === 'tentang'" 
      ini buat ngecek nilai halamanAktif, kalo nilainya 'tentang', maka komponen Tentang ditampilkan. -->
      <br>
      <p> klik link ini <a href="https://youtube.com" target="_blank">YouTube</a></p> 
      <!-- pakai target="_blank" biar linknya dibuka di tab baru, bukan di tab yang sama. -->
    </main>

    <!-- 3. Footer -->
    <footer class="footer">
      <p>&copy; 2026 Websiteku. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// disini kita import ref dari Vue, yang digunakan buat bikin variabel reaktif.
import { ref } from 'vue'
// kita ambil Tentang.vue dari folder components
import Tentang from './components/Tentang.vue'

const halamanAktif = ref('beranda')
</script>

<style scoped>
/* Reset dasar */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  margin: 0;
}

/* Style Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
}

.menu a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}

/* Style Konten Utama */
.konten {
  flex: 1;
  padding: 2rem;
  text-align: center;
}

/* Style Footer */
.footer {
  background-color: #222;
  color: #aaa;
  text-align: center;
  padding: 1rem;
}
</style>