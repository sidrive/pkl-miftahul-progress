import { ref } from 'vue'

export function useAntrean() {
  // State Data & Async
  const sedangMemuat = ref(true)
  const pesanError = ref('')
  const daftarPesanan = ref([])

  // State Filter Status
  const filterStatus = ref('')
  const opsiFilter = [
    { value: '', label: 'Semua Status' },
    { value: 'diproses', label: 'Diproses' },
    { value: 'selesai', label: 'Selesai' },
    { value: 'dibatalkan', label: 'Dibatalkan' }
  ]

  // State Modal
  const showModal = ref(false)
  const modeModal = ref('tambah') // 'tambah' | 'edit'
  const pesananYangEdited = ref(null)
  const keyModal = ref(0)

  return {
    sedangMemuat,
    pesanError,
    daftarPesanan,
    filterStatus,
    opsiFilter,
    showModal,
    modeModal,
    pesananYangEdited,
    keyModal
  }
}