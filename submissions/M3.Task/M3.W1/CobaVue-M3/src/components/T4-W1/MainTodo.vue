<template>
  <div class="todo-container">
    <h2>Project To-Do List M2.W4 (Vue 3 Migration)</h2>

    <!-- Fitur Cari Task (dari indexT2.js) -->
    <input 
      type="text" 
      v-model="kataKunci" 
      placeholder="Cari task..." 
      class="input-cari"
    />

    <br />

    <!-- Form Tambah Todo -->
    <form @submit.prevent="tambahTodo" class="form-todo">
      <input 
        type="text" 
        v-model="inputTeks" 
        placeholder="Ketik task baru..."
        required
      />
      <button type="submit">Tambah</button>
    </form>

    <br />

    <!-- List Todo yang dirender dari hasil filter pencarian -->
    <ul class="daftar-todo">
    <TodoList
        v-for="todo in daftarTodo"
        v-show="todo.teks.toLowerCase().includes(kataKunci.toLowerCase())"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleSelesai"
        @edit="editTodo"
        @hapus="hapusTodo"
    />
    </ul>

    <!-- Pesan jika todo kosong atau tidak ditemukan -->
    <p v-if="todoTersaring.length === 0">Tidak ada tugas yang cocok.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TodoList from './TodoList.vue'

// State reaktif
const inputTeks = ref('')
const kataKunci = ref('')

// Data awal persis dari indexT2.js (tanpa localStorage dulu sesuai requirement)
const daftarTodo = ref([
  { id: 1, teks: "Belajar Node.js & npm", selesai: false },
  { id: 2, teks: "Bikin tampilan awal To-Do List", selesai: false },
  { id: 3, teks: "Pahami konsep DOM & Event", selesai: false },
  { id: 4, teks: "Eksperimen localStorage", selesai: false }
])

// Computed property untuk fitur "Cari Task" secara realtime
const todoTersaring = computed(() => {
  return daftarTodo.value.filter(todo =>
    todo.teks.toLowerCase().includes(kataKunci.value.toLowerCase())
  )
})

// Logic 1: Tambah Task
function tambahTodo() {
  if (inputTeks.value.trim() === '') return

  daftarTodo.value.push({
    id: Date.now(),
    teks: inputTeks.value.trim(),
    selesai: false
  })

  inputTeks.value = ''
}

// Logic 2: Toggle Selesai
function toggleSelesai(id) {
  const item = daftarTodo.value.find(t => t.id === id)
  if (item) {
    item.selesai = !item.selesai
  }
}

// Logic 3: Edit Task (Persis indexT2.js pakai prompt)
function editTodo(id) {
  const todo = daftarTodo.value.find(t => t.id === id)
  if (!todo) return

  const teksEdit = prompt("Edit task:", todo.teks)
  if (teksEdit !== null && teksEdit.trim() !== "") {
    todo.teks = teksEdit.trim()
  }
}

// Logic 4: Hapus Task
function hapusTodo(id) {
  daftarTodo.value = daftarTodo.value.filter(t => t.id !== id)
}
</script>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.input-cari {
  margin-bottom: 10px;
  padding: 5px 10px;
  width: 250px;
}

.form-todo {
  display: flex;
  gap: 6px;
}

.daftar-todo {
  padding-left: 0;
  margin: 0;
}
</style>