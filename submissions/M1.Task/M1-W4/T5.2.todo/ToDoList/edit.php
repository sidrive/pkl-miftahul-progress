<?php
include 'koneksi.php';

$id = $_GET['id'];
$data = mysqli_query($koneksi, "SELECT * FROM tasks WHERE id='$id'");
$d = mysqli_fetch_array($data);

if (isset($_POST['update'])) {
    $nama = $_POST['nama'];
    $label = $_POST['label'];
    $deskripsi = $_POST['deskripsi'];
    $deadline = $_POST['deadline'];
    $status = $_POST['status'];

    mysqli_query($koneksi, "
        UPDATE tasks SET
        nama_tugas='$nama',
        label='$label',
        deskripsi='$deskripsi',
        deadline='$deadline',
        status='$status'
        WHERE id='$id'
    ");

    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Tugas</title>
</head>
<style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.container {
    background: white;
    width: 100%;
    max-width: 450px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Flexbox simpel buat ngatur jarak form */
form, .sec-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.form-group label {
    font-weight: bold;
    font-size: 14px;
}

input, select, textarea, button {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
}

button {
    background: #0284c7;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

nav {
    margin-top: 15px;
    text-align: center;
}body {
        font-family: ;
    }
</style>

<body>
<main class="container">

<header>
<h2>Edit Tugas</h2>
</header>

<section class="sec-form">
<form method="post">
    <div class="form-group">
        <label for="nama">Nama Tugas</label>
        <input type="text" id="nama" name="nama" value="<?= $d['nama_tugas'] ?>" required>
    </div>

    <div class="form-group">
        <label for="label">Label</label>
        <select id="label" name="label">
            <option value="KK" <?= $d['label']=='KK'?'selected':'' ?>>KK</option>
            <option value="MTK" <?= $d['label']=='MTK'?'selected':'' ?>>MTK</option>
            <option value="KIK" <?= $d['label']=='KIK'?'selected':'' ?>>KIK</option>
            <option value="PPKN" <?= $d['label']=='PPKN'?'selected':'' ?>>PPKN</option>
            <option value="B_INDONESIA" <?= $d['label']=='B_INDONESIA'?'selected':'' ?>>B INDONESIA</option>
            <option value="AGAMA" <?= $d['label']=='AGAMA'?'selected':'' ?>>AGAMA</option>
            <option value="PJOK" <?= $d['label']=='PJOK'?'selected':'' ?>>PJOK</option>
            <option value="SEJARAH" <?= $d['label']=='SEJARAH'?'selected':'' ?>>SEJARAH</option>
            <option value="B_INGGRIS" <?= $d['label']=='B_INGGRIS'?'selected':'' ?>>B INGGRIS</option>
            <option value="MPP" <?= $d['label']=='MPP'?'selected':'' ?>>MPP</option>
        </select>
    </div>

    <div class="form-group">
        <label for="deskripsi">Deskripsi</label>
        <textarea name="deskripsi"><?= $d['deskripsi'] ?></textarea>
    </div>

    <div class="form-group">
        <label for="deadline">Deadline</label>
        <input type="datetime-local" name="deadline" value="<?= date('Y-m-d\TH:i', strtotime($d['deadline'])) ?>" required>
    </div>

    <div class="form-group">
        <label for="status">Status</label>
        <select name="status">
            <option value="proses" <?= $d['status']=='proses'?'selected':'' ?>>proses</option>
            <option value="selesai" <?= $d['status']=='selesai'?'selected':'' ?>>selesai</option>
            <option value="tidak diselesaikan" <?= $d['status']=='tidak diselesaikan'?'selected':'' ?>>Tidak diselesaikan</option>
        </select>
    </div>

    <button name="update">Update</button>
</form>
</section>

<nav>
<a href="index.php">Kembali</a>
</nav>

</main>
</body>
</html>
