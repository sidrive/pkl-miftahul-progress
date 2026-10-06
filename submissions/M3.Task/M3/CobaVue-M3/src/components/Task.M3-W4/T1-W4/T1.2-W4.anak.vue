<template>
  <div>
    <label>Komponen Anak (Input Teks): </label>
    <input 
      type="text" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      placeholder="Ketik di komponen anak..."
    />
  </div>
</template>

<script setup>
// Menerima prop 'modelValue' dari parent
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

// Mendaftarkan event 'update:modelValue' ke parent
defineEmits(['update:modelValue'])
</script>