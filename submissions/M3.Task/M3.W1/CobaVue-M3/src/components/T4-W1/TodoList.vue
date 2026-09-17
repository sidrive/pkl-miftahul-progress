<template>
  <li class="todo-item">
    <!-- Checkbox status selesai -->
    <input 
      type="checkbox" 
      :checked="todo.selesai" 
      @change="$emit('toggle', todo.id)" 
    />

    <!-- Teks task dikasih class dinamis -->
    <span 
      :class="{ selesai: todo.selesai }"
      @click="$emit('toggle', todo.id)"
    >
      {{ todo.teks }}
    </span>

    <!-- Tombol Edit (Fitur dari indexT2.js) -->
    <button type="button" @click="$emit('edit', todo.id)">Edit</button>

    <!-- Tombol Hapus -->
    <button type="button" @click="$emit('hapus', todo.id)">Hapus</button>
  </li>
</template>

<script setup>
defineProps(['todo'])
defineEmits(['toggle', 'edit', 'hapus'])
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  list-style: none;
}

.selesai {
  text-decoration: line-through;
  color: #888;
}

span {
  cursor: pointer;
}
</style>