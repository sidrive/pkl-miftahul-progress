# Daily Log

> **Cara pakai:** setiap hari kerja, tambahkan laporan di **paling bawah** file ini (append, jangan edit entry lama), lalu commit & push.
>
> Struktur: 1 heading tanggal (`## YYYY-MM-DD`), di bawahnya boleh ada 1 atau lebih blok task (kalau hari itu mengerjakan beberapa task). Setiap blok task **wajib** dibungkus `<!-- ENTRY START -->` ... `<!-- ENTRY END -->` — dipakai script otomatis untuk membaca log ini, jangan dihapus.
>
> Field `Task` **harus** memakai ID yang sama seperti di `TASKS.md` (contoh: `M1.W1.T1`). Field `Status` hanya boleh salah satu dari: `in-progress`, `done`, `blocked`.
>
> Format commit message yang disarankan: `log: 2026-07-13 - M1.W1.T1 done`

---

# Bulan 1

## 2026-07-13 // bulan 1 - minggu 1

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

### Task: M1.W1.T3.7

- **Status:** done
- **Capaian:** sudah mengirim video dan voice note teach-back ke mentor (WA).
- **Kesulitan:** tidak ada kesulitan menjelaskan dan membuat video, paling agak slow resp mentor-nya — nunggu konfirmasi/feedback mentor dulu sebelum ditandai done.
<!-- ENTRY END -->

---

## 2026-07-16

<!-- ENTRY START -->

### Task: M1.W1.T5

- **Status:** done
- **Capaian:** saya menyelesaikan dan mengembangkan aplikasi CLI "Monitoring Tugas PKL" menjadi lebih interaktif. kode berhasil dipecah menjadi 2 file (index.js dan data.js) dengan folder submissions yang dibuat murni lewat terminal VS Code. di sini saya mengimplementasikan 2 package npm: "chalk" untuk pewarnaan teks terminal dan "cli-table3" untuk pencetakan tabel otomatis. selain itu, saya berinisiatif menambahkan fitur navigasi perintah di bagian paling atas tabel, fitur tambah data langsung dari argumen terminal (`node index.js tambah "Nama Tugas"`), serta fitur update status tugas (`node index.js status [ID] done/progress`). file README.md juga sudah diperbarui lengkap dengan instruksi menu baru tersebut.
- **Kesulitan:** awal awal saya tidak mengerti ya, baca modul kaya berbelit belit gitu, nah baru saya minta bantu AI untuk pengerjaan nya dan masih belum paham, baru setelah itu saya istirahat bentar dengerin music, buka youtube cari hiburan baru siap itu saya coba pahamin dan apa? yup belum paham juga wkwkwk, nah habis itu saya coba la kerjain di folder lain gitu, saya minta bantu AI juga ya kan, AI juga yang ngasih kode nya, saya kerjan lewat terminal di VS Code nya dan mengisi kode nya di VS Code nya juga, nah habis itu saya ikutin step step dari ai, mulai dari bikin folder baru siap itu pakai folder itu di terminal, habis itu buat beberapa file yang di perluka (index.js, data.js, package.json), nah setelah itu saya copy kodingan dari AI baru paste ke masing masing file sesuai kodingan. habis itu kan kalo install "npm" bakal ke blok, baru saya pakai "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass" baru intall npm chalk nya, baru isi file nya, baru di terminal ketik "node index.js" udah deh bos. ya jujur aja walau di bantu AI cuma sekarang udah paham lah maksudnya apa dan gimana gimana nya.
<!-- ENTRY END -->

---

## 2026-07-17

<!-- ENTRY START -->

### Task: M1.W1.T6

- **Status:** done
- **Capaian:** Demo ke mentor sudah selesai, semua tools jalan normal, CLI tool berhasil didemo, pertanyaan variasi mentor terjawab.
- **Kesulitan:** sebelum meeting / evaluasi dengan mentor saya sudah persiapan, memahami apa yang saya kerjakan, mencoba beberapa perintah 'node.js", paham navigasi command line di terminal, tetapi waktu meeting semuanya agak lupa karna grogi, sedikit paham dengan kode yang di kerjakan tapi beneran lupa waktu meeting, mungkin masih tegang waktu meeting jadi semua nya blank, bagian yang berhubungan dengan java script saya kurang paham karna belum coba java script dan belum mempelajari, mungkin segini aja dulu.
<!-- ENTRY END -->

---

## 2026-07-20 // minggu 2

<!-- ENTRY START -->

### Task: M1.W2.T1.1

- **Status:** done
- **Capaian:** Berhasil memverifikasi pemasangan Git lewat terminal dan cek versi (`git --version`). Sudah konfigurasi identitas global untuk `user.name` dan `user.email`. Sekarang setiap commit sudah resmi tercatat atas nama saya sendiri serta sukses melakukan konfigurasi identitas global untuk user.name menjadi "M-AL-GAZI-H" dan user.email agar histori commit tercatat akurat.
- **Kesulitan:** Tidak ada.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T1.2

- **Status:** done
- **Capaian:** Berhasil membuat folder latihan `bulan1-minggu2`, menginisialisasi repository Git baru (`git init`), dan mempraktikkan / mencoba siklus dasar Git. Sukses membuat 3 commit terpisah dengan riwayat pesan yang jelas dan memverifikasinya melalui `git log`.
- **Kesulitan:** Sempat ada kendala perizinan Windows (`Access Denied`) awalnya, saat mencoba me-rename folder via terminal karena folder sedang dikunci oleh VS Code, namun berhasil diselesaikan dengan menutup VS Code terlebih dahulu dan mengubah namanya secara manual lewat File Explorer.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T1.3

- **Status:** done
- **Capaian:** Berhasil mempraktikkan konfigurasi `.gitignore` untuk menyembunyikan file `test.log` dan folder `data-rahasia/` agar tidak ikut ter-track oleh Git. File aturan `.gitignore` juga sudah berhasil di-commit dengan aman.
- **Kesulitan:** Sempat mengalami masalah di mana `.gitignore` tidak bekerja (file rahasia tetap muncul warna merah saat `git status`). Setelah dianalisis dan di perbaiki, ternyata perintah `echo` di Windows PowerShell otomatis membuat file dengan format encoding `UTF-16 LE` sehingga tidak terbaca oleh Git. Masalah selesai setelah format encoding diubah manual lewat VS Code menjadi `UTF-8`.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T1.4

- **Status:** done
- **Capaian:** Stagging area itu layak nya keranjang belanja atau meja tugas gitu, kita memilih file yang mau kita simpan atau tidak, staging area itu berguna supaya kita bisa memilih file mana yang udah siap disimpan. misalnya saya mengubah a.txt dan b.txt, tapi b.txt masih belum selesai. jadi saya cukup "git add a.txt" lalu git commit, sehingga yang tersimpan hanya a.txt. Menurut saya ini berguna supaya commit tidak berantakan dan file yang belum selesai tidak ikut masuk. dan kenapa Git punya tahap `add` sebelum `commit` (bukan langsung commit semua perubahan), menurut saya, Git memakai add sebelum commit supaya kita bisa memilih perubahan mana yang sudah siap disimpan. Jadi tidak semua perubahan langsung ikut ke commit. Kalau ada file yang masih belum selesai atau masih ada kesalahan, file itu bisa dibiarkan dulu dan baru di-commit nanti kalau sudah selesai.
- **Kesulitan:** --
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T1.5

- **Status:** done
- **Capaian:**

1. Apa fungsi `git status`?
   = fungsi git status itu seperti melihat daftar tugas atau mengecek isi keranjang belanja sebelum bayar.

2. Apa beda `git add <file>` dengan `git add .`?
   = kalo "git add <file>" itu cuma menambahkan file yang kita pilih aja (1 file aja / yang dipilih), sedangkan "git add ." itu menambahkan semua jenis file yang ada di folder.

3. Setelah `git commit`, apakah perubahan itu otomatis sudah ada di GitHub? Kenapa?
   = belum soalnya kalo "git commit" itu baru ke save di file local (pada pc kita doank), kalo mau ada di GitHub harus di git push dulu biar dia ke update/upload ke GitHub nya

4. Apa fungsi `git log`?
   = fungsi nya adalah melihat semua commit yang sudah kita buat, kita bisa mengetahui kapan commit dibuat, siapa yang membuatnya, dan pesan commit yang ditulis.

5. Kalau kamu lupa isi `.gitignore` dan sebuah file besar/sensitif terlanjur ter-commit, apa akibatnya (ingat pengalaman `node_modules` Minggu 1)?
   = kurang tau, tapi menurut pendapat saya akibat nya mungkin fatal kali ya, bisa bikin file jadi berat.
   (koreksi = Akibatnya fatal banget, repo lu bakal bengkak dan data rahasia lu bisa bocor.
   Bikin Berat & Lemot: File sampah yang gede (kayak folder node_modules waktu di Minggu 1) bakal ikut kefoto masuk ke Git. Efeknya, pas lu mau upload (git push) atau download (git pull) kodingan ke GitHub, prosesnya bakal lama banget dan ngabisin kuota internet karena filenya kegedean.
   Bahaya Diintip Orang: Kalau file rahasia (kayak password database atau token API) terlanjur masuk commit dan lu push ke GitHub publik, data itu bisa dilihat dan disalahgunakan sama orang lain di internet.)

- **Kesulitan:** --
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T2.1

- **Status:** done
- **Capaian:** jadi git diff itu perintah untuk melihat perubahan pada file yang belum di-git add. misalnya saya punya file catatan.txt, lalu saya menambahkan tulisan di dalamnya. setelah itu saya menjalankan git diff, maka Git akan menampilkan perubahan apa saja yang sudah saya buat tetapi belum masuk ke staging area (git add). Nah, kalau file tersebut sudah saya git add, maka perubahan itu tidak akan muncul lagi saat menjalankan git diff. Untuk melihat perubahan yang sudah di-git add tetapi belum di-commit, kita harus menggunakan perintah git diff --staged.
- **Kesulitan:** harus rubah encoding ke UTF-8
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T2.2

- **Status:** done
- **Capaian:** jadi perintah git restore (nama file) itu perintah untuk membatalkan gitu, jadi missal kita ada sebua file, misalnya catatan.txt, saya ga sengaja menghapus beberapa paragraph di dalam file nya, maka saya pakai perintah git restore biar dia Kembali lagi
- **Kesulitan:** Gak ada, lancar jaya.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T2.3

- **Status:** done
- **Capaian:** Jadi git reset HEAD itu dipakai kalau kita sudah git add sebuah file, tapi ternyata tidak jadi memasukkan file itu ke staging area. Jadi perintah ini membatalkan git add, bukan menghapus isi file. Sedangkan git reset --soft HEAD~1 dipakai kalau kita sudah git commit (sudah membuat histori/riwayat commit), tapi ternyata commit itu tidak jadi atau masih ada yang ingin diperbaiki. Jadi commit terakhir dibatalkan, tapi semua perubahan di file tetap ada sehingga bisa diperbaiki lalu di-commit lagi.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T2.4

- **Status:** done
- **Capaian:** jadi perinta commit -amend itu untuk mengubah/membenar kan perintah commit yang salah, misalnya saya commit "ikan makan nasi" tapi terketik "ian makan nasi", jadi saya pakai perintah commit amend ini untuk membenar kan, jadi ga perlu menghapus commit nya. tinggal ubah aja, jadi ga perlu juga untuk membuat commit baru. dan misalnya saya lupa memasukkan file, contoh saya commit file index.html tapi lupa masukin file style.css, jadi tinggal gunakan perinta ini aja.
- **Kesulitan:** awalnya ga paham gimana cara pakai commit --amend ini, rupanya untuk menmabah / mengubah commit yang salah.
<!-- ENTRY END -->

---

## 2026-07-21

<!-- ENTRY START -->

### Task: M1.W2.T2.5

- **Status:** done
- **Capaian:** praktek dulu awal awal, setelah itu saya pahamin apa maksud dari git stash dkk, nah menurut saya git stash ini anggapan nya adalah perintah untuk menyimpan perubahan / menampung file sementara, jadi kita lagi buat suatu program, dan tiba tiba ada hal lain yang mendadak, jadi kita pakai git stash ini untuk menyimpan sementara program yang kita buat barusan. nah git stash list ini perintah untuk melihat file apa yang sedang kita stash, jadi disitu nanti muncul file apa yang kita stash, git stash pop itu perintah untuk mengeluarkan file yang di stash tadi, jadi dia un-stash, jadi muncul lagi file nya.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T2.6

- **Status:** done
- **Capaian:**

1. git log : menampilkan histori lengkap seperti author, tanggal, pesan commit, kode hash commit. jadi git log itu melihat semua histori ngapain aja,
2. git log --oneline : melihat histori commit dengan isi / pesan dari commit itu, jadi isinya singkat aja
   git log --graph --oneline : di bagian histori nya ada tambahan ( _ ) [koreksi= sama seperti git log --oneline, tetapi ditambah grafik sederhana menggunakan tanda _, |, dan \ untuk menunjukkan hubungan antar commit atau branch. Kalau repository masih memiliki satu branch, grafiknya akan terlihat lurus. Jika sudah memiliki beberapa branch, grafiknya akan bercabang.].
3. git log --stat : perintah ini menampilkan histori commit beserta ringkasan perubahan pada setiap commit, seperti file apa saja yang diubah, ditambah, atau dihapus, serta jumlah baris yang bertambah (+) atau berkurang (-).
4. git show <hash commit> : berfungsi untuk melihat detail lengkap dari satu commit tertentu berdasarkan hash commit. Informasi yang ditampilkan meliputi author, tanggal, pesan commit, serta perubahan isi file pada commit tersebut.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T2.7

- **Status:** done
- **Capaian:** 1. menurut saya, git revert lebih aman karena tidak menghapus histori commit yang sudah di-push ke GitHub. tapi dia cuma buat commit baru untuk membatalkan perubahan dari commit yang salah. jadi, teman saya yang sudah git pull tinggal melakukan git pull lagi agar mendapatkan commit hasil git revert, sehingga project kembali normal dan histori tetap sinkron. sedangkan kalau memakai git reset --hard + git push --force, commit yang salah akan dihapus seolah-olah tidak pernah ada. akibatnya histori di laptop teman saya berbeda dengan histori di GitHub, sehingga bisa terjadi konflik atau pekerjaan teman saya ikut bermasalah. 2. git revert itu gak cukup kalau commit yang sudah di push berisi data yang benar benar gak boleh ada, misalnya password, API key, token, atau data rahasia perusahaan. walaupun sudah di git revert, data tersebut masih ada di histori Git. jadi dalam kondisi seperti itu biasanya perlu pakai cara lain yang bisa menghapus histori commit itu, tapi harus dilakukan dengan sangat hati hati kaena bisa mempemengaruhi orang lain yang pakai / gunakan repository yang sama.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T3.1

- **Status:** done
- **Capaian:** repo lokal > berada didalam komputer. repo remote > berada di server GitHub.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T3.2

- **Status:** done
- **Capaian:** kalau git commit di laptop perubahan belum ada di GitHub karna belum di push, dan misalnya laptop saya rusak dan belum sempat push maka perubahan/file itu akan rusak/hilang total karna belum masuk ke server gihub. kejadian beda hasil push/pull itu terjadi karna perbedaan repo local dan remote, commit itu tersimpan di local dan belum tersimpan di server GitHub, jadi harus di push dulu baru masuk server sehingga kawan tim gak bisa lihat sebelum di `git push`, dan kita gak bisa update terbaru sebelum di `git pull`.
- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-07-22

<!-- ENTRY START -->

### Task: M1.W2.T4.1

- **Status:** done
- **Capaian:** udah buat repo baru di git dengan nama "Task-T4" dan sudah cek versi dan berhasil dan menampilkan "origin"
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T4.2

- **Status:** done
- **Capaian:** sudah push 3 commit ke repo GitHub, histori di lokal dan Github sesuai.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T4.3

- **Status:** done
- **Capaian:** sudah melakukan edit dilokal dan di git push tanpa -u 2 kali dan berhasil. note "-u" pada saat git push pertama kali berfungsi supaya Git mengingat kalau branch lokal kita terhubung dengan branch yang ada di GitHub. Jadi setelah hubungan itu tersimpan, kita tidak perlu lagi mengetik git push origin main, cukup git push saja karena Git sudah tahu branch lokal tersebut harus dikirim ke branch mana di GitHub.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T4.4

- **Status:** done
- **Capaian:** saya sudah melakukan simulasi eror, jadi saya edit file yang ada di repo github baru saya sace commit. habis itu saya edit file yang ada di lokal baru saya push, ada pesan eror di terminal, lalu itu tanda nya saya menimpa file yang ada di github, jadi saya harus ambil dulu file yang ada di github atau di pull, nanti akan muncul file merge gitu, di close aja. setelah itu lakukan push, jadi file di github dan lokal itu sama. hasil refleksi = 1. push saya di tolak karena di repo GitHub ada commit/perubahan baru yang belum ada di repositori lokal laptop saya. git nolak push untuk mencegah perubahan file yang tertimpa.

2. kalo di git pull dulu dia akan menarik commit/file dari repo GitHub lalu menggabungkannya atau merge secara aman dengan commit lokal. jadi file di GitHub dan local sama persis sehingga tidak ada bentrok. sedangkan jika pakai git push --force, file yang ada di local memaksa / menimpa GitHub untuk ambil file versi lokal dan menimpa/menghapus riwayat commit yang ada di GitHub. ini bahaya karna bisa menghilangkan kodingan lama atau pekerjaan orang lain.
3. jika terjadi eror saya akan git pull dulu, jadi menarik data yang ada di GitHub dulu biar sama / sinkron yang ada di local dan GitHub, baru saya push, dan saya tidak akan melakukan --force biar tidak ada bentrok.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T5

- **Status:** done
- **Capaian:** saya udah buar repo github untuk task T5 minggu 2 ini (https://github.com/GaziSyah/T5-minggu2), sesuai sama modul saya udah ikutin langkah langkah dan beberapa commit yang diminta (setup awal, data & struktur, logika CLI, README). saya juga coba pakai perintah `git commit --amend` untuk memperbaiki pesan commit. sempat kena skenario push ditolak & merge conflict pada README.md, lalu berhasil diselesaikan menggunakan `git pull origin main --no-rebase` tanpa `--force`.
- **Kesulitan:** awalnya saya hanya buat repo di github karna itu yang paling gampang, lalu saya copy folder proyek minggu 1 lalu saya ganti nama dengan "T5-minggu2". setelah itu saya ikutin langkah langkah atau tugas yang ada di modul, sejauh itu masih paham, nah baru tadi kan ada eror waktu simulasi ditolak, nah eror nya itu kan data nya nabrak yang dari lokal dan github. data yang ada berbeda karna tadi saya edit di lokal dan di github, nah baru kan konflik merge gitu, baru saya cari tau harus klik "Accept Both Change", bagian sini si sebenarnya yang sedikit membingungkan.
<!-- ENTRY END -->

---

## 2026-07-27 // minggu 3

### Task: M1.W2.T6

- **Status:** done
- **Capaian:** saya memilih project untuk membuat sebuah kalkulator CLI, saya buat struktur nya lewat terminal dengan nama "T6-TaskM2-kalkulator-cli" yang nanti nya akan di masukkan ke repo GitHub.
- **Kesulitan:** Awal bingung dengan kode dan cara kerja kalkulator nya, kemudian saya pahamin dan pelajari apa aja isi dari kode index.js nya. tapi sejauh ini aman untuk kalkulator cli nya.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W2.T7

- **Status:** done
- **Capaian:** Sudah melakukan evaluasi dengan mentor, sebagian Git dasar dikuasai, repo latihan & repo T5 sudah ter-push, sudah presentasi mini-project T6, pertanyaan variasi mentor sudah di jawab.
- **Kesulitan:** Waktu evaluasi ada beberapa peintah git yang kurang dipahami, percobaan untuk .gitignore ada masalah sehingga tidak berjalan dengan baik. ada blank juga waktu evaluasi.
<!-- ENTRY END -->

---

## 2026-07-28

<!-- ENTRY START -->

### Task: M1.W3.T1.1

- **Status:** done
- **Capaian:** Pahami konsep dasar branch, kenapa butuh jalur terpisah buat kerja paralel (misal bikin fitur baru tanpa ngerusak kodingan stabil di main).
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T1.2 & M1.W3.T1.3

- **Status:** done
- **Capaian:** Sudah melakukan praktek git switch (main / branch lain). bikin branch `coba-tukar` pakai `git switch -c`, commit file `catatan.txt`, dan membuktikan filenya otomatis sembunyi/hilang saat switch balik ke `main`. dan berhasil praktik hapus branch aman pakai `git branch -d` untuk branch kosong, serta membuktikan `git branch -d` menolak menghapus branch berisikan commit yang belum di-merge sebelum akhirnya dipaksa hapus dengan `git branch -D`.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T1.4

- **Status:** done
- **Capaian:** Berhasil menjawab kuis refleksi mandiri konsep branching tanpa nanya AI.

1. kalo git switch -c <nama> membuat sebuah branch dan langsung menukar branch ke branch yang baru, kalo git branch (nama) di ketik di terminal dia eror [koreksi = git branch <nama> --> Cuma membuat branch baru, tapi posisi kamu masih tetap di branch lama (belum pindah).]
2. menurut saya biar perubahan itu tidak mempengaruhin/membuat eror branch yang lain
3. karena branch masih ada isinya dan tidak kosong

- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T2.2

- **Status:** done
- **Capaian:** Berhasil praktik Fast-Forward Merge dari branch `fast-merge` ke `main`. Terbukti pesan Git menampilkan "Fast-forward" dan `git log --graph` menunjukkan histori commit yang lurus sempurna.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T2.3

- **Status:** done
- **Capaian:** saya udah praktik dan berhasil melakukan 3-Way Merge dengan buat commit di main dan di branch lainnya (saya beri nama gitar-3jalan pelesetan fitur-3way) sebelum di merge, Git membuat auto-merge commit dan menampilkan jalur bercabang dua di terminal lalu menyatu.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T3.1

- **Status:** done
- **Capaian:** Saya praktek dan berhasil memahami konsep dan sengaja memicu Merge Conflict di file. Terbukti Git menghentikan proses auto-merge dan menampilkan peringatan CONFLICT (content).
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T3.2

- **Status:** done
- **Capaian:** Berhasil resolve conflict manual, pilih versi main, commit selesai tanpa penanda tersisa.
- **Kesulitan:** File sempat terdeteksi binary karena encoding PowerShell (UTF-16 LE), diatasi pakai Set-Content UTF-8
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T3.3

- **Status:** done
- **Capaian:** 1. Git ga bisa gabungin otomatis karna ada nya perubahan yang ada pada branch yang berbeda tapi sama sama mengubah isi file di baris yang sama dan dalam file yang sama, karna isinya beda, git ga bisa langsung me-merge, jadi git menyerahkan ke kita keputusan akhir nya.

2. sebelumnya belum tau apa itu merge conflict, dengar kata conflict kaya sesuatu yang fatal eror nya dan membingungkan juga. setelah saya pelajari dan memahami apa itu, saya jadi tau apa itu merge-conflict, itu rupanya bukan eror yang fatal, tapi mekanisme / kemananan dari git.

- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-07-29

<!-- ENTRY START -->

### Task: M1.W3.T4.1, M1.W3.T4.2

- **Status:** done
- **Capaian:** berhasil push branch bukan di main, berhasil buat pull request (PR) pertama.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T4.3

- **Status:** done
- **Capaian:** Berhasil mengeksekusi alur Merge Pull Request (PR) di GitHub secara mandiri. Memastikan seluruh checks aman, menyelesaikan alur merge ke branch `main` remote, lalu melakukan `git pull origin main` di lokal agar file tetap ter-sync.
- **Kesulitan:** belum coba untuk merge pull-request mini project nya.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W3.T4.5

- **Status:** done
- **Capaian:** 1. Bug atau kodingan error, typo, file sampah, dan file rahasia yang gak sengaja ke-commit bisa ketahuan duluan sebelum ngerusak atau mengotori branch main.

2. Bisa banget, karena branch main bakal dikunci dari push langsung. Semua perubahan wajib lewat PR secara transparan, jadi riwayat kodingan aman dan gak bakal tertimpa.

- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-07-30

<!-- ENTRY START -->

### Task: M1.W3.T5

- **Status:** done
- **Capaian:** Menambahkan fitur pangkat pada kalkulator cli T6 minggu 2. fitur operator pangkat (^) ditambahkan lewat branch+PR:( https://github.com/GaziSyah/T6-minggu2-kalkulator-cli/pull/1 ). Sempat conflict asli di index.js pada bagian petunjuk console.log, berhasil resolve manual dengan memilih perbaikan dari branch fitur-pangkat. PR sudah dibuat dan siap direview.
- **Kesulitan:** pertama saya menbuat branch baru untuk ngerjain M3.T5 ini, setelah itu saya git add dan git commit juga, saya kan juga bertanya pada ai ngapain, saya git merge di branch lain bukan di main, nah kebuka file baru dan ada conflict gitu, nah kan saya bandingkan baru saya klik aja resolve merge conflict,
sempat bingung juga pas proses pemicuan conflict karena Git sempat auto-merge otomatis dan bingung pas tampilan VS Code muncul tanda coretan merah/hijau pas resolve conflict, tapi akhirnya paham cara beresinnya dengan di bantu dikit dikit.
<!-- ENTRY END -->

---

## 2026-07-31

<!-- ENTRY START -->

### Task: M1.W3.T6

- **Status:** done
- **Capaian:** sudah melakukan evaluasi untuk taks T6.
- **Kesulitan:** evaluasi berjalan dengan lancar, semua pertanyan berhasil dijawab dan di jelaskan dengan cukup baik.
<!-- ENTRY END -->

---

## 2026-08-03 // minggu 4

<!-- ENTRY START -->

### Task: M1.W4.T1.1

- **Status:** done
- **Capaian:** Siklus penuh berhasil dari ingatan. Yang lancar: init/add/commit/branch. Yang sempat ragu: urutan merge balik ke main.
- **Kesulitan:** Saat saya mencoba masih ingat semua perintah git seperti bikin branch baru, git merge, git commit dan dipush ke github dll tanpa kesusahan. yang masih ragu paling posisi di branch mana, jadi saya sering pakai "git branch"
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T1.2

- **Status:** done
- **Capaian:** : `git branch` = Saya pakai perintah ini sebelum melakukan git merge agar tidak salah posisi branch.
  `git merge <nama-branch>` = Saya pakai perintah ini untuk menggabungkan file yang ada di branch lain ke branch posisi saya sekarang.
- **Kesulitan:** Terkadang masih lupa posisi branch sebelum melakukan merge. jadi saya biasanya pakai perintah git branch dahulu.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T2.2

- **Status:** done
- **Capaian:** Berhasil praktik mengubah kode index.html yang banyak menggunakan div bisa menjadi div generik jadi header/main/footer menggunakan HTML semantik.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T2.3

- **Status:** done
- **Capaian:** 1. Kalau <div> itu kaya kotak kosong, jadi screen reader tidak bisa mengetahui nya. akibatnya, screen reader hanya membacakan isi halaman tanpa mengetahui mana navigasi, mana konten utama, atau mana footer nya. dengan elemen semantik seperti nav, main, header, dan footer, screen reader dapat melihat struktur pada halaman, jadi pengguna lebih mudah berpindah ke bagian yang diinginkan dan memahami isi halaman.

2. setelah saya pahami dan cari tau apa itu SEO, jadi elemen pada semnatik html seperti article dan section membantu SEO karna memberikan struktur pada isi halaman, jadi search engine lebih mudah memahami bagian bagian penting dari website dibanding jika semuanya hanya menggunakan div, yang tidak menjelaskan fungsi kontennya (karena div kotak kosong).

- **Kesulitan:** Awalnya saya belum memahami hubungan antara HTML semantik dengan SEO, tetapi setelah mempelajari materi dan mencari referensi, saya mulai memahami bahwa elemen semantik tidak hanya membantu screen reader, tetapi juga membantu search engine memahami struktur halaman website.
<!-- ENTRY END -->

---

## 2026-08-04

<!-- ENTRY START -->

### Task: M1.W4.T3.2

- **Status:** done
- **Capaian:** Berhasil bikin layout grid 3 kolom pakai grid-template-columns dan mencoba mengubah tampilan dan paham fungsi <fr>.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T3.4

- **Status:** done
- **Capaian:** Media query berhasil, galeri berubah dari 3 kolom jadi 1 kolom di bawah 600px (sudah dicoba resize langsung).
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T3.5

- **Status:** done
- **Capaian:** kita pakai flexbox saat ingin membuat sebuah navbar pada suatu website, nah navbar ini kan biasanya lurus aja 1 dimensi/garis lurus, jadi cocok menggunakan flexbox. contoh nyata saat ingin membuat sebuah navbar yang berisi tombol dan logo seperti pada T3.3. dan kita pake grid saat ingin membuat sebuah layout dengan banyak item/kolom. seperti kita membuat sebuah web produk, nah untuk pilihan produknya kita pakai grid biar rapi susunan nya. contoh nyata bikin galeri/pilihan produk pada web.
- **Kesulitan:** pada grid ada kode yang bertuliskan "grid-template-columns: repeat(3, 1fr);", nah disini saya bingung "fr" ini untuk apa, saya cari tau rupanya mirip dengan "vh".
<!-- ENTRY END -->

---

## 2026-08-05

<!-- ENTRY START -->

### Task: M1.W4.T4.1

- **Status:** done
- **Capaian:** saya sudah melihat dan mengaudit project To-Do List lama berbasis PHP/MySQL dan mencatat masalah :
  1. Index belum semantik: masih banyak pakai `<div>` tanpa semantik, dan pakai `<br>` untuk mengatur jarak form.
  2. tabel tidak responsive: tampilan tugas menggunakan `<table>` dengan 7 kolom dan lebar container dikunci di `800px`, menyebabkan layar jebol/overflow saat dibuka di HP / tampilan saat diperkecil.
  3. tidak ada Flexbox/Grid untuk layouting biar rapi dan belum ada `@media` query untuk tampilam fleksibel.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T4.3

- **Status:** done
- **Capaian:** udah rapihin tampilan CSS pake Flexbox di bagian form input dan filter status biar posisinya pas dan gak perlu pake tag `<br>` manual lagi, nambahin juga pembungkus tabel biar bisa di-scroll ke samping dan pake media query biar pas dibuka di layar HP tampilannya gak jebol atau berantakan.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T4.4

- **Status:** done
- **Capaian:** saya udah bandingin dan :

1. Before: Index masih banyak pakai `<div>` biasa dan banyak `<br>` berulang. tampilan jadi jebol/overflow pas dibuka di layar HP / persempit tampilan.

2. After: sekarang Index udah rapi dan semantik. tampilan pake Flexbox jadi rapi otomatis, dan udah responsive pakenya `@media` query buat layar kecil. tapi setelah pakai itu tampilannya sedikit mirip jika pakai bootstrap.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T5.2

- **Status:** done
- **Capaian:** saya membuat folder baru di (...\submissions\M1-W4\T5.2.todo>). saya membuat folder T5.2.todo yang isinya adalah project To Do List, saya juga udah buat branch baru dengan nama "revamp-todo-list".
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T5.3

- **Status:** done
- **Capaian:** PR [https://github.com/sidrive/pkl-miftahul-progress/pull/1] sudah dibuat & di-merge. Branch revamp-todo-list belum dihapus, nunggu dibahas bareng mentor pas evaluasi T7. udah di push juga dari branch lain
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T5.4

- **Status:** done
- **Capaian:** 1. orang lain dapat baca dan paham histori commit untuk project To Do List. semua perubahan di commit 1 per satu, jadi tiap perubahan ada catatan atau histori nya.

2. menurut saya ada beberapa pesan commit yang tidak jelas (contoh: 177beaf chekpoint tanggal 5 agustus, mau melakukan PR.harusnya: 5-agustus-2026 update daily log dan tasks M1.W4.T5). seharus nya commit yang jelas itu commit yang orang lain (bukan pembuat commit) bisa baca dan paham alur perubahan dari commit.

- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-08-06

<!-- ENTRY START -->

### Task: M1.W4.T6

- **Status:** done
- **Capaian:** saya membuat sebuah halaman galeri foto "Gallery G" yang berisi 3 halaman (index.html, galeri.html, kontak.html). saya menaruh folder tugasnya di ../submissions/M1-W4/T6-M4-project-skilss. pengerjaannya saya mulai dengan menyusun struktur HTML semantik pada tiga halaman utama, yaitu index.html, galeri.html, dan kontak.html. saya menggunakan flexbox pada bagian header agar memunahdan untuk membuat navbar dan tulisan logo dari web. saya pakai grid pada bagian tampilan foto, saya pakai biar tampilang foto jadi rapi dan tertata dengan bagus. link PR [https://github.com/sidrive/pkl-miftahul-progress/pull/2].
- **Kesulitan:** awalnya bagian footer ga menempel di paling bawah layar, untuk grid awalnya berantakan kali soalnya banyak eror juga ya dan penggunaan kode yang cukup asing bagi saya untuk beberapa bagian, nah untuk tampilan responsive saya jujur masih agak bingung cara pemakaian dan penyesuaian nya. sebelumnya saya kan buat web banyak pakai <div> dan saat pakai HTML semantik ini jujur awalnya agak kaget dan membingungkan, saya pelajari dan tanya ai katanya sebenarnya perubahan nya tidak terlalu banyak. seperti harus ada main, section dll nya, kurangin penggunaan <div>. boleh ada div tapi tidak sebanyak saat awal awal saya buat web. untuk halaman awal saya buat itu index.html, yang lalu saya copy dan ubah nama menjadi galeri.html dan kontak.html, dan saya ubah kode yang ada didalam nya, ga terlalu banyak berubah, cuma tampilan nya agak sedikit berbeda lah, ya mungkin segitu lah dulu.
<!-- ENTRY END -->

---

## 2026-08-07

<!-- ENTRY START -->

### Task: M1.W4.T1.4

- **Status:** done
- **Capaian:** Sudah teach-back ke mentor, alur branch-commit-push-PR-merge dijelaskan lancar.
- **Kesulitan:** sejauh ini masih aman, paling soal posisi git lagi dimana.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T7

- **Status:** done
- **Capaian:** Demo ke mentor selesai, HTML semantik/Flexbox/Grid/responsive dikuasai, git log & PR review ditunjukkan, command Git dari ingatan lancar, pertanyaan variasi mentor terjawab.
- **Kesulitan:** aman saat melakukan demo dan evaluasi dengan mentor, sejauh ini masih aman dan paling terkendala soal git branch yang sudah di bahas tadi.
<!-- ENTRY END -->

---

# Bulan 2

## 2026-08-10 // bulan 2 - minggu 1

<!-- ENTRY START -->

### Task: M1.W4.T1.2

- **Status:** done
- **Capaian:** menurut saya kenapa var bisa berbahaya karena dia bisa dipakai diluar tanda '{ }', jadi dia bisa keluar kebagian yang lain. yang bocor itu bisa menjadi bug karena misal kita membuat sebuah variabel 'status', nah kita kira variabel itu cuma dipakai di bagian tersebut, padahal kalo di program yang lebih besar pasti lebih banyak variabel yang mirip, makanya bisa terjadi bug.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T2.3

- **Status:** done
- **Capaian:** 1. menurut saya beda nya ada di 'this', jadi kalo pakai function, 'this' bisa menunjukkan ke object yang panggil function itu, nah kalau pakai arrow, dia ngga punya 'this' sendiri, jadi dia ambil dari tempat lain.

2. contohnya kalau saya buat object kucing yang punya nama dan method sapa, kalau method itu pakai arrow function, this.nama bisa ga mendapatkan nama dari object kucing, jadi hasilnya bisa eror dan program nggak berjalan.

- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-08-11

<!-- ENTRY START -->

### Task: M1.W4.T3.1

- **Status:** done
- **Capaian:** Berhasil ubah 3 baris kode dari concatenation jadi template literal di T3.1-M2-W1, di path [...\pkl-miftahul-progress-feature-mentor\submissions\M2.Taks].
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T3.2

- **Status:** done
- **Capaian:** menurut saya `+` masih bisa dipakai kalau cuma pakai teks dan variable yang dikit dan sederhana, contohnya `"halo " + nama`, karna masih gampang dibaca dan dipahami, nah kalau teksnya Panjang dan variable nya banyak, mending pakai template literal.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T4.2

- **Status:** done
- **Capaian:** Sudah mencoba destructuring object. Saya belajar mengambil property biasa, rename nama variabel, dan memakai default value kalau property-nya tidak ada.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T4.3

- **Status:** done
- **Capaian:** udah saya lihat dan bandingkan, kalau pakai destructuring kode untuk variabel jadi rapi dan gak berulang jika kita memanggil nya. nah, sebelum destructuring kita harus mengetik `contoh.nama`, `contoh.jurusan`, `contoh.umur` satu satu atau berulang. setelah pakai destructuring kita bisa langsung buat variabel misal `nama`, `jurusan`, `umur` dari object itu, menurut saya lebih enak dan rapi karna kodenya lebih singkat dan lebih gampang dibaca.
- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-08-12

<!-- ENTRY START -->

### Task: M1.W4.T5.1

- **Status:** done
- **Capaian:** jawaban :

1. `var` dan `let` itu bedanya, kalo `let` dia itu block scope, jadi cuma didalam kurung kurawal. nah sedangkan kalo `var` itu dia function scope, bisa aja bocor / keluar data / variable nya.

2. menurut saya boleh, soalnya const itu yang ngga boleh diganti variabelnya, bukan isi dari arraynya.

3. bedanya itu ada di this. kalua function biasa dia mengarah ke object yang di panggil. sedangkan arrow function ngga punya this sendiri dan mengambil this dari tempat dia dibuat. [Koreksi : Hampir benar. Yang lebih tepat, function biasa itu this mengarah ke object yang memanggil function tersebut, bukan object yang dipanggil.]

4. menurut saya pakai function biasa aja, biar this bisa langsung mengarah ke object.

5. const nama = "Gazi"
   const umur = 20
   console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun.`)

6. yang a isinya 1, b isinya 2, dan yang c kayanya ga ngikut/terambil karna di const cuma ambil a sama b.

7. kita pakai " = " (sama dengan), contoh : const { kota = "Batam" } = siswa. kalau kota ga ada, berarti isinya itu batam.

8. menurut saya kalau teks nya pendek dan variabel nya dikit, bisa pakai '+' karna gampang di baca.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M1.W4.T5.2

- **Status:** done
- **Capaian:** sudah mengerjakan dan menyelesaikan 6 soal latihan e6+. untuk soalnya saya taro di folder [../submissions/M2.Task]. Jawaban:

1.  [x] bedanya `let` dan `const`. itu kalo `let` dia itu block scope, jadi cuma didalam kurung kurawal. nah sedangkan kalo `const` itu untuk membuat sebuah variable block scope yang nilainya ga bisa diganti lagi.

2.  [x] (a,b) => a + b;

3.  [x] const nama = "Gazi";
        const umur = 20;

const isi = `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
console.log(isi);

4.  [x] biar jadi merah hijau output nya:
        const warna = ["merah", "hijau"];
        const [merah, hijau] = warna;

console.log(merah);
console.log(hijau);

5.  [x] const siswa = {
        nama: "Gazi",
        jurusan: "RPL",
        };

const { nama, jurusan } = siswa;

console.log(nama);
console.log(jurusan);

6. [y]
   karna pakai default value, jadi kalau property kota gak ada di object, JavaScript akan otomatis memakai nilai default yang kita kasih, yaitu "Batam". makanya outputnya jadi "Batam".

- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-08-13

<!-- ENTRY START -->

### Task: M1.W4.T6

- **Status:** done
- **Capaian:** saya sudah merefactor pada script profil diri pada (Task T3.1) jadi fitur ES6+ yang saya taro di path ../submissions/M2.Task. saya mengubah variabel ke `const`/`let` sesuai dengan task, terus saya juga menerapkan object destructuring, template literal (single & multi-line), dan arrow function di fungsi hitungSisaTugas. tapi untuk method getSummary() di dalam object profilSiswa, saya sengaja pakai function biasa karna method itu butuh this buat ngambil data dari object seperti this.nama, this.peran, dan lainnya. kalau pakai arrow function, this nya jadi gak bisa ngarah ke object tersebut jadi hasilnya bisa undefined. untuk pengerjaan saya lakukan di branch T6-refactor-es6 dan sudah 5 commit bertahap, lalu udah saya merge link github: [https://github.com/sidrive/pkl-miftahul-progress/pull/3]
- **Kesulitan:** waktu saya kerjain task T6 ini sempat ada kesalahan alur Git, file pengerjaan masuk ke branch `main` yang harusnya di kerjain di branch lain dan commit rename folder, jadi harus reset commit dan membersihan staging biar commit pengerjaan Task 6 bisa rapi. pada saat ngerjain masih dibantu untuk kodenya, tapi tidak semuanya, sebelum minta bantuin saya buat dulu semampu dan seingat saya, kalo buntu baru minta bantuin.
<!-- ENTRY END -->

---

## 2026-08-14

<!-- ENTRY START -->

### Task: M1.W4.T7

- **Status:** done
- **Capaian:** Demo ke mentor selesai, ES6+ dikuasai (termasuk beda this arrow vs function), PR dibahas, pertanyaan variasi mentor terjawab.
- **Kesulitan:** ada sedikit melihat modul untuk mengerjakan soal live dari mentor, masih lama untuk menjawab / menemukan bug atau eror pada program.
<!-- ENTRY END -->

---

## 2026-08-18 // minggu 2

<!-- ENTRY START -->

### Task: M2.W2.T1.1

- **Status:** done
- **Capaian:** praktek penggunaan map untuk mentransformasi array of object (data siswa) menjadi array string berisi nama aja, serta perhitungan nya.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T1.2

- **Status:** done
- **Capaian:** Berhasil praktik map & filter, termasuk kombinasi keduanya untuk ambil nama siswa nilai <75.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T1.3

- **Status:** done
- **Capaian:** :
  1. karna dia pakai prinsip _immutability_ (datanya gak diubah secara langsung). jadi tujuannya untuk menjaga keutuhan data asli (sumber data utama) biar gak rusak/terubah waktu diolah di bagian kode lain. map dan filter ini dia otomatis mengalokasikan memori/wadah baru untuk menampung hasil olahan.
  2. perbandingan kode `for` loop vs `map`/`filter`=
  ```js
  versi for loop manual (untuk filter siswa lulus):
  const siswaLulus = [];
  for (let i = 0; i < siswa.length; i++) {
  if (siswa[i].nilai >= 75) {
  siswaLulus.push(siswa[i]);
  }
  }

  versi filter modern:
  const siswaLulus = siswa.filter((s) => s.nilai >= 75);
  ```

  untuk `filter` dia lebih mudah dibaca dan dipahami karna kodenya deklaratif (langsung menyatakan _apa_ yang ingin dicapai, bukan _bagaimana_ alur perulangannya diatur). jadi kita gak perlu buat array penampung yang kosong `[]` secara manual.

- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T2.2

- **Status:** done
- **Capaian:** Berhasil praktik find, dan reduce untuk 3 kasus (total, max, rekap object) dengan data sendiri.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T2.3

- **Status:** done
- **Capaian:** =

1. bedanya antara for dan reduce itu kalo for loop itu alat kontrol perulangan tingkat rendah (imperative). jadi kita harus menyiapkan variabel penampung di luar perulangan (misal let total = 0), mengatur indeks (let i = 0), mengelola mutasi nilai penampung manual (total += ...), dan menjaga alur perulangannya sendiri. sedangkan untuk reduce itu pola pengerjaan berkonsep accumulator (deklaratif). reduce dia secara otomatis mengoper nilai akumulasi (accumulator) dari satu elemen ke elemen berikutnya dalam satu alur tertutup, tanpa perlu variabel penampung luar atau pengelolaan indeks.

2. kita pakai reduce lebih pas kalo pakai map + filter, array diproses 2 kali perulangan (di-filter dulu bikin array baru, lalu di-map lagi bikin array baru). contoh: dari array transaksi belanja, kita cuma mau hitung total pengeluaran untuk kategori "makanan". kalua kita pakai `filter` lalu dihitung, JavaScript harus iterasi 2 kali (bikin array baru hasil filter dulu, baru dihitung). nah kalau pakai `reduce()`, cukup 1 kali iterasi: di dalam `reduce`, jika `item.kategori === "makanan"`, langsung tambahkan ke `acc`.

- **Kesulitan:** masih bingung dikit ya beberapa kode yang ada didalam nya, cuma saya pelajari dan pahamin lagi.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T3.1

- **Status:** done
- **Capaian:** ambil elemen dari HTML menggunakan querySelector dan querySelectorAll, dan membandingkannya dengan getElementById. pengambilan elemen DOM menggunakan cara modern (`querySelector`, `querySelectorAll`) dan cara lama (`getElementById`, `getElementsByClassName`). memahami kalo `querySelector(".deskripsi")` hanya ambil 1 elemen pertama, sedangkan `querySelectorAll(".deskripsi")` mengembalikan kumpulan elemen berbentuk `NodeList`.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T3.2

- **Status:** done
- **Capaian:** Berhasil render list siswa ke DOM secara dinamis pakai createElement + appendChild.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T3.3

- **Status:** done
- **Capaian:** coba praktek perbedaan `textContent` dan `innerHTML` pakai string `"Siswa Lulus: <b>Laila</b> (Nilai: 85)"`. pada `textContent`, tag `<b>` ditampilkan polos jadi teks biasa. sedangkan pada `innerHTML`, tag `<b>` langsung dieksekusi browser sehingga kata "Laila" dicetak tebal. untuk awal awal memahami kode nya emang agak rumit ya karna pertama kali ngetik kode JS.
- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-08-19

<!-- ENTRY START -->

### Task: M2.W2.T3.4

- **Status:** done
- **Capaian:** =

1. menurut saya `innerHTML` bisa bahaya kalau isinya dari input user atau data dari luar, karna browser menganggap itu sebagai HTML dan langsung menjalankannya. jadi kalau ada orang yang iseng masukin kode HTML atau script, itu bisa ikut jalan. makanya kalau datanya dari user, lebih aman pakai `textContent` karena cuma ditampilkan sebagai teks biasa.
2. textContent pilihan yang lebih aman kalau kita cuma mau nampilkan teks murni (missal nya: nama user, komentar, isi obrolan chat, angka nilai). contohnya kalau kita buat form untuk nama pengguna, terus nama yang diinput mau ditampilin lagi di halaman. menurut saya lebih aman pakai `textContent`, karna kalau ada orang yang iseng masukin tag HTML atau script, itu cuma bakal tampil jadi tulisan dan gak dijalankan sama browser.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T3.5

- **Status:** done
- **Capaian:** Ulangi render DOM dari nol pakai data produk toko (bukan data siswa). udah buat dan jalan kan juga pakai kode yang simpel aja.
- **Kesulitan:** saya udah buat untuk task T3.5, ada beberapa bagaian yang terkendala, seperti memanggil variabel yang salah / salah ketik variabel nya. sempat salah kode juga untuk membuat perulangan. masih macet macet juga.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T3.6

- **Status:** done
- **Capaian:** =

1. bedanya antara querySelector dan queryselectorAll itu, kalo querySelector itu cuma ngambil 1 element pertama yang cocok sama selector. nah kalau querySelectorAll ngambil semua element yang cocok, jadi hasilnya bisa lebih dari satu.

2. menurut saya awalnya di HTML cuma ada <ul id="daftar"></ul>. terus setelah kode dijalankan, JavaScript bikin element <li>, yang isi tulisan "Halo", lalu dimasukin ke dalam <ul>. nah jadi hasil akhirnya itu:
//=========
<ul id="daftar">
  <li>Halo</li>
</ul>
//=========

3. kalau dimasukin ke textContent, yang tampil cuma tulisan <script>alert(1)</script> dan gak dijalankan. tapi kalau dimasukin ke innerHTML, browser nganggap itu HTML, jadi script atau tag HTML bisa ikut dijalan.

4. setAttribute dipakai buat nambah atau ngubah attribute HTML, misalnya id, href, src, atau title. nah sedangkan classList.add dipakai khusus buat nambah class ke element. jadi kalau mau ngasih class pakai classList.add, kalau mau ngubah attribute lain pakai setAttribute.

5. menurut saya lebih enak itu isi textContent dulu, baru di appendChild, jadi pas element masuk ke halaman isinya udah lengkap. tapi sebenarnya urutannya gak terlalu masalah lah. jadi kalau appendChild dulu baru isi textContent, hasilnya tetap sama, cuma biasanya lebih rapi kalau diisi dulu baru dimasukin ke HTML.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T4.1

- **Status:** done
- **Capaian:** udah saya buat untuk task T4.1, putaran 1 (form nama) & putaran 2 (form angka + validasi) berhasil, preventDefault dipraktikkan dengan-dan-tanpa untuk lihat bedanya.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T4.2

- **Status:** done
- **Capaian:** Berhasil bedakan event.target vs currentTarget, praktik tangkap klik item tertentu di 2 list berbeda (siswa & produk toko).
- **Kesulitan:** agak susah emang untuk memahami kode untuk task ini, butuh analogi yang jelas untuk membuat program nya, saya kesusahan sedikit sih.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T4.3

- **Status:** done
- **Capaian:** Putaran 1 (list siswa) & putaran 2 (list barang) berhasil praktik event delegation, buktikan item baru yang ditambah dinamis tetap kena listener di kedua list.
- **Kesulitan:** ada kesalahan ketik dan kode untuk pengerjaan putaran 2 (daftar barang).
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T4.4

- **Status:** done
- **Capaian:** menurut saya keuntungan menggunakan event delegation kalau kita pasang listener satu-satu di <li>, elemen baru yang ditambah belakangan pakai createElement gak bakal jalan pas diklik karena pas listener dibuat elemen itu belum ada. tapi kalau kita pakai event delegation (listener dipasang di parent <ul>), elemen <li> baru kaya pas nambah siswa/barang di T4.3 otomatis langsung bisa diklik tanpa perlu bikin listener lagi. keuntungan lain nya yaitu lebih hemat memori browser. dari pada kita buat banyak listener terpisah buat tiap elemen anak / lainnya, kita cuma butuh 1 listener aja di elemen nya
- **Kesulitan:** ---
<!-- ENTRY END -->

---

## 2026-08-20

<!-- ENTRY START -->

### Task: M2.W2.T2.1

- **Status:** done
- **Capaian:** Putaran 1 (siswa): find berhasil, cariGagal = undefined. Putaran 2 (produk barang): ulangi find + kasus tidak ketemu, hasilnya sama-sama sesuai ekspektasi. bedanya pakai filter dan find itu output filter pakai [], sedangkan find {}.
- **Kesulitan:** -
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T2.4

- **Status:** done
- **Capaian:** Berhasil menulis ulang find() dan 2 variasi reduce() (total stok & cari barang termahal).
- **Kesulitan:** kurang paham dan kesalahan dalam penggunaan 'acc', curr, max.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T2.5

- **Status:** done
- **Capaian:** saya sudah coba `console.log` di tiap iterasi `reduce`, jadi kalau `acc` awalnya dari nilai `0`, lalu tiap putaran ditambah sama `stok` data yang lagi diproses. milai hasil nya di `return` dan dipakai lagi di putaran berikutnya sampai total akhir `27`.
- **Kesulitan:** awalnya masih bingung alur `acc`, tapi setelah lihat hasil `console.log` tiap putaran jadi sedikit lebih paham, jadi tiap putaran nambah nilainya.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T2.6

- **Status:** done
- **Capaian:** =

1. menurut saya find itu buat cari 1 data pertama yang cocok sama kondisi, jadi hasilnya langsung object atau nilainya, kalau filter bakal ngembaliin array, walaupun yang cocok cuma 1 data. [Koreksi: Tambahin sedikit kalau find akan berhenti saat ketemu data pertama yang cocok, sedangkan filter tetap mengecek semua data sampai selesai.]

2. menurut saya nilai awal di reduce itu sebagai nilai pertama untuk acc. misalnya 0 kalau mau jumlahin angka, kalau nilai awal dihilangkan JavaScript bakal pakai elemen pertama sebagai acc, tapi kalau array kosong, bakal error 'TypeError: Reduce of empty array with no initial value' karna gak ada data yang bisa dijadikan nilai awal nya.

3. hasil akhirnya adalah 48 [
   acc awal = 1
   1 × 2 = 2
   2 × 4 = 8
   8 × 6 = 48
   Jadi hasil akhirnya 48.]

4. karna map cuma ngubah isi array dan hasilnya tetap array, jadi filter juga cuma menyaring data, kalau mau ngumpulin semua data jadi 1 object atau 1 hasil akhir, lebih cocok pakai reduce aja.

5. reduce itu susah di baca kalau isinya terlalu banyak logika dalam satu function, jadi supaya lebih gampang dibaca, kita harus kasih nama variabel yang jelas, pisahin prosesnya kalau butuh, habis itu tambahin komentar kalau ada bagian yang penting.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T4.5

- **Status:** done
- **Capaian:** saya coba dan berhasil mengulangi event delegation dari nol pakai topik daftar game random, dan ada fitur tombol hapus yang dikontrol penuh oleh 1 listener pada elemen parent (`<ul>`).
- **Kesulitan:** ada kesalahan dalam mengetik dan menggunakan kode, salah pasang variabel
<!-- ENTRY END -->

---

## 2026-08-21

<!-- ENTRY START -->

### Task: M2.W2.T4.6

- **Status:** done
- **Capaian:** =

1. bedanya itu kalau event.target: elemen yang di klik langsung dari kursor user (misalnya: tombol "hapus" yang ada di dalam elemen <li>). nah sedangkan event.currentTarget: elemen penampung yang dipasangin event listener (misalnya: elemen <ul> parent nya).

2. even.preventDefault() dibutuhkan untuk mencegah aksi/fitur bawaan browser yang otomatis reload/refresh halaman saat form di submit/kirim, jadi data input dari user bisa ditangkap dan diolah dulu menggunakan JavaScript tanpa kehilangan state halamannya.

3. menurut saya listener cuma dipasang ke <li> yang udah ada waktu kodenya dijalankan, yaitu ani dan budi, nah jadi citra dibuat belakangan, jadi dia gak punya listener, makanya waktu dia diklik, gak terjadi apa apa. [koreksi: Lebih tepatnya Citra tetap bisa diklik secara fisik, tapi tidak menjalankan kode listener karena listener memang tidak pernah dipasang ke Citra.]

4. event delegation bisa lebih baik karna jauhh lebih hemat RAM. browser cuma perlu nampung 1 listener doang di parent (<ul>), bukan bikin 1000 listener terpisah yang bikin berat memori, kalau ada item baru yang ditambahin belakangan, item itu langsung otomatis bisa diklik tanpa perlu kita pasang listener ulang satu-satu.

5. caranya kita pasang 1 event listener di <ul> induknya, habis itu cek e.target. kalau yang diklik punya class btn-hapus, berarti yang diklik tombol hapus, jadi <li> nya dihapus, kalau bukan tombol hapus, berarti yang diklik nama game, jadi kita tampilkan nama gamenya.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T5

- **Status:** done
- **Capaian:** saya buat alat manajemen barang bengkel (sparepart), bagian yang lancar dan paling gampang yaitu membuat variabel `const` dan file html dan isinya.
- **Kesulitan:** agak lama untuk membuat kode js nya, karna minggu ini jujur materi yang menurut saya cukup berat dari minggu minggu sebelum nya karna kurang nya pengalaman saya menggunakan javascript. saya belum kelar dengan ini, walau pun keliatan sudah siap cuma masih saya pahamin fungsi dan cara ngetik kode nya.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W2.T7

- **Status:** half done
- **Capaian:** Demo ke mentor selesai, array methods (map/filter/reduce/find) dll beberapa dikuasai, beberapa live request dari mentor dapat di kerjakan dengan cukup baik, untuk T5 dan T6 belum selesai, PR juga belum selesai.
- **Kesulitan:** evaluasi berjalan cukup baik, namun beberapa task belum selesai, jadi evaluasi dengan mentor memberikan live soal req.
<!-- ENTRY END -->

---

## 2026-08-24 // Minggu 3

<!-- ENTRY START -->

### Task: M2.W2.T6

- **Status:** done
- **Capaian:** saya buat mini app komponen robotic dengan file HTML dan JS aja.

1. `reduce`: saya tempatkan di `updateRingkasan` untuk menghitung total biaya inventaris karna butuh 1 angka hasil akumulasi dari seluruh harga komponen.
2. `map`: ditempatkan di `updateRingkasan` untuk ngambil daftar ringkas nama komponen karna butuh mengubah array object jadi array string.
3. `filter`: di di event listener `filterKategori` untuk nyaring data berdasarkan kategori (Microcontroller, Sensor, Actuator) karna menghasilkan array baru yang isinya lebih dikit.
4. `find`: tempatkan di fitur pencarian detail untuk ambil 1 objek komponen pertama yang namanya cocok dengan input user.
5. Event delegation dibutuhkan di parent `<tbody>` biat tombol hapus tetap berfungsi pada baris tabel baru yang dibuat secara dinamis tanpa harus memasang listener satu per satu per elemen. link PR [https://github.com/sidrive/pkl-miftahul-progress/pull/4].

- **Kesulitan:** masih sedikit kesulitan untuk mengetik kode js nya, ada banyak eror pada saat awal awal membuat program nya. salah ngetik kode yang dibutuhkan, terkadang harus melihat kode apa yang dibutuhkan/sesuai dengan program, susunan kode yang salah juga tadi waktu buat kodenya.
<!-- ENTRY END -->

---

## 2026-08-26

<!-- ENTRY START -->

### Task: M2.W3.T1.1

- **Status:** done
- **Capaian:** saya menyelesaikan proyek komponen robot di task T6 minggu 2, dan udah nambahin komentar alasan pemilihan kode / fungsi nya.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W3.T1.2

- **Status:** done
- **Capaian:** pada hari senin tanggal 24 agustus 2026 saya udah push ke repo github dan udah buat PR nya.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W3.T1.3

- **Status:** done
- **Capaian:** =

1. perubahan yang ada pada kedua kode ini yaitu yang berubah itu cara bikin tombol hapus. di T4.5 saya pakai innerHTML, jadi langsung bikin isi <li> sekaligus tombol Hapus dalam satu baris. nah T5 saya bikin tombolnya satu satu pakai createElement(), kasih tulisan, kasih class, baru dimasukin ke dalam <li>.

2. alasan kenapa T5 itu lebih aman karna gak pakai innerHTML buat masukin input dari user. di T4.5, isi input user langsung dimasukin ke innerHTML, jadi kalau ada orang yang iseng masukin tag HTML atau script, bisa bahaya. kalo di T5 saya pakai textContent, jadi apapun itu yang diketik user cuma dianggap sebagai teks biasa dan gak bisa dijalankan sama browser. ini sama kaya yang saya pahamin dan pelajarin di T3.4 tentang risiko innerHTML.

3. awal awal waktu ketik T5 saya belum terlalu tau kalau cara itu lebih aman. saya cuma ngikutin materi dan contoh yang saya pelajari. baru pas membandingkan T4.5 sama T5 sekarang, saya jadi paham dan tau kenapa di T5 pakai createElement() dan textContent, ternyata emang lebih aman dari pada langsung pakai innerHTML.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W3.T1.4

- **Status:** done
- **Capaian:** untuk pengisian log yang masih kosong, saya akan isi berdasaran tanggal / minggu / urutan task itu berasal agar rapi untuk log nya. task: M2.W2.T1.1, M2.W2.T3.1, dan M2.W2.T3.3.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W3.T2

- **Status:** done
- **Capaian:** Selesai dalam `48 menit 39 detik 24 milidetik` [48.39.24] menit (target 30 menit). Topik: [saya udah buat sebuah miniapp daftar buku, buat mini app ini dari nol. di dalamnya saya pakai `map` untuk nampilkan daftar judul, `filter` untuk menyaring buku berdasarkan kategori, `reduce` untuk menghitung total harga buku, `find` (`findIndex`) untuk mencari data yang akan dihapus, render ke DOM, dan event delegation untuk tombol hapus.]. pakai map+filter+reduce, render DOM, event delegation.
- **Kesulitan:** saya udah tau gambaran kira kira gimana dari mini app nya, tapi pada saat ngetik kode JS nya masih ada beberapa kesalahan ketik dan kesalahan fungsi dari kode nya, penempatan kode yang salah juga.
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W3.T3.1

- **Status:** done
- **Capaian:** saua berhasil praktekkan Promise dasar dalam 2 putaran skenario berbeda (cek koneksi & cek stok barang). paham 3 state Promise (pending, fulfilled, rejected) serta penggunaan .then() untuk menangani resolve dan .catch() untuk menangani reject.
- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W3.T3.2

- **Status:** done
- **Capaian:** =

1. Promise awalnya ada di state pending (masih nunggu). kalau prosesnya berhasil, Promise pindah ke fulfilled saat resolve() dipanggil. nah kalau prosesnya gagal, Promise dia pindah ke rejected saat reject() dipanggil.
2. kalau kita ga nulis `.catch()` pada saat dia panggil dia akan muncul eror `UnhandledPromiseRejection`. soalnya Promise yang gagal itu gak ada yang urusin, jadi Node.js ngasih tahu kalau ada error yang belum ditangkap. makanya kalau pakai Promise, bagusnya kita tambahin `.catch()` biar error bisa ditangani dengan benar.

- **Kesulitan:** ---
<!-- ENTRY END -->

<!-- ENTRY START -->

### Task: M2.W3.4.1
- **Status:** done
- **Capaian:** saya coba praktek untuk ngubah Promise `.then()` dan `.catch()` menjadi `async`/`await` pada 2 skenario, yaitu cek koneksi dan cek stok barang. udah coba kondisi berhasil (`resolve`) dan gagal (`reject`). menurut saya cara kerja Promise nya tetap sama, yang berubah cuma cara nulis kodenya jadi lebih rapi dan gampang dibaca.
- **Kesulitan:** ---
<!-- ENTRY END -->
