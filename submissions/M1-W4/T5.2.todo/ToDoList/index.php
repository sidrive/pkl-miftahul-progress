<?php
include 'koneksi.php';

/* TAMBAH TUGAS / DATA */
if (isset($_POST['simpan'])) {
    $nama       = $_POST['nama'];
    $label      = $_POST['label'];
    $deskripsi  = $_POST['deskripsi'];
    $deadline   = $_POST['deadline'];

    mysqli_query(
        $koneksi,
        "INSERT INTO tasks 
        VALUES (NULL, '$nama', '$label', '$deskripsi', '$deadline', 'proses')"
    );
}

/* UPDATE STATUS OTOMATIS JIKA DEADLINE LEWAT */
mysqli_query(
    $koneksi,
    "UPDATE tasks 
     SET status='tidak_diselesaikan' 
     WHERE deadline < NOW() 
     AND status='proses'"
);
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List DATETIME</title>
    <style>
        header {
            margin-bottom: 15px;            
        }
        /* Reset & Tampilan Utama */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 800px; /* Fleksibel, maksimal 800px */
            background: white;
            padding: 20px;
            border-radius: 8px;
        }

        /* 1. FLEXBOX: Mengatur Form Input */
        .sec-form form, .form-group {
            display: flex;
            flex-direction: column; /* Menyusun ke bawah */
            gap: 10px; /* Jarak antar-elemen otomatis */
        }

        input, select, textarea, button {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background: #36a13fff;
            color: white;
            font-weight: bold;
            border: none;
            cursor: pointer;
        }

        /* 2. FLEXBOX: Mengatur Filter Status */
        .filter-form {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 15px 0;
        }

        .filter-form select, .filter-form button {
            width: auto;
        }

        /* 3. RESPONSIVE: Agar Tabel Tidak Jebol di HP */
        .table-responsive {
            width: 100%;
            overflow-x: auto; /* Scroll samping khusus tabel kalau di HP */
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: center;
        }

        .proses { color: orange; font-weight: bold; }
        .selesai { color: green; font-weight: bold; }
        .tidak_diselesaikan { color: red; font-weight: bold; }

        /* 4. RESPONSIVE HP: Khusus Layar Kecil (di bawah 600px) */
        @media (max-width: 600px) {
            .filter-form {
                flex-direction: column; /* Filter jadi tumpuk ke bawah di HP */
                align-items: stretch;
            }

            .filter-form select, .filter-form button {
                width: 100%; /* Tombol & filter jadi lebar penuh di HP */
            }
        }
    </style>
</head>

<body>

<main class="container">

    <header>
        <h2>Tambah Tugas</h2>
    </header>

    <!-- FORM INPUT -->
    <section class="sec-form">
        <form method="post">
            <div class="form-group">
                <label for="nama">Nama Tugas :</label>
                <input type="text" id="nama" name="nama" required>
            </div>

            <div class="form-group">
                <label for="label">Label :</label>
                <select id="label" name="label">
                    <option value="KK">KK</option>
                    <option value="MTK">MTK</option>
                    <option value="KIK">KIK</option>
                    <option value="PPKN">PPKN</option>
                    <option value="B_INDONESIA">B INDONESIA</option>
                    <option value="AGAMA">AGAMA</option>
                    <option value="PJOK">PJOK</option>
                    <option value="SEJARAH">SEJARAH</option>
                    <option value="B_INGGRIS">B INGGRIS</option>
                    <option value="MPP">MPP</option>
                </select>
            </div>

            <div class="form-group">
                <label for="deskripsi">Deskripsi :</label>
                <textarea id="deskripsi" name="deskripsi"></textarea>
            </div>

            <div class="form-group">
                <label for="deadline">Deadline :</label>
                <input type="datetime-local" id="deadline" name="deadline" required>
            </div>

            <button name="simpan">Simpan</button>
        </form>
    </section>

    <hr style="margin: 30px 0;" color="red;">

    <!-- SECTION 2: DAFTAR TUGAS -->
    <section class="sec-list">
        <h2>Daftar Tugas</h2>

        <form method="get" class="filter-form">
            <label for="filter">Filter Status: </label>
            <select name="filter" id="filter">
                <option value="">Semua</option>
                <option value="proses">Proses</option>
                <option value="selesai">Selesai</option>
                <option value="tidak_diselesaikan">Tidak dikerjakan</option>
            </select> 
            <button type="submit">Tampilkan</button>
        </form>

    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Label</th>
                    <th>Keterangan</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
        <?php
        $no     = 1;
        $filter = isset($_GET['filter']) ? $_GET['filter'] : '';

        if ($filter != '') {
            $data = mysqli_query(
                $koneksi,
                "SELECT * FROM tasks 
                 WHERE status='$filter' 
                 ORDER BY deadline ASC"
            );
        } else {
            $data = mysqli_query(
                $koneksi,
                "SELECT * FROM tasks 
                 ORDER BY deadline ASC"
            );
        }

        while ($d = mysqli_fetch_array($data)) {
        ?>
            <tr>
                <td><?= $no++ ?></td>
                <td><?= $d['nama_tugas'] ?></td>
                <td><?= $d['label'] ?></td>
                <td><?= $d['deskripsi'] ?></td>
                <td class="<?= $d['status'] ?>">
                    <?= $d['status'] ?>
                </td>
                <td>
                    <?= date('d-m-Y H:i', strtotime($d['deadline'])) ?>
                </td>
                <td>
                    <?php if ($d['status'] == 'proses') { ?>
                        <a href="selesai.php?id=<?= $d['id'] ?>">Selesai</a> |
                    <?php } ?>
                    <a href="edit.php?id=<?= $d['id'] ?>">Edit</a> |
                    <a href="hapus.php?id=<?= $d['id'] ?>">Hapus</a>
                </td>
            </tr>
        <?php } ?>
            </tbody>
        </table>
    </div>
    </section>
</main>

</body>
</html>