<template>
  <div>
    <label>Komponen Anak Rusak: </label>
    <!-- Menerima prop 'teksInput', tapi meng-emit 'update:modelValue' -->
    <input 
      type="text" 
      :value="teksInput" 
      @input="$emit('update:modelValue', $event.target.value)" 
      placeholder="Ketik di sini..."
    />
  </div>
</template>

<script setup>
// Prop sengaja DIRUSAK (harusnya 'modelValue')
defineProps({
  teksInput: {
    type: String,
    default: ''
  }
})

// Emit TETAP nama lama
defineEmits(['update:modelValue'])
</script>