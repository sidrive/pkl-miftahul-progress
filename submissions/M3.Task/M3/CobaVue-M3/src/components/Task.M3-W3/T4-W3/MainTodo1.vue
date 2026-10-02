<!-- Kode main todo yang lama sebelum evalasi -->

<template>
  <div class="todo-container">
    <h2>To-Do List Filter Kategori & Pencarian</h2>

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

    <!-- input pencarian pakai DEBOUNCE (Opsi A) -->
    <div style="margin-bottom: 12px;">
      <input class="input" type="text" v-model="kataKunci" placeholder="Cari tugas..." style="width: 250px;"/><br>
      <small style="margin-left: 8px; color: #a0aec0;" v-if="sedangMencari">
        🔍 Wait Yah Broh... (Menunggu berhenti ngetik)
      </small>
    </div>

    <!-- FilterBar Kategori -->
    <FilterBar 
      :daftarKategori="daftarKategori"
      :kategoriAktif="stateFilter.kategoriAktif"
      @ubahKategori="tanganiUbahKategori"
    />
    <br />

    <!-- Daftar Todo -->
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

    <p v-if="todoTersaring.length === 0">Gak ada tugas yang cocok.</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onUnmounted } from 'vue'
import FilterBar from './FilterBar.vue'
import TodoList from './TodoList.vue'

const inputTeks = ref('')
const inputKategori = ref('Sekolah')

// State Filter Kategori
const stateFilter = reactive({
  kategoriAktif: 'Semua'
})

const daftarKategori = ['Semua', 'Sekolah', 'Pribadi', 'Pekerjaan']

const daftarTodo = ref([
  { id: 1, teks: "Selesaikan Tugas MPP", selesai: false, kategori: "Sekolah" },
  { id: 2, teks: "Kerjakan Project Robotic", selesai: false, kategori: "Sekolah" },
  { id: 3, teks: "Beli Kopi & Camilan", selesai: false, kategori: "Pribadi" },
  { id: 4, teks: "Buat Flowchart untuk nasi goreng", selesai: false, kategori: "Pekerjaan" }
])

// DEBOUNCE SEARCH - Opsi A: pakai Watcher + setTimeout
const kataKunci = ref('')           // nempel ke input search
const kataKunciDebounce = ref('')   // dipakai buat filter nyata siap delay
const sedangMencari = ref(false)    // indikator UI waktu mengetik
let timerDebounce = null

// Watcher untuk reset timer tiap ada ketikan baru
watch(kataKunci, (nilaiBaru) => {
  sedangMencari.value = true

  // reset/batalkan timeout sebelumnya biar gak eksekusi bertumpuk
  if (timerDebounce) {
    clearTimeout(timerDebounce)
  }

  // jeda update kataKunciDebounce selama 500ms
  timerDebounce = setTimeout(() => {
    kataKunciDebounce.value = nilaiBaru
    sedangMencari.value = false
    console.log(`[DEBOUNCE] Pencarian dieksekusi: "${nilaiBaru}"`)
  }, 500)
})

// Cleanup timeout di onUnmounted kalau komponen dihancurkan (Memory Leak)
onUnmounted(() => {
  if (timerDebounce) {
    clearTimeout(timerDebounce)
    console.log('[DEBOUNCE] Cleanup timerDebounce di onUnmounted()')
  }
})

// nyaring Otomatis (Computed Property): gabungan Kategori + Search
const todoTersaring = computed(() => {
  return daftarTodo.value.filter(todo => {
    // cek Kategori
    const cocokKategori = stateFilter.kategoriAktif === 'Semua' || todo.kategori === stateFilter.kategoriAktif
    // cek Teks Search (gunakan kataKunciDebounce)
    const cocokSearch = todo.teks.toLowerCase().includes(kataKunciDebounce.value.toLowerCase())

    return cocokKategori && cocokSearch
  })
})

function tanganiUbahKategori(kategoriBaru) {
  stateFilter.kategoriAktif = kategoriBaru
}

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

function editTodo(id) {
  const item = daftarTodo.value.find(t => t.id === id)
  if (!item) return

  const teksBaru = prompt('Edit nama task:', item.teks)
  if (teksBaru === null) return

  const kategoriBaru = prompt(
    'Edit kategori (Pilihan: Sekolah, Pribadi, Pekerjaan):', 
    item.kategori
  )
  if (kategoriBaru === null) return

  if (teksBaru.trim() !== '') {
    item.teks = teksBaru.trim()
  }

  const kategoriValid = ['Sekolah', 'Pribadi', 'Pekerjaan']
  if (kategoriValid.includes(kategoriBaru.trim())) {
    item.kategori = kategoriBaru.trim()
  } else {
    alert('Kategori tidak valid! Kategori tidak diubah.')
  }
}

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