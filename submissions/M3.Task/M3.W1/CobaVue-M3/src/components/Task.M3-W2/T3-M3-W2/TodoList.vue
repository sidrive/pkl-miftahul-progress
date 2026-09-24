<template>
  <li>
    <input 
      type="checkbox" 
      :checked="todo.selesai" 
      @change="$emit('toggle', todo.id)" 
    />

    <!-- teks task -->
    <span 
      :style="{ textDecoration: todo.selesai ? 'line-through' : 'none' }"
      @click="$emit('toggle', todo.id)"
    >
      {{ todo.teks }}
    </span>

    <!-- label Kategori kecil di samping task -->
    <small> [{{ todo.kategori }}] </small>

    <!-- Tombol Hapus -->
    <button type="button" @click="$emit('hapus', todo.id)">Hapus</button>
  </li>
</template>

<script setup>
// nerima objek todo dari induk dengan validasi ketat (Props)
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

// daftar event yang bisa di-emit balik ke induk
defineEmits(['toggle', 'hapus'])
</script>

<style scoped>
</style>