import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProdukStore = defineStore('produk', () => {
  // state
  const daftarProduk = ref([
    { id: 1, nama: 'Kopi Susu Gula Aren', harga: 18000, stok: 10 },
    { id: 2, nama: 'Teh Tarik Olsera', harga: 12000, stok: 15 },
    { id: 3, nama: 'Roti Bakar Cokelat', harga: 15000, stok: 5 }
  ])

  // state baru untuk menandai status loading
  const sedangLoading = ref(false)

  // getters
  const totalJenisProduk = computed(() => daftarProduk.value.length)
  const totalStokBarang = computed(() => daftarProduk.value.reduce((total, item) => total + item.stok, 0))
  const ringkasanToko = computed(() => `Toko memiliki ${totalJenisProduk.value} jenis produk dengan total ${totalStokBarang.value} unit stok.`)

  // T2.2 PUTARAN 3: Action Async (Simulasi nunggu server 2 detik)
  async function muatDataDariServer() {
    sedangLoading.value = true
    // Simulasi delay 2 detik (2000 milidetik)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Tambahkan produk baru hasil "download" dari server
    daftarProduk.value.push({
      id: Date.now(),
      nama: 'Ayam Geprek Sambal Ijo (Import Server)',
      harga: 25000,
      stok: 20
    })

    sedangLoading.value = false // Matikan status loading
  }

  return { 
    daftarProduk, 
    sedangLoading,
    totalJenisProduk, 
    totalStokBarang, 
    ringkasanToko,
    muatDataDariServer 
  }
})