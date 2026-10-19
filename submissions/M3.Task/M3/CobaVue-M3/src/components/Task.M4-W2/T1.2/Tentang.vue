<template>
  <div class="halaman-tentang">
    <h2>Ini Halaman Tentang Us</h2>
    <p>Lagi coba pakai Vue 3!</p>
    <br>
    <p>Klik link ini <a href="https://youtube.com" target="_blank" class="link-yt">YouTube</a></p>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Pakai token grey-500 agar warnanya abu-abu mirip style lama #616161 */
.halaman-tentang {
  background-color: var(--color-grey-500);
  color: var(--color-grey-0);
  padding: var(--spacing-lg);
  border-radius: var(--spacing-xs);
  max-width: 600px;
  margin: var(--spacing-lg) auto 0 auto;
}

h2 {
  color: var(--color-navy-100);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
}

.link-yt {
  color: var(--color-navy-50);
  font-weight: var(--font-weight-bold);
}
</style>