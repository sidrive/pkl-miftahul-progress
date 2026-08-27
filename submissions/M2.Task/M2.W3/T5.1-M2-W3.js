// putaran 1: mmbil data profil (User)
fetch("https://api.github.com/users/octocat")
  .then((response) => response.json()) // ini untuk buka bungkus paket
  .then((data) => {                    // pakai isinya
    console.log("Putaran 1 (Profil):", { login: data.login, nama: data.name });
  })
  .catch((error) => console.log("Gagal:", error));

// putaran 2: ambil data daftar repo
fetch("https://api.github.com/users/octocat/repos")
  .then((response) => response.json()) // buka bungkus paket
  .then((data) => {                    // pakai isinya
    console.log("Putaran 2 (Repo):", { repoPertama: data[0].name });
  })
  .catch((error) => console.log("Gagal:", error));