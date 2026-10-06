<template>
  <div>
    <h3>Putaran 3: Routing 4 Halaman + Styling Link Aktif</h3>
    <nav class="nav-menu">
      <router-link to="/">Beranda</router-link> | 
      <router-link to="/tentang">Tentang</router-link> | 
      <router-link to="/kontak">Kontak</router-link> | 
      <router-link to="/lainnya">Lainnya</router-link>
    </nav>
    <hr />

    <router-view />
  </div>
</template>

<style scoped>
.nav-menu a {
  color: #ffffff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
}

/* Class otomatis bawaan Vue Router saat link/halaman sedang aktif */
.nav-menu a.router-link-exact-active {
  background-color: #e28409;
  color: #1a1a1a;
}
</style>