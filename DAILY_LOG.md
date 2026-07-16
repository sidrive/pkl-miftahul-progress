# Daily Log

> **Cara pakai:** setiap hari kerja, tambahkan laporan di **paling bawah** file ini (append, jangan edit entry lama), lalu commit & push.
>
> Struktur: 1 heading tanggal (`## YYYY-MM-DD`), di bawahnya boleh ada 1 atau lebih blok task (kalau hari itu mengerjakan beberapa task). Setiap blok task **wajib** dibungkus `<!-- ENTRY START -->` ... `<!-- ENTRY END -->` — dipakai script otomatis untuk membaca log ini, jangan dihapus.
>
> Field `Task` **harus** memakai ID yang sama seperti di `TASKS.md` (contoh: `M1.W1.T1`). Field `Status` hanya boleh salah satu dari: `in-progress`, `done`, `blocked`.
>
> Format commit message yang disarankan: `log: 2026-07-13 - M1.W1.T1 done`

---

## 2026-07-13

<!-- ENTRY START -->

### Task: M1.W1.T1

- **Status:** done
- **Capaian:** Udah buat akun github dan aktifin fitur Two-Factor autentifcation (2FA).
- **Kesulitan:** Tidak ada opsi nomor indonesia di GitHub, tapi pakai aplikasi dari google jadi nya bisa.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T2.1

- **Status:** done
- **Capaian:** Sudah ada VS code dan sync sama github
- **Kesulitan:** tidak ada kendala yang terlalu berat.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T2.2

- **Status:** done
- **Capaian:** Sudah Install extensi ekstensi ESLint, Prettier, GitLens.
- **Kesulitan:** paling internet yang lelet.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T2.3

- **Status:** done
- **Capaian:** Saat pencet CTRL+S kode langsung rapi.
- **Kesulitan:** Agak bingung awal awal, cuma mencoba memahamin dan lumayan paham, jadi sekarang saat klik CTRL+S kode langsung rapi.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T3.1

- **Status:** Done
- **Capaian:** Sudah saya coba kerjain, kelihatan nya gampang, mungkin perlu latihan terus walau agak ribet
- **Kesulitan:** awal awal bingung, sekarang udah paham apa maksud dari path absolut dan relatif.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T3.2

- **Status:** Done
- **Capaian:** Beberapa gampang dilakukan, cuma konsep dasar agak susah di pahami, tapi saya tau maksudnya untuk melihat sedang di folder apa, isi folder dan sebagainya.
- **Kesulitan:** awal awal bingung ini apa, setelah saya pahamin saya jadi ngerti
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T3.3

- **Status:** Done
- **Capaian:** Saya berhasil saya lakukan, ada sediki eror tapi bisa dilakukan walau di bantu AI.
- **Kesulitan:** Agak susah dipahami karna pakai terminal, dibantu AI juga, tapi paham juga apa fungsi.
<!-- ENTRY END -->

---

## 2026-07-14

<!-- ENTRY START -->

### Task: M1.W1.T3.4

- **Status:** done
- **Capaian:** bisa membuat & merapikan struktur folder walau dibantu.
- **Kesulitan:** So far aman lah untuk ini, paling butuh penjelasan lebih detail aja.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T4.1

- **Status:** done
- **Capaian:** sudah install nvm lts versi 24.18.0.
- **Kesulitan:** sejauh ini install nya aman aja
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T4.2

- **Status:** done
- Berhasil melakukan verifikasi instalasi Node.js dan npm menggunakan perintah `node -v` dan `npm -v` setelah merestart terminal VS Code.
- **Kesulitan:** Sempat terkena eror command not recognized karena terminal VS Code lama belum membaca PATH baru, tetapi aman setelah VS Code dibuka ulang.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T4.3

- **Status:** done
- **Capaian:** Berhasil membuat dan menjalankan file `hello.js` menggunakan perintah node, menginisialisasi `package.json` melalui `npm init -y`, serta sukses memasang package eksternal via `npm install chalk`.
- **Kesulitan:** Sempat terhambat script execution policy Windows saat running npm init, namun sukses diatasi dengan mengubah policy via terminal.
<!-- ENTRY END -->

---

## 2026-07-15

<!-- ENTRY START -->

### Task: M1.W1.T4.3

- **Status:** done
- **Capaian:** Udah coba dan bisa jalanin ulang `npm init -y` untuk konfigurasi awal project. habis itu saya udah pasang package `chalk` via `npm install chalk` langsung dalam folder tujuan (`submissions/M1-W1/T4.3-node-npm/`).
- **Kesulitan:** Sempat terhambat kendala hak akses Script Execution Policy Windows di terminal baru, tapi dah berhasil selesaiin dengan mengubah policy via command scope process, jadi ada eror dikit tadi, cuma udah done.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T4.4

- **Status:** done
- **Capaian:** hmm saya sedikit udah paham konsepnya pake analogi Lego. file `package.json` kita anggap kertas instruksi atau urutan balok lego yang kita pakai, jadi wajib di-push ke Git biar orang lain tahu cara rakitnya. kalo folder `node_modules` itu harusnya kardus berisi balok plastik aslinya, jadi haram di-push biar gak bikin penuh repo yang saya pahamin. orang lain kalo mau rakit tinggal ketik `npm install`, nanti komputer otomatis ngambil balok sendiri dari internet sesuai kertas instruksi `package.json` tadi itu. folder berat ini keknya udah otomatis dikunci sama file `.gitignore` biar gak ikut ter-push.
- **Kesulitan:** ada eror sama kena mental dikit karna gak paham istilah robot codingan di awal, tapi setelah dijelaskan pakai analogi balok Lego baru paham dikit dikit maksudnya.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T2.4

- **Status:** done
- **Capaian:** Yang saya lihat dan pahami ya, yang jelas Prettier itu biar kodingan jadi rapi yak contoh nya kalo huruf nya space terlalu jauh di rapikan, baris kode nya di rapihin biar ga mencong2. nah kalo ESLint yang saya tengok kayanya cari eror gitu, jadi kalo ada eror atau bug di logika kode lah, dia perbaiki/nyari, ya contoh nya nanti dia kek ngasih tau kalo ada cacat logika missal saya salah nulis rumus tanda `=` cuma satu di dalam baris `if` yang harusnya ditulis `===`.
- **Kesulitan:** Pertama nyoba bikin file baru baru minta la AI buatin kode, baru saya klik lah CTRL + S nah kode yang awalnya berantakan jadi rapi, nah untuk ESLint ini kurang keliatan ya tampilan nya, sedikit kurang paham juga cuma yang jelas ngasih tau cacat logika.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T3.5

- **Status:** done
- **Capaian:** saya udah mempraktikkan langsung tadi skenario terminal dari modul di folder submissions/M1-W1/tugas_T3.5 sesuai dengan modul, saya membuat folder_a, folder_b, dan folder_c. dan ini hasil nya:
  1. pas posisi di folder_c saya ketik command cd ../.. dan hasilnya terbukti jalur terminal saya langsung mundur dua tingkat keluar terlempar ke folder_a. sesuai prediksi saya.
  2. pas posisi di folder_b saya ketik command "ls", alamat yang ada di terminal itu folder_c karna cuma folder itu yang ada di dalam folder_b.
  3. tadi ada eror dikit pas awal karna typo ngetik cd folder a pakai spasi harusnya sesuai yang saya buat pakai tanda underscore "\_", tapi langsung paham jalurnya harus ditulis sesuai nama folder_a.
- **Kesulitan:** awalnya bingung sama maksud ramalan dan prediksi di modul, baru saya tanya AI maksud nya apa baru saya langsung bikin folder_a, \_b, \_c baru kelihatan jelas logikanya pas berpindah-pindah jalur.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W1.T3.6

- **Status:** done
- **Capaian:** 1. bedanya gini kalo path absolut itu harus Panjang dia alamat nya (contoh cd C:\Users\spotg\Desktop\latihan*kuis\foto) jadi kalo kita berada di folder mana aja gampang pindah nya. nah sedangkan path relative itu pendek/singkat jadi kalo kita di folder latihan_kuis kita tinggal ketik "cd foto" untuk melihat isi folder latian_kuis. 2. CD [Koreksi setelah cek modul: Di Windows PowerShell bisa pakai `Get-Location` atau command universal `pwd` (print working directory)]\*. 3. "rm nama-file" itu arti kode "rm" itu remove atau menghapus jadi menghapus 1 file, nah sedangkan "rm -r nama-folder" fungsi nya itu menghapus folder serta isi isi nya, jadi kalo hapus folder tanpa "-r" windows akan nanya (praktek dikit tadi). 4. menurut saya kayanya ga bisa di kembalikan, setau saya ya system Recycle Bin itu dia ganti alamat nya sementara baru benar benar di hapus 5. kalo "ls" melihat isi folder tanpa harus masuk ke foldernya, nah kalo "ls -la" kurang tau. [Koreksi setelah tanya AI: ls biasa cuma nampilin nama file standar. Kalau `ls -la` itu buat ngebongkar file rahasia/gaib yang tersembunyi pakai tanda titik (seperti `.gitignore`) lengkap beserta tabel detail ukuran file dan tanggal modifikasinya]*.
- **Kesulitan:** Bingung dikit untuk soal no 5 tadi, cuma setelah di koreksi jadi paham
<!-- ENTRY END -->

<!-- ENTRY START -->

### `M1.W1.T3.7`

- **Status:** - - -
- **Capaian:** sudah mengirim video dan voice note ke wa mas ikhun.
- **Kesulitan:** tidak ada kesulitan menjelaskan dan membuat video, paling agak slow resp mas ikhun nya.
<!-- ENTRY END -->
