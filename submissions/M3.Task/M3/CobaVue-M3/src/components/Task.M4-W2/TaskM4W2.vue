<template>
  <div>
    <h2>Bulan 4 Minggu 2 — Design System Tokens & Dark Mode</h2>
    <nav>
      <button @click="subTask = 't11'">Task T1.1 (Token Dasar)</button> |
      <button @click="subTask = 't12'">Task T1.2 (Refleksi Token)</button> |
      <button @click="subTask = 't21'">Task T2.1 (Dark Mode)</button> |
      <button @click="subTask = 't22'">Task T2.2 Uji coba</button> |
      <button @click="subTask = 't31'">Task T3.1 (DsButton)</button> |
      <button @click="subTask = 't32'">Task T3.2 (DsCard)</button>
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

const subTask = ref('t11')
</script>