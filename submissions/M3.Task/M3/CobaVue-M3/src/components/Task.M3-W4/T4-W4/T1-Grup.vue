<template>
  <div class="grup-container">
    <h2>Modul T1 — Custom `v-model` & Modifiers</h2>
    
    <!-- Latihan T1.1 -->
    <section class="bagian-task">
      <h3>Bagian 1: Native v-model & Modifiers (T1.1)</h3>
      <T1_1_W4 />
    </section>
    <hr />

    <!-- Latihan T1.2 -->
    <section class="bagian-task">
      <h3>Bagian 2: Custom v-model di Komponen (T1.2)</h3>
      <T1_2_W4 />
    </section>
    <hr />

    <!-- Latihan T1.3 -->
    <section class="bagian-task">
      <h3>Bagian 3: Percobaan & Pertanyaan (T1.3)</h3>
      <T1_3_W4 />
    </section>
  </div>
</template>

<script setup>
// manggil komponen komponen latihan T1 yang sudah dibuat sebelumnya
import T1_1_W4 from '../T1-W4/T1.1-W4.vue'
import T1_2_W4 from '../T1-W4/T1.2-W4.vue'
import T1_3_W4 from '../T1-W4/T1.3-W4.vue'
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