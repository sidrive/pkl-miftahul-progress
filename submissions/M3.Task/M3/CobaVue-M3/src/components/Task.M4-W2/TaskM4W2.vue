<template>
  <div>
    <h2>Bulan 4 Minggu 2 — Design System Tokens & Dark Mode</h2>
    <nav class="nav-container">
      <DsButton 
        :variant="subTask === 't11' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't11'">
        Task T1.1 (Token Dasar)
      </DsButton>

      <DsButton 
        :variant="subTask === 't12' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't12'">
        Task T1.2 (Refleksi Token)
      </DsButton>

      <DsButton 
        :variant="subTask === 't21' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't21'">
        Task T2.1 (Dark Mode)
      </DsButton>

      <DsButton 
        :variant="subTask === 't22' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't22'">
        Task T2.2 Uji coba
      </DsButton>

      <DsButton 
        :variant="subTask === 't31' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't31'">
        Task T3.1 (DsButton)
      </DsButton>

      <DsButton 
        :variant="subTask === 't32' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't32'">
        Task T3.2 (DsCard)
      </DsButton>

      <DsButton 
        :variant="subTask === 't4' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't4'">
        Task T4 Redesign kasirApp
      </DsButton>

      <DsButton 
        :variant="subTask === 't5' ? 'primary' : 'secondary'" 
        size="small" 
        @click="subTask = 't5'">
        Task T5 StoryBook
      </DsButton>
    </nav>
    <hr />

    <div v-if="subTask === 't11'">
      <TaskT11 />
    </div>
    <div v-else-if="subTask === 't12'">
      <TaskT12 />
    </div>
    <div v-else-if="subTask === 't21'">
      <TaskT21 />
    </div>
    <div v-else-if="subTask === 't22'">
      <TaskT22 />
    </div>
    <div v-else-if="subTask === 't31'">
      <TaskT31 />
    </div>
    <div v-else-if="subTask === 't32'">
      <TaskT32 />
    </div>
    <div v-else-if="subTask === 't4'">
      <TaskT4 />
    </div>
    <div v-else-if="subTask === 't5'">
      <TaskT5 />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskT11 from './Task.T1.1.vue'
import TaskT12 from './T1.2/Task.T1.2.vue'
import TaskT21 from './Task.T2.1.vue'
import TaskT22 from './Task.T2.2.vue'
import TaskT31 from './Task.T3.1.vue'
import TaskT32 from './Task.T3.2.vue'
import TaskT4 from './T4-W2/kasirApp.vue'
import TaskT5 from './Task.T5.vue'
import DsButton from './DsButton.vue'

const subTask = ref('t11')
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-xs, 8px);
  margin-bottom: var(--spacing-sm, 12px);
}
</style>