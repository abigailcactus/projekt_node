-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 06, 2024 at 12:36 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ksiegozbior`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `autorzy`
--

CREATE TABLE `autorzy` (
  `id` int(11) NOT NULL,
  `autorzy` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autorzy`
--

INSERT INTO `autorzy` (`id`, `autorzy`) VALUES
(1, 'Andrzej Sapkowski'),
(2, 'Shirley Jackson'),
(3, 'Terry Pratchett, Neil Gaiman'),
(4, 'Terry Pratchett'),
(5, 'J.R.R. Tolkien'),
(6, 'Katja Brandis'),
(7, 'J.R.R. Tolkien'),
(8, 'Dan Simmons'),
(15, 'Simmons, Dan (1948- ) Ochab, Janusz (1971- ) Wydawnictwo \"Vesper\"'),
(22, 'Sapkowski, Andrzej (1948- ) Legeza, Sergìj Valerìjovič (1972- ) Sapkowski, Andrzej (1948- ).'),
(23, 'Sapkowski, Andrzej (1948- ) SuperNowa Sapkowski, Andrzej (1948- ).'),
(24, 'Tolkien, J. R. R. (1892-1973) Skibniewska, Maria (1904-1984) Czytelnik'),
(25, 'Dyakowski, Bohdan (1864-1940) Puchalski, Włodzimierz (1908-1979) Zysk i S-ka Wydawnictwo'),
(26, 'Tolkien, J. R. R. (1892-1973) Skibniewska, Maria (1904-1984) Muza'),
(27, 'Tolkien, J. R. R. (1892-1973) Lee, Alan (1947- ) Łoziński, Jerzy (1947- ) Zysk i S-ka Wydawnictwo Tolkien, J. R. R. (1892-1973).'),
(28, 'Kurczab, Marcin Kurczab, Elżbieta Świda, Elżbieta Oficyna Edukacyjna, Krzysztof Pazdro'),
(29, ''),
(30, 'Burzyńska, Grażyna (dziennikarka)'),
(31, 'Jackson, Shirley (1916-1965) Streszewska-Hallab, Maria Wydawnictwo Replika');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gatunki`
--

CREATE TABLE `gatunki` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gatunki`
--

INSERT INTO `gatunki` (`id`, `nazwa`) VALUES
(1, 'fantastyka'),
(2, 'horror'),
(3, 'realizm'),
(4, 'dramat'),
(5, 'Powieść Thriller'),
(12, 'Fantasy Powieść'),
(13, 'Fantasy Opowiadania i nowele'),
(14, 'Opowiadanie angielskie'),
(15, 'Opracowanie'),
(16, 'Ćwiczenia i zadania'),
(17, ''),
(18, 'Czasopismo polskie Czasopismo poradnikowe'),
(19, 'Powieść Horror');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `jezyki`
--

CREATE TABLE `jezyki` (
  `id` int(11) NOT NULL,
  `jezyk` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jezyki`
--

INSERT INTO `jezyki` (`id`, `jezyk`) VALUES
(1, 'polski'),
(2, 'angielski'),
(3, 'rosyjski'),
(4, 'niemiecki'),
(5, 'hiszpański'),
(14, 'ukraiński'),
(15, '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ksiazki`
--

CREATE TABLE `ksiazki` (
  `id` int(11) NOT NULL,
  `tytul` text NOT NULL,
  `opis` text DEFAULT NULL,
  `oznaczenie_odpowiedzialnosci` int(11) DEFAULT NULL,
  `rok_wydania` int(11) DEFAULT NULL,
  `gatunek_id` int(11) DEFAULT NULL,
  `jezyk` int(11) DEFAULT NULL,
  `oryginalny_jezyk` int(11) DEFAULT NULL,
  `ISBN` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ksiazki`
--

INSERT INTO `ksiazki` (`id`, `tytul`, `opis`, `oznaczenie_odpowiedzialnosci`, `rok_wydania`, `gatunek_id`, `jezyk`, `oryginalny_jezyk`, `ISBN`) VALUES
(2, 'Dobry Omen', '', 3, 1990, 1, 1, 2, '978-83-8295-142-4'),
(3, 'Ostatnie życzenie', '', 1, 1993, 1, 1, 1, '978-83-7578-063-5'),
(9, 'Pani jeziora', '', 1, 1999, 1, 1, 1, '978-83-7578-069-7'),
(12, 'Khyona. We władzy srebrnego sokoła', '', 6, 2018, 1, 1, 4, '978-83-66462-03-8'),
(23, 'Drużyna pierścienia / Lord of the rings : the fellowship of the ring, Tolkien, J. R. R. t. 1', 'Śródziemie (kraina fikcyjna), Czarodzieje Elfy Hobbici Krasnoludy Przedmioty magiczne Walka dobra ze złem', 26, 1954, 12, 1, 1, '9788328721906'),
(24, 'Dwie wieże / Illustrated Lord of the Rings : the two towers, Lord of the Rings t. 2', 'Śródziemie (kraina fikcyjna), Czarodzieje Elfy Hobbici Krasnoludy Przedmioty magiczne Walka dobra ze złem', 27, 1954, 12, 1, 2, '9788383350912'),
(25, 'Powrót króla / Lord of the rings : the return of the king, Lord of the Rings t.3', 'Śródziemie (kraina fikcyjna), Czarodzieje Elfy Hobbici Krasnoludy Przedmioty magiczne Walka dobra ze złem', 27, 1955, 12, 1, 2, '978-83-820-2490-6'),
(30, 'Matematyka 3 : zbiór zadań do liceów i techników : zakres rozszerzony /', ' Matematyka (przedmiot szkolny)', 28, 2021, 16, 1, 1, '978-83-7594-212-5'),
(31, 'Nasz las i jego mieszkańcy /', ' Ekologia Las', 25, 1898, 15, 1, 1, '978-83-65521-82-8'),
(32, 'Nawiedzony dom na wzgórzu / Haunting of hill house', ' Nawiedzone domy', 31, 1959, 19, 1, 1, '978-83-66790-74-2');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `autorzy`
--
ALTER TABLE `autorzy`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `gatunki`
--
ALTER TABLE `gatunki`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `jezyki`
--
ALTER TABLE `jezyki`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `ksiazki`
--
ALTER TABLE `ksiazki`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autorzy`
--
ALTER TABLE `autorzy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `gatunki`
--
ALTER TABLE `gatunki`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `jezyki`
--
ALTER TABLE `jezyki`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `ksiazki`
--
ALTER TABLE `ksiazki`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
