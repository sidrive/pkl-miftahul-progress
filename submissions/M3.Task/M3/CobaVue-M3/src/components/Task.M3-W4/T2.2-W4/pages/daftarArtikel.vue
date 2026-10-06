<template>
  <div>
    <p>T2.2-W4</p>
    <router-link to="/produk">(Putaran 1)</router-link> |
    <router-link to="/kategori">(Putaran 3)</router-link><br><br>
    <p>putaran 2 boq qq T2.2</p>
    <h2>Daftar Artikel (Putaran 2)</h2>
    <ul>
      <li v-for="item in daftarArtikel" :key="item.id">
        <strong>{{ item.judul }}</strong> oleh {{ item.penulis }} -
        <router-link :to="`/artikel/${item.id}`">Baca Artikel</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { daftarArtikel } from '../dataDummy/artikelDummy'
</script>
