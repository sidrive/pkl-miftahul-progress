<template>
  <div class="todo-container">
    <h2>To-Do List Filter Kategori</h2>

    <div class="search">
    <form @submit.prevent="tambahTodo">
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

    <!-- FilterBar -->
    <FilterBar 
      :daftarKategori="daftarKategori"
      :kategoriAktif="stateFilter.kategoriAktif"
      @ubahKategori="tanganiUbahKategori"
    />
    <br />

    <!-- daftar Todo  -->
    <ul class="daftar-todo">
      <TodoList
        v-for="todo in todoTersaring"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleSelesai"
        @edit="editTodo"
        @hapus="hapusTodo"
      />
    </ul>

    <p v-if="todoTersaring.length === 0">gak ada tugas di kategori ini.</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import FilterBar from './FilterBar.vue'
import TodoList from './TodoList.vue'

const inputTeks = ref('')
const inputKategori = ref('Sekolah')

// State Filter pake reactive()
const stateFilter = reactive({
  kategoriAktif: 'Semua'
})

// daftar tombol filter yang tersedia
const daftarKategori = ['Semua', 'Sekolah', 'Pribadi', 'Pekerjaan']

// data awal daftar tugas
const daftarTodo = ref([
  { id: 1, teks: "Belajar Vue Props & Emit", selesai: true, kategori: "Sekolah" },
  { id: 2, teks: "Kerjakan Task M3.W2.T3", selesai: false, kategori: "Sekolah" },
  { id: 3, teks: "Beli Kopi & Camilan", selesai: false, kategori: "Pribadi" },
  { id: 4, teks: "Slicing Tampilan UI PKL", selesai: false, kategori: "Pekerjaan" }
])

// penyaring Otomatis (Computed Property)
const todoTersaring = computed(() => {
  if (stateFilter.kategoriAktif === 'Semua') {
    return daftarTodo.value
  }
  return daftarTodo.value.filter(todo => todo.kategori === stateFilter.kategoriAktif)
})

// fungsi penerima kabar dari anak (FilterBar)
function tanganiUbahKategori(kategoriBaru) {
  stateFilter.kategoriAktif = kategoriBaru
}

// fungsi Tambah Task
function tambahTodo() {
  if (inputTeks.value.trim() === '') return
  daftarTodo.value.push({
    id: Date.now(),
    teks: inputTeks.value.trim(),
    selesai: false,
    kategori: inputKategori.value
  })
  inputTeks.value = ''
}

// fungsi Toggle Centang Selesai
function toggleSelesai(id) {
  const item = daftarTodo.value.find(t => t.id === id)
  if (item) item.selesai = !item.selesai
}

// fungsi Edit teks dan kategori task
function editTodo(id) {
  // cari data task yang mau di edit berdasarkan ID
  const item = daftarTodo.value.find(t => t.id === id)
  if (!item) return

  // pop-up pertama: Edit teks task
  const teksBaru = prompt('Edit nama task:', item.teks)
  if (teksBaru === null) return

  // pop-up kedua: Edit kategori task
  const kategoriBaru = prompt(
    'Edit kategori (Pilihan: Sekolah, Pribadi, Pekerjaan):', 
    item.kategori
  )
  if (kategoriBaru === null) return

  // update data jika inputan teks gak kosong
  if (teksBaru.trim() !== '') {
    item.teks = teksBaru.trim()
  }

  // update kategori kalau kategori valid sesuai pilihan
  const kategoriValid = ['Sekolah', 'Pribadi', 'Pekerjaan']
  if (kategoriValid.includes(kategoriBaru.trim())) {
    item.kategori = kategoriBaru.trim()
  } else {
    alert('Kategori tidak valid! Kategori tidak diubah.')
  }
}

// fungsi Hapus Task
function hapusTodo(id) {
  daftarTodo.value = daftarTodo.value.filter(t => t.id !== id)
}
</script>

<style scoped>
.search {
    background-color: #272933;
    color: #a0aec0;
    border: 1px solid #4a5568;
    padding: 6px 7px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    border-radius: 17px;
}
.btn {
    background-color: #2a2d3e;
    color: #a0aec0;
    border: 1px solid #4a5568;
    padding: 6px 14px;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: #00ffb3;
    color: #1a1a1a;
    border-color: #00ffb3;
    font-weight: bold;
}
.btn:hover {
  border-color: #00ffb3;
  color: #ffffff;
}
.input {
    background-color: #10ff8f;
    border: none;
    outline: none;
    color: #ffffff;
    padding: 4px 8px;
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
  display: inline-block;
  text-align: left;
  margin-top: 15px;
  padding-left: 20px;
}
</style>