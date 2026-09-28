<template>
    <h2>Putaran 1 - @click.prevent</h2>
    <a href="#" @click.prevent="tesKlik">Klik disini coba</a>

    <h2>Putaran 2 - @input</h2>
    <input type="text" @input="handleinput" placeholder="Coba ketik disini">

    <h2>Putaran 3 - @keyup.enter</h2>
    <input type="text" @keyup.enter="tekanEnter" placeholder="Ketik lalu tekan Enter">
</template>

<script setup>
function tesKlik() {
    alert('Berhasil, @click.prevent jalan!')
}

function handleinput() {
    console.log('Input berubah!')
}

function tekanEnter() {
    alert('Enter berhasil!')
}
</script>

<style scoped>
h2 {
    margin-top: 2rem;
}
</style>