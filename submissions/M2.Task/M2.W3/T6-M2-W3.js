const inputCariEl = document.querySelector("#input-cari");
const statusEl = document.querySelector("#status-informasi");
const daftarUserEl = document.querySelector("#daftar-user");

let dataUserMentah = [];

async function ambilDataUser() {
    statusEl.textContent = "Status lagi ambil data dari server...";
    daftarUserEl.textContent = "";

    try {
        const response = await fetch("https://api.github.com/users");

        if (!response.ok) {
            throw new Error("Gagal ambil data nya bos...");
        }

        const data = await response.json();

        dataUserMentah = data;
        statusEl.textContent = "";
        tampilkanUser(dataUserMentah);

    } catch (error) {
        statusEl.textContent = "Gagal memuat data, cek internet mu bos...";
    }
}
