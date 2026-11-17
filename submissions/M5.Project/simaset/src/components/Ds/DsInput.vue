<template>
  <div class="ds-input-group">
    <!-- Label muncul cuma kalau prop label diisi -->
    <label v-if="label">{{ label }}</label>
    
    <!-- Input element -->
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{ 'ds-input--error': error }"/>
    
    <!-- Pesan error muncul cuma kalau prop error ada isinya -->
    <small v-if="error" class="ds-input__error-msg">{{ error }}</small>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  error: String,
  modelValue: [String, Number],
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.ds-input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
  text-align: left;
}

label {
  color: var(--color-text, #212529);
  font-weight: 600;
  font-size: 0.9rem;
}

input {
  /* Menggunakan Token Surface & Text agar dinamis di Light & Dark mode */
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text, #212529);
  border: 1px solid var(--color-border, #6c757d);
  padding: 10px 14px;
  border-radius: 6px;
  outline: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

/* Placeholder tetap kelihatan samar tapi terbaca */
input::placeholder {
  color: var(--color-grey-500, #888888);
  opacity: 0.7;
}

input:focus {
  border-color: var(--color-navy-500, #007bff);
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.ds-input--error {
  border-color: var(--color-danger-500, #ff4757) !important;
}

.ds-input__error-msg {
  color: var(--color-danger-500, #ff4757);
  font-size: 12px;
  font-weight: 500;
}
</style>