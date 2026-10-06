<template>
    <div>
        <h3>Putaran 1 T2.4-W4</h3>
        <p>Simulasi simpan form bos q</p>

        <form @submit.prevent="prosesSimpan">
            <input v-model="namaInput" type="text" placeholder="Masukkan nama kamu..." required />
            <button type="submit">Simpan & Pindah Halaman</button>
        </form>

        <p v-if="pesan" style="color: green;">{{ pesan }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// useRouter = alat buat mindahin halaman lewat kode kodingan
const router = useRouter()

const namaInput = ref('')
const pesan = ref('')

function prosesSimpan() {
  pesan.value = `Data ${namaInput.value} disimpan! Mengalihkan...`
  setTimeout(() => {
    router.push('/t24-sukses')
  }, 1000)
}
</script>