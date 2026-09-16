<template>
    <span :class="{ selesai: item.selesai }" @click="toggleSelesai">
        {{ item.teks }}
    </span>

    <br>
    <span :class="{ penting: item1.kategori === 'penting' }" @click="toggleKategori">
        {{ item1.teks }}
    </span>

    <br>
    <span :class="{ aktif: item2.aktif, prioritas: item2.prioritas}">
        {{ item2.teks }}
    </span>
</template>

<script setup>
import { ref } from 'vue'

const item = ref({
    teks: 'Belajar Vue',
    selesai: false
})

function toggleSelesai() {
    item.value.selesai = !item.value.selesai
}

const item1 = ref({
    teks: 'Baca Vue',
    kategori: 'penting'
})

function toggleKategori() {
    if (item1.value.kategori === 'penting') {
        item1.value.kategori = 'biasa'
    } else {
        item1.value.kategori = 'penting'
    }
}

const item2 = ref({
    teks: 'Kerjakan Tugas',
    aktif: true,
    prioritas: true
})
</script>

<style scoped>
.selesai {
    text-decoration: line-through;
    color: #888;
}

.penting {
    font-weight: bold;
    color: red;
}

.aktif {
    background-color: yellow;
}

.prioritas {
    font-weight: bold;
}
</style>