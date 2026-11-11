<template>
  <div class="judul">
    <h3>Task T3 - MiniApp Aplikasi Antrian Refactor</h3>
  </div>
  <div class="container-t3">
    <!-- UI Elements will be added in the next commit -->
  </div>
</template>

<script setup>
import { useAntrean } from './useAntrean.js'

// Import komponen UI dari lokasi aslinya di Task.M4-W3
import DsBadge from '../../Task.M4-W3/DsBadge.vue'
import DsSelect from '../../Task.M4-W3/DsSelect.vue'
import FormPesananModal from '../../Task.M4-W3/FormPesananModal.vue'

// Import tombol & card dari Task.M4-W2
import DsButton from '../../Task.M4-W2/DsButton.vue'
import DsCard from '../../Task.M4-W2/DsCard.vue'

// Logika dari Composable useAntrean
const {
  sedangMemuat,
  pesanError,
  filterStatus,
  opsiFilter,
  showModal,
  modeModal,
  pesananYangEdited,
  keyModal,
  daftarPesananFiltered,
  muatDataPesanan,
  bukaModalTambah,
  bukaModalEdit,
  handleSimpanPesanan,
  hapusPesanan
} = useAntrean()
</script>

<style scoped>

</style>