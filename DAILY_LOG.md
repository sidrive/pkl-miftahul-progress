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

## 2026-07-23

<!-- ENTRY START -->

### Task: M1.W2.T6

- **Status:** done
- **Capaian:** saya memilih project untuk membuat sebuah kalkulator CLI, saya buat struktur nya lewat terminal dengan nama "T6-TaskM2-kalkulator-cli" yang nanti nya akan di masukkan ke repo GitHub.
- **Kesulitan:** --
<!-- ENTRY END -->

---

## 2026-07-24

<!-- ENTRY START -->

### Task: M1.W2.T7

- **Status:** --
- **Capaian:** --
- **Kesulitan:** --
<!-- ENTRY END -->
