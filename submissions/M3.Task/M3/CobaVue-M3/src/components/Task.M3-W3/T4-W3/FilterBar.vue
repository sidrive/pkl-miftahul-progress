<template>
  <div class="filter-container">
    <button
      v-for="kategori in daftarKategori"
      :key="kategori"
      :class="['btn-filter', { aktif: kategoriAktif === kategori }]"
      @click="pilih(kategori)"
      type="button"
    >
      {{ kategori }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  daftarKategori: {
    type: Array,
    required: true
  },
  kategoriAktif: {
    type: String,
    required: true,
    default: 'Semua'
  }
})

const emit = defineEmits(['ubahKategori'])

function pilih(kategori) {
  emit('ubahKategori', kategori)
}

function resetFilter() {
  emit('ubahKategori', 'Semua')
}
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin: 10px 10;
}

.btn-filter {
  background-color: #2a2d3e;
  color: #a0aec0;
  border: 1px solid #4a5568;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-filter:hover {
  border-color: #00ffb3;
  color: #ffffff;
}

.btn-filter.aktif {
  background-color: #00ffb3;
  color: #1a1a1a;
  border-color: #00ffb3;
  font-weight: bold;
}
</style>