<template>
  <div class="wadah-t22">
    <h2>Task T2.2 — Uji Coba Jebakan Warna Hardcode</h2>
    <p>Coba toggle Dark Mode dari tombol di header (App.vue), lalu amati perbedaan antara Area A dan Area B!</p>

    <div class="kartu-eksperimen">
      <!-- AREA A: PAKAI TOKEN (BENAR) -->
      <div class="area-token">
        <h4>Area A: Pakai Token CSS (var)</h4>
        <p>Background: <code>var(--color-surface)</code> | Teks: <code>var(--color-text)</code></p>
        <p>Status: Otomatis berubah warna pas Dark Mode aktif.</p>
      </div>

      <!-- AREA B: HARDCODE MANUAL (JEBAKAN/SALAH) -->
      <div class="area-hardcode">
        <h4>Area B: Hardcode Manual (#ffffff & #222)</h4>
        <p>Background: <code>#ffffff</code> | Teks: <code>#222222</code></p>
        <p>Status: NYANGKUT! Tetap putih terang walau mode diganti ke Dark.</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.wadah-t22 {
  padding: var(--spacing-md, 16px);
}

/* AREA A: Menggunakan Token Tema */
.area-token {
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: var(--spacing-md, 16px);
  margin-bottom: var(--spacing-md, 16px);
  border-radius: var(--spacing-xs, 4px);
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* AREA B: Hardcode Warna Baku */
.area-hardcode {
  background-color: #ffffff; /* Hardcode Putih Baku */
  color: #222222;            /* Hardcode Hitam Baku */
  border: 1px solid #cccccc;  /* Hardcode Garis Abu */
  padding: var(--spacing-md, 16px);
  border-radius: var(--spacing-xs, 4px);
}
</style>