<template>
  <li class="todo-item">
    <!-- kotak centang status selesai -->
    <input 
      type="checkbox" 
      :checked="todo.selesai" 
      @change="$emit('toggle', todo.id)" 
    />

    <!-- Teks nama tugas -->
    <span 
      :class="{ selesai: todo.selesai }"
      @click="$emit('toggle', todo.id)"
    >
      {{ todo.teks }}
    </span>

    <!-- Label kategori -->
    <small>[{{ todo.kategori }}]</small>

    <!-- Tombol aksi -->
    <div class="button-group">
      <!-- Tombol Edit sekarang pindah halaman ke detail tugas sesuai ID-nya -->
      <router-link :to="`/todo/${todo.id}`" class="btn-edit">
        Edit / Detail
      </router-link>
      
      <!-- Tombol Hapus -->
      <button type="button" class="btn-hapus" @click="$emit('hapus', todo.id)">
        Hapus
      </button>
    </div>
  </li>
</template>

<script setup>
// nerima data 1 todo dari halaman utama
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

// daftarin sinyal centang dan hapus ke halaman utama
defineEmits(['toggle', 'hapus'])
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  background-color: #1a1a2e;
  padding: 8px 12px;
  border-radius: 8px;
}

span {
  cursor: pointer;
  flex: 1;
}

span.selesai {
  text-decoration: line-through;
  color: #718096;
}

small {
  color: #a0aec0;
}

.button-group {
  display: flex;
  gap: 6px;
}

.btn-edit {
  background-color: #3182ce;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  text-decoration: none;
}

.btn-edit:hover {
  background-color: #2b6cb0;
}

.btn-hapus {
  background-color: #e53e3e;
  color: #ffffff;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
}

.btn-hapus:hover {
  background-color: #c53030;
}
</style>