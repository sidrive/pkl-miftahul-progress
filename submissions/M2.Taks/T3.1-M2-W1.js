// 1. Variabel Data
const nama = "Gazi";
const peran = "Software Engineering Student";
const tugasSelesai = 3;
const alamat = "Berlin, Germany";
const divisi = "Frontend Development";

// 2. Cara Lama (Concatenation dengan tanda +)
const caraLama = "Halo, nama saya " + nama + ", saya " + peran + " dan sudah menyelesaikan " + tugasSelesai + " task, " + "alamat saya di " + alamat + ".";
console.log("--- Cara Lama ---");
console.log(caraLama);

// 3. Cara Baru (Template Literal dengan `${...}`)
const caraBaru = `Halo, nama saya ${nama}, saya ${peran} dan sudah menyelesaikan ${tugasSelesai} task, Alamat saya di ${alamat}.`;
console.log("\n--- Cara Baru (Template Literal) ---");
console.log(caraBaru);

// 4. String Multi-baris
const profilMultiBaris = `
=========================
      PROFIL SAYA
=========================
Nama  : ${nama}
Peran : ${peran}
Status: PKL (praktik Kerja Lapangan)
Gender: Laki-laki
`;
console.log(profilMultiBaris);

const PKL = `jadi disini ${nama} lagi PKL di Olsera sebagai ${divisi}`;
const PKL1 = "halo semua nya " + PKL ; 
console.log(PKL);
console.log(PKL1);