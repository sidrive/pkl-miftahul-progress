<template>
  <div class="ds-select-group">
    <!-- Label muncul jika prop label diisi -->
    <label v-if="label">{{ label }}</label>

    <!-- Tag Select Native -->
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :class="{ 'ds-select--error': error }">
      
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        :disabled="opt.disabled">
        {{ opt.label }}
      </option>
    </select>

    <!-- Pesan Error -->
    <small v-if="error" class="ds-select__error-msg">{{ error }}</small>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  error: String,
  modelValue: [String, Number],
  options: {
    type: Array,
    default: () => [] // Array of object: [{ value: '...', label: '...', disabled: false }]
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.ds-select-group {
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

select {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text, #212529);
  border: 1px solid var(--color-border, #6c757d);
  padding: 10px 14px;
  border-radius: 6px;
  outline: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  cursor: pointer;
}

select:focus {
  border-color: var(--color-navy-500, #007bff);
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.ds-select--error {
  border-color: var(--color-danger-500, #ff4757) !important;
}

.ds-select__error-msg {
  color: var(--color-danger-500, #ff4757);
  font-size: 12px;
  font-weight: 500;
}
</style>