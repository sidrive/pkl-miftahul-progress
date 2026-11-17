<!-- File: src/components/Task.M4-W2/DsCard.vue -->
<template>
  <div :class="['ds-card', `ds-card--${variant}`, { 'ds-card--hoverable' : hoverable }]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  // Saklar Varian Kartu (Putaran 2)
  variant: {
    type: String,
    default: 'outlined' // Opsi: 'outlined' | 'elevated'
  },
  // Saklar 2: Opsi Interaktif Hover (Putaran 3 BARU)
  hoverable: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* Styling dasar kartu */
.ds-card {
  background-color: var(--color-surface);
  color: var(--color-text);
  border-radius: var(--spacing-xs);
  padding: var(--spacing-md);
  transition: all 0.2s ease;
}

/* Putaran 2: Varian Outlined (Punya Garis Pinggir) */
.ds-card--outlined {
  border: 1px solid var(--color-border);
  border-radius: 10px;
}

/* Putaran 2: Varian Elevated (Melayang/Punya Bayangan) */
.ds-card--elevated {
  border: 1px solid transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Putaran 3: Efek Hover untuk Kartu Interaktif */
.ds-card--hoverable {
  cursor: pointer;
}

.ds-card--hoverable:hover {
  transform: translateY(-5px);
  border-color: var(--color-navy-500);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>