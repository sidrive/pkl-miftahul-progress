<template>
  <div class="grup-container">
    <h2>Modul T2 — Vue Router 4 Exploration</h2>
    <p>
      Kumpulan latihan Vue Router dari T2.1 sampai T2.4.
    </p>

    <!-- T2.1 -->
    <section class="bagian-task">
      <h3>Bagian 1: Routing Dasar (T2.1)</h3>
      <T2_1_W4 />
    </section>
    <hr />

    <!-- T2.2 -->
    <section class="bagian-task">
      <h3>Bagian 2: Dynamic Route Params (T2.2)</h3>
      <p>
        Latihan dynamic route menggunakan data produk, artikel,
        dan kategori.
      </p>

      <div class="menu-route">
        <router-link to="/produk" class="btn-route">
          Buka T2.2 — Produk
        </router-link>

        <router-link to="/artikel" class="btn-route">
          Buka T2.2 — Artikel
        </router-link>

        <router-link to="/kategori" class="btn-route">
          Buka T2.2 — Kategori
        </router-link>
      </div>
    </section>
    <hr />

    <!-- T2.3 -->
    <section class="bagian-task">
      <h3>Bagian 3: Component Reuse (T2.3)</h3>
      <p>
        Percobaan perpindahan dynamic route tanpa reload halaman.
      </p>

      <router-link to="/uji-t23/1" class="btn-route">
        Buka T2.3 — Component Reuse
      </router-link>
    </section>
    <hr />

    <!-- T2.4 -->
    <section class="bagian-task">
      <h3>Bagian 4: Navigasi Terprogram & Query Params (T2.4)</h3>

      <router-link to="/t24" class="btn-route">
        Buka T2.4
      </router-link>
    </section>
  </div>
</template>

<script setup>
import T2_1_W4 from '../T2-W4/T2.1-W4.vue'
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

.menu-route {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
  justify-content: center;
}

.btn-route {
  display: inline-block;
  background-color: #2a2a2a;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #444;
}

.btn-route:hover {
  background-color: #00ffb3;
  color: #1a1a1a;
  border-color: #00ffb3;
}
</style>