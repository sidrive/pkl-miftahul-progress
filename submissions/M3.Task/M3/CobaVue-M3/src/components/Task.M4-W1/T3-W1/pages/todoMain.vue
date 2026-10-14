<template>
  <div class="todo-container">
    <h2>To-Do List Multi-Halaman (Pinia Store)</h2>

    <div style="margin-bottom: 15px;">
      <button class="btn-reset" @click="resetUrl">
        🔄 Reset URL ke Beranda (localhost:5173)
      </button>
    </div>
    <br>
    
    <!-- Form Tambah Tugas Baru -->
    <div class="search">
      <form @submit.prevent="handleTambah">
        <input class="input" type="text" v-model="inputTeks" placeholder="Ketik task baru..." required /> | 
        
        <select class="pilih-kategori" v-model="inputKategori">
            <option value="Sekolah">Sekolah</option>
            <option value="Pribadi">Pribadi</option>
            <option value="Pekerjaan">Pekerjaan</option>
        </select> |

        <button type="submit" class="btn">Tambah</button>
      </form>
    </div>
    <br />

    <!-- Input Pencarian pakai Debounce -->
    <div>
      <input class="input" type="text" v-model="kataKunci" placeholder="Cari tugas..." style="width: 250px;"/><br>
      <small style="margin-left: 8px; color: #a0aec0;" v-if="sedangMencari">
        🔍 Wait Yah Bos q... (Menunggu berhenti ngetik)
      </small>
    </div><br>

    <!-- Tombol Filter Kategori -->
    <FilterBar 
      :daftarKategori="todoStore.daftarKategoriComputed"
      :kategoriAktif="todoStore.kategoriAktif"
      @ubahKategori="todoStore.setKategoriAktif($event)"
    />
    <br />

    <!-- Daftar Tugas -->
    <ul class="daftar-todo">
      <TodoList
        v-for="todo in todoStore.todoTersaring"
        :key="todo.id"
        :todo="todo"
        @toggle="todoStore.toggleSelesai"
        @hapus="todoStore.hapusTodo"
      />
    </ul>

    <p v-if="todoStore.todoTersaring.length === 0">Gak ada tugas yang cocok.</p>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '../stores/todoStore.js'
import FilterBar from '../components/FilterBar.vue'
import TodoList from '../components/TodoList.vue'

const router = useRouter()
const todoStore = useTodoStore()

const inputTeks = ref('')
const inputKategori = ref('Sekolah')

const kataKunci = ref('')
const sedangMencari = ref(false)
let timerDebounce = null

function resetUrl() {
  router.push('/')
}

watch(kataKunci, (nilaiBaru) => {
  sedangMencari.value = true
  if (timerDebounce) clearTimeout(timerDebounce)

  timerDebounce = setTimeout(() => {
    todoStore.setKataKunciDebounce(nilaiBaru)
    sedangMencari.value = false
  }, 500)
})

onUnmounted(() => {
  if (timerDebounce) clearTimeout(timerDebounce)
})

function handleTambah() {
  if (inputTeks.value.trim() === '') return
  todoStore.tambahTodo(inputTeks.value.trim(), inputKategori.value)
  inputTeks.value = ''
}
</script>

<style scoped>
.btn-reset {
  background-color: #ff4757;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;
}
.btn-reset:hover {
  background-color: #ff6b81;
}
.search {
  background-color: #272933;
  color: #a0aec0;
  border: 1px solid #4a5568;
  padding: 6px 7px;
  border-radius: 17px;
}
.btn {
  background-color: #00ffb3;
  color: #1a1a1a;
  border: 1px solid #00ffb3;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: bold;
  cursor: pointer;
}
.btn:hover {
  color: #ffffff;
}
.input {
  background-color: #10ff8f;
  outline: none;
  color: #ffffff;
  font-size: 0.9rem;
  border: 1px solid #4a5568;
  padding: 6px 10px;
  border-radius: 10px;
}
.pilih-kategori {
  background-color: #1a1a2e;
  color: #a0aec0;
  border: 1px solid #4a5568;
  border-radius: 4px;
  padding: 4px 8px;
  outline: none;
  cursor: pointer;
  font-size: 0.85rem;
}
.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.daftar-todo {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
  padding-left: 0;
  list-style: none;
}
</style>