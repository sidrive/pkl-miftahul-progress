import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useKasirStore = defineStore('kasir', () => {
  // 1. STATE (Gudang Rak Barang & Keranjang Belanja)
  const daftarBarang = ref([
    { id: 1, nama: 'Kecap Manis Rek q', harga: 10000, stok: 30 },
    { id: 2, nama: 'Sambal Bakar Rebus CBA', harga: 12000, stok: 50 },
    { id: 3, nama: 'Mie Muantep K', harga: 5000, stok: 25 }
  ])

  const keranjang = ref([])
  const kataKunci = ref('') // State untuk pencarian barang

  // 2. GETTERS (Kalkulator Hitung Otomatis)
  // Menghitung total harga belanjaan
  const totalHarga = computed(() => {
    return keranjang.value.reduce((total, item) => total + (item.harga * item.jumlah), 0)
  })

  // Menghitung total barang di keranjang
  const totalItem = computed(() => {
    return keranjang.value.reduce((total, item) => total + item.jumlah, 0)
  })

  // Getter menyaring daftar barang berdasarkan kata kunci pencarian
  const barangTersaring = computed(() => {
    return daftarBarang.value.filter(b => 
      b.nama.toLowerCase().includes(kataKunci.value.toLowerCase())
    )
  })

  // 3. ACTIONS (Tugas Si Kasir)
  // Masukkan barang ke keranjang & kurangi stok gudang
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

  // Batal/Kosongkan keranjang & kembalikan stok ke gudang
  function resetKeranjang() {
    keranjang.value.forEach(item => {
      const barangDiGudang = daftarBarang.value.find(b => b.id === item.id)
      if (barangDiGudang) {
        barangDiGudang.stok += item.jumlah
      }
    })
    keranjang.value = []
  }

  // Action Tambah Barang Baru ke Gudang/Etalase
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