import { ref, computed, onMounted } from 'vue'

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

  // Simulasi Fetch Data Pesanan dari Server
  function muatDataPesanan(simulasiGagal = false) {
    sedangMemuat.value = true
    pesanError.value = ''
    daftarPesanan.value = []

    setTimeout(() => {
      if (simulasiGagal) {
        pesanError.value = 'Gagal memuat data antrean pesanan dari server!'
      } else {
        daftarPesanan.value = [
          { id: 101, namaPemesan: 'Budi Santoso', noMeja: 'Meja 03', status: 'diproses' },
          { id: 102, namaPemesan: 'Siti Rahma', noMeja: 'Meja 07', status: 'selesai' },
          { id: 103, namaPemesan: 'Andi Pratama', noMeja: 'Meja 01', status: 'dibatalkan' }
        ]
      }
      sedangMemuat.value = false
    }, 1200)
  }

  // Data Computed Berdasarkan Filter Status
  const daftarPesananFiltered = computed(() => {
    if (!filterStatus.value) return daftarPesanan.value
    return daftarPesanan.value.filter(item => item.status === filterStatus.value)
  })

  // Fungsi Buka Modal Mode TAMBAH
  function bukaModalTambah() {
    modeModal.value = 'tambah'
    pesananYangEdited.value = null
    keyModal.value = Date.now()
    showModal.value = true
  }

  // Fungsi Buka Modal Mode EDIT
  function bukaModalEdit(item) {
    modeModal.value = 'edit'
    pesananYangEdited.value = { ...item }
    keyModal.value = Date.now()
    showModal.value = true
  }

  onMounted(() => {
    muatDataPesanan(false)
  })

  return {
    sedangMemuat,
    pesanError,
    daftarPesanan,
    filterStatus,
    opsiFilter,
    showModal,
    modeModal,
    pesananYangEdited,
    keyModal,
    daftarPesananFiltered,
    muatDataPesanan,
    bukaModalTambah,
    bukaModalEdit
  }
}