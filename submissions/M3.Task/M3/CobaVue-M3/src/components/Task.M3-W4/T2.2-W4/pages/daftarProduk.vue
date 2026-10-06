<!-- Putaran 1: Halaman Daftar Produk -->
<template>
  <div>
    <p>T2.2-W4</p>
    <router-link to="/artikel">(Putaran 2)</router-link> |
    <router-link to="/kategori">(Putaran 3)</router-link>
    <br><br>
    <h2>Daftar Produk (Putaran 1)</h2>
    <ul>
      <li v-for="item in daftarProduk" :key="item.id">
        <strong>{{ item.nama }}</strong> - 
        <!-- Link dinamis yang mengirim ID ke URL -->
        <router-link :to="`/produk/${item.id}`">Lihat Detail</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Putaran 1: Import data dummy produk
import { daftarProduk } from '../dataDummy/produkDummy'
</script>