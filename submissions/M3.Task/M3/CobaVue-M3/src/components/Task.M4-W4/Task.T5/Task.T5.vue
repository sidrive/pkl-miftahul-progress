<template>
  <div class="playground-container">
    <header class="header-playground">
      <h2>🚀 Composables Playground (M4.W4.T5)</h2>
      <p class="subtitle">Showcase & Demo Interaktif Logic Composables Minggu 4</p>
    </header>

    <div class="grid-playground">
      <!-- Demo Toggle & Counter (T1.1) -->
      <section class="card-demo">
        <h3>1. Demo useToggle & useCounter (T1.1)</h3>
        <div class="demo-box">
          <p>Status Lampu: <strong>{{ statusLampu ? '💡 ON' : '🔌 OFF' }}</strong></p>
          <button @click="saklarLampu">Saklar Toggle</button>
        </div>
        <hr class="divider" />
        <div class="demo-box">
          <p>Hitungan Counter: <strong>{{ hitungan }}</strong></p>
          <div class="button-group">
            <button @click="tambah">+ Tambah</button>
            <button @click="kurang">- Kurang</button>
            <button @click="reset">🔄 Reset</button>
          </div>
        </div>
      </section>

      <!-- Demo Fetch API (T1.2) -->
      <section class="card-demo">
        <h3>2. Demo useFetch (T1.2)</h3>
        <p class="desc">Mengambil data promo otomatis dari <code>/api/promo</code></p>
        <div v-if="loadingPromo" class="state-text">⏳ Memuat data promo...</div>
        <div v-else-if="errorPromo" class="state-text error">{{ errorPromo }}</div>
        <ul v-else class="list-data">
          <li v-for="item in dataPromo" :key="item.id">
            <strong>{{ item.kode }}</strong>: {{ item.deskripsi }}
          </li>
        </ul>
      </section>

      <!-- Demo Debounce & LocalStorage (T2.1) -->
      <section class="card-demo">
        <h3>3. Demo useDebounce & useLocalStorage (T2.1)</h3>
        
        <!-- Sub-demo Debounce -->
        <div class="demo-box">
          <label>Cari Produk (Debounce 500ms):</label>
          <input v-model="inputCari" type="text" placeholder="Ketik: kopi / teh..." />
          <p class="info-text">Kata Kunci Debounce: <code>"{{ kataDebounce }}"</code></p>
          
          <div v-if="loadingCari" class="state-text">⏳ Mencari...</div>
          <ul v-else class="list-data">
            <li v-for="p in hasilCariProduk" :key="p.id">
              {{ p.nama }} - Rp {{ p.harga.toLocaleString() }}
            </li>
          </ul>
        </div>

        <hr class="divider" />

        <!-- Sub-demo LocalStorage -->
        <div class="demo-box">
          <label>Catatan LocalStorage (Auto-save):</label>
          <textarea v-model="catatansaya" rows="3" placeholder="Ketik catatan di sini..."></textarea>
          <p class="info-text">Coba refresh halaman browser, teks ini akan tetap tersimpan!</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import Composables dari folder utama M4-W4
import { useToggle } from '../useToggle.js'
import { useCounter } from '../useCounter.js'
import { useFetch } from '../useFetch.js'
import { useDebounce } from '../useDebounce.js'
import { useLocalStorage } from './useLocalStorage.js'

// Setup Demo Toggle & Counter (T1.1)
const { aktif: statusLampu, toggle: saklarLampu } = useToggle(false)
const { hitungan, tambah, kurang, reset } = useCounter(0, 1)

// Setup Demo Fetch (T1.2)
const urlPromo = ref('/api/promo')
const { data: dataPromo, loading: loadingPromo, error: errorPromo } = useFetch(urlPromo)

// Setup Demo Debounce & LocalStorage (T2.1)
const inputCari = ref('')
const kataDebounce = useDebounce(inputCari, 500)
const { data: hasilCariProduk, loading: loadingCari } = useFetch(kataDebounce)

const catatansaya = useLocalStorage('catatan_playground_t5', 'Catatan ini otomatis tersimpan di LocalStorage!')
</script>

<style scoped>
</style>