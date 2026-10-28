<template>
  <!-- Modal Overlay (Background gelap transparan) -->
  <div v-if="show" class="modal-overlay">
    <div class="modal-box">
      <!-- Judul Dinamis berdasarkan Mode (Tambah / Edit) -->
      <h3>{{ mode === 'tambah' ? '➕ Tambah Pesanan Baru' : '✏️ Edit Pesanan' }}</h3>

      <!-- Field 1: Input Nama Pemesan -->
      <DsInput
        v-model="form.namaPemesan"
        label="Nama Pemesan"
        placeholder="Contoh: Budi Santoso"
        :error="errors.namaPemesan"/>

      <!-- Field 2: Input Nomor Meja -->
      <DsInput
        v-model="form.noMeja"
        label="Nomor Meja"
        placeholder="Contoh: Meja 05"
        :error="errors.noMeja"/>

      <!-- Field 3: Select Status Pesanan -->
      <DsSelect
        v-model="form.status"
        label="Status Pesanan"
        :options="opsiStatus"
        :error="errors.status"/>

      <!-- Tombol Aksi (Batal & Simpan) -->
      <div class="modal-actions">
        <DsButton variant="secondary" @click="$emit('close')">
          Batal
        </DsButton>
        <DsButton variant="primary" @click="handleSimpan">
          {{ mode === 'tambah' ? 'Simpan Pesanan' : 'Update Pesanan' }}
        </DsButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DsInput from '../DsInput.vue'
import DsSelect from '../DsSelect.vue'
import DsButton from '../DsButton.vue'

const props = defineProps({
  show: Boolean,
  mode: {
    type: String,
    default: 'tambah'
  },
  dataAwal: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'submit'])

// Opsi pilihan untuk DsSelect
const opsiStatus = [
  { value: 'diproses', label: 'Diproses' },
  { value: 'selesai', label: 'Selesai' },
  { value: 'dibatalkan', label: 'Dibatalkan' }
]

// State Form Internal
const form = ref({
  namaPemesan: props.dataAwal?.namaPemesan || '',
  noMeja: props.dataAwal?.noMeja || '',
  status: props.dataAwal?.status || 'diproses'
})

// State Error Validasi
const errors = ref({
  namaPemesan: '',
  noMeja: '',
  status: ''
})

function handleSimpan() {
  // Reset error dulu
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
.modal-overlay {
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-box {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text, #212529);
  padding: 24px;
  border-radius: 10px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border, #ccc);
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--color-text, #212529);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}
</style>