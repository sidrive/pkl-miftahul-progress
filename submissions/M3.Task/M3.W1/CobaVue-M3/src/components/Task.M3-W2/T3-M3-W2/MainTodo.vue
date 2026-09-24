<template>
<div>
    <h2>To-Do List Filter Kategori</h2>

    <!-- Form Tambah Task Baru -->
    <form @submit.prevent="tambahTodo">
      <input type="text" v-model="inputTeks" placeholder="Ketik task baru..." required />
      
      <select v-model="inputKategori">
        <option value="Sekolah">Sekolah</option>
        <option value="Pribadi">Pribadi</option>
        <option value="Pekerjaan">Pekerjaan</option>
      </select>

      <button type="submit">Tambah</button>
    </form>
    <br />

    <!-- FilterBar -->
    <FilterBar 
      :daftarKategori="daftarKategori"
      :kategoriAktif="stateFilter.kategoriAktif"
      @ubahKategori="tanganiUbahKategori"
    />
    <br />

    <!-- Daftar Todo -->
    <ul>
      <TodoList
        v-for="todo in todoTersaring"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleSelesai"
        @hapus="hapusTodo"
      />
    </ul>

    <!-- kalau kosong -->
    <p v-if="todoTersaring.length === 0">Tidak ada tugas pada kategori ini.</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import FilterBar from './FilterBar.vue'
import TodoList from './TodoList.vue'

// tempat ngetik teks tugas baru & pilih kategori
const inputTeks = ref('')
const inputKategori = ref('Sekolah')

// State Filter pake reactive()
const stateFilter = reactive({
  kategoriAktif: 'Semua'
})

// daftar tombol filter yang tersedia
const daftarKategori = ['Semua', 'Sekolah', 'Pribadi', 'Pekerjaan']

// data awal daftar tugas kita
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

// fungsi Tambah, Toggle Selesai, dan Hapus
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

function toggleSelesai(id) {
  const item = daftarTodo.value.find(t => t.id === id)
  if (item) item.selesai = !item.selesai
}

function hapusTodo(id) {
  daftarTodo.value = daftarTodo.value.filter(t => t.id !== id)
}
</script>

<style scoped>
</style>