<template>
  <div class="wadah-task-t21">
    <h2>Task T2.1 — Dark Mode Dasar</h2>

    <!-- Putaran 1 -->
    <section class="seksi-putaran">
      <h3>Putaran 1: Toggle Dark Mode (Komponen Pertama)</h3>

      <!-- Kita kasih class dinamis :class="{ 'mode-dark-lokal': isDarkLokal }" biar cuma box ini & putaran 2 yang berubah -->
      <div class="box-demo" :class="{ 'mode-dark-lokal': isDarkLokal }">
        <h4>Kartu Demo Dark Mode</h4>
        <p>Gunakan tombol di bawah untuk mengubah mode khusus di dalam komponen ini saja (tanpa ngubah luar).</p>
        <!-- TOMBOL LOKAL PUTARAN 1 -->
        <button class="btn-toggle" @click="toggleDarkModeLokal">
          Toggle Theme Lokal (Aktif: {{ isDarkLokal ? 'Dark' : 'Light' }})
        </button>
      </div>
    </section>

    <hr />

    <!-- Putaran 2 -->
    <section class="seksi-putaran">
      <h3>Putaran 2: Komponen Kedua (Kartu Profil / Status)</h3>
      <p>Komponen ini TIDAK punya tombol toggle sendiri, tapi warnanya ikut berubah saat saklar lokal di atas diklik!</p>

      <div class="kartu-profil" :class="{ 'mode-dark-lokal': isDarkLokal }">
        <div class="badge-status">Status: Aktif</div>
        <h4>Jaxk Milles</h4>
        <p class="role-teks">Manajer - PT Freeport Indonesia</p>
        <div class="info-footer">
          <span>Sistem: Vue 3 + Design Tokens</span>
        </div>
      </div>
    </section>

    <hr />

    <!-- Putaran 3 -->
    <section class="seksi-putaran">
      <h3>Putaran 3: Global Saklar & LocalStorage</h3>
      <div class="box-info" :class="{ 'mode-dark-lokal': isDarkLokal }">
        <p>✅ Saklar dipindah ke header utama (App.vue) agar bisa diakses dari mana saja.</p>
        <p>✅ Nilai tema disimpan ke localStorage agar tidak reset balik ke mode terang saat di-refresh.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// State khusus lokal (cuma ngatur box di halaman ini aja)
const isDarkLokal = ref(false)

// Fungsi saklar lokal: Cuma membalikkan nilai true/false lokal tanpa nyentuh tag <html>
function toggleDarkModeLokal() {
  isDarkLokal.value = !isDarkLokal.value
}
</script>

<style scoped>
.wadah-task-t21 {
  padding: var(--spacing-md);
}

.seksi-putaran {
  margin-bottom: var(--spacing-lg);
}

/* Style Default Box (Light Mode Lokal) */
.box-demo,
.kartu-profil,
.box-info {
  background-color: var(--color-grey-0, #ffffff);
  color: var(--color-grey-900, #212529);
  border: 1px solid var(--color-border, #e9ecef);
  padding: var(--spacing-md);
  border-radius: var(--spacing-xs);
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Style saat Mode Dark Lokal Aktif (Cuma ngefek ke box ini aja!) */
.box-demo.mode-dark-lokal,
.kartu-profil.mode-dark-lokal,
.box-info.mode-dark-lokal {
  background-color: #2b3035 !important;
  color: #ffffff !important;
  border-color: #6c757d !important;
}

.btn-toggle {
  background-color: var(--color-navy-500, #1a73e8);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--spacing-xs);
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-sm);
}

.badge-status {
  display: inline-block;
  background-color: var(--color-navy-500, #1a73e8);
  color: white;
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
}

.kartu-profil h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.role-teks {
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-md);
}

.info-footer {
  border-top: 1px solid var(--color-border);
  padding-top: var(--spacing-sm);
  font-size: var(--font-size-sm);
}
</style>