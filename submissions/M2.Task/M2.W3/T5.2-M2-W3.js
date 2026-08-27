// putaran 1: Fetch User GitHub pakai async/await
async function ambilUser() {
  try {
    console.log("--- Putaran 1: Fetching User (async/await) ---");
    const response = await fetch("https://api.github.com/users/octocat");
    const dataUser = await response.json();
    console.log("Data User:", {
      login: dataUser.login,
      nama: dataUser.name,
      total_repo: dataUser.public_repos,
    });
  } catch (error) {
    console.log("Gagal Fetch User:", error);
  }
}

// putaran 2: Fetch Repos GitHub pakai async/await (Endpoint Berbeda)
async function ambilRepos() {
  try {
    console.log("\n--- Putaran 2: Fetching Repos (async/await) ---");
    const response = await fetch("https://api.github.com/users/octocat/repos");
    const dataRepos = await response.json();
    console.log("Contoh 1 Repo:", {
      id: dataRepos[0].id,
      nama_repo: dataRepos[0].name,
    });
  } catch (error) {
    console.log("Gagal Fetch Repos:", error);
  }
}

// menjalakan kedua fungsi
async function jalankanSemua() {
  await ambilUser();
  await ambilRepos();
}

jalankanSemua();
