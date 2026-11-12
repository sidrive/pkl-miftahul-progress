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

    <!-- Section Catatan Tertulis (T3 & T4 Summary) -->
    <section class="card-note">
      <h3>📌 Catatan Observasi & Refactor Minggu 4</h3>
      <div class="note-item">
        <h4>1. Composable Refactor T3 (Antrean Pesanan):</h4>
        <p>
            Di T3 kita cuma pakai <code>useAntrean.js</code> buat nampung semua logika antrean (state data, filter, pencarian, simulasi fetch, CRUD, dan kontrol modal).
        </p>
      </div>
      <div class="note-item">
        <h4>2. Ringkasan Observasi T4 (Vue 2 Options API vs Vue 3 & Vuex vs Pinia):</h4>
        <p>
            Belum melakukan observasi bareng mentor.
        </p>
      </div>
    </section>
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
.playground-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
  text-align: left;
  font-family: Arial, sans-serif;
  color: var(--color-text, #212529);
}

.header-playground {
  margin-bottom: 24px;
  border-bottom: 2px solid var(--color-border, #e9ecef);
  padding-bottom: 12px;
}

.header-playground h2 {
  margin: 0;
  color: var(--color-text, #1a252f);
}

.subtitle {
  margin: 6px 0 0 0;
  color: var(--color-grey-500, #6c757d);
  font-size: 0.95rem;
}

.grid-playground {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card-demo {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  color: #212529;
}

.card-demo h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #0d6efd;
  border-bottom: 1px dashed #ced4da;
  padding-bottom: 8px;
}

.desc {
  font-size: 0.85rem;
  color: #6c757d;
}

.demo-box {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.button-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

button {
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid #0d6efd;
  background-color: #0d6efd;
  color: #ffffff !important;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

button:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
  cursor: not-allowed;
}

input[type='text'],
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ced4da;
  background-color: #ffffff !important;
  color: #212529 !important;
  box-sizing: border-box;
  font-size: 0.9rem;
}

input[type='text']::placeholder,
textarea::placeholder {
  color: #adb5bd !important;
}

.info-text {
  font-size: 0.82rem;
  color: #6c757d;
  margin: 4px 0 0 0;
}

.state-text {
  font-size: 0.9rem;
  color: #0d6efd;
  font-weight: 500;
  margin: 8px 0;
}

.state-text.error {
  color: #dc3545;
}

.list-data {
  padding-left: 20px;
  margin: 8px 0 0 0;
  font-size: 0.9rem;
  color: #212529;
}

.divider {
  border: 0;
  border-top: 1px solid #e9ecef;
  margin: 16px 0;
}

.card-note {
  background: #f8f9fa;
  border: 1px solid #cff4fc;
  border-left: 5px solid #0dcaf0;
  border-radius: 8px;
  padding: 20px;
  color: #212529;
}

.card-note h3 {
  margin-top: 0;
  color: #055160;
}

.note-item {
  margin-top: 12px;
}

.note-item h4 {
  margin: 0 0 4px 0;
  font-size: 0.95rem;
  color: #0b5ed7;
}

.note-item p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #495057;
}

code {
  background: #e9ecef;
  color: #d63384;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85em;
}
</style>