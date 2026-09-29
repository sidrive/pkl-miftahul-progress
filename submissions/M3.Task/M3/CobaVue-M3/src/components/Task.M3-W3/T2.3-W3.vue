<template>
  <div class="box-simpel">
    <h3>Putaran 1 - watchEffect() Dasar (1 Source)</h3>
    <p>Buka devtools untuk melihat progress</p><br>
    <div>
      <label>Status Server: </label>
      <input v-model="serverStatus" placeholder="Ketik status server..." />
    </div>
    <p>Status Saat Ini: <strong>{{ serverStatus }}</strong></p><hr>

    <h3>Putaran 2 - watchEffect() Multi-Source Otomatis</h3>
    <div>
        <p>
            <label>CPU Usage (%):</label>
            <input v-model.number="cpuUsage" type="number">
        </p>
        <p>
            <label>RAM Usage (%): </label>
            <input v-model.number="ramUsage" type="number" />
        </p>
    </div>
    <p>Status Peringatan System: <strong>{{ systemAlert }}</strong></p><hr>

    <br>
    <h3>Putaran 3 - Uji batas tracking (Asyn / setTimeout)</h3>
    <div>
        <p>
            <label>State Ter-track (Sinkron): </label>
            <input v-model="stateSync" placeholder="Ketik di sini..." />
        </p>
        <p>
            <label>State GAK Ter-track (Di dalam setTimeout): </label>
            <input v-model="stateAsync" placeholder="Ketik di sini..." />
        </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

// Putran 1
const serverStatus = ref('Online')

// watchEffect() otomatis melacak serverStatus karna variabelnya dibaca di dalamnya
watchEffect(() => {
  console.log(`[WATCHEFFECT PUTARAN 1] Status server saat ini: "${serverStatus.value}"`)
})

// Putaran 2
const cpuUsage = ref(44)
const ramUsage = ref(70)
const systemAlert = ref('Normal')

// watchEffect otomatis melacak cpuUsage DAN ramUsage sekaligus!
watchEffect(() => {
    if (cpuUsage.value > 80 || ramUsage.value > 80 ) {
        systemAlert.value = 'Hardware keberatan bos q!'
    } else {
        systemAlert.value = 'Sistem normal aman aja bos q'
    }

    console.log(`[WATCHEFFECT PUTARAN 2] Multi-source ter-track -> CPU: ${cpuUsage.value}%, RAM: ${ramUsage.value}%`)
})

// Putaran 3
const stateSync = ref('Awal Sync')
const stateAsync = ref('Awal Async')

watchEffect(() => {
    const dataSync = stateSync.value

    setTimeout(() => {
        const dataAsync = stateAsync.value
        console.log(`[WATCHEFFECT PUTARAN 3] Dalam setTimeout: "${dataAsync}"`)
    }, 100)

    console.log(`[WATCHEFFECT PUTARAN 3] Sinkron ter-track: "${dataSync}"`)
})
</script>

<style scoped>
.box-simpel {
  text-align: center;
  color: #fff;
  padding: 10px;
}

.box-simpel input {
  background-color: #222;
  color: #fff;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>