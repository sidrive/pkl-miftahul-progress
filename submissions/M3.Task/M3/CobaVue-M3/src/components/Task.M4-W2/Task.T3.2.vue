<template>
  <div class="wadah-t32">
    <h2>Task T3.2 — Mini Component DsCard</h2>

    <section class="seksi-putaran">
      <h3>Putaran 1: Versi Dasar</h3>
      <div class="area-kartu">
        <DsCard>
          <h4>Judul Kartu Dasar</h4>
          <p>Ini adalah isi konten di dalam DsCard yang memanfaatkan token spacing, border, dan warna surface.</p>
        </DsCard>
      </div>
    </section>
    <hr  />

    <section class="seksi-putaran">
        <h3>Putaran 2: Varian Gaya (Outlined vs Elevated)</h3>
        <div class="area-kartu">
            <!-- Kartu Varian Outlined -->
            <DsCard variant="outlined">
            <h4>Kartu Outlined</h4>
            <p>Menggunakan garis pinggir tegas untuk memisahkan area.</p>
            </DsCard>

            <!-- Kartu Varian Elevated -->
            <DsCard variant="elevated">
            <h4>Kartu Elevated</h4>
            <p>Menggunakan efek bayangan agar kelihatan timbul/melayang.</p>
            </DsCard>
        </div>
    </section>
    <hr />

    <section class="seksi-putaran">
        <h3>Putaran 3: Kombinasi Lengkap & Hoverable</h3>
            <div class="area-kartu">
                <!-- Kartu Outlined biasa (Tidak Interaktif) -->
                <DsCard variant="outlined">
                <h4>Kartu Biasa</h4>
                <p>Arahkan kursor ke sini, tidak ada efek apa-apa.</p>
                </DsCard>

                <!-- Kartu Elevated + Hoverable (Interaktif) -->
                <DsCard variant="elevated" :hoverable="true">
                <h4>Kartu Interaktif (Hoverable)</h4>
                <p>Arahkan kursor ke sini! Kartu bakal terangkat dan border-nya berubah warna.</p>
                </DsCard>
            </div>
    </section>
  </div>
</template>

<script setup>
import DsCard from './DsCard.vue'
</script>

<style scoped>
.wadah-t32 {
  padding: var(--spacing-md);
}

.seksi-putaran {
  margin-bottom: var(--spacing-lg);
}

.area-kartu {
  display: flex;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
}
</style>