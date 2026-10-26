<template>
  <div class="container-task">
    <h2>Task T1.1 — Putaran 1: Input Teks & Validasi Wajib Diisi</h2>
    <form @submit.prevent="handleSubmitPutaran1">
    <DsInput
        label="Nama Barang"
        v-model="namaBarang"
        :error="errorNama"
        placeholder="Masukkan nama barang..."/>
    <button type="submit">Submit Putaran 1</button>
    </form>
    <br>
    <hr  />

    <form @submit.prevent="handleSubmitPutaran2">
      <h3>Putaran 2: Input Angka (Min: 0, Max: 10.000.000)</h3>
      <DsInput
        label="Harga Barang (Rp)"
        type="number"
        v-model.number="hargaBarang"
        :error="errorHarga"
        placeholder="Masukkan harga barang..."/>
      <button type="submit">Submit Putaran 2</button>
    </form>
    <br>
    <hr  />

    <form @submit.prevent="handleSubmitPutaran3">
      <h3>Putaran 3: Input Password (Min. 6 Karakter & Kombinasi Huruf-Angka)</h3>
      <DsInput
        label="Password Akses / PIN Otorisasi"
        type="password"
        v-model="passwordInput"
        :error="errorPassword"
        placeholder="Masukkan password/PIN..."/>
      <button type="submit">Submit Putaran 3</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DsInput from './DsInput.vue'

// State Putaran 1
const namaBarang = ref('')
const errorNama = ref('')

function handleSubmitPutaran1() {
  if (!namaBarang.value.trim()) {
    errorNama.value = 'Nama barang wajib diisi!'
  } else {
    errorNama.value = ''
    alert(`Berhasil Putaran 1! Nama: ${namaBarang.value}`)
  }
}

// State Putaran 2
const hargaBarang = ref(null)
const errorHarga = ref('')

function handleSubmitPutaran2() {
  // Pengecekan Validasi Putaran 2
  if (hargaBarang.value === null || hargaBarang.value === '') {
    errorHarga.value = 'Harga barang wajib diisi!'
  } else if (hargaBarang.value < 0) {
    errorHarga.value = 'Harga tidak boleh kurang dari 0!'
  } else if (hargaBarang.value > 10000000) {
    errorHarga.value = 'Harga tidak boleh melebihi Rp 10.000.000!'
  } else {
    errorHarga.value = ''
    alert(`Berhasil Putaran 2! Harga: Rp ${hargaBarang.value.toLocaleString('id-ID')}`)
  }
}

// State Putaran 3
const passwordInput = ref('')
const errorPassword = ref('')

function handleSubmitPutaran3() {
  const val = passwordInput.value

  // Regex sederhana untuk mengecek keberadaan huruf DAN angka
  const adaHuruf = /[a-zA-Z]/.test(val)
  const adaAngka = /[0-9]/.test(val)

  if (!val) {
    errorPassword.value = 'Password wajib diisi!'
  } else if (val.length < 6) {
    errorPassword.value = 'Password minimal 6 karakter!'
  } else if (!adaHuruf || !adaAngka) {
    errorPassword.value = 'Password harus kombinasi huruf dan angka!'
  } else {
    errorPassword.value = ''
    alert('Berhasil Putaran 3! Password valid.')
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