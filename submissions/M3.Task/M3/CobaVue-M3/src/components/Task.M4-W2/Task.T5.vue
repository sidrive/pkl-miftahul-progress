<template>
  <!-- Atribut data-theme dipasang lokal di sini -->
  <div class="storybook-container" :data-theme="isDark ? 'dark' : 'light'">
    <div class="header-section">
      <h2>🎨 Mini Storybook Component Showcase</h2>
      <p class="deskripsi">Showcase semua komponen Design System Ds* (M4.W2)</p>
      
      <!-- TOGGLE DARK MODE LOKAL -->
      <DsButton variant="secondary" size="medium" @click="toggleDarkMode">
        {{ isDark ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode' }}
      </DsButton>
    </div>

    <hr class="pembatas" />

    <!-- 1. SHOWCASE DSBUTTON -->
    <section class="storybook-section">
      <h3>1. Component: DsButton</h3>
      
      <DsCard variant="outlined" class="mb-md">
        <h4 class="sub-judul">A. Varian Warna (Variant)</h4>
        <div class="group-demo">
          <DsButton variant="primary">Primary (Navy)</DsButton>
          <DsButton variant="secondary">Secondary (Grey)</DsButton>
          <DsButton variant="danger">Danger (Red)</DsButton>
          <DsButton variant="success">Success (Kasir Mint/Teal)</DsButton>
        </div>
      </DsCard>

      <DsCard variant="outlined" class="mb-md">
        <h4 class="sub-judul">B. Ukuran (Size)</h4>
        <div class="group-demo items-center">
          <DsButton variant="primary" size="small">Small Button</DsButton>
          <DsButton variant="primary" size="medium">Medium Button</DsButton>
          <DsButton variant="primary" size="large">Large Button</DsButton>
        </div>
      </DsCard>

      <DsCard variant="outlined" class="mb-md">
        <h4 class="sub-judul">C. Kondisi Terkunci (Disabled State)</h4>
        <div class="group-demo">
          <DsButton variant="primary" :disabled="true">Disabled Primary</DsButton>
          <DsButton variant="success" :disabled="true">Disabled Success</DsButton>
        </div>
      </DsCard>
    </section>

    <!-- 2. SHOWCASE DSCARD -->
    <section class="storybook-section">
      <h3>2. Component: DsCard</h3>
      
      <div class="grid-card">
        <DsCard variant="outlined">
          <h4 class="sub-judul">Kartu Demo Outlined 1</h4>
          <p class="teks-isi">
            Ini contoh kartu menggunakan komponen <code>DsCard</code> dengan varian <code>outlined</code>. Warnanya otomatis ikut berubah pas Dark Mode di-toggle.
          </p>
        </DsCard>

        <DsCard variant="outlined">
          <h4 class="sub-judul">Kartu Demo Outlined 2</h4>
          <p class="teks-isi">
            Komponen ini menjaga kerapian layout dan konsistensi warna antar halaman tanpa hardcode warna manual.
          </p>
        </DsCard>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DsButton from './DsButton.vue'
import DsCard from './DsCard.vue'

// State lokal untuk Dark Mode
const isDark = ref(true)

function toggleDarkMode() {
  isDark.value = !isDark.value
}
</script>

<style scoped>
.storybook-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: var(--spacing-md);
  border-radius: var(--spacing-sm);
  transition: all 0.3s ease;
}

/* =========================================
   KONDISI LOKAL T5: LIGHT MODE
   ========================================= */
.storybook-container[data-theme="light"] {
  background-color: var(--color-grey-0);
  color: var(--color-grey-900);
  border: 1px solid var(--color-grey-100);
}

.storybook-container[data-theme="light"] h2,
.storybook-container[data-theme="light"] h3,
.storybook-container[data-theme="light"] h4,
.storybook-container[data-theme="light"] p,
.storybook-container[data-theme="light"] .deskripsi,
.storybook-container[data-theme="light"] .sub-judul {
  color: var(--color-grey-900) !important;
}

/* Paksa DsCard lokal T5 berubah jadi Light Mode */
.storybook-container[data-theme="light"] :deep(.ds-card) {
  background-color: var(--color-grey-0) !important;
  border-color: var(--color-grey-100) !important;
  color: var(--color-grey-900) !important;
}

/* =========================================
   KONDISI LOKAL T5: DARK MODE
   ========================================= */
.storybook-container[data-theme="dark"] {
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  border: 1px solid var(--color-grey-500);
}

.storybook-container[data-theme="dark"] h2,
.storybook-container[data-theme="dark"] h3,
.storybook-container[data-theme="dark"] h4,
.storybook-container[data-theme="dark"] p,
.storybook-container[data-theme="dark"] .deskripsi,
.storybook-container[data-theme="dark"] .sub-judul {
  color: var(--color-grey-0) !important;
}

/* Paksa DsCard lokal T5 berubah jadi Dark Mode */
.storybook-container[data-theme="dark"] :deep(.ds-card) {
  background-color: #2b3035 !important;
  border-color: var(--color-grey-500) !important;
  color: var(--color-grey-0) !important;
}

/* =========================================
   LAYOUT & UTILITY
   ========================================= */
.header-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
}

.pembatas {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin: var(--spacing-md) 0;
}

.storybook-section {
  margin-bottom: var(--spacing-lg);
}

.mb-md {
  margin-bottom: var(--spacing-md);
}

.group-demo {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.items-center {
  align-items: center;
}

.grid-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
}

.teks-isi {
  margin: 0;
  line-height: 1.5;
}

code {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2px 6px;
  border-radius: var(--spacing-xs);
  font-family: monospace;
}
</style>