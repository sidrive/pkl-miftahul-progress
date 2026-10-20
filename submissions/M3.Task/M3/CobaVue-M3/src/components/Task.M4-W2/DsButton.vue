<!-- Bagian dari pengerjaan Task T3.1 -->
=========================================

<template>
  <div>
    <!-- Class dinamis ditambahin `ds-button--${size}` -->
    <button :class="['ds-button', `ds-button--${variant}`, `ds-button--${size}`]" :disabled="disabled">
      <slot />
    </button>

  </div>
</template>

<script setup>
defineProps({
  // Saklar 1: Varian Warna (Putaran 1)
  variant: {
    type: String,
    default: 'primary'
  },
  // Saklar 2: Varian Ukuran (Putaran 2)
  size: {
    type: String,
    default: 'medium' // Opsi: 'small' | 'medium' | 'large'
  },
  // Saklar 3: Pengunci Tombol (Putaran 3 BARU)
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* Styling dasar tombol (polos) */
.ds-button {
  cursor: pointer;
  border-radius: var(--spacing-xs);
  border: 1px solid transparent;
  font-weight: var(--font-weight-bold);
  transition: all 0.2s ease;
}

/* Varian Warna (Putaran 1) */
.ds-button--primary {
  background-color: var(--color-navy-500);
  color: var(--color-grey-0);
}

.ds-button--secondary {
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  border-color: var(--color-grey-500);
}

.ds-button--danger {
  background-color: #ff4757;
  color: var(--color-grey-0);
}

/* --- Putaran 2: Varian Ukuran (Menggunakan Token Spacing & Typography) --- */
.ds-button--small {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.ds-button--medium {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-md);
}

.ds-button--large {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-lg);
}

/* Styling saat tombol di-disable (Putaran 3) */
.ds-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none; /* Mencegah aksi klik sama sekali */
}
</style>