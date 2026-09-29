<template>
  <div>
    <p>Buka DevTools untuk melihat progress</p>
    <h3>Putaran 1 — Auto Focus dengan Template Ref</h3>

    <!-- ref di sini dipakai buat menunjuk langsung ke elemen input -->
    <input ref="elemenInput" placeholder="Ketik sesuatu..." /><br /><hr />

    <h3>Putaran 2 — Simulasi Fetch Data</h3>
    <!-- kalau dataMasuk masih kosong, tampilkan loading -->
    <p v-if="!dataMasuk">Sedang mengambil data dari server...</p>

    <!-- kalau dataMasuk sudah ada, tampilkan datanya -->
    <p v-else>Data dari server: <strong>{{ dataMasuk }}</strong></p><br /><hr />

    <h3>Putaran 3 — Loading dan Data Reactive</h3>
    <!-- selama isLoading masih true, tampilkan loading -->
    <div v-if="isLoading">
      <p>Loading... Memuat daftar produk...</p>
    </div>

    <!-- kalau isLoading sudah false, tampilkan daftar produk -->
    <div v-else>
      <p>Daftar Produk:</p>
      <ul>
        <!-- tampilkan semua isi daftarProduk -->
        <li v-for="(item, index) in daftarProduk" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Putaran 1
// ref(null) di sini dipakai buat nampung elemen HTML. awalnya kosong karna input belum terpasang ke halaman.
const elemenInput = ref(null)

// onMounted() jalan setelah komponen sudah dipasang ke halaman.
onMounted(() => {
  console.log('Komponen sudah tampil!')

  // setelah mounted, elemen input udah ada dan bisa diakses.
  // focus() buat cursor langsung masuk ke input.
  if (elemenInput.value) {
    elemenInput.value.focus()
  }
})

// Putaran 2
// sata awalnya kosong.
const dataMasuk = ref(null)

// setelah komponen mounted, kita simulasi proses mengambil data.
onMounted(() => {
  console.log('Mulai mengambil data...')

  // anggap aja ini proses menunggu jawaban dari server.
  setTimeout(() => {
    dataMasuk.value = 'User ID: 102938 (Rudi)'

    console.log('[Putaran 2] Data berhasil didapatkan!')
  }, 2000)
})

// Putaran 3
// awalnya true karna data masih dalam proses dimuat.
const isLoading = ref(true)

// awalnya array masih kosong.
const daftarProduk = ref([])

// habis komponen mounted, kita simulasi mengambil daftar produk.
onMounted(() => {
  setTimeout(() => {
    // data produk berhasil didapat dan dimasukkan ke state.
    daftarProduk.value = [
      'Kopi Hitam',
      'Roti Bakar',
      'Es Teh Manis'
    ]

    // data udah masuk, jadi loading selesai.
    isLoading.value = false

    console.log('[Putaran 3] Data produk berhasil dimuat!')
  }, 3000)
})
</script>

<style scoped>
ul {
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  margin: 0 auto;
}

li {
  margin-bottom: 4px;
}
</style>