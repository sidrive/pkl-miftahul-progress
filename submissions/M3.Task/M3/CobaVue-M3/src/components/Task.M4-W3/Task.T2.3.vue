<template>
  <div class="container-task">
    <h2>Task T2.3 — Eksperimen State Nyangkut</h2>

    <div class="button-group">
      <button @click="bukaModeEdit" class="btn-warning">
        1. Buka Mode EDIT ("Budi")
      </button>

      <button @click="bukaModeTambah" class="btn-primary">
        2. Buka Mode TAMBAH (Harusnya Kosong)
      </button>
    </div>

    <!-- Panggil Form Modal (Komponen yang sama di-reuse) -->
    <FormProdukModal
      :show="showModal"
      :mode="modeModal"
      :dataAwal="dataAwalEdit"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FormProdukModal from './FormProdukModal.vue'

const showModal = ref(false)
const modeModal = ref('tambah')
const dataAwalEdit = ref(null)

function bukaModeEdit() {
  modeModal.value = 'edit'
  dataAwalEdit.value = { nama: 'Budi' }
  showModal.value = true
}

function bukaModeTambah() {
  modeModal.value = 'tambah'
  dataAwalEdit.value = null
  showModal.value = true
}
</script>

<style scoped>
.container-task {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}
.button-group {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}
.btn-warning {
  background-color: #ffa502;
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
}
.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
}
</style>