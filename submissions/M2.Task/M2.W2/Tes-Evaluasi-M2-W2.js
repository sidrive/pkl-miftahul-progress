const daftarSiswa = [
  { nama: "Alex", nilai: 90 },
  { nama: "Misa", nilai: 80 },
  { nama: "Adon", nilai: 65 },
  { nama: "Doni", nilai: 50 },
];

const list = document.getElementById("list");

document.getElementById("btnFilter").addEventListener("click", () => {
  const siswaLulus = daftarSiswa.filter((siswa) => siswa.nilai >= 75);

  list.innerHTML = "";
  siswaLulus.forEach((siswa) => {
    const li = document.createElement("li");
    li.textContent = `${siswa.nama} - Nilai: ${siswa.nilai} (LULUS)`;
    list.appendChild(li);
  });
});

document.getElementById("btnMap").addEventListener("click", () => {
  const labelSiswa = daftarSiswa.map((siswa) => {
    return `Siswa: ${siswa.nama.toUpperCase()} | Nilai: ${siswa.nilai}`;
  });

  list.innerHTML = "";
  labelSiswa.forEach((teks) => {
    const li = document.createElement("li");
    li.textContent = teks;
    list.appendChild(li);
  });
});

document.getElementById("btnTotal").addEventListener("click", () => {
    const totalNilai = daftarSiswa.reduce((acc, siswa) => {
        return acc + siswa.nilai;
    }, 0);

    document.getElementById("totalInfo").textContent = `Total Nilai siswa: ${totalNilai}`;
});
