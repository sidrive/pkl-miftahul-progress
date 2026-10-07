<template>
  <div class="detail-container">
    <h2>Detail & Edit Task</h2>

    <!-- kalau data tugas ditemukan -->
    <div v-if="todo" class="card-edit">
      <p><strong>ID Task:</strong> {{ todo.id }}</p>

      <!-- Form Edit -->
      <form @submit.prevent="simpanPerubahan">
        <div class="form-group">
          <label>Nama Task (Custom v-model):</label>
          <!-- Menggunakan Custom v-model dari InputCustom.vue -->
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

      <!-- Fitur Navigasi Antar Task Detail (Solusi Component Reuse T2.3) -->
      <div class="nav-detail">
        <button type="button" @click="pindahTask(todo.id - 1)" class="btn-nav">
          ← Task Sebelumnya
        </button>
        <button type="button" @click="pindahTask(todo.id + 1)" class="btn-nav">
          Task Berikutnya →
        </button>
      </div>
    </div>

    <!-- Kalau ID gak ditemukan di store -->
    <div v-else class="not-found">
      <p>⚠️ Data task dengan ID ini gak ditemukan!</p>
      <button @click="kembaliKeDaftar" class="btn-batal">Kembali ke Daftar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTodoById, updateTodo } from '../store/todoStore.js'
import InputCustom from '../components/InputCustom.vue'

// Ambil router dan route aktif
const route = useRoute()
const router = useRouter()

// State lokal untuk form edit
const todo = ref(null)
const formTeks = ref('')
const formKategori = ref('Sekolah')

// Fungsi untuk memuat data task berdasarkan ID dari URL
function muatDataTask() {
  const idParam = route.params.id
  const dataDitemukan = getTodoById(idParam)

  if (dataDitemukan) {
    todo.value = dataDitemukan
    formTeks.value = dataDitemukan.teks
    formKategori.value = dataDitemukan.kategori
  } else {
    todo.value = null
  }
}

// Jalankan pertama kali waktu komponen dimuat
onMounted(() => {
  muatDataTask()
})

// PENTING: Watcher untuk ngatasi jebakan Component Reuse (T2.3)
// kalau URL berubah (/todo/1 ke /todo/2), muat ulang data tanpa reload komponen
watch(
  () => route.params.id,
  () => {
    muatDataTask()
  }
)

// Simpan perubahan dan redirect otomatis pakai router.push()
function simpanPerubahan() {
  if (formTeks.value.trim() === '') return

  updateTodo(todo.value.id, formTeks.value.trim(), formKategori.value)
  alert('Task berhasil diperbarui!')

  // Redirect otomatis kembali ke Halaman Utama daftar To-Do
  router.push('/todo')
}

function batal() {
  router.push('/todo')
}

function kembaliKeDaftar() {
  router.push('/todo')
}

// Navigasi terprogram antar detail task
function pindahTask(targetId) {
  if (targetId > 0) {
    router.push(`/todo/${targetId}`)
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