<template>
  <div class="layout">
    <!-- 1. Navbar -->
    <nav class="navbar">
      <div class="logo">M3-VueJs</div>
      <div class="menu">
      <!-- @click.prevent="halamanAktif = 'beranda'" ini lagi buat pas diklik, 
      nilai halamanAktif berubah jadi "beranda" -->
        <a href="#" @click.prevent="halamanAktif = 'beranda'">Beranda</a>
        <a href="#" @click.prevent="halamanAktif = 'tentang'">Tentang</a>
        <a href="#" @click.prevent="halamanAktif = 'kontak'">Kontak</a>
      </div>
    </nav>

    <main class="konten">
      <!-- Tampil pas halamanAktif 'beranda' -->
      <!-- v-if="halamanAktif === 'beranda'" ini buat ngecek nilai halamanAktif,
      kalo nilainya 'beranda', maka konten beranda ditampilkan. -->
      <div v-if="halamanAktif === 'beranda'">
        <h1>Selamat Datang di Vue 3!</h1>
        <p>Ini adalah halaman web sederhana pertama yang dibuat pakai Vue + Vite.</p>

        <br>
        <!-- Tambah tombol klik dan jumlah klik (Putaran kedua) -->
        <button @click="tambahKlik">Klik saya</button>
        <p>Sudah diklik {{ jumlahKlik }} kali</p>

        <br>
        <!-- Putaran ke tiga -->
        <p>Daftar nama:</p>
        <ul>
          <li v-for="nama in daftarNama" :key="nama">
            {{ nama }}
          </li>
        </ul>

      <p>Klik untuk ke tugasT2.3-W1</p>
      <a href="#" @click.prevent="halamanAktif = 'vfor'">T2.3 V-For</a>
      <br>

      <br>
      <p>Klik untuk ke tugas T3.1-W1</p>
      <a href="#" @click.prevent="halamanAktif = 't31'">T3.1 Event Handling</a>

      <br><br>
      <p>Klik untuk ke tugas T3.2-W1</p>
      <a href="#" @click.prevent="halamanAktif = 't32'">T3.2 Class Dinamis</a>

      <br><br>
      <p>Klik untuk ke tugas T3.3-W1</p>
      <a href="#" @click.prevent="halamanAktif = 't33'">T3.3 Props Komponen</a>
      </div>

      <!-- Tampil pas halamanAktif 'tentang' -->
      <Tentang v-else-if="halamanAktif === 'tentang'" /> <!-- // Tentang v-else-if="halamanAktif === 'tentang'" 
      ini buat ngecek nilai halamanAktif, kalo nilainya 'tentang', maka komponen Tentang ditampilkan. -->

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
import Kontak from './components/Kontak.vue'
import T2_3_W1 from './components/T2.3-W1.vue'
import T3_1_W1 from './components/T3.1-W1.vue'
import T3_2_W1 from './components/T3.2-W1.vue'
import KartuSiswa from './components/T3.3-W1/KartuSiswa.vue'
import InfoResto from './components/T3.3-W1/InfoResto.vue'
import KartuProduk from './components/T3.3-W1/KartuProduk.vue'

// Putaran ke-2 bikin variabel reaktif halamanAktif, jumlahKlik, dan daftarNama
const halamanAktif = ref('beranda')
const jumlahKlik = ref(0)

function tambahKlik() {
  jumlahKlik.value++
}

//Putaran ke-3 bikin variabel reaktif daftarNama
const daftarNama = ref(['Jeki', 'Marko', 'Andi'])

// =================== T3.3-W1 ======================
// T3.3-W1 - Putaran 1
const daftarSiswa = ref([
  { id: 1, nama: 'Ani', nilai: 80 },
  { id: 2, nama: 'Budi', nilai: 90 },
  { id: 3, nama: 'Cici', nilai: 75 }
])
//T3.3-W1 - Putaran 2
const resto = ref({
  nama: 'Resto Mantap',
  menu: ['Nasi Goreng', 'Mie Ayam', 'Ayam Geprek']
})
// T3.3-W1 - Putaran 3
const laptop = ref({
  nama: 'Laptop Gaming RX',
  harga: 15000000,
  fitur: ['RAM 16GB', 'SSD 512GB', 'RTX 3060']
})
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
  padding: 0;
  text-align: center;
}

/* untuk jarak di T3.3 */
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

/* Style Footer */
.footer {
  background-color: #222;
  color: #aaa;
  text-align: center;
  padding: 1rem;
}
</style>