<template>
  <div class="box-simpel">
    <h2>T1.1 Computed() Lanjutan</h2><br>
    <h3>Putaran 2 — Computed Read-Only (Total Belanja)</h3>

    <ul class="list-tengah">
      <li v-for="item in daftarBelanja" :key="item.id">
        {{ item.nama }} - Rp {{ item.harga }} ({{ item.jumlah }} item)
      </li>
    </ul>
    <p><strong>Total Belanjaan:</strong> Rp {{ totalBelanja }}</p>

    <br />
    <hr />
    <br />

    <h3>Putaran 3 — Writable Computed (Nama Lengkap)</h3>
    
    <div class="form-tengah">
      <p>
        Nama Depan: 
        <input v-model="namaDepan" placeholder="Nama Depan" />
      </p>

      <p>
        Nama Belakang: 
        <input v-model="namaBelakang" placeholder="Nama Belakang" />
      </p>

      <p>
        Nama Lengkap (Writable Computed): 
        <input v-model="namaLengkap" placeholder="Ubah nama lengkap" />
      </p>

      <p>
        Data State Asli: <strong>{{ namaDepan }}</strong> | <strong>{{ namaBelakang }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Putaran 2
const daftarBelanja = ref([
  { id: 1, nama: 'Kopi Hitam', harga: 5000, jumlah: 2 },
  { id: 2, nama: 'Roti Bakar', harga: 15000, jumlah: 3 },
  { id: 3, nama: 'Air Mineral', harga: 2000, jumlah: 3 }
])

const totalBelanja = computed(() => {
  return daftarBelanja.value.reduce((total, item) => {
    return total + (item.harga * item.jumlah)
  }, 0)
})

// Putaran 3 (Writable Computed)
const namaDepan = ref('Budy')
const namaBelakang = ref('Galax si')

const namaLengkap = computed({
  get() {
    return `${namaDepan.value} ${namaBelakang.value}`.trim()
  },
  set(nilaiBaru) {
    const bagianNama = nilaiBaru.split(' ')
    namaDepan.value = bagianNama[0] || ''
    namaBelakang.value = bagianNama.slice(1).join(' ')
  }
})
</script>

<style scoped>
.box-simpel {
  text-align: center;
  color: #fff;
  padding: 10px;
}

.list-tengah {
  display: inline-block;
  text-align: left;
  margin: 10px auto;
}

.form-tengah input {
  background-color: #222;
  color: #fff;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>