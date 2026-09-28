<template>
  <div class="box-simpel">
    <h3>Task T1.2 — Computed vs Method biasa</h3>
    <p>buka Devtools untuk melihat hasil nya</p>
    <br>

    <!-- State Counter Terpisah (Pemicu Re-render) -->
    <div>
      <p>Counter Terpisah: <strong>{{ count }}</strong></p>
      <button type="button" @click="count++">Tambah Counter (Re-render Komponen)</button>
    </div>

    <br />
    <hr />

    <!-- Pemanggilan Method Biasa vs Computed -->
    <div>
      <p>Total (lewat Method biasa): <strong>Rp {{ totalBelanjaMethod() }}</strong></p>
      <p>Total (lewat Computed): <strong>Rp {{ totalBelanjaComputed }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const daftarBelanja = ref([
  { id: 1, nama: 'Kopi Hitam', harga: 5000, jumlah: 2 },
  { id: 2, nama: 'Roti Bakar', harga: 15000, jumlah: 3 }
])

// Function / Method biasa (dipanggil dengan tanda kurung () di template)
function totalBelanjaMethod() {
  console.log('🔴 [METHOD] totalBelanjaMethod() DIPANGGIL!')
  return daftarBelanja.value.reduce((total, item) => total + (item.harga * item.jumlah), 0)
}

// Computed Property (dipanggil TANPA tanda kurung di template)
const totalBelanjaComputed = computed(() => {
  console.log('🟢 [COMPUTED] totalBelanjaComputed DIPANGGIL!')
  return daftarBelanja.value.reduce((total, item) => total + (item.harga * item.jumlah), 0)
})
</script>

<style scoped>
.box-simpel {
  text-align: center;
  color: #fff;
}

.box-simpel button {
  background-color: #00ffb3;
  color: #1a1a1a;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
</style>