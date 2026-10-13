import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // state
  const nama = ref('Jaxk Milles Rules')
  const peran = ref('Divisi Makan Nasi')
  const statusAktif = ref(true)

  // getters
  const profilLengkap = computed(() => {
    const statusText = statusAktif.value ? 'Aktif' : 'Non-Aktif'
    return `${nama.value} — ${peran.value} (${statusText})`
  })

  // PUTARAN 2: Action yang mengubah LEBIH DARI 1 state sekaligus dalam 1 fungsi
  function gantiProfil(namaBaru, peranBaru) {
    nama.value = namaBaru   // <--- Ubah state ke-1
    peran.value = peranBaru // <--- Ubah state ke-2
  }

  // Wajib kembalikan 'gantiProfil' di return
  return { 
    nama, 
    peran, 
    statusAktif, 
    profilLengkap,
    gantiProfil 
  }
})