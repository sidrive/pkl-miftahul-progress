<template>
  <div class="wadah-t31">
    <h2>Task T3.1 — Mini Component DsButton</h2>

    <section class="seksi-putaran">
      <h3>Putaran 1: Varian Warna</h3>
      <div class="area-tombol">
        <!-- Varian Primary (Default) -->
        <DsButton variant="primary">Tombol Primary</DsButton>

        <!-- Varian Secondary -->
        <DsButton variant="secondary">Tombol Secondary</DsButton>

        <!-- Varian Danger -->
        <DsButton variant="danger">Tombol Danger</DsButton>

        <!-- Tombol Waning -->
        <DsButton variant="warning">Tombol Warning</DsButton>
      </div>
    </section>
    <hr  />

    <section class="seksi-putaran">
        <h3>Putaran 2: Varian Ukuran</h3>
        <div class="area-tombol">
            <!-- Ukuran Small -->
            <DsButton size="small">Tombol Small</DsButton>

            <!-- Ukuran Medium (Default) -->
            <DsButton size="medium">Tombol Medium</DsButton>

            <!-- Ukuran Large -->
            <DsButton size="large">Tombol Large</DsButton>
        </div>
    </section>
    <hr  />

    <section class="seksi-putaran">
        <h3>Ptaran 3: Kombinasi Disabled State</h3>
        <div class="area-tombol">
            <!-- Kombinasi: Danger + Small + Normal -->
            <DsButton variant="danger" size="small">
            Danger Small
            </DsButton>

            <!-- Kombinasi: Primary + Large + Disabled -->
            <DsButton variant="primary" size="large" :disabled="true">
            Primary Large (Disabled)
            </DsButton>

            <!-- Kombinasi: Secondary + Medium + Disabled -->
            <DsButton variant="secondary" size="medium" :disabled="true">
            Secondary (Disabled)
            </DsButton>
        </div>
    </section>
  </div>
</template>

<script setup>
import DsButton from './DsButton.vue'
</script>

<style scoped>
.area-tombol {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
  justify-content: center;
}

.wadah-t31 {
  padding: var(--spacing-md);
}

.seksi-putaran {
  margin-bottom: var(--spacing-lg);
}

.area-tombol {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}
</style>