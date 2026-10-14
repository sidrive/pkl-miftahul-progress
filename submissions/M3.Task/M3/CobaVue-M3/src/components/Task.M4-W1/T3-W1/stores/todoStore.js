import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todoM4', () => {
  // 1. STATE
  const daftarTodo = ref([
    { id: 1, teks: "Selesaikan Tugas MPP", selesai: false, kategori: "Sekolah" },
    { id: 2, teks: "Kerjakan Project Robotic", selesai: false, kategori: "Sekolah" },
    { id: 3, teks: "Beli Kopi & Camilan", selesai: false, kategori: "Pribadi" },
    { id: 4, teks: "Buat Flowchart untuk nasi goreng", selesai: false, kategori: "Pekerjaan" }
  ])

  const kategoriAktif = ref('Semua')
  const kataKunciDebounce = ref('')

  // 2. GETTERS
  const getTodoById = computed(() => {
    return (id) => daftarTodo.value.find(todo => todo.id === Number(id))
  })

  const daftarKategoriComputed = computed(() => {
    const kategoriAda = daftarTodo.value.map(todo => todo.kategori)
    const kategoriUnik = [...new Set(kategoriAda)]
    return ['Semua', ...kategoriUnik]
  })

  const todoTersaring = computed(() => {
    return daftarTodo.value.filter(todo => {
      const cocokKategori = kategoriAktif.value === 'Semua' || todo.kategori === kategoriAktif.value
      const cocokSearch = todo.teks.toLowerCase().includes(kataKunciDebounce.value.toLowerCase())
      return cocokKategori && cocokSearch
    })
  })

  // 3. ACTIONS
  function tambahTodo(teks, kategori) {
    daftarTodo.value.push({
      id: Date.now(),
      teks: teks,
      selesai: false,
      kategori: kategori
    })
  }

  function toggleSelesai(id) {
    const item = daftarTodo.value.find(todo => todo.id === Number(id))
    if (item) {
      item.selesai = !item.selesai
    }
  }

  function updateTodo(id, teksBaru, kategoriBaru) {
    const item = daftarTodo.value.find(todo => todo.id === Number(id))
    if (item) {
      item.teks = teksBaru
      item.kategori = kategoriBaru
    }
  }

  function hapusTodo(id) {
    daftarTodo.value = daftarTodo.value.filter(todo => todo.id !== Number(id))
  }

  function setKategoriAktif(kategori) {
    kategoriAktif.value = kategori
  }

  function setKataKunciDebounce(keyword) {
    kataKunciDebounce.value = keyword
  }

  return {
    daftarTodo,
    kategoriAktif,
    kataKunciDebounce,
    getTodoById,
    daftarKategoriComputed,
    todoTersaring,
    tambahTodo,
    toggleSelesai,
    updateTodo,
    hapusTodo,
    setKategoriAktif,
    setKataKunciDebounce
  }
})