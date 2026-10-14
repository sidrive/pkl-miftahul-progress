<template>
  <div class="detail-container">
    <h2>Detail & Edit Task (Pinia Store)</h2>

    <div v-if="todo" class="card-edit">
      <p><strong>ID Task:</strong> {{ todo.id }}</p>

      <form @submit.prevent="simpanPerubahan">
        <div class="form-group">
          <label>Nama Task:</label>
          <InputCustom v-model="formTeks" placeholder="Masukkan nama task..." />
        </div>

        <div class="form-group">
          <label>Kategori Task:</label>
          <select v-model="formKategori" class="select-kategori">
            <option value="Sekolah">Sekolah</option>
            <option value="Pribadi">Pribadi</option>
            <option value="Pekerjaan">Pekerjaan</option>
          </select>
        </div>

        <div class="button-group">
          <button type="submit" class="btn-simpan">Simpan Perubahan</button>
          <button type="button" @click="batal" class="btn-batal">Batal</button>
        </div>
      </form>

      <hr class="divider" />

      <div class="nav-detail">
        <button type="button" @click="pindahTask(todo.id - 1)" class="btn-nav">
          ← Task before
        </button>
        <button type="button" @click="pindahTask(todo.id + 1)" class="btn-nav">
          Task after →
        </button>
      </div>
    </div>

    <div v-else class="not-found">
      <p>⚠️ Data task dengan ID ini gak ditemukan!</p>
      <button @click="kembaliKeDaftar" class="btn-batal">Kembali ke Daftar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTodoStore } from '../stores/todoStore.js'
import InputCustom from '../components/InputCustom.vue'

const route = useRoute()
const router = useRouter()
const todoStore = useTodoStore()

const todo = ref(null)
const formTeks = ref('')
const formKategori = ref('Sekolah')

function muatDataTask() {
  const idParam = route.params.id
  const dataDitemukan = todoStore.getTodoById(idParam)

  if (dataDitemukan) {
    todo.value = dataDitemukan
    formTeks.value = dataDitemukan.teks
    formKategori.value = dataDitemukan.kategori
  } else {
    todo.value = null
  }
}

onMounted(() => {
  muatDataTask()
})

watch(
  () => route.params.id,
  () => {
    muatDataTask()
  }
)

function simpanPerubahan() {
  if (formTeks.value.trim() === '') return

  todoStore.updateTodo(todo.value.id, formTeks.value.trim(), formKategori.value)
  alert('Task berhasil diperbarui!')
  router.push('/todo-m4')
}

function batal() {
  router.push('/todo-m4')
}

function kembaliKeDaftar() {
  router.push('/todo-m4')
}

function pindahTask(targetId) {
  if (targetId > 0) {
    router.push(`/todo-m4/${targetId}`)
  }
}
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.card-edit {
  background-color: #1a1a2e;
  border: 1px solid #4a5568;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
  text-align: left;
}

.select-kategori {
  background-color: #272933;
  color: #ffffff;
  border: 1px solid #4a5568;
  padding: 8px 12px;
  border-radius: 6px;
  outline: none;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

.btn-simpan {
  background-color: #00ffb3;
  color: #1a1a1a;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-batal {
  background-color: #4a5568;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.divider {
  border: 0;
  border-top: 1px solid #4a5568;
  margin: 20px 0;
}

.nav-detail {
  display: flex;
  justify-content: space-between;
}

.btn-nav {
  background-color: #2b6cb0;
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}

.not-found {
  text-align: center;
  color: #e53e3e;
}
</style>