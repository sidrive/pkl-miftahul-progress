<template>
  <div>
    <button
      v-for="kategori in daftarKategori"
      :key="kategori"
      :style="{ fontWeight: kategoriAktif === kategori ? 'bold' : 'normal' }"
      @click="pilih(kategori)"
      type="button"
    >
      {{ kategori }}
    </button>
  </div>
</template>

<script setup>
// nerima data dari induk + Validasi (Props)
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

// siapin saluran buat teriak balik ke induk (Emit)
const emit = defineEmits(['ubahKategori'])

// fungsi pas tombol diklik, ngirim nama kategori sebagai payload
function pilih(kategori) {
  emit('ubahKategori', kategori)
}
</script>

<style scoped>
</style>