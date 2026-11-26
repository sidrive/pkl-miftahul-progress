<template>
  <div class="app-layout">
    <!-- Sidebar Kiri (Sesuai Desain Figma) -->
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-logo">S</div>
        <div class="brand-text">
          <h2 class="brand-title">SIMASET</h2>
          <span class="brand-subtitle">Sistem Informasi Aset</span>
        </div>
      </div>

      <div class="menu-label">MENU UTAMA</div>
      <nav class="sidebar-nav">
        <router-link to="/" class="nav-item" exact-active-class="active">
          Dashboard
        </router-link>
        <router-link to="/aset" class="nav-item" active-class="active">
          Daftar Aset
        </router-link>
        <router-link to="/riwayat" class="nav-item" active-class="active">
          Riwayat Peminjaman
        </router-link>
      </nav>

      <!-- Profil User di Bawah Sidebar -->
      <div class="sidebar-footer">
        <div class="user-card">
          <div class="user-avatar">A</div>
          <div class="user-info">
            <div class="user-name">Admin</div>
            <div class="user-email">admin@simaset</div>
          </div>
          <DsBadge status="aktif" />
        </div>
      </div>
    </aside>

    <!-- Area Kanan: Topbar + Konten Utama -->
    <div class="main-wrapper">
      <header class="topbar">
        <div class="topbar-left">
          <span class="breadcrumb">SIMASET / {{ namaHalaman }}</span>
          <h1 class="topbar-title">{{ namaHalaman }}</h1>
        </div>

        <!-- Profil di Pojok Kanan Topbar (Sesuai Figma) -->
        <div class="topbar-right">
          <div class="topbar-profile">
            <div class="profile-avatar">A</div>
            <div class="profile-info">
              <span class="profile-name">Admin Aset</span>
              <span class="profile-role">Administrator</span>
            </div>
          </div>
        </div>
      </header>

      <main class="content">
        <!-- Tombol aksi cepat sementara untuk mengetes route guard /aset/tambah -->
        <div class="quick-bar">
          <DsButton variant="primary" size="small" @click="$router.push('/aset/tambah')">
            + Tambah Aset
          </DsButton>
        </div>

        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DsBadge from '../components/Ds/DsBadge.vue'
import DsButton from '../components/Ds/DsButton.vue'

const route = useRoute()

const namaHalaman = computed(() => {
  const mapJudul = {
    dashboard: 'Dashboard',
    'daftar-aset': 'Daftar Aset',
    'detail-aset': 'Detail Aset',
    'tambah-aset': 'Tambah Aset',
    riwayat: 'Riwayat Peminjaman'
  }
  return mapJudul[route.name] || 'Portal Utama'
})
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
  color: #0f172a;
  text-align: left; /* Menetralkan text-align: center bawaan Vite */
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #0f172a;
  color: #f8fafc;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  flex-shrink: 0;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid #1e293b;
}

.brand-logo {
  width: 36px;
  height: 36px;
  background-color: #2563eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: #ffffff;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.brand-subtitle {
  font-size: 0.72rem;
  color: #94a3b8;
}

.menu-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 0.8px;
  margin: 20px 0 8px 12px;
  text-align: left;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.nav-item {
  display: block;
  padding: 10px 14px;
  border-radius: 8px;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background-color: #1e293b;
  color: #ffffff;
}

.nav-item.active {
  background-color: #1e3a8a;
  color: #ffffff;
  font-weight: 600;
}

.sidebar-footer {
  padding-top: 16px;
  border-top: 1px solid #1e293b;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #1e293b;
  padding: 10px;
  border-radius: 8px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: #ffffff;
}

.user-info {
  flex: 1;
  overflow: hidden;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
}

.user-email {
  font-size: 0.72rem;
  color: #94a3b8;
}

/* Main Area */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.topbar {
  height: 68px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar-left {
  display: flex;
  flex-direction: column;
}

.breadcrumb {
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.topbar-title {
  margin: 2px 0 0 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
}

.topbar-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #334155;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #0f172a;
}

.profile-role {
  font-size: 0.72rem;
  color: #64748b;
}

.content {
  padding: 24px 28px;
  flex: 1;
  color: #0f172a;
}

/* judul & teks di dalam skeleton view tetap gelap & rata kiri */
.content :deep(h1) {
  color: #0f172a;
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.content :deep(p) {
  color: #475569;
  margin: 0;
}

.quick-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

/* Responsif untuk layar HP */
@media (max-width: 768px) {
  .app-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding: 14px 16px;
  }

  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sidebar-footer {
    display: none;
  }

  .topbar {
    padding: 0 16px;
  }

  .content {
    padding: 16px;
  }
}
</style>