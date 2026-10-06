<template>
  <div>
    <h2>Detail nya bos q</h2>
    <div v-if="artikel">
      <p><strong>ID Artikel:</strong> {{ route.params.id }}</p>
      <p><strong>Judul:</strong> {{ artikel.judul }}</p>
      <p><strong>Penulis:</strong> {{ artikel.penulis }}</p>
      <p><strong>Isi:</strong> {{ artikel.isi }}</p>
    </div>
    <div v-else>
      <p>Artikel tidak ditemukan!</p>
    </div>
    <br />
    <router-link to="/artikel">← Kembali ke Daftar Artikel</router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { daftarArtikel } from "../dataDummy/artikelDummy";

// Putaran 2: Mengambil parameter ID artikel dari URL
const route = useRoute();

const artikel = computed(() => {
  return daftarArtikel.find((item) => item.id === route.params.id);
});
</script>
