import { ref } from 'vue'

export function useHitungSesuatu() {
  const nilai = ref(0)
  
  function tambah() {
    nilai.value++
    console.log('Angka di dalam composable berubah jadi:', nilai.value)
  }

  // SENGAJA SALAH: Mengembalikan nilai.value (angka biasa 0), BUKAN ref nilai
  // return { nilai: nilai.value, tambah } hilangkan "//" untuk mencoba salahnya

  //PERBAIKI JADI GINI (KIRIM REF APA ADANYA):
  return { nilai, tambah }
}