<template>
    <div class="resto">
        <strong>
            {{ namaResto }}
        </strong>
        <p>Menu:</p>
        <ul>
            <li v-for="item in menu" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps(['namaResto', 'menu'])
</script>

<style scoped>
ul {
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  margin: 0 auto;
}
</style>