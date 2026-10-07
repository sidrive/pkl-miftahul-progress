<template>
  <input
    class="input-custom"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script setup>
// nerima data dari luar (props)
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Ketik sesuatu...'
  }
})

// daftarin sinyal pengirim data ke luar (emits)
defineEmits(['update:modelValue'])
</script>

<style scoped>
.input-custom {
  background-color: #1a1a2e;
  border: 1px solid #4a5568;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

.input-custom:focus {
  border-color: #00ffb3;
}
</style>