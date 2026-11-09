import { ref } from 'vue'

export function useCounter(nilaiAwal = 0, step = 1) {
    const hitungan = ref(nilaiAwal)

    function tambah() {
        hitungan.value += step
    }

    function kurang() {
        hitungan.value -= step
    }

    function reset() {
        hitungan.value = nilaiAwal
    }

    return { hitungan, tambah, kurang, reset }
}