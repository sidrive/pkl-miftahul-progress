const daftarUserEl = document.querySelector("#daftar-user");
const daftarRepoEl = document.querySelector("#daftar-repo");

// --- putaran 1: url benar (sukses) ---
async function tampilkanUser() {
  daftarUserEl.textContent = "Sedang memuat data user...";

  try {
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();

    daftarUserEl.textContent = "";

    const li = document.createElement("li");
    li.textContent = `Nama: ${data.name} | Username: ${data.login} | Public Repos: ${data.public_repos}`;
    daftarUserEl.appendChild(li);

  } catch (error) {
    daftarUserEl.textContent = "Gagal memuat data. Coba lagi nanti.";
  }
}

// --- putaran 2: url salah / typo (coba error state) ---
async function tampilkanRepo() {
  daftarRepoEl.textContent = "Sedang memuat data repo...";

  try {
    // sengaja dibikin typo github-salah-domain-typo.com
    const response = await fetch("https://api.github-salah-domain-typo.com/users/octocat/repos");
    const data = await response.json();

    daftarRepoEl.textContent = "";
    data.slice(0, 3).forEach((repo) => {
      const li = document.createElement("li");
      li.textContent = `Repo: ${repo.name}`;
      daftarRepoEl.appendChild(li);
    });

  } catch (error) {
    daftarRepoEl.textContent = "Gagal memuat daftar repo. Koneksi terputus atau alamat tidak ditemukan.";
  }
}

tampilkanUser();
tampilkanRepo();