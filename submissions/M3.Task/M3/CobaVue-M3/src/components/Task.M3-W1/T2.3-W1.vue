<template>
    <div class="isi">
        <p>Daftar Game</p>

        <ul>
            <li v-for="game in daftarGame" :key="game.id">
                {{ game.nama }} - {{ game.harga }}
            </li>
        </ul>

        <br>

        <p>Daftar Film</p>
        <ul>
            <li v-for="film in daftarFilm" :key="film.no">
                {{ film.name }} - {{ film.rating }}
            </li>
        </ul>

        <br>

        <p>Daftar HP</p>
        <div v-if="HPmantap.length === 0">
            Belum ada data HP
        </div>

        <div v-else>
            <ul>
                <li v-for="HP in HPmantap" :key="HP.no">
                    {{ HP.brand }} - {{ HP.seri }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const daftarGame = ref([
    { id: 1, nama: 'GTA VI', harga: 80000 },
    { id: 2, nama: 'Minecraft', harga: 65000 },
])

const daftarFilm = ref([
    { no: 1, name: 'Koki Hebat', rating: 10 },
    { no: 2, name: 'Racing Fast', rating: 6 },
])

const HPmantap = ref([
    { no: 1, brand: 'Samsung', seri: 'S' },
    { no: 2, brand: 'iPhone', seri: '18 Pro' },
])
</script>

<style scoped>
.isi {
    margin-top: 2rem;
}

ul {
    display: inline-block;
    text-align: left;
    padding-left: 20px;
}

li {
    padding-left: 0;
}
</style>