-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2026 at 03:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_datetime`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `nama_tugas` varchar(100) DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `deadline` datetime DEFAULT NULL,
  `status` enum('proses','selesai','tidak_diselesaikan') DEFAULT 'proses'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `nama_tugas`, `label`, `deskripsi`, `deadline`, `status`) VALUES
(17, 'latihan mtk', 'KK', 'kerjakan tugas halaman 123-125 nanti di kumpul!!!', '2026-01-23 10:08:00', 'tidak_diselesaikan'),
(18, 'buat tabel penjualaan ', 'KIK', 'baut tabel penjulaan yang ada di buku tulis', '2026-01-24 10:10:00', 'selesai'),
(21, 'bikin video agama', 'KK', 'wreyuikl,mnbvcdf', '2026-01-28 11:50:00', 'tidak_diselesaikan'),
(22, 'qwerty', 'KK', 'shgfghjhbnk', '2026-01-29 13:42:00', 'selesai');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
