<template>
  <div class="box-simpel">
    <h3>Task T2.2 — Watch pada Reactive & Opsi Deep</h3>
    <p>buka devtools untuk melihat perbedaan</p>

    <!-- Eksperimen 1: Reactive Object -->
    <div>
      <h4>1. Reactive Object</h4>
      <p>Nama Profil: <strong>{{ profil.nama }}</strong> | Umur: <strong>{{ profil.umur }}</strong></p>
      <button type="button" @click="profil.nama = 'Rudi Jaxk'">Ubah Property Nama</button>
      <button type="button" @click="profil.umur++">Tambah Umur</button>
    </div>

    <br />
    <hr />
    <br />

    <!-- Eksperimen 2: Ref Array of Objects -->
    <div class="eks2">
      <h4>2. Ref Array of Objects</h4>
      <ul>
        <li v-for="(item, i) in daftarHobi" :key="i">
          {{ item.nama }} - Status: <strong>{{ item.aktif ? 'Aktif' : 'Non-aktif' }}</strong>
          <button type="button" @click="item.aktif = !item.aktif">Toggle Status</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

// --- EKSPERIMEN 1: Reactive Object ---
const profil = reactive({
  nama: 'Rudi',
  umur: 17
})

// Uji Coba: untuk lihat hasil nya coba hapus komentar di bagian { deep: true }
// baru kalau udah liat di web dan buka devtools
watch(
  () => profil,
  () => {
    console.log('🔴 [WATCH REACTIVE] Callback terpicu!')
  }, 
   { deep: true }
)

// --- EKSPERIMEN 2: Ref Array of Objects ---
const daftarHobi = ref([
  { nama: 'Koding', aktif: true },
  { nama: 'Futsal', aktif: false }
])

// Watch Ref Array
watch(
  daftarHobi,
  () => {
    console.log('🟢 [WATCH REF ARRAY] Callback terpicu!')
  }
//  , { deep: true }
)
</script>

<style scoped>
.box-simpel {
  text-align: center;
  color: #fff;
  padding: 10px;
}

.box-simpel ul {
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  margin: 10px 0;
}

.box-simpel li {
  margin-bottom: 8px;
}

.box-simpel button {
  background-color: #00ffb3;
  color: #1a1a1a;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 8px;
}
</style>