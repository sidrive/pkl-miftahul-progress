import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useKasirStore = defineStore('kasirT4', () => {
  // STATE
  const daftarBarang = ref([
    { id: 1, nama: 'Kecap Manis Rek q', harga: 10000, stok: 30 },
    { id: 2, nama: 'Sambal Bakar Rebus CBA', harga: 12000, stok: 50 },
    { id: 3, nama: 'Mie Muantep K', harga: 5000, stok: 25 },
    { id: 4, nama: 'Mailo', harga: 2500, stok: 100 }
  ])

  const keranjang = ref([])
  const kataKunci = ref('')

  // GETTERS
  const totalHarga = computed(() => {
    return keranjang.value.reduce((total, item) => total + (item.harga * item.jumlah), 0)
  })

  const totalItem = computed(() => {
    return keranjang.value.reduce((total, item) => total + item.jumlah, 0)
  })

  const barangTersaring = computed(() => {
    return daftarBarang.value.filter(b => 
      b.nama.toLowerCase().includes(kataKunci.value.toLowerCase())
    )
  })

  // ACTIONS
  function tambahKeKeranjang(barang) {
    const barangDiGudang = daftarBarang.value.find(b => b.id === barang.id)

    if (barangDiGudang && barangDiGudang.stok > 0) {
      barangDiGudang.stok--

      const itemKeranjang = keranjang.value.find(k => k.id === barang.id)
      if (itemKeranjang) {
        itemKeranjang.jumlah++
      } else {
        keranjang.value.push({
          id: barang.id,
          nama: barang.nama,
          harga: barang.harga,
          jumlah: 1
        })
      }
    } else {
      alert('Stok barang sudah habis!')
    }
  }

  function resetKeranjang() {
    keranjang.value.forEach(item => {
      const barangDiGudang = daftarBarang.value.find(b => b.id === item.id)
      if (barangDiGudang) {
        barangDiGudang.stok += item.jumlah
      }
    })
    keranjang.value = []
  }

  function tambahBarangBaru(nama, harga, stok) {
    daftarBarang.value.push({
      id: Date.now(),
      nama,
      harga: Number(harga),
      stok: Number(stok)
    })
  }

  return {
    daftarBarang,
    keranjang,
    kataKunci,
    barangTersaring,
    totalHarga,
    totalItem,
    tambahKeKeranjang,
    resetKeranjang,
    tambahBarangBaru
  }
})