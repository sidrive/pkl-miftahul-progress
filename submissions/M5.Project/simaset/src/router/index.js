import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/aset",
    name: "daftar-aset",
    component: () => import("../views/DaftarAsetView.vue"),
  },
  {
    path: "/aset/tambah",
    name: "tambah-aset",
    component: () => import("../views/FormAsetView.vue"),
    meta: { role: "admin" }, // Penanda: halaman ini khusus role admin
  },
  {
    path: "/aset/:id",
    name: "detail-aset",
    component: () => import("../views/DetailAsetView.vue"),
  },
  {
    path: "/riwayat",
    name: "riwayat",
    component: () => import("../views/RiwayatPeminjamanView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation Guard (Satpam Pengecek Role)
router.beforeEach((to, from) => {
  // Simulasi role user saat ini (ubah antara 'staff' dan 'admin' untuk mengetes)
  const roleSaatIni = "admin";
  // Ganti dengan 'staff' untuk mengetes akses terbatas
  // Ganti dengan 'admin' untuk mengetes akses penuh

  if (to.meta.role && to.meta.role !== roleSaatIni) {
    alert("Akses ditolak! Halaman ini hanya untuk Admin.");
    return "/"; // Lempar balik ke Dashboard
  }
});

export default router;
