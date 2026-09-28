<template>
  <div class="T1">
    <!-- putaran 1 -->
    <h2>Profil Siswa</h2>
    <p>Nama: {{ profil.nama }}</p>
    <p>Umur: {{ profil.umur }} tahun</p>
    <p>Status: {{ profil.status }}</p>

    <button @click="ulangTahun">Tambah Umur</button>
    <br><br>

    <!-- Putaran 2 -->

    <h2>Data Produk</h2>
    <p>Nama: {{ produk.nama }}</p>
    <p>Harga: Rp{{ produk.harga }}</p>
    <p>Stok: {{ produk.stok }}</p>

    <button @click="tambahStok">Tambah Stok</button>
    <br><br>

    <!-- Putaran 3 -->
    <h2>Daftar Produk</h2>
    <button @click="tambahProduk">Tambah Produk</button>

    <div v-for="produk in daftarProduk" :key="produk.id">
        <p> {{ produk.nama }} — Stok: {{ produk.stok }} </p>

        <button @click="tambahStokProduk(produk)"> Tambah Stok </button>

        <button @click="hapusProduk(produk.id)"> Hapus </button>
    </div>
  </div>
</template>

<script setup>
// Putaran 1
import { reactive } from 'vue'

const profil = reactive({
  nama: 'Gazi',
  umur: 18,
  status: 'Siswa'
})

function ulangTahun() {
    profil.umur++
}

// Putaran 2
const produk = reactive({
  nama: 'Kopi Susu',
  harga: 15000,
  stok: 10
})

function tambahStok() {
  produk.stok++
}

// Putaran 3
const daftarProduk = reactive([
  {
    id: 1,
    nama: 'Kopi Susu',
    stok: 10
  },
  {
    id: 2,
    nama: 'Roti Bakar',
    stok: 5
  }
])

function tambahProduk() {
  daftarProduk.push({
    id: Date.now(),
    nama: 'Teh Manis',
    stok: 8
  })
}

function tambahStokProduk(produk) {
  produk.stok++
}

function hapusProduk(id) {
  const index = daftarProduk.findIndex(produk => produk.id === id)

  if (index !== -1) {
    daftarProduk.splice(index, 1)
  }
}
</script>

<style scoped>
.T1 {
    align-items: center;
    justify-content: center;
}
</style>