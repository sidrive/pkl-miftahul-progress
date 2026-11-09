import { ref } from 'vue'

export function useToggle(nilaiAwal = false) {
  const aktif = ref(nilaiAwal)

  function toggle() {
    aktif.value = !aktif.value
  }

  return { aktif, toggle }
}