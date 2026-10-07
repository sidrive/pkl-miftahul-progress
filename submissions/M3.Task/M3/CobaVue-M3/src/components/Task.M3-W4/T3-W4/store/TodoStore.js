import { ref } from 'vue'

// papan Tulis Utama (Data Awal To-Do)
export const daftarTodo = ref([
  { id: 1, teks: "Selesaikan Tugas MPP", selesai: false, kategori: "Sekolah" },
  { id: 2, teks: "Kerjakan Project Robotic", selesai: false, kategori: "Sekolah" },
  { id: 3, teks: "Beli Kopi & Camilan", selesai: false, kategori: "Pribadi" },
  { id: 4, teks: "Buat Flowchart untuk nasi goreng", selesai: false, kategori: "Pekerjaan" }
])

// fungsi buat nyari 1 tugas berdasarkan ID (dipakai di Halaman Detail nanti)
export function getTodoById(id) {
  return daftarTodo.value.find(todo => todo.id === Number(id))
}

// fungsi Tambah Tugas Baru
export function tambahTodo(teks, kategori) {
  daftarTodo.value.push({
    id: Date.now(),
    teks: teks,
    selesai: false,
    kategori: kategori
  })
}

// fungsi Centang Selesai / Belum
export function toggleSelesai(id) {
  const item = getTodoById(id)
  if (item) {
    item.selesai = !item.selesai
  }
}

// fungsi Simpan Hasil Edit Tugas
export function updateTodo(id, teksBaru, kategoriBaru) {
  const item = getTodoById(id)
  if (item) {
    item.teks = teksBaru
    item.kategori = kategoriBaru
  }
}

// fungsi Hapus Tugas
export function hapusTodo(id) {
  daftarTodo.value = daftarTodo.value.filter(todo => todo.id !== Number(id))
}