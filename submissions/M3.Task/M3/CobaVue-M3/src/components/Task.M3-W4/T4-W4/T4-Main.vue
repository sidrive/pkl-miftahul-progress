<template>
  <div class="t4-container">
    <div class="t4-header">
      <h2>Showcase Mini App M3.W4.T4</h2>
      <p>Aplikasi Navigasi Terpadu Hasil Latihan Minggu 4</p>
      
      <!-- Menu Navigasi Sub-Halaman T4 -->
      <div class="nav-sub">
        <router-link to="/t4/t1" class="btn-sub">Modul T1 (v-model)</router-link>
        <router-link to="/t4/t2" class="btn-sub">Modul T2 (Routing)</router-link>
        <router-link to="/t4/todo" class="btn-sub btn-highlight">Modul T3 (To-Do App)</router-link>
      </div>
    </div>

    <!-- Tempat Menampilin Komponen Anak (Children) -->
    <div class="t4-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// File induk ini cuma butuh Vue Router yang diatur di router/index.js
</script>

<style scoped>
.t4-container {
  border: 2px solid #00ffb3;
  border-radius: 12px;
  padding: 20px;
  margin-top: 10px;
  background-color: #121212;
}

.t4-header {
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;
  padding-bottom: 15px;
}

.t4-header h2 {
  color: #00ffb3;
  margin-bottom: 5px;
}

.nav-sub {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.btn-sub {
  background-color: #2a2a2a;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid #444;
  transition: all 0.2s ease;
}

.btn-sub:hover, .router-link-active {
  background-color: #00ffb3;
  color: #1a1a1a;
  border-color: #00ffb3;
}

.btn-highlight {
  border-color: #ff4757;
}

.t4-content {
  margin-top: 20px;
}
</style>