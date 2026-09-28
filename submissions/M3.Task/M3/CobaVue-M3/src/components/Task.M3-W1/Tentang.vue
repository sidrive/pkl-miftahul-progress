<template>
    <div class="halaman-tentang">
        <h2>Ini Halaman Tentang Us</h2>
        <p>Lagi coba pakai Vue 3!</p>
    </div>

    <br>
    <p> klik link ini <a href="https://youtube.com" target="_blank">YouTube</a></p> 
    <!-- pakai target="_blank" biar linknya dibuka di tab baru, bukan di tab yang sama. -->
</template>

<script setup>
</script>

<style scoped>
    .halaman-tentang {
        background-color: #616161;
        padding: 2rem;
        border-radius: 8px;
        max-width: 600px;
        margin: 0 auto;
        margin-top: 2rem;
    }
    h2 {
        color: blue;
    }
</style>