-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: hotel_recanto
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acomodacao`
--

DROP TABLE IF EXISTS `acomodacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acomodacao` (
  `id_acomodacao` int NOT NULL AUTO_INCREMENT,
  `tipo_acomodacao` varchar(80) NOT NULL,
  `descricao_acomodacao` longtext NOT NULL,
  `status_acomodacao` varchar(10) NOT NULL,
  `imagem_acomodacao` varchar(255) NOT NULL,
  PRIMARY KEY (`id_acomodacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acomodacao`
--

LOCK TABLES `acomodacao` WRITE;
/*!40000 ALTER TABLE `acomodacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `acomodacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adicionais`
--

DROP TABLE IF EXISTS `adicionais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adicionais` (
  `id_adicionais` int NOT NULL AUTO_INCREMENT,
  `item_adicionais` varchar(45) NOT NULL,
  `descricao_adicionais` longtext NOT NULL,
  `valor_adicionais` decimal(10,2) unsigned NOT NULL,
  `imagem_adicionais` varchar(255) NOT NULL,
  PRIMARY KEY (`id_adicionais`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adicionais`
--

LOCK TABLES `adicionais` WRITE;
/*!40000 ALTER TABLE `adicionais` DISABLE KEYS */;
INSERT INTO `adicionais` VALUES (1,'Spa','a',100.00,'https://www.spiceuptheroad.com/site/wp-content/uploads/2020/05/turn-your-quarantine-into-a-spa-with-these-diy-treatments-from-luxury-resorts.jpg'),(2,'Trilha Ecológica','b',150.00,'https://cdn-hweb.hsystem.com.br/59ac7ceec19a4714743d1c06/eaab2b4074b24b47b31f8a272113d270.jpg'),(3,'Passeio de barco','c',170.00,'https://www.melhoresdestinos.com.br/wp-content/uploads/2017/07/passeio-de-barco-em-arraial-do-cabo-foto-saveiro-don-juan.jpg'),(4,'Passeio entre ilhas','d',200.00,'https://cdn.shopify.com/s/files/1/0255/5425/5957/products/ilhas-paradisiacas-03_1200x630.jpg?v=1572466508'),(5,'Café da manhã no quarto','e',80.00,'https://media-cdn.tripadvisor.com/media/photo-s/09/3e/ef/50/hotel-belo-horizonte.jpg');
/*!40000 ALTER TABLE `adicionais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adicionais_reserva`
--

DROP TABLE IF EXISTS `adicionais_reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adicionais_reserva` (
  `adicionais_id_adicionais` int NOT NULL,
  `reserva_id_reserva` int NOT NULL,
  PRIMARY KEY (`adicionais_id_adicionais`,`reserva_id_reserva`),
  KEY `fk_adicionais_has_reserva_reserva1_idx` (`reserva_id_reserva`),
  KEY `fk_adicionais_has_reserva_adicionais1_idx` (`adicionais_id_adicionais`),
  CONSTRAINT `fk_adicionais_has_reserva_adicionais1` FOREIGN KEY (`adicionais_id_adicionais`) REFERENCES `adicionais` (`id_adicionais`),
  CONSTRAINT `fk_adicionais_has_reserva_reserva1` FOREIGN KEY (`reserva_id_reserva`) REFERENCES `reserva` (`id_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adicionais_reserva`
--

LOCK TABLES `adicionais_reserva` WRITE;
/*!40000 ALTER TABLE `adicionais_reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `adicionais_reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avaliacao`
--

DROP TABLE IF EXISTS `avaliacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacao` (
  `id_avaliacao` int NOT NULL AUTO_INCREMENT,
  `data_avaliacao` datetime NOT NULL,
  `pontuacao_avaliacao` tinyint NOT NULL,
  `descricao_avaliacao` longtext NOT NULL,
  `status_avaliacao` varchar(20) NOT NULL,
  PRIMARY KEY (`id_avaliacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacao`
--

LOCK TABLES `avaliacao` WRITE;
/*!40000 ALTER TABLE `avaliacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumo`
--

DROP TABLE IF EXISTS `consumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumo` (
  `id_consumo` int NOT NULL AUTO_INCREMENT,
  `item_consumo` varchar(45) NOT NULL,
  `local_consumo` varchar(10) NOT NULL,
  `qtd_item_consumo` int unsigned NOT NULL,
  `data_consumo` datetime NOT NULL,
  PRIMARY KEY (`id_consumo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumo`
--

LOCK TABLES `consumo` WRITE;
/*!40000 ALTER TABLE `consumo` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupom`
--

DROP TABLE IF EXISTS `cupom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupom` (
  `id_cupom` int NOT NULL AUTO_INCREMENT,
  `codigo_cupom` varchar(10) NOT NULL,
  `data_cupom` datetime NOT NULL,
  `validade_cupom` datetime NOT NULL,
  `desconto_cupom` int unsigned NOT NULL,
  PRIMARY KEY (`id_cupom`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupom`
--

LOCK TABLES `cupom` WRITE;
/*!40000 ALTER TABLE `cupom` DISABLE KEYS */;
INSERT INTO `cupom` VALUES (1,'1d3rg678kj','2023-02-27 00:00:00','2023-03-27 00:00:00',10);
/*!40000 ALTER TABLE `cupom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `checkin_reserva` date NOT NULL,
  `checkout_reserva` date NOT NULL,
  `qtd_pessoas_reserva` int NOT NULL,
  `total_reserva` decimal(10,2) NOT NULL,
  `total_desconto_reserva` decimal(10,2) DEFAULT NULL,
  `data_reserva` date NOT NULL,
  `confirmacao_reserva` tinyint NOT NULL,
  `data_confirmacao_reserva` date NOT NULL,
  `acomodacao_id_acomodacao` int NOT NULL,
  `cupom_id_cupom` int NOT NULL,
  `avaliacao_id_avaliacao` int NOT NULL,
  `usuario_id_usuario` int NOT NULL,
  PRIMARY KEY (`id_reserva`),
  KEY `fk_reserva_acomodacao_idx` (`acomodacao_id_acomodacao`),
  KEY `fk_reserva_cupom1_idx` (`cupom_id_cupom`),
  KEY `fk_reserva_avaliacao1_idx` (`avaliacao_id_avaliacao`),
  KEY `fk_reserva_usuario1_idx` (`usuario_id_usuario`),
  CONSTRAINT `fk_reserva_acomodacao` FOREIGN KEY (`acomodacao_id_acomodacao`) REFERENCES `acomodacao` (`id_acomodacao`),
  CONSTRAINT `fk_reserva_avaliacao1` FOREIGN KEY (`avaliacao_id_avaliacao`) REFERENCES `avaliacao` (`id_avaliacao`),
  CONSTRAINT `fk_reserva_cupom1` FOREIGN KEY (`cupom_id_cupom`) REFERENCES `cupom` (`id_cupom`),
  CONSTRAINT `fk_reserva_usuario1` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva_consumo`
--

DROP TABLE IF EXISTS `reserva_consumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva_consumo` (
  `reserva_id_reserva` int NOT NULL,
  `consumo_id_consumo` int NOT NULL,
  PRIMARY KEY (`reserva_id_reserva`,`consumo_id_consumo`),
  KEY `fk_reserva_has_consumo_consumo1_idx` (`consumo_id_consumo`),
  KEY `fk_reserva_has_consumo_reserva1_idx` (`reserva_id_reserva`),
  CONSTRAINT `fk_reserva_has_consumo_consumo1` FOREIGN KEY (`consumo_id_consumo`) REFERENCES `consumo` (`id_consumo`),
  CONSTRAINT `fk_reserva_has_consumo_reserva1` FOREIGN KEY (`reserva_id_reserva`) REFERENCES `reserva` (`id_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva_consumo`
--

LOCK TABLES `reserva_consumo` WRITE;
/*!40000 ALTER TABLE `reserva_consumo` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva_consumo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(45) NOT NULL,
  `sobrenome_usuario` varchar(45) NOT NULL,
  `email_usuario` varchar(80) NOT NULL,
  `nivel_usuario` tinyint NOT NULL,
  `status_usuario` varchar(10) NOT NULL,
  `senha_usuario` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_usuario_UNIQUE` (`email_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Fagner','Farias','f@f.com',1,'ativo','12345'),(2,'Hewerton','Folli','h@h.com',1,'ativo','12345'),(3,'Guilherme','Ferreira','g@g.com',2,'ativo','12345'),(4,'Gilberto','Sá','gi@g.com',2,'ativo','12345'),(5,'Tereza','Wisser','t@t.com',2,'ativo','12345'),(6,'Vanderson','Ribeiro','v@v.com',2,'ativo','12345');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'hotel_recanto'
--

--
-- Dumping routines for database 'hotel_recanto'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-28  8:11:54
