<template>
    <div class="kartu">
        <strong>{{ nama }}</strong> - Nilai: {{ nilai }}
    </div>
</template>

<script setup>
defineProps(['nama', 'nilai'])
</script>

<style scoped>
</style>