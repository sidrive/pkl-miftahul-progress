<template>
  <li class="todo-item">
    <!-- Checkbox status -->
    <input 
      type="checkbox" 
      :checked="todo.selesai" 
      @change="$emit('toggle', todo.id)" 
    />

    <!-- Teks Task -->
    <span 
      :class="{ selesai: todo.selesai }"
      @click="$emit('toggle', todo.id)"
    >
      {{ todo.teks }}
    </span>

    <!-- Kategori Label -->
    <small>[{{ todo.kategori }}]</small>

    <!-- Tombol Aksi -->
    <div class="button">
    <button type="button" @click="$emit('edit', todo.id)">Edit</button> | 
    <button type="button" @click="$emit('hapus', todo.id)">Hapus</button>
    </div>
  </li>
</template>

<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle', 'edit', 'hapus'])
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #ffffff;
}
span {
  cursor: pointer;
}
span.selesai {
  text-decoration: line-through;
  color: #888;
}
small {
  color: #a0aec0;
  margin-right: 2px;
}
button {
  background-color: #3a4479;
  color: #a0aec0;
  border: 1px solid #4a5568;
  padding: 2px 4px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
button:hover {
  background-color: #444;
}
</style>