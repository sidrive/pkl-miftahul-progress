import { ref, watchEffect } from 'vue'

// Database simulasi khusus URL (Task T1.2 Putaran 3)
const databaseSimulasi = {
  '/api/promo': [
    { id: 1, kode: 'DISCON50', deskripsi: 'Diskon 50% Khusus Hari Ini' },
    { id: 2, kode: 'FREEOK', deskripsi: 'Gratis Ongkir Min. Belanja 30rb' }
  ]
}

// Database simulasi produk kasir (Task T2.1 Putaran 3)
const databaseProduk = [
  { id: 1, nama: 'Kopi Hitam', harga: 10000 },
  { id: 2, nama: 'Kopi Milk', harga: 15000 },
  { id: 3, nama: 'Es Teh Manis', harga: 5000 },
  { id: 4, nama: 'Teh Tarik', harga: 12000 },
  { id: 5, nama: 'Matcha Latte', harga: 18000 }
]

export function useFetch(sumberData) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  // watchEffect merespons perubahan kalau sumberData berupa ref reaktif
  watchEffect(() => {
    // Ambil nilai aktual (apabila sumberData berupa Ref reaktif dari vue, ambil .value)
    const nilaiAktual = sumberData && typeof sumberData === 'object' && 'value' in sumberData 
      ? sumberData.value 
      : sumberData

    loading.value = true
    error.value = null

    // 1. Jika sumberData berupa URL String (Task T1.2 Putaran 3)
    if (typeof nilaiAktual === 'string' && nilaiAktual.startsWith('/')) {
      setTimeout(() => {
        if (databaseSimulasi[nilaiAktual]) {
          data.value = databaseSimulasi[nilaiAktual]
        } else {
          error.value = `URL/Sumber Data '${nilaiAktual}' tidak ditemukan!`
        }
        loading.value = false
      }, 500)
    } 
    // 2. Jika sumberData berupa Kata Kunci Pencarian dari Ref (Task T2.1 Putaran 3)
    else if (sumberData && typeof sumberData === 'object' && 'value' in sumberData) {
      setTimeout(() => {
        const kata = (nilaiAktual || '').toString().toLowerCase().trim()
        if (!kata) {
          data.value = databaseProduk
        } else {
          data.value = databaseProduk.filter(item => 
            item.nama.toLowerCase().includes(kata)
          )
        }
        loading.value = false
      }, 500)
    }
    // 3. Jika sumberData berupa Data Array / Object langsung (Task T1.2 Putaran 1 & 2)
    else if (nilaiAktual) {
      setTimeout(() => {
        data.value = nilaiAktual
        loading.value = false
      }, 500)
    } 
    // 4. Jika kosong
    else {
      setTimeout(() => {
        error.value = 'Data tidak ditemukan!'
        loading.value = false
      }, 500)
    }
  })

  return { data, loading, error }
}