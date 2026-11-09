import { ref, onMounted } from 'vue'

// Database simulasi khusus jika inputnya berupa String URL
const databaseSimulasi = {
  '/api/promo': [
    { id: 1, kode: 'DISCON50', deskripsi: 'Diskon 50% Khusus Hari Ini' },
    { id: 2, kode: 'FREEOK', deskripsi: 'Gratis Ongkir Min. Belanja 30rb' }
  ]
}

export function useFetch(sumberData) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  onMounted(() => {
    setTimeout(() => {
      // 1. Cek kalau sumberData berupa URL string
      if (typeof sumberData === 'string') {
        if (databaseSimulasi[sumberData]) {
          data.value = databaseSimulasi[sumberData]
          loading.value = false
        } else {
          error.value = `URL/Sumber Data '${sumberData}' tidak ditemukan!`
          loading.value = false
        }
      } 
      // 2. Jika sumberData berupa Data/Array langsung (Putaran 1 & 2)
      else if (sumberData) {
        data.value = sumberData
        loading.value = false
      } 
      // 3. kalau gak ada data atau kosong
      else {
        error.value = 'Data tidak ditemukan!'
        loading.value = false
      }
    }, 1500)
  })

  return { data, loading, error }
}