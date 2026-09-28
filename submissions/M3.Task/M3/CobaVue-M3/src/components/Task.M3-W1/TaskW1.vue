<template>
  <div class="layout">
    <!-- Navbar Internal Minggu 1 -->
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
        <button @click="tambahKlik">Klik saya</button>
        <p>Sudah diklik {{ jumlahKlik }} kali</p>
        <hr>

        <br>
        <p>Daftar nama:</p>
        <ul>
          <li v-for="nama in daftarNama" :key="nama">
            {{ nama }}
          </li>
        </ul>
        <hr>

        <div class="nav-tugas">
          <div class="item-tugas">
            <p>Klik untuk ke tugasT2.3-W1</p>
            <a href="#" @click.prevent="halamanAktif = 'vfor'">T2.3 V-For</a>
          </div>

          <div class="item-tugas">
            <p>Klik untuk ke tugas T3.1-W1</p>
            <a href="#" @click.prevent="halamanAktif = 't31'">T3.1 Event Handling</a>
          </div>

          <div class="item-tugas">
            <p>Klik untuk ke tugas T3.2-W1</p>
            <a href="#" @click.prevent="halamanAktif = 't32'">T3.2 Class Dinamis</a>
          </div>

          <div class="item-tugas">
            <p>Klik untuk ke tugas T3.3-W1</p>
            <a href="#" @click.prevent="halamanAktif = 't33'">T3.3 Props Komponen</a>
          </div>

          <div class="item-tugas">
            <p>Klik untuk ke tugas T4-W1</p>
            <a href="#" @click.prevent="halamanAktif = 't4'">T4 Migrasi To-Do List</a>
          </div>
        </div>
      </div>

      <!-- Hal Lain -->
      <Tentang v-else-if="halamanAktif === 'tentang'" />
      <Kontak v-else-if="halamanAktif === 'kontak'"/>
      <T2_3_W1 v-else-if="halamanAktif === 'vfor'" />
      <T3_1_W1 v-else-if="halamanAktif === 't31'" />
      <T3_2_W1 v-else-if="halamanAktif === 't32'" />

      <div class="T3_3" v-else-if="halamanAktif === 't33'">
        <h2>T3.3 - Props Komponen</h2>
        <p>--- Putaran 1 ---</p>
        <KartuSiswa v-for="siswa in daftarSiswa" :key="siswa.id" :nama="siswa.nama" :nilai="siswa.nilai" />
        <br><br>
        <p>--- Putaran 2 ---</p>
        <InfoResto :namaResto="resto.nama" :menu="resto.menu"/>
        <br><br>
        <p>--- Putaran 3 ---</p>
        <KartuProduk :namaProduk="laptop.nama" :harga="laptop.harga" :fitur="laptop.fitur" />
      </div>

      <MainTodo v-else-if="halamanAktif === 't4'" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import komponen pendukung dari folder di luar Task.M3-W1.vue
import Tentang from './Tentang.vue'
import Kontak from './Kontak.vue'
import T2_3_W1 from './T2.3-W1.vue'
import T3_1_W1 from './T3.1-W1.vue'
import T3_2_W1 from './T3.2-W1.vue'
import KartuSiswa from './T3.3-W1/KartuSiswa.vue'
import InfoResto from './T3.3-W1/InfoResto.vue'
import KartuProduk from './T3.3-W1/KartuProduk.vue'
import MainTodo from './T4-W1/MainTodo.vue'

const halamanAktif = ref('beranda')
const jumlahKlik = ref(0)

function tambahKlik() {
  jumlahKlik.value++
}

const daftarNama = ref(['Jeki', 'Marko', 'Andi'])

const daftarSiswa = ref([
  { id: 1, nama: 'Ani', nilai: 80 },
  { id: 2, nama: 'Budi', nilai: 90 },
  { id: 3, nama: 'Cici', nilai: 75 }
])

const resto = ref({
  nama: 'Resto Mantap',
  menu: ['Nasi Goreng', 'Mie Ayam', 'Ayam Geprek']
})

const laptop = ref({
  nama: 'Laptop Gaming RX',
  harga: 15000000,
  fitur: ['RAM 16GB', 'SSD 512GB', 'RTX 3060']
})
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  font-family: sans-serif;
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
}

.nav-tugas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
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

.menu a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}

.konten {
  flex: 1;
  padding: 0;
  text-align: center;
}

.T3_3 { 
  margin-top: 2rem;
}

ul {
  display: inline-block;
  text-align: left;
  padding-left: 20px;
}

li {
  padding-left: 0;
}
</style>