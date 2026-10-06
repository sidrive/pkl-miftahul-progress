<!-- Putaran 3: Daftar Kategori & Produk Multi-Param -->
<template>
  <div>
    <p>T2.2-W4</p>
    <router-link to="/produk">(Putaran 1)</router-link> |
    <router-link to="/artikel">(Putaran 2)</router-link> <br><br>
    <h2>Kategori & Produk (Putaran 3 Multi-Param)</h2>
    <div v-for="kat in daftarKategori" :key="kat.id" style="margin-bottom: 20px;">
      <h3>Kategori: {{ kat.nama }} (ID: {{ kat.id }})</h3>
      <ul>
        <li v-for="prod in kat.produk" :key="prod.id">
          {{ prod.nama }} - 
          <!-- Link dengan 2 parameter dinamis sekaligus: kategoriId dan produkId -->
          <router-link :to="`/kategori/${kat.id}/produk/${prod.id}`">
            Lihat Detail Multi-Param
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { daftarKategori } from '../dataDummy/kategoriDummy'
</script>