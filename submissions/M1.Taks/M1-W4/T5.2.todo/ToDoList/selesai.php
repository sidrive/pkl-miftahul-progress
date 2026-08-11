<?php
include 'koneksi.php';

$id = $_GET['id'];
mysqli_query($koneksi,"UPDATE tasks SET status='selesai' WHERE id='$id'");

header("Location: index.php");
