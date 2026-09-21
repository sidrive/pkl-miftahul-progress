<template>
  <p>Buka devtools / F12 untuk lihat hasil</p>

  <div class="T1-2">
    <h2>T1.2 - Eksperimen Destructuring reactive()</h2>

    <p>Nama dari profil: {{ profil.nama }}</p>
    <p>Nama hasil destructure: {{ nama }}</p>
    <p>Nama dari toRefs: {{ namaReactive }}</p>

    <hr>

    <h3>Percobaan 1</h3>
    <p>Ubah nama lewat hasil destructure</p>

    <button @click="ubahNamaDestructure">Ubah Nama via Destructure</button>
    <br><br>

    <h3>Percobaan 2</h3>
    <p>Ubah nama langsung lewat profil.nama</p>

    <button @click="ubahNamaLangsung">Ubah Nama Langsung</button>
    <br><br>

    <h3>Percobaan 3</h3>
    <p>Ubah nama lewat toRefs()</p>

    <button @click="ubahNamaReactive">Ubah Nama via toRefs</button>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'

const profil = reactive({
  nama: 'Gazi',
  umur: 18,
  status: 'Siswa'
})

// Destructure biasa
let { nama } = profil

// Destructure menggunakan toRefs()
// supaya property tetap terhubung dengan reactive object
const { nama: namaReactive } = toRefs(profil)

function ubahNamaDestructure() {
  nama = 'Ani'

  console.log('Nama hasil destructure:', nama)
  console.log('Nama di profil:', profil.nama)
}

function ubahNamaLangsung() {
  profil.nama = 'Budi'

  console.log('Nama hasil destructure:', nama)
  console.log('Nama di profil:', profil.nama)
}

function ubahNamaReactive() {
  namaReactive.value = 'Cici'

  console.log('Nama dari toRefs:', namaReactive.value)
  console.log('Nama di profil:', profil.nama)
}
</script>

<style scoped>
.T1-2 {
  padding: 20px;
}
</style>