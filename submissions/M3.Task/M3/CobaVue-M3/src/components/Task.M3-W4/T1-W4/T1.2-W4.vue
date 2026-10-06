<template>
  <div>
    <h3>Putaran 1: Custom v-model di Component (Tipe String)</h3>
    <!-- pakai custom v-model pada komponen anak -->
    <InputAnakTeks v-model="namaUser" />
    <p>
      Nilai di Parent: <strong>"{{ namaUser }}"</strong>
    </p>
  </div>
  <hr />

  <div>
    <h3>Putaran 2: Custom v-model di Component (Tipe Boolean)</h3>
    <InputAnakToggle v-model="statusAktif" />
    <p>
      Status di Parent:
      <strong>{{ statusAktif ? "AKTIFF (ON)" : "MATI (OFF)" }}</strong>
    </p>
  </div>
  <hr>
  
  <div>
    <h3>Putaran 3: Multi v-model di Component (v-model:nama & v-model:aktif)</h3>
      <InputAnakMulti v-model:nama="namaUserMulti" v-model:aktif="statusAktifMulti" />
      <p>Hasil di Parent:</p>
      <ul>
        <li>Nama: <strong>"{{ namaUserMulti }}"</strong></li>
        <li>Status: <strong>{{ statusAktifMulti ? 'Aktif' : 'Tidak Aktif' }}</strong></li>
      </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputAnakTeks from "./T1.2-W4.anak.vue";
import InputAnakToggle from "./T1.2-W4.anak2.vue";
import InputAnakMulti from "./T1.2-W4.anak3.vue";

// Putaran 1: State di parent yang diikat ke v-model komponen anak
const namaUser = ref("");

// Putaran 2: State di parent yang diikat ke v-model komponen anak (Tipe Boolean)
const statusAktif = ref(false);

// Putaran 3: State untuk multi v-model
const namaUserMulti = ref('')
const statusAktifMulti = ref(false)
</script>

<style scoped>
ul {
  display: inline-block;
  text-align: left;
}
</style>