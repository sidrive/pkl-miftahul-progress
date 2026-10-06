<template>
  <div>
    <!-- Input 1: Terikat ke v-model:nama -->
    <div>
      <label>Nama Pengguna: </label>
      <input 
        type="text" 
        :value="nama" 
        @input="$emit('update:nama', $event.target.value)" 
        placeholder="Ketik nama..."
      />
    </div>
    <br>

    <!-- Input 2: Terikat ke v-model:aktif -->
    <div>
      <label>
        <input type="checkbox" :checked="aktif" @change="$emit('update:aktif', $event.target.checked)" />
        Status Aktifkan Akun
      </label>
    </div>
  </div>
</template>

<script setup>
// Prop menerima nama argumen sesuai v-model:nama dan v-model:aktif
defineProps({
  nama: {
    type: String,
    default: ''
  },
  aktif: {
    type: Boolean,
    default: false
  }
})

// Registered emit event menyesuaikan: update:nama dan update:aktif
defineEmits(['update:nama', 'update:aktif'])
</script>