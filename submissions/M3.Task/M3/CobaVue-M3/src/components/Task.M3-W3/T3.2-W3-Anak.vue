<template>
  <div class="box-anak">
    <h4>Anak Komponen (Sedang Tampil)</h4>
    <p>Pesan: {{ pesan }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const pesan = ref('Komponen anak aktif!')

onMounted(() => {
  console.log('[PUTARAN 3 - ANAK] Component Anak DIPASANG (Mounted)!')
})

onUnmounted(() => {
  console.log('[PUTARAN 3 - ANAK] Component Anak DIHAPUS dari DOM (Unmounted)!')
})
</script>

<style scoped>
.box-anak {
  border: 1px dashed #ff5555;
  padding: 12px 20px;
  border-radius: 8px;
  display: inline-block;
  margin: 10px auto;
  background-color: #1a1a1a;
}
.box-anak h4 {
  margin: 0 0 6px 0;
  color: #ff79c6;
}
.box-anak p {
  margin: 0;
  font-size: 14px;
}
</style>