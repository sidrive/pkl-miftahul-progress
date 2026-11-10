import { ref, watch } from 'vue'

export function useDebounce(sumber, delay = 500) {
  const hasilDebounce = ref(sumber.value)
  let timer = null

  watch(sumber, (nilaiBaru) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      hasilDebounce.value = nilaiBaru
    }, delay)
  })

  return hasilDebounce
}