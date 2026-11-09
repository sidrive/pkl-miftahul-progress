<template>
  <div style="border: 1px solid; padding: 15px; margin-top: 15px;">
    <h3>Putaran 3: Fetch Data dengan Parameter Dinamis (URL)</h3>

    <!-- manggil data dari URL /api/promo -->
    <div v-if="loadingPromo">
      <p>⏳ Sedang mengambil promo dari '/api/promo'...</p>
    </div>
    <div v-else-if="errorPromo">
      <p style="color: red;">❌ {{ errorPromo }}</p>
    </div>
    <div v-else>
      <h4>Daftar Promo Voucher:</h4>
      <ul>
        <li v-for="item in promoList" :key="item.id">
          <strong>{{ item.kode }}</strong> — {{ item.deskripsi }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '../useFetch.js'

// Panggil useFetch dengan ngirim URL '/api/promo' langsung di parameternya
const { 
  data: promoList, 
  loading: loadingPromo, 
  error: errorPromo 
} = useFetch('/api/promo')
</script>