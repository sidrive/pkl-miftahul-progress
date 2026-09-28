<template>
  <div class="box-simpel">
    <h3>Putaran 1 — watch() 1 ref() Sederhana</h3>
    <p>Buka devtools untuk melihat progress</p><br>
    <div>
      <label>Cari Kata Kunci: </label>
      <input v-model="kataKunci" placeholder="Ketik sesuatu..." />
    </div>
    <p>Kata Kunci Saat Ini: <strong>{{ kataKunci }}</strong></p>

    <br />
    <hr />
    <br />

    <h3>Putaran 2 — watch() dengan Efek Samping</h3>
    <div>
      <label>Jumlah Barang: </label>
      <input v-model.number="jumlahBarang" type="number" />
    </div>
    <p>Status Stok: <strong>{{ statusStok }}</strong></p>

    <br />
    <hr />
    <br />

    <h3>Putaran 3 — watch() Multi-Source (2 Sumber)</h3>
    <div>
      <p>
        <label>Depan: </label>
        <input v-model="namaDepan" placeholder="Nama Depan" />
      </p>

      <p>
        <label>Belakang: </label>
        <input v-model="namaBelakang" placeholder="Nama Belakang" />
      </p>
    </div>

    <p>Log Perubahan Multi-Source: <strong>{{ logMultiSource }}</strong></p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Putaran 1: watch() memantau ref kataKunci
const kataKunci = ref('')

watch(kataKunci, (nilaiBaru, nilaiLama) => {
  console.log(`[WATCH PUTARAN 1] Berubah dari "${nilaiLama}" jadi "${nilaiBaru}"`)
})

// Putaran 2: watch() memantau jumlahBarang dan mengubah statusStok
const jumlahBarang = ref(5)
const statusStok = ref('Tersedia')

watch(jumlahBarang, (nilaiBaru) => {
  if (nilaiBaru <= 0) {
    statusStok.value = 'Stok Kosong'
  } else {
    statusStok.value = 'Tersedia'
  }
})

// Putaran 3: Watch() memantau 2 sumber sekaligus
const namaDepan = ref('Alex')
const namaBelakang = ref('Cristian')
const logMultiSource = ref('Belum ada perubahan')

// watch() memantau 2 ref sekaligus menggunakan Array
watch([namaDepan, namaBelakang], ([baruDepan, baruBelakang], [lamaDepan, lamaBelakang]) => {
  logMultiSource.value = `Depan: (${lamaDepan} -> ${baruDepan}) | Belakang: (${lamaBelakang} -> ${baruBelakang})`
  console.log(`[WATCH PUTARAN 3] Multi-source berubah!`, { baruDepan, baruBelakang })
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