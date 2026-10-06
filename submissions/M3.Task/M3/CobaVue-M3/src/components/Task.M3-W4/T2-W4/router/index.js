import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../pages/beranda.vue'
import Tentang from '../pages/tentang.vue'
import Kontak from '../pages/kontak.vue'
import Lainnya from '../pages/lainnya.vue'

// Import Halaman T2.2 Putaran 1
import DaftarProduk from '../../T2.2-W4/pages/daftarProduk.vue'
import DetailProduk from '../../T2.2-W4/pages/detailProduk.vue'

// Putaran 2 (Artikel)
import DaftarArtikel from '../../T2.2-W4/pages/daftarArtikel.vue'
import DetailArtikel from '../../T2.2-W4/pages/detailArtikel.vue'

// Putaran 3 (Kategori & Produk Multi-Param)
import DaftarKategori from '../../T2.2-W4/pages/daftarKategori.vue'
import DetailKategoriProduk from '../../T2.2-W4/pages/detailKategoriProduk.vue'

import ujiT23 from '../../T2.2-W4/pages/ujiT23.vue'

// T2.4 3 putaran 
import T24Main from '../../T2.4-W4/pages/T2.4-main.vue'
import Putaran1T24 from '../../T2.4-W4/pages/T2.4-putaran1.vue'
import Putaran2T24 from '../../T2.4-W4/pages/T2.4-putaran2.vue'
import Putaran3T24 from '../../T2.4-W4/pages/T2.4-putaran3.vue'
import SuksesT24 from '../../T2.4-W4/pages/T2.4-sukses.vue'

const routes = [
  // T2.1
  { path: '/', component: Beranda },
  { path: '/tentang', component: Tentang },
  { path: '/kontak', component: Kontak },
  { path: '/lainnya', component: Lainnya },

  // T2.2 Putaran 1
  { path: '/produk', component: DaftarProduk },
  { path: '/produk/:id', component: DetailProduk },

  // Route T2.2 - Putaran 2
  { path: '/artikel', component: DaftarArtikel },
  { path: '/artikel/:id', component: DetailArtikel },

  // Putaran 3 (Kategori & Produk Multi-Param)
  { path: '/kategori', component: DaftarKategori },
  { path: '/kategori/:kategoriId/produk/:produkId', component: DetailKategoriProduk },

  { path: '/uji-t23/:id', component: ujiT23 },

  // T2.4 3 putaran
 { path: '/t24', component: T24Main, children: [
      { path: '', redirect: '/t24/p1' }, // otomatis buka putaran 1 pas pertama klik
      { path: 'p1', component: Putaran1T24 },
      { path: 'p2', component: Putaran2T24 },
      { path: 'p3', component: Putaran3T24 }
  ]},
  // Route khusus halaman sukses
  { path: '/t24-sukses', component: SuksesT24 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router