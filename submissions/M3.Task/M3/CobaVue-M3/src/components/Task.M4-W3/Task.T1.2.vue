<template>
  <div class="container-task">
    <h2>Task T1.2 — Dropdown Reusable</h2>

    <form @submit.prevent="handleSubmitPutaran1" class="mb-md">
      <h3>Putaran 1: Dropdown Kategori Produk</h3>
      <DsSelect
        label="Pilih Kategori Produk"
        v-model="kategoriTerpilih"
        :options="opsiKategori"/>

      <button type="submit">Submit Putaran 1</button>
    </form>

    <hr class="pembatas" />

    <form @submit.prevent="handleSubmitPutaran2">
      <h3>Putaran 2: Dropdown Metode Pembayaran</h3>
      <DsSelect
        label="Pilih Metode Pembayaran"
        v-model="metodePembayaran"
        :options="opsiPembayaran"/>

      <button type="submit">Submit Putaran 2</button>
    </form>

    <hr class="pembatas" />
    
    <form @submit.prevent="handleSubmitPutaran3">
      <h3>Putaran 3: Placeholder Invalid & Validasi Wajib Pilih</h3>
      <DsSelect
        label="Pilih Role Pengguna"
        v-model="roleTerpilih"
        :options="opsiRole"
        :error="errorRole"/>

      <button type="submit">Submit Putaran 3</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DsSelect from './DsSelect.vue'

// State Putaran 1
const opsiKategori = ref([
  { value: 'makanan', label: 'Makanan' },
  { value: 'minuman', label: 'Minuman' },
  { value: 'elektronik', label: 'Elektronik' }
])
const kategoriTerpilih = ref('makanan')

function handleSubmitPutaran1() {
  alert(`Berhasil Putaran 1! Kategori: ${kategoriTerpilih.value}`)
}

// State Putaran 2
const opsiPembayaran = ref([
  { value: 'tunai', label: 'Tunai / Cash' },
  { value: 'qris', label: 'QRIS / E-Wallet' },
  { value: 'debit', label: 'Kartu Debit / Kredit' }
])
const metodePembayaran = ref('qris')

function handleSubmitPutaran2() {
  alert(`Berhasil Putaran 2! Metode Pembayaran: ${metodePembayaran.value}`)
}

// State Putaran 3
const opsiRole = ref([
  { value: '', label: '-- Pilih salah satu role --', disabled: true },
  { value: 'admin', label: 'Administrator' },
  { value: 'kasir', label: 'Kasir Utama' },
  { value: 'manajer', label: 'Manajer Toko' }
])
// Default nilai awal adalah string kosong (placeholder)
const roleTerpilih = ref('')
const errorRole = ref('')

function handleSubmitPutaran3() {
  // Pengecekan Validasi Putaran 3
  if (!roleTerpilih.value) {
    errorRole.value = 'Anda wajib memilih salah satu role!'
  } else {
    errorRole.value = ''
    alert(`Berhasil Putaran 3! Role dipilih: ${roleTerpilih.value}`)
  }
}
</script>

<style scoped>
.container-task {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  color: var(--color-text, #212529);
}

h2, h3 {
  color: var(--color-text, #212529);
}

.mb-md {
  margin-bottom: 24px;
}

.pembatas {
  margin: 24px 0;
  border: 0;
  border-top: 1px solid var(--color-border, #ccc);
}

button {
  padding: 8px 16px;
  cursor: pointer;
  background-color: var(--color-navy-500, #007bff);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
}
</style>