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
<html>
<head>
    <title>To Do List DATETIME</title>
    <style>
       body {
    font-family: Arial;
    display: flex;
    justify-content: center;
    background: #f4f4f4;
}

.container {
    width: 800px;
    background: white;
    padding: 20px;
    margin-top: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h2 {
    text-align: center;
}

form {
    text-align: center;
}

input, select, textarea, button {
    width: 90%;
    padding: 8px;
    margin-top: 5px;
}

button {
    width: 200px;
    cursor: pointer;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
}

th, td {
    border: 1px solid #aaa;
    padding: 8px;
    text-align: center;
}

.proses {
    color: orange;
}

.selesai {
    color: green;
}

.tidak_diselesaikan {
    color: red;
}

    </style>
</head>

<body>



<div class="container">
    <h2>Tambah Tugas</h2>
<form method="post">
    Nama Tugas <br>
    <input type="text" name="nama" required><br><br>

    Label <br>
    <select name="label">
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
    </select><br><br>

    Deskripsi <br>
    <textarea name="deskripsi"></textarea><br><br>

    Deadline <br>
    <input type="datetime-local" name="deadline" required><br><br>

    <button name="simpan">Simpan</button>
</form>

<hr>

<h2>Daftar Tugas</h2>

<form method="get">
    <label>Filter Status: </label>
    <select name="filter">
        <option value="">Semua</option>
        <option value="proses">Proses</option>
        <option value="selesai">Selesai</option>
        <option value="tidak_diselesaikan">Tidak dikerjakan</option>
    </select> 
    <button type="submit">Tampilkan</button>
</form>

<br>

<table>
    <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Label</th>
        <th>Keterangan</th>
        <th>Status</th>
        <th>Deadline</th>
        <th>Aksi</th>
    </tr>

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
</table>
</div>
</body>
</html>