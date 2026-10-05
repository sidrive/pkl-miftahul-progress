<template>
  <div>
    <h3>Putaran 1: v-model dengan modifier .trim</h3>
    <!-- Input Tanpa Modifier .trim -->
    <div>
      <label>Input Tanpa .trim: </label>
      <input
        type="text"
        v-model="namaBiasa"
        placeholder="Ketik dengan spasi..."
      />
      <p>Nilai tersimpan: "{{ namaBiasa }}"</p>
      <p>Panjang karakter: {{ namaBiasa.length }}</p>
    </div>
    <br />

    <!-- Input Menggunakan Modifier .trim -->
    <div>
      <label>Input Dengan .trim: </label>
      <input
        type="text"
        v-model.trim="namaTrim"
        placeholder="Ketik dengan spasi..."
      />
      <p>Nilai tersimpan: "{{ namaTrim }}"</p>
      <p>Panjang karakter: {{ namaTrim.length }}</p>
    </div>
    <hr />

    <div>
      <h3>Putaran 2: v-model pada Checkbox (Versi Array)</h3>
      <p>Pilih Hobi/Minat:</p>
      <label>
        <input type="checkbox" value="Coding" v-model="hobiTerpilih" />
        Coding
      </label>
      <br />
      <label>
        <input type="checkbox" value="Gaming" v-model="hobiTerpilih" />
        Gaming
      </label>
      <br />
      <label>
        <input type="checkbox" value="Fotografi" v-model="hobiTerpilih" />
        Fotografi
      </label>
      <br />
      <label>
        <input type="checkbox" value="Robotika" v-model="hobiTerpilih" />
        Robotika
      </label>

      <p>Array Hobi Terpilih: {{ hobiTerpilih }}</p>
      <p>Jumlah Hobi Terpilih: {{ hobiTerpilih.length }}</p>
    </div>
    <hr>

    <div>
        <h3>Putaran 3: v-model pada Select dengan Modifier .number</h3>
        <div>
            <label>Pilih Umur (Tanpa .number): </label>
            <select v-model="umurBiasa">
            <option value="15">15</option>
            <option value="17">17</option>
            <option value="20">20</option>
            </select>
            <p>Nilai tersimpan: {{ umurBiasa }}</p>
            <p>Tipe Data (typeof): <strong>{{ typeof umurBiasa }}</strong></p>
            <p>Hasil Penjumlahan (+ 5): {{ umurBiasa + 5 }}</p>
        </div>
        <br />

        <!-- Select Dengan Modifier .number -->
        <div>
            <label>Pilih Umur (Dengan .number): </label>
            <select v-model.number="umurNumber">
            <option value="15">15</option>
            <option value="17">17</option>
            <option value="20">20</option>
            </select>
            <p>Nilai tersimpan: {{ umurNumber }}</p>
            <p>Tipe Data (typeof): <strong>{{ typeof umurNumber }}</strong></p>
            <p>Hasil Penjumlahan (+ 5): {{ umurNumber + 5 }}</p>
        </div>
        <br>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Putaran 1: v-model dengan modifier .trim
const namaBiasa = ref("");
const namaTrim = ref("");

// Putaran 2: v-model pada Checkbox (Versi Array)
const hobiTerpilih = ref([]);

// Putaran 3: v-model dengan modifier .number
const umurBiasa = ref('15')
const umurNumber = ref(15)
</script>

<style scoped>
</style>
