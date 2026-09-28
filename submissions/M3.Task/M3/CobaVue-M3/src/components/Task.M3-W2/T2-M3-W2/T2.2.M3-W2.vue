<template>
  <div>
    <h4>Putaran 1: Refactor KartuSiswa (Props Tervalidasi)</h4>
    <div class="kartu">
      <strong>{{ nama }}</strong> - Nilai: {{ nilai }}
    </div>

    <h4>Putaran 2: Props Boolean & Array</h4>
    <div class="resto">
      <p>Status Buka: <strong>{{ isBuka ? 'BUKA' : 'TUTUP' }}</strong></p>
      <p>Daftar Menu:</p>
      <ul>
        <li v-for="(item, index) in menu" :key="index"> 
        {{ item }} 
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Putaran 1
defineProps({
  nama: {
    type: String,
    required: true
  },
  nilai: {
    type: Number,
    default: 0
  },

  // Putaran 2 (Boolean & Array)
  isBuka: {
    type: Boolean,
    default: true
  },
  menu: {
    type: Array,
    // Nilai bawaan array kosong menggunakan fungsi factory
    default: () => []
  }
})
</script>

<style scoped>
.kartu {
  padding: 8px 16px;
  border: 1px solid #ff0707;
  margin: 10px auto;
  max-width: 250px;
  border-radius: 8px; 
}

ul {
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  margin: 0 auto;
}
</style>