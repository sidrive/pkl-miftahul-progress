<template>
  <div class="container-task">
    <h2>Task T2.1 — DsBadge / Tag Status</h2>
    
    <section class="mb-md">
      <h3>Putaran 1: Status Akun (2 Status)</h3>
      <div class="badge-list">
        <div class="badge-item">
          <span>Status Akun 1:</span>
          <DsBadge status="aktif" />
        </div>
        <div class="badge-item">
          <span>Status Akun 2:</span>
          <DsBadge status="nonaktif" />
        </div>
        <div class="badge-item">
          <span>Status Akun 3:</span>
          <DsBadge status="hilang" />
        </div>
      </div>
    </section>
    <br>
    <hr class="pembatas" />

    <section class="mb-md">
      <h3>Putaran 2: Status Pesanan (Topik Berbeda)</h3>
      <div class="badge-list">
        <div class="badge-item">
          <span>Pesanan #1001:</span>
          <DsBadge status="diproses" />
        </div>
        <div class="badge-item">
          <span>Pesanan #1002:</span>
          <DsBadge status="selesai" />
        </div>
        <div class="badge-item">
          <span>Pesanan #1003:</span>
          <DsBadge status="dibatalkan" />
        </div>
        <div class="badge-item">
          <span>Pesanan #1004:</span>
          <DsBadge status="retur" />
        </div>
      </div>
    </section>
    <br>
    <hr class="pembatas" />

    <section>
      <h3>Putaran 3: Status Stok Barang (4+ Varian Sekaligus)</h3>
      <div class="badge-list">
        <div class="badge-item">
          <span>Kopi Espresso:</span>
          <DsBadge status="melimpah" />
        </div>
        <div class="badge-item">
          <span>Susu UHT:</span>
          <DsBadge status="menipis" />
        </div>
        <div class="badge-item">
          <span>Syrup Vanilla:</span>
          <DsBadge status="habis" />
        </div>
        <div class="badge-item">
          <span>Bijik Kopi Impor:</span>
          <DsBadge status="indent" />
        </div>
        <div class="badge-item">
          <span>Mailo:</span>
          <DsBadge status="kosong" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DsBadge from './DsBadge.vue'
</script>

<style scoped>
.container-task {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  color: var(--color-text, #212529);
}

h2, h3 {
  color: var(--color-text, #212529);
}

.mb-md {
  margin-bottom: 24px;
}

.pembatas {
  margin: 24px 0;
  border: 0;
  border-top: 1px solid var(--color-border, #ccc);
}

.badge-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}

.badge-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid var(--color-border, #6c757d);
  border-radius: 8px;
  background-color: var(--color-surface, #ffffff);
}
</style>