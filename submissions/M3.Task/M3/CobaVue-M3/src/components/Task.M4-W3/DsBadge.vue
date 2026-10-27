<template>
  <span 
    class="ds-badge" 
    :style="{ backgroundColor: warnaPerStatus[status] || 'var(--color-grey-500)' }">
    {{ status }}
  </span>
</template>

<script setup>
defineProps({
  status: {
    type: String,
    default: 'nonaktif'
  }
})

// Object Mapping Lengkap
const warnaPerStatus = {
  // Putaran 1: Status Akun
  aktif: 'var(--color-navy-500, #007bff)',
  nonaktif: 'var(--color-grey-500, #6c757d)',

  // Putaran 2: Status Pesanan
  diproses: '#e67e22',
  selesai: '#2ed573',
  dibatalkan: '#ff4757',

  // Putaran 3: Status Stok Barang (4 Varian Sekaligus)
  melimpah: '#2ed573',
  menipis: '#ffa502',
  habis: '#ff4757',
  indent: '#a55eea'
}
</script>

<style scoped>
.ds-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.3px;
}
</style>