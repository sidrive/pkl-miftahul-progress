<template>
  <div class="storybook-container">
    <div class="header-section">
      <h2>🎨 Mini Storybook Component Showcase</h2>
      <p class="deskripsi">Showcase semua komponen Design System Ds* (M4.W2)</p>
      
      <!-- TOGGLE DARK MODE -->
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
const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark')

function toggleDarkMode() {
  isDark.value = !isDark.value
  const newTheme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', newTheme)
}
</script>

<style scoped>
.storybook-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: var(--spacing-sm);
  color: var(--color-text);
}

.header-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
}

.deskripsi {
  color: var(--color-text);
  opacity: 0.8;
  margin: 0;
}

.pembatas {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin: var(--spacing-md) 0;
}

.storybook-section {
  margin-bottom: var(--spacing-lg);
}

.storybook-section h3 {
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.sub-judul {
  margin-top: 0;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
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
  color: var(--color-text);
  margin: 0;
  line-height: 1.5;
}

code {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 2px 6px;
  border-radius: var(--spacing-xs);
  font-family: monospace;
}
</style>