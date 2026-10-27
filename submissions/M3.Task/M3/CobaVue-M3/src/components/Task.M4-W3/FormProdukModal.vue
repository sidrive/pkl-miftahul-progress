<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-box">
      <h3>Modal Form — Mode: {{ mode.toUpperCase() }}</h3>
      
      <div class="form-group">
        <label>Nama Produk:</label>
        <input v-model="namaProduk" type="text" placeholder="Masukkan nama..." />
        <small v-if="errorNama" class="error-msg">{{ errorNama }}</small>
      </div>

      <div class="actions">
        <button @click="simulasikanError">Tes Validasi (Error)</button>
        <button @click="$emit('close')">Tutup (Tanpa Reset)</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  show: Boolean,
  mode: String, // 'tambah' | 'edit'
  dataAwal: Object
})

defineEmits(['close'])

// State Internal Komponen
const namaProduk = ref(props.dataAwal?.nama || '')
const errorNama = ref('')

function simulasikanError() {
  errorNama.value = 'Nama produk wajib diisi dengan benar!'
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-box {
  background: var(--color-surface, #fff);
  color: var(--color-text, #212529);
  padding: 20px;
  border-radius: 8px;
  width: 320px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 12px 0;
  text-align: left;
}
input {
  padding: 8px;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 4px;
}
.error-msg {
  color: #ff4757;
  font-size: 12px;
}
.actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>