// ini adalah kode dari T3.1-M2-W1.js yang di edit / ubah
// Target: Refactor & Upgrade Script Profil (T3.1)

const profilSiswa = {
    nama: "Gazi",
    peran: "Software Engineering",
    tugasSelesai: 1,
    alamat: "Berlin, Germany",
    divisi: "Frontend Development",

// Catatan T6: sengaja pakai function biasa bukan arrow function.
// karna butuh 'this' untuk ngakses property di dalam objek profilSiswa.
getSummary: function() {
    return `Halo, nama saya ${this.nama}, saya seorang ${this.peran}. Saat ini saya telah menyelesaikan ${this.tugasSelesai} tugas. Saya tinggal di ${this.alamat} dan bekerja di divisi ${this.divisi}.`;
}
};

const {nama, peran, tugasSelesai, alamat, divisi} = profilSiswa;

//arrow
const hitungSisaTugas = (totalTugas, selesai) => totalTugas - selesai;
console.log(profilSiswa.getSummary());

const statusPKL = `Siswa bernama ${nama} saat ini berada di divisi ${divisi} dan tinggal di ${alamat}.`;
console.log(statusPKL);

const sisa = hitungSisaTugas(10, tugasSelesai);
console.log(`Sisa tugas minggu ini: ${sisa} task.`);