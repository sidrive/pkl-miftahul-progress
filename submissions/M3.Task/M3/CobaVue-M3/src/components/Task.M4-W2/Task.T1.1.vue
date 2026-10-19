<template>
  <div>
    <h2>Task T1.1 — Design Token Dasar (3 Putaran)</h2>

    <!-- SEKSI PUTARAN 1: TOKEN WARNA -->
    <section class="seksi-putaran">
      <h3>Putaran 1: Token Warna</h3>
      <div class="demo-warna">
        <h4>Judul Kartu (Navy 900)</h4>
        <p>Teks deskripsi menggunakan warna grey-900 di atas latar grey-50.</p>
        <button class="btn-warna">Tombol Utama (Navy 500)</button>
      </div>
    </section>

    <hr />

    <!-- SEKSI PUTARAN 2: TOKEN SPACING -->
    <section class="seksi-putaran">
      <h3>Putaran 2: Token Spacing</h3>
      <div class="demo-spacing">
        <h4>Judul Kartu Spacing</h4>
        <p>Kartu ini menggunakan token spacing (padding md, margin-bottom lg) alih-alih nilai px hardcode.</p>
        <button class="btn-spacing">Tombol Spacing (Padding sm & md)</button>
      </div>
    </section>

    <!-- SEKSI PUTARAN 3: TOKEN TYPOGRAPHY -->
    <section class="seksi-putaran">
      <h3>Putaran 3: Token Typography</h3>
      <div class="demo-typography">
        <h4 class="judul-typo">Judul Kartu (Font XL + Bold)</h4>
        <p class="teks-utama">Teks utama pakai ukuran font-size-md dan font-weight-regular.</p>
        <p class="teks-keterangan">Teks keterangan kecil menggunakan font-size-sm dan font-weight-medium.</p>
        <button class="btn-typo">Tombol Typo (Font MD + Bold)</button>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.seksi-putaran {
  margin-bottom: 20px;
}

/* --- PUTARAN 1: Hanya Menggunakan Token Warna --- */
.demo-warna {
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  color: var(--color-grey-900);
}

.demo-warna h4 {
  color: var(--color-navy-900);
}

.btn-warna {
  background-color: var(--color-navy-500);
  color: var(--color-grey-0);
  border: none;
}

/* --- PUTARAN 2: Menggunakan Token Spacing (+ Token Warna) --- */
.demo-spacing {
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  color: var(--color-grey-900);

  /* Penerapan Token Spacing khusus Putaran 2 */
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  border-radius: var(--spacing-xs);
}

.demo-spacing h4 {
  color: var(--color-navy-900);
  margin-bottom: var(--spacing-sm);
}

.demo-spacing p {
  margin-bottom: var(--spacing-md);
}

.btn-spacing {
  background-color: var(--color-navy-500);
  color: var(--color-grey-0);
  border: none;

  /* Spacing khusus Tombol Putaran 2 */
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--spacing-xs);
}

/* --- PUTARAN 3: Token Typography (+ Warna & Spacing) --- */
.demo-typography {
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  color: var(--color-grey-900);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  border-radius: var(--spacing-xs);
}

.judul-typo {
  color: var(--color-navy-900);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
}

.teks-utama {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-normal);
  margin-bottom: var(--spacing-xs);
}

.teks-keterangan {
  color: var(--color-grey-500);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-md);
}

.btn-typo {
  background-color: var(--color-navy-500);
  color: var(--color-grey-0);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--spacing-xs);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
}
</style>