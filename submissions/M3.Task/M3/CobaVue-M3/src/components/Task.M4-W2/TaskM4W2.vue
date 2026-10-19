<template>
  <div>
    <h2>Bulan 4 Minggu 2 — Design System Tokens & Dark Mode</h2>

    <!-- Sub Navigasi Task -->
    <nav>
      <button @click="subTask = 't11'">Task T1.1 (Token Dasar)</button> |
      <button @click="subTask = 't12'">Task T1.2 (Refleksi Token)</button> |
      <button @click="subTask = 't21'">Task T2.1 (Dark Mode)</button> |
      <button @click="subTask = 't22'">Task T2.2 Uji coba</button>
    </nav>

    <hr />

    <!-- Area Tampilan Sub Task -->
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskT11 from './Task.T1.1.vue'
import TaskT12 from './T1.2/Task.T1.2.vue'
import TaskT21 from './Task.T2.1.vue'
import TaskT22 from './Task.T2.2.vue'

const subTask = ref('t11')
</script>