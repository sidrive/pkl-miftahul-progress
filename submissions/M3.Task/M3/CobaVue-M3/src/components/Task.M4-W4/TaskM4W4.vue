<template>
  <div class="main-container">
    <h1>Bulan 4 Minggu 4 — Composables</h1>
    <br />
    
    <div class="menu-nav">
      <button :class="{ active: tabAktif === 'T1.1' }" @click="tabAktif = 'T1.1'">
        Task T1.1 (useToggle & useCounter)
      </button>

      <button :class="{ active: tabAktif === 'T1.2' }" @click="tabAktif = 'T1.2'">
        Task T1.2 (useFetch)
      </button>

      <button :class="{ active: tabAktif === 'T2.1' }" @click="tabAktif = 'T2.1'">
        Task 2.1 (useDebounce)
      </button>

      <button :class="{ active: tabAktif === 'T2.2' }" @click="tabAktif = 'T2.2'">
        Task 2.2 (useHitungSesuatu)
      </button>
    </div>
    <hr class="pembatas" />

    <!-- Area Penampil Komponen Task -->
    <div class="content-area">
      <TaskT11 v-if="tabAktif === 'T1.1'" />
      <TaskT12 v-if="tabAktif === 'T1.2'" />
      <TaskT21 v-if="tabAktif === 'T2.1'" />
      <TaskT22 v-if="tabAktif === 'T2.2'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskT11 from './Task.T1.1/Task.T1.1.vue'
import TaskT12 from './Task.T1.2/Task.T1.2.vue'
import TaskT21 from './Task.T2.1/Task.T2.1.vue'
import TaskT22 from './Task.T2.2.vue'

const tabAktif = ref('T1.1')
</script>

<style scoped>
.main-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  color: var(--color-text, #212529);
}

h1 {
  color: var(--color-text, #212529);
}

.menu-nav {
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.menu-nav button {
  padding: 10px 18px;
  border: 1px solid var(--color-border, #6c757d);
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text, #212529);
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.menu-nav button:hover {
  border-color: var(--color-navy-500, #007bff);
}

.menu-nav button.active {
  background-color: var(--color-navy-500, #007bff);
  color: #ffffff;
  border-color: var(--color-navy-500, #007bff);
}

.pembatas {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid var(--color-border, #4a5568);
}

.content-area {
  margin-top: 20px;
}
</style>