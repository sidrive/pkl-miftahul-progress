<template>
  <div class="m4w1-container">
    <h2>Bulan 4 Minggu 1 — Pinia Dasar</h2>

    <!-- Tombol Sub-Navigasi Per Task -->
    <div class="sub-nav">
      <button 
        :class="{ aktif: taskAktif === 't11' }" 
        @click="taskAktif = 't11'">
        Task T1.1 (State Dasar)
      </button>

      <button 
        :class="{ aktif: taskAktif === 't21' }" 
        @click="taskAktif = 't21'">
        Task T2.1 (Getters)
      </button>

      <button 
        :class="{ aktif: taskAktif === 't22' }" 
        @click="taskAktif = 't22'">
        Task T2.2 (Actions)
      </button>

      <button 
        :class="{ aktif: taskAktif === 't23' }" 
        @click="taskAktif = 't23'">
        Task T2.3 (Destructuring & Reactivity)
      </button>

      <button 
        :class="{ aktif: taskAktif === 't3' }" 
        @click="pilihTab('t3')">
        Task T3 Migrasi TodoList ke Pinia
      </button>

      <button 
        :class="{ aktif: taskAktif === 't4' }" 
        @click="pilihTab('t4')">
        Task T4 MiniApp Kasir Sederhana
      </button>
    </div>

    <hr class="pemisah" />

    <div class="konten-task">
      <T1_1_W1 v-if="taskAktif === 't11'" />
      <T2_1_W1 v-else-if="taskAktif === 't21'" />
      <T2_2_W1 v-else-if="taskAktif === 't22'" />
      <T2_3_W1 v-else-if="taskAktif === 't23'" />
      <TodoDetail v-else-if="taskAktif === 't3' && route.params.id" />
      <TodoMain v-else-if="taskAktif === 't3'" />
      <KasirApp v-else-if="taskAktif === 't4'" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router' 
import T1_1_W1 from './T1.1-W1.vue'
import T2_1_W1 from './T2.1-W1.vue'
import T2_2_W1 from './T2.2-W1.vue'
import T2_3_W1 from './T2.3-W1.vue'
import TodoMain from './T3-W1/pages/todoMain.vue'
import TodoDetail from './T3-W1/pages/todoDetail.vue'
import KasirApp from './T4-W1/pages/kasirApp.vue'

const route = useRoute()
const router = useRouter()
const taskAktif = ref('t11') // State untuk menyimpan tab mana yang aktif (default T1.1)

// fungsi pindahtab sekaligus update URL
function pilihTab(tab) {
  taskAktif.value = tab
  if (tab === 't3') {
    router.push('/todo-m4')
  }
}

// Pantau route: kalau URL diawali /todo-m4, otomatis aktifkan tab t3
watch(
  () => route.path,
  (pathBaru) => {
    if (pathBaru.startsWith('/todo-m4')) {
      taskAktif.value = 't3'
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.m4w1-container {
  padding: 20px;
}

.sub-nav {
  display: flex;
  gap: 12px;
  margin-top: 15px;
  justify-content: center;
}

.sub-nav button {
  background-color: #222;
  color: #ccc;
  border: 1px solid #555;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.sub-nav button:hover {
  background-color: #333;
  color: white;
}

/* Style tombol yang sedang aktif */
.sub-nav button.aktif {
  background-color: #00d2d3;
  color: #111;
  border-color: #00d2d3;
}

.pemisah {
  border: 0;
  border-top: 1px solid #444;
  margin: 20px 0;
}

.konten-task {
  margin-top: 15px;
}
</style>