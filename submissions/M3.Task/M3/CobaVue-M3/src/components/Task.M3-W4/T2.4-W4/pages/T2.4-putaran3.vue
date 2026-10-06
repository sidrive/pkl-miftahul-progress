<template>
  <div>
    <h3>Putaran 3: Gabungan router.push + Query Params</h3>
    <p>Simulasi pencarian langsung pindah halaman</p>
    <div style="margin-bottom: 15px">
      <input v-model="kataKunciInput" type="text" placeholder="Ketik filter (misal: hoodie)..." />
      <button @click="prosesKombinasi">Proses & Tempel Query</button>
    </div>

    <!-- Informasi URL -->
    <p>
      <strong>Query Params terdeteksi di URL:</strong>
      <span style="color: green">{{
        route.query.keyword || "(belum ada query)"
      }}</span>
    </p>
    <hr />

    <!-- Hasil Filter -->
    <h3>Hasil Filter Barang:</h3>
    <ul>
      <li v-for="item in barangTersaring" :key="item.id">
        {{ item.nama }} — Rp {{ item.harga.toLocaleString("id-ID") }}
      </li>
    </ul>
    <p v-if="barangTersaring.length === 0" style="color: red">
      Barang gak ditemukan!
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// Data dummy lokal
const daftarBarang = [
  { id: 1, nama: "Sepatu Sneaker", harga: 350000 },
  { id: 2, nama: "Sepatu Lari", harga: 500000 },
  { id: 3, nama: "Tas Ransel", harga: 200000 },
  { id: 4, nama: "Jaket Hoodie", harga: 250000 },
];

const kataKunciInput = ref(route.query.keyword || "");

// Kombinasi: Pindah path /t24/p3 SAMBIL nempel query ?keyword=... dalam 1 pemanggilan!
function prosesKombinasi() {
  router.push({
    path: "/t24/p3",
    query: { keyword: kataKunciInput.value },
  });
}

// Menyaring data
const barangTersaring = computed(() => {
  const keywordURL = route.query.keyword;
  if (!keywordURL) return daftarBarang;

  return daftarBarang.filter((item) =>
    item.nama.toLowerCase().includes(keywordURL.toLowerCase()),
  );
});
</script>
