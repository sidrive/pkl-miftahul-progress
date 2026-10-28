<template>
  <div class="container-t3">
    <header class="header-section">
      <div>
        <h2>📋 Antrean Pesanan Restoran</h2>
        <p class="subtitle">Prototipe UI Order & Status Kasir</p>
      </div>
      <div class="header-actions">
        <!-- Tombol Tambah Pesanan Baru -->
        <DsButton variant="primary" @click="bukaModalTambah">
          + Tambah Pesanan
        </DsButton>
      </div>
    </header>

    <!-- Toolbar Filter & Simulasi Error -->
    <div class="toolbar-section">
      <div class="filter-box">
        <!-- Filter Status pakai DsSelect -->
        <DsSelect
          v-model="filterStatus"
          :options="opsiFilter"
          placeholder="Filter Status"/>
      </div>
      <div class="simulation-box">
        <!-- Tombol Pengetesan Async State (Loading & Error dari T2.2) -->
        <DsButton variant="secondary" size="small" :disabled="sedangMemuat" @click="muatDataPesanan(false)">
          🔄 Reload Data
        </DsButton>

        <DsButton variant="danger" size="small" :disabled="sedangMemuat" @click="muatDataPesanan(true)">
          ⚠️ Simulasi Error
        </DsButton>
      </div>
    </div>

    <!-- Area Konten (Loading / Error / Empty / Data List) -->
    <div class="content-section">
      <!-- State Loading -->
      <div v-if="sedangMemuat" class="state-box loading">
        <p>⏳ Sedang memuat antrean pesanan...</p>
      </div>

      <!-- State Error -->
      <div v-else-if="pesanError" class="state-box error">
        <p>⚠️ {{ pesanError }}</p>
        <DsButton variant="secondary" size="small" @click="muatDataPesanan(false)">Coba Lagi</DsButton>
      </div>

      <!-- State Empty (Kosong) -->
      <div v-else-if="daftarPesananFiltered.length === 0" class="state-box empty">
        <p>📭 Tidak ada pesanan untuk ditampilkan.</p>
      </div>

      <!-- Success State (Tampilan Daftar Pesanan) -->
      <div v-else class="grid-pesanan">
        <DsCard
          v-for="item in daftarPesananFiltered"
          :key="item.id"
          variant="outlined"
          hoverable>

          <div class="card-header">
            <h4>{{ item.namaPemesan }}</h4>
            <DsBadge :status="item.status" />
          </div>
          <p class="meja-info">📍 {{ item.noMeja }}</p>

          <div class="card-actions">
            <DsButton variant="secondary" size="small" @click="bukaModalEdit(item)">
              ✏️ Edit
            </DsButton>
            <DsButton variant="danger" size="small" @click="hapusPesanan(item.id)">
              🗑️ Hapus
            </DsButton>
          </div>
        </DsCard>
      </div>
    </div>

    <!-- Form Modal 2-in-1 (Dengan trik :key dari T2.3 agar state tidak nyangkut) -->
    <FormPesananModal
      :key="keyModal"
      :show="showModal"
      :mode="modeModal"
      :dataAwal="pesananYangEdited"
      @close="showModal = false"
      @submit="handleSimpanPesanan"/>
  </div>
</template>