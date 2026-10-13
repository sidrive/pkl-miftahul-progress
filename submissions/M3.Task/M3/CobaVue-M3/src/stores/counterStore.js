import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state: 1 data sederhana
  const jumlah = ref(0)

  function tambah() {
    jumlah.value++
  }

  return { jumlah, tambah }
})