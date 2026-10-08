<template>
  <div class="grup-container">
    <h2>Modul T2 — Vue Router 4 Exploration</h2>
    
    <!-- Latihan Routing Dasar T2.1 -->
    <section class="bagian-task">
      <h3>Bagian 1: Routing Dasar (T2.1)</h3>
      <T2_1_W4 />
    </section>
    <hr />

    <!-- Latihan Navigasi Terprogram T2.4 -->
    <section class="bagian-task">
      <h3>Bagian 2: Navigasi Terprogram & Query Params (T2.4)</h3>
      <T2_4_Main />
    </section>
  </div>
</template>

<script setup>
// manggil komponen latihan T2
import T2_1_W4 from '../T2-W4/T2.1-W4.vue'
import T2_4_Main from '../T2.4-W4/pages/T2.4-main.vue'
</script>

<style scoped>
.grup-container {
  padding: 10px;
}

.bagian-task {
  margin-bottom: 25px;
}

hr {
  border: 0;
  border-top: 1px dashed #555;
  margin: 30px 0;
}
</style>