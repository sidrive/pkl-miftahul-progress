<template>
  <div>
    <h2>T2.4 — Putaran 2: Query Params (Fitur Filter/Cari)</h2>

    <div style="margin-bottom: 15px;">
      <input v-model="kataKunci" type="text" placeholder="Ketik nama barang (misal: sepatu)..." />
      <button @click="cariProduk">Cari</button>
      <button @click="resetCari">Reset</button>
    </div>

    <!-- Kata Kunci yang Dibaca Langsung dari URL -->
    <p>
      <strong>Kata kunci di URL saat ini:</strong> 
      <span style="color: blue;">{{ route.query.keyword || '(tidak ada filter)' }}</span>
    </p>

    <hr />

    <!-- Hasil Daftar Barang -->
    <h3>Daftar Barang:</h3>
    <ul>
      <li v-for="item in barangTersaring" :key="item.id">
        {{ item.nama }} — Rp {{ item.harga.toLocaleString('id-ID') }}
      </li>
    </ul>
    <p v-if="barangTersaring.length === 0" style="color: red;">
      Barang tidak ditemukan!
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// data dummy lokal khusus untuk T2.4 Putaran 2 (tanpa import luar)
const daftarBarang = [
  { id: 1, nama: 'Sepatu Sneaker', harga: 350000 },
  { id: 2, nama: 'Sepatu Lari', harga: 500000 },
  { id: 3, nama: 'Tas Ransel', harga: 200000 },
  { id: 4, nama: 'Jaket Hoodie', harga: 250000 }
]

// Input teks
const kataKunci = ref(route.query.keyword || '')

// tombol Cari -> nempelin query ke URL (?keyword=...)
function cariProduk() {
  router.push({
    path: '/t24/p2',
    query: { keyword: kataKunci.value }
  })
}

// tombol Reset -> hapus query dari URL
function resetCari() {
  kataKunci.value = ''
  router.push('/t24/p2')
}

// nyaring barang berdasarkan kata kunci dari URL
const barangTersaring = computed(() => {
  const keywordURL = route.query.keyword
  if (!keywordURL) return daftarBarang

  return daftarBarang.filter(item => 
    item.nama.toLowerCase().includes(keywordURL.toLowerCase())
  )
})
</script>