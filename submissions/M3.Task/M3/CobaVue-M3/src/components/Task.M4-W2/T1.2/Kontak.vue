<template>
  <div class="halaman-kontak">
    <h2>Halaman Kontak Us</h2>
    <p>Hubungi kami via email: <strong>kontak@websiteku.com</strong></p>
    <br>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=complain@example.com&su=Tanya%20Website&body=Saya%20Mau%20protes%21" target="_blank" class="link-aksi">
      Kirim Pesan via Gmail
    </a>
    <br><br>
    <p>Atau klik link ini untuk chat langsung:</p>
    <a href="https://wa.me/1234567890" target="_blank" class="link-aksi">Chat saya di WhatsApp</a>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Pakai token grey-500/navy-100 agar mirip tampilan lama #4a5568 */
.halaman-kontak {
  background-color: var(--color-grey-500);
  color: var(--color-grey-0);
  padding: var(--spacing-lg);
  border-radius: var(--spacing-xs);
  max-width: 600px;
  margin: var(--spacing-lg) auto 0 auto;
}

h2 {
  color: var(--color-grey-0);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
}

.link-aksi {
  color: var(--color-navy-100);
  text-decoration: underline;
}
</style>