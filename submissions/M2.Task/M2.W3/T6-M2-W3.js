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

function tampilkanUser(listUser) {
    daftarUserEl.textContent = "";

    if (listUser.length === 0) {
        statusEl.textContent = "User tidak ditemukan.";
        return;
    } else {
        statusEl.textContent = "";
    }

    // pakai map di sini karna butuh ubah array object dari API jadi array string format baru ("USERNAME (ID: xx)") untuk tampilan.
    const formatTampilan = listUser.map((u) => {
        return `${u.login.toUpperCase()} (ID: ${u.id})`;
    });

    formatTampilan.forEach((teks) => {
        const li = document.createElement("li");
        li.textContent = teks;
        daftarUserEl.appendChild(li);
    });
}

inputCariEl.addEventListener("input", (e) => {
    const kataKunci = e.target.value.toLowerCase();

    // kita filter di sini karna butuh nyaring dataUserMentah sesuai kata kunci pencarian, hasilnya nanti array baru yang lebih dikit.
    const hasilFilter = dataUserMentah.filter((user) => {
        return user.login.toLowerCase().includes(kataKunci);
    });

    tampilkanUser(hasilFilter);
});

ambilDataUser();