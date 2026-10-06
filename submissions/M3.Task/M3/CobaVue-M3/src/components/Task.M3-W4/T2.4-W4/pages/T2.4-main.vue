<template>
  <div style="padding: 10px;">
    <h2>Tugas M3.W4.T2.4 — Navigasi Terprogram & Query Params</h2>
    <p>Pilih putaran percobaan di bawah ini:</p>

    <!-- Menu Navigasi Putaran (Sudah Dikasih Jarak & Style Bagus) -->
    <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 20px;">
    <router-link to="/t24/p1"><button>Putaran 1</button></router-link>
    <router-link to="/t24/p2"><button>Putaran 2</button></router-link>
    <router-link to="/t24/p3"><button>Putaran 3</button></router-link>
    </div>

    <hr style="border: 0.5px solid #444; margin-bottom: 20px;" />

    <!-- Tampilan Tiap Putaran Muncul di Sini -->
    <router-view />
  </div>
</template>

<style scoped>
.button {
    padding: 8px 16px; cursor: pointer; border-radius: 6px;
}
</style>