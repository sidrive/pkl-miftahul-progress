import { ref, watch } from 'vue'

export function useLocalStorage(key, nilaiAwal = '') {
  const simpanan = localStorage.getItem(key)
  const nilai = ref(simpanan !== null ? simpanan : nilaiAwal)

  watch(nilai, (nilaiBaru) => {
    localStorage.setItem(key, nilaiBaru)
  })

  return nilai
}