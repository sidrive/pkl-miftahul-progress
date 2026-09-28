<template>
  <div class="isi">
    <h4>Putaran 1: Emit Object Utuh</h4>
    <p>Item: {{ item.nama }}</p>
    <button @click="kirimEdit">Kirim Edit Item</button>
    <hr>

    <h4>Putaran 2: Emit Data Form Input</h4>
    <form @submit.prevent="kirimForm">
      <input type="text" v-model="namaBaru" placeholder="Ketik nama baru..." />
      <button type="submit">Submit Form</button>
    </form>    
    <hr>

    <h4>Putaran 3: Multi-Event</h4>
    <p>Pilih tombol untuk transisi aksi:</p>
    <button @click="kirimSimpan">Simpan Transaksi</button><br>
    <button @click="kirimBatal">Batalkan Transaksi</button>
  </div>
</template>

<script setup>
// 1. Tambahkan 'ref' di dalam import
import { reactive, ref } from 'vue'

// Data lokal di anak
const item = reactive({
  id: 101,
  nama: 'Kopi Susu'
})

// 2. Tambahkan 'submitForm' ke dalam array defineEmits
const emit = defineEmits(['edit', 'submitForm', 'simpan', 'batal'])

// Putaran 1
function kirimEdit() {
  emit('edit', {
    id: item.id,
    teksBaru: 'Kopi Susu Gula Aren (Updated)'
  })
}

// Putaran 2
const namaBaru = ref('')

function kirimForm() {
  // Kirim data isi inputan sebagai payload ke induk
  emit('submitForm', {
    sumber: 'Form Putaran 2',
    inputNama: namaBaru.value
  })

  // Kosongkan kembali kolom input setelah dikirim
  namaBaru.value = ''
}

// Putaran 3
function kirimSimpan() {
    emit('simpan', {
        status: 'BERHASIL',
        pesan: 'Transaksi di simpan bos q'
    })
}

function kirimBatal() {
    emit('batal')
}
</script>

<style scoped>
.isi {
    display: block;
    margin-bottom: 15px;
    padding: 5px;
}
</style>