<template>
    <div class="produk-card">
        <h3>
            {{ namaProduk }}
        </h3>
        <p class="harga">Harga: Rp {{ harga }}</p>
        <p>Fitur Utama:</p>
        <ul>
            <li v-for="item in fitur" :key="item.id">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps(['namaProduk', 'harga', 'fitur'])
</script>

<style scoped>
ul {
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  margin: 0 auto;
}
</style>