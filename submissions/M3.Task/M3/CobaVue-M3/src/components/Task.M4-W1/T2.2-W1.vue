<template>
  <div>
    <h3>Task M4.W1.T2.2: Actions (Fungsi Pengubah State)</h3>

    <!-- Putaran 1 -->
    <div>
      <h4>Putaran 1: Action Sederhana (Ubah 1 Data)</h4>
      <p>Jumlah saat ini: <strong>{{ counterStore.jumlah }}</strong></p>
      <button @click="counterStore.tambah">+ Tambah Angka</button>
    </div>

    <hr />

    <!-- Putaran 2 -->
    <div>
      <h4>Putaran 2: Action Ubah Banyak State Sekaligus</h4>
      <p>Nama: <strong>{{ userStore.nama }}</strong></p>
      <p>Peran: <strong>{{ userStore.peran }}</strong></p>
      <button @click="userStore.gantiProfil('jaxk Ma Queue', 'Penjual Nasi')">
        Promosi Jabatan (Ubah Nama & Peran)
      </button>
    </div>

    <hr />

    <!-- Putaran 3 -->
    <div>
      <h4>Putaran 3: Action Async (Simulasi Loading Server)</h4>
      <p v-if="produkStore.sedangLoading" style="color: yellow;">
        ⏳ Lagi ambil data dari server... (Mohon toenggoe 2 detik)
      </p>
      <div v-else>
        <p>Daftar Produk Saat Ini:</p>
        <ul>
          <li v-for="item in produkStore.daftarProduk" :key="item.id">
            {{ item.nama }} - Rp{{ item.harga }}
          </li>
        </ul>
        <button @click="produkStore.muatDataDariServer()">
          🔄 Ambil Produk Baru dari Server
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue' // <--- Import onMounted
import { useCounterStore } from '../../stores/counterStore'
import { useUserStore } from '../../stores/userStore'
import { useProdukStore } from '../../stores/produkStore' // <--- Import produkStore

const counterStore = useCounterStore()
const userStore = useUserStore()
const produkStore = useProdukStore()

// Otomatis panggil action async begitu halaman/komponen ini dibuka
onMounted(() => {
  produkStore.muatDataDariServer()
})
</script>