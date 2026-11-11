<template>
  <div v-if="show" class="modal-box">
    <h3>{{ mode === 'tambah' ? '➕ Tambah Pesanan Baru' : '✏️ Edit Pesanan' }}</h3>

    <!-- Nama Pemesan -->
    <div class="form-group">
      <label>Nama Pemesan: </label>
      <input v-model="form.namaPemesan" type="text" placeholder="Contoh: Budi Santoso" />
      <span v-if="errors.namaPemesan" class="error-msg"> {{ errors.namaPemesan }}</span>
    </div>

    <!-- Nomor Meja -->
    <div class="form-group">
      <label>Nomor Meja: </label>
      <input v-model="form.noMeja" type="text" placeholder="Contoh: Meja 05" />
      <span v-if="errors.noMeja" class="error-msg"> {{ errors.noMeja }}</span>
    </div>

    <!-- Status -->
    <div class="form-group">
      <label>Status Pesanan: </label>
      <select v-model="form.status">
        <option value="diproses">Diproses</option>
        <option value="selesai">Selesai</option>
        <option value="dibatalkan">Dibatalkan</option>
      </select>
    </div>

    <!-- Tombol Aksi -->
    <div class="action-buttons">
      <button @click="$emit('close')">Batal</button>
      <button @click="handleSimpan">
        {{ mode === 'tambah' ? 'Simpan Pesanan' : 'Update Pesanan' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  show: Boolean,
  mode: { type: String, default: 'tambah' },
  dataAwal: { type: Object, default: null }
})

const emit = defineEmits(['close', 'submit'])

const form = ref({
  namaPemesan: props.dataAwal?.namaPemesan || '',
  noMeja: props.dataAwal?.noMeja || '',
  status: props.dataAwal?.status || 'diproses'
})

const errors = ref({
  namaPemesan: '',
  noMeja: ''
})

function handleSimpan() {
  errors.value.namaPemesan = ''
  errors.value.noMeja = ''

  let valid = true

  if (!form.value.namaPemesan.trim()) {
    errors.value.namaPemesan = 'Nama pemesan wajib diisi!'
    valid = false
  }

  if (!form.value.noMeja.trim()) {
    errors.value.noMeja = 'Nomor meja wajib diisi!'
    valid = false
  }

  if (valid) {
    emit('submit', { ...form.value })
  }
}
</script>

<style scoped>
.modal-box {
  border: 2px solid black;
  padding: 15px;
  margin-top: 15px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 12px;
}

.error-msg {
  color: red;
}

.action-buttons {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
</style>