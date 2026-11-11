<template>
  <div v-if="show" class="modal-box">
    <h3>{{ mode === 'tambah' ? '➕ Tambah Pesanan Baru' : '✏️ Edit Pesanan' }}</h3>

    <!-- Nama Pemesan -->
    <div class="form-group">
      <label>Nama Pemesan: </label>
      <input type="text" placeholder="Contoh: Budi Santoso" />
    </div>

    <!-- Nomor Meja -->
    <div class="form-group">
      <label>Nomor Meja: </label>
      <input type="text" placeholder="Contoh: Meja 05" />
    </div>

    <!-- Status -->
    <div class="form-group">
      <label>Status Pesanan: </label>
      <select>
        <option value="diproses">Diproses</option>
        <option value="selesai">Selesai</option>
        <option value="dibatalkan">Dibatalkan</option>
      </select>
    </div>

    <!-- Tombol Aksi -->
    <div class="action-buttons">
      <button @click="$emit('close')">Batal</button>
      <button>
        {{ mode === 'tambah' ? 'Simpan Pesanan' : 'Update Pesanan' }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  mode: { type: String, default: 'tambah' },
  dataAwal: { type: Object, default: null }
})

const emit = defineEmits(['close', 'submit'])
</script>

<style scoped>

</style>