# Submissions — Bukti Kerja Peserta

Folder ini menampung **bukti hasil pengerjaan task** yang berupa file (bukan sekadar catatan teks
di `DAILY_LOG.md`) — misalnya kode latihan, screenshot hasil, atau file konfigurasi. Ini terpisah
dari isi tracker (`TASKS.md`, `DAILY_LOG.md`) supaya rapi dan mudah ditelusuri per minggu/per task.

## Struktur folder

```
submissions/
  M<bulan>-W<minggu>/
    <task-id>-<judul-singkat>/
      <file bukti kerja>
```

Contoh: `submissions/M1-W1/T4.3-node-npm/hello.js`

## Aturan

1. **Satu folder per task** (atau per grup task kecil kalau memang satu rangkaian), diberi nama
   `<task-id>-<judul-singkat>` — pakai ID persis seperti di `TASKS.md` (contoh `T4.3`, bukan `t4-3`
   atau `task4.3`), supaya gampang dicari.
2. **Boleh isi apa saja yang relevan sebagai bukti**: file kode (`.js`, `.html`, dll — **jangan**
   commit `node_modules/` atau `package-lock.json`, sudah di-ignore lewat `.gitignore` root),
   screenshot (`.png`/`.jpg`), rekaman singkat, atau file `README.md` kecil berisi catatan/link
   kalau bukti tidak bisa berupa file (misal link ke repo GitHub terpisah untuk task besar).
3. **Screenshot** dianjurkan untuk task yang hasilnya visual/di luar kode (misal tampilan ekstensi
   VS Code aktif, tampilan dashboard GitHub 2FA, dll) — taruh langsung di folder task terkait.
4. Di entry `DAILY_LOG.md` untuk task yang punya bukti file, tambahkan referensi singkat, misal:
   ```markdown
   - **Capaian:** Berhasil jalankan hello.js dan install chalk. Bukti: `submissions/M1-W1/T4.3-node-npm/`
   ```
5. Untuk project besar (misal project internal Bulan 5–6 yang punya repo Git sendiri), **tidak perlu**
   disalin ke sini — cukup catat link repo-nya di `DAILY_LOG.md`. Folder ini untuk latihan-latihan
   kecil dan bukti pendukung, bukan untuk meng-host seluruh project.
