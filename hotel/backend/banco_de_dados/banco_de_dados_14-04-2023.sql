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
  `tipo` varchar(80) NOT NULL,
  `descricao` longtext NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_acomodacao`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acomodacao`
--

LOCK TABLES `acomodacao` WRITE;
/*!40000 ALTER TABLE `acomodacao` DISABLE KEYS */;
INSERT INTO `acomodacao` VALUES (10,'Suíte Luxuosa','Uma suíte espaçosa com cama king-size, vista para a cidade,TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card1.6f20ec8a.png',800.00),(11,'Suíte com Varanda','Uma suíte com cama king-size, varanda com vista para a piscina, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card2.cf0c721c.png',600.00),(12,'Quarto Executivo','Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, escrivaninha e banheiro privativo.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card5.ea5c71d3.png',450.00),(13,'Quarto Superior','Uma suíte espaçosa com cama king-size, vista para a cidade, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card3.15516c2f.png',500.00),(14,'Quarto Deluxe','Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar e banheiro privativo.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card4.d342958d.png',500.00),(15,'Quarto Família','Um quarto espaçoso com duas camas de casal e duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, área de estar separada e banheiro privativo.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card6.81ec17cc.png',400.00),(16,'Quarto Adaptado para Deficientes','Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, banheiro privativo e adaptações especiais para hóspedes com deficiência.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card7.fc3423e1.png',350.00),(17,'Quarto com Vista para o Mar','Um quarto espaçoso com cama king-size ou duas camas de solteiro, varanda com vista para o mar, TV de tela plana, mini-bar e banheiro privativo.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card8.a049686f.png',300.00),(18,'Quarto Econômico','Um quarto compacto com cama de solteiro ou beliche, TV de tela plana, mini-bar e banheiro compartilhado.','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card9.5f1424bd.png',250.00);
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
  `item` varchar(45) NOT NULL,
  `descricao` longtext NOT NULL,
  `valor` decimal(10,2) unsigned NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
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
-- Table structure for table `quarto`
--

DROP TABLE IF EXISTS `quarto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quarto` (
  `id_quarto` int NOT NULL AUTO_INCREMENT,
  `numero` int NOT NULL,
  `status` varchar(45) NOT NULL,
  `id_acomodacao` int NOT NULL,
  PRIMARY KEY (`id_quarto`),
  UNIQUE KEY `numero_UNIQUE` (`numero`),
  KEY `fk_quarto_acomodacao1_idx` (`id_acomodacao`),
  CONSTRAINT `fk_quarto_acomodacao1` FOREIGN KEY (`id_acomodacao`) REFERENCES `acomodacao` (`id_acomodacao`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quarto`
--

LOCK TABLES `quarto` WRITE;
/*!40000 ALTER TABLE `quarto` DISABLE KEYS */;
INSERT INTO `quarto` VALUES (1,101,'ocupado',10),(2,201,'ocupado',11),(3,301,'ocupado',12),(4,401,'ocupado',13),(5,501,'ocupado',14),(6,150,'ocupado',15),(7,250,'livre',16),(9,450,'ocupado',18),(10,102,'ocupado',10),(11,202,'ocupado',11),(12,408,'livre',13),(28,350,'ocupado',17);
/*!40000 ALTER TABLE `quarto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `checkin` date NOT NULL,
  `checkout` date NOT NULL,
  `qtdpessoas` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `totaldesconto` int DEFAULT NULL,
  `data` date NOT NULL,
  `confirmacao` varchar(10) NOT NULL,
  `id_cupom` int DEFAULT NULL,
  `id_avaliacao` int DEFAULT NULL,
  `id_usuario` int NOT NULL,
  `id_quarto` int NOT NULL,
  `totalcomdesconto` decimal(10,2) DEFAULT NULL,
  `cupomDesconto` varchar(45) DEFAULT NULL,
  `noites` int DEFAULT NULL,
  `servicos` varchar(4000) DEFAULT NULL,
  PRIMARY KEY (`id_reserva`),
  KEY `fk_reserva_cupom1_idx` (`id_cupom`),
  KEY `fk_reserva_avaliacao1_idx` (`id_avaliacao`),
  KEY `fk_reserva_usuario1_idx` (`id_usuario`),
  KEY `fk_reserva_quarto` (`id_quarto`),
  CONSTRAINT `fk_reserva_avaliacao1` FOREIGN KEY (`id_avaliacao`) REFERENCES `avaliacao` (`id_avaliacao`),
  CONSTRAINT `fk_reserva_cupom1` FOREIGN KEY (`id_cupom`) REFERENCES `cupom` (`id_cupom`),
  CONSTRAINT `fk_reserva_quarto` FOREIGN KEY (`id_quarto`) REFERENCES `quarto` (`id_quarto`),
  CONSTRAINT `fk_reserva_usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` VALUES (2,'2023-03-27','2023-03-28',2,800.00,NULL,'2023-03-26','cancelado',NULL,NULL,10,1,NULL,NULL,NULL,NULL),(5,'2023-04-11','2023-04-14',4,1280.00,5,'2023-03-27','confirmado',NULL,NULL,11,6,NULL,NULL,NULL,NULL),(6,'2023-03-31','2023-04-03',2,750.00,10,'2023-03-30','cancelado',NULL,NULL,134,3,NULL,NULL,NULL,NULL),(7,'2023-04-11','2023-04-14',3,600.00,10,'2023-04-10','arquivado',NULL,NULL,129,4,NULL,NULL,NULL,NULL),(8,'2023-04-10','2023-04-12',4,300.00,NULL,'2023-04-01','aguardando',NULL,NULL,108,5,NULL,NULL,NULL,NULL),(9,'2023-04-15','2023-04-16',2,495.00,10,'2023-04-12','confirmado',NULL,NULL,7,3,495.00,'8198725735713641',1,'[]'),(10,'2023-04-14','2023-04-15',2,760.00,10,'2023-04-12','confirmado',NULL,NULL,7,2,684.00,'6433286402507423',1,'[{\"nome\":\"Passeio Entre Ilhas \",\"preco\":100}]'),(11,'2023-04-22','2023-04-23',1,450.00,10,'2023-04-12','cancelado',NULL,NULL,10,3,450.00,'dlzn6jfw',1,'[]'),(12,'2023-04-20','2023-04-21',1,450.00,NULL,'2023-04-12','cancelado',NULL,NULL,10,3,450.00,'',1,'[]'),(13,'2023-04-29','2023-05-01',1,1080.00,NULL,'2023-04-12','cancelado',NULL,NULL,10,2,1080.00,'',2,'[]'),(14,'2023-04-15','2023-04-16',1,405.00,10,'2023-04-12','confirmado',NULL,NULL,10,3,405.00,'bgtj0pu3',1,'[]'),(15,'2023-04-21','2023-04-22',1,600.00,NULL,'2023-04-12','confirmado',NULL,NULL,10,2,600.00,'',1,'[]'),(16,'2023-04-15','2023-04-16',1,600.00,10,'2023-04-12','confirmado',NULL,NULL,7,2,540.00,'sbibyv15',1,'[]'),(17,'2023-04-14','2023-04-15',1,800.00,NULL,'2023-04-12','confirmado',NULL,NULL,7,1,NULL,'',1,'[]'),(18,'2023-04-14','2023-04-15',1,600.00,10,'2023-04-12','confirmado',NULL,NULL,7,2,540.00,'7uqevm0t',1,'[]'),(19,'2023-04-15','2023-04-16',2,1100.00,10,'2023-04-12','confirmado',NULL,NULL,10,1,990.00,'epq0pfim',1,'[{\"nome\":\"Café da Manhã no Quarto\",\"preco\":100},{\"nome\":\"Passeio Entre Ilhas \",\"preco\":100}]'),(21,'2023-04-29','2023-05-01',2,630.00,10,'2023-04-13','cancelado',NULL,NULL,10,28,567.00,'',2,'[{\"nome\":\"Trilha Ecológica\",\"preco\":100},{\"nome\":\"Café da Manhã no Quarto\",\"preco\":100}]'),(22,'2023-05-03','2023-05-04',1,500.00,NULL,'2023-04-13','arquivado',NULL,NULL,10,28,500.00,'',1,'[{\"nome\":\"Spa\",\"preco\":100},{\"nome\":\"Passeio de Barco\",\"preco\":100}]'),(23,'2023-04-15','2023-04-17',2,725.00,NULL,'2023-04-14','confirmado',NULL,NULL,10,9,725.00,'',2,'[{\"nome\":\"Passeio Entre Ilhas \",\"preco\":100},{\"nome\":\"Spa\",\"preco\":100}]'),(24,'2023-04-22','2023-04-23',2,735.00,NULL,'2023-04-14','confirmado',NULL,NULL,129,4,735.00,'',1,'[{\"nome\":\"Café da Manhã no Quarto\",\"preco\":100},{\"nome\":\"Trilha Ecológica\",\"preco\":100}]'),(25,'2023-04-29','2023-04-30',2,530.00,NULL,'2023-04-14','confirmado',NULL,NULL,129,28,530.00,'',1,'[{\"nome\":\"Café da Manhã no Quarto\",\"preco\":100},{\"nome\":\"Passeio Entre Ilhas \",\"preco\":100}]'),(26,'2023-04-22','2023-04-23',1,650.00,NULL,'2023-04-14','confirmado',NULL,NULL,138,3,650.00,'',1,'[{\"nome\":\"Trilha Ecológica\",\"preco\":100},{\"nome\":\"Café da Manhã no Quarto\",\"preco\":100}]'),(27,'2023-04-29','2023-04-30',3,517.50,NULL,'2023-04-14','confirmado',NULL,NULL,138,1,517.50,'',1,'[]'),(28,'2023-04-28','2023-04-30',2,540.00,NULL,'2023-04-14','confirmado',NULL,NULL,138,10,540.00,'',2,'[]');
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
-- Table structure for table `reserva_teste`
--

DROP TABLE IF EXISTS `reserva_teste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva_teste` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `acomodacao` varchar(50) NOT NULL,
  `adultos` int NOT NULL,
  `checkin` varchar(45) NOT NULL,
  `checkout` varchar(45) NOT NULL,
  `codigo` varchar(45) NOT NULL,
  `cupomDesconto` varchar(45) NOT NULL,
  `img` varchar(100) NOT NULL,
  `noites` int NOT NULL,
  `quartoPreco` int NOT NULL,
  `servicos` varchar(4000) DEFAULT NULL,
  `valorTotal` varchar(20) NOT NULL,
  `id_usuario` varchar(45) NOT NULL,
  PRIMARY KEY (`id_reserva`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva_teste`
--

LOCK TABLES `reserva_teste` WRITE;
/*!40000 ALTER TABLE `reserva_teste` DISABLE KEYS */;
INSERT INTO `reserva_teste` VALUES (1,'Suíte Luxuosa',1,'08/04/2023','30/04/2023','9872238940158495','04954938480712312','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card1.6f20ec8a.png',22,800,'[{nome: \'Spa\', preco: 100}, {nome: \'Passeio de Barco\', preco: 100}]','18',''),(24,'Quarto Adaptado para Deficientes',1,'08/04/2023','13/04/2023','37387146906982704','0028286064209084305','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card7.fc3423e1.png',5,350,'[{\"nome\":\"Spa\",\"preco\":100},{\"nome\":\"Passeio de Barco\",\"preco\":100},{\"nome\":\"Passeio Entre Ilhas \",\"preco\":100},{\"nome\":\"Café da Manhã no Quarto\",\"preco\":100},{\"nome\":\"Trilha Ecológica\",\"preco\":100}]','R$ 2.250,00','10'),(25,'Suíte Luxuosa',3,'08/04/2023','27/04/2023','06434082180953116','829560712654621','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card1.6f20ec8a.png',19,800,'[{\"nome\":\"Spa\",\"preco\":100},{\"nome\":\"Café da Manhã no Quarto\",\"preco\":100}]','R$ 20.020,00','10'),(26,'Suíte com Varanda',3,'14/04/2023','18/04/2023','814521798495512','5422988546486538','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card2.cf0c721c.png',4,600,'[{\"nome\":\"Spa\",\"preco\":100},{\"nome\":\"Passeio Entre Ilhas \",\"preco\":100}]','R$ 3.380,00','11'),(29,'Quarto com Vista para o Mar',1,'12/04/2023','14/04/2023','4266808165754066','2964824474590031','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card8.a049686f.png',2,300,'[]','R$ 600,00','7'),(30,'Suíte com Varanda',1,'12/04/2023','13/04/2023','7106094150983706','9975164147372613','https://tetezw.github.io/hotel_T.EX/hotelvue/dist/img/card2.cf0c721c.png',1,600,'[]','R$ 600,00','7');
/*!40000 ALTER TABLE `reserva_teste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `email` varchar(80) NOT NULL,
  `nivel` tinyint NOT NULL,
  `status` varchar(10) NOT NULL,
  `senha` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_usuario_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Fagner','Farias','f@f.com',1,'ativo','$2b$10$6dr.uQqBzfDYBdaDCOqUeuDKsTvfI5FVFOgB81A8J/g/uBqSDkwia'),(2,'Hewerton','Folli','h@h.com',2,'ativo','$2b$10$SPUGDwoGqmzaK.Ejpmot9OCZAzausrUR3F444mGJ6/KL/7hiJfaZ2'),(3,'Guilherme','Ferreira','g@g.com',1,'inativo','$2b$10$1v5mkR9ele1sBZZAFFhSteZlGRth2nybxr2huqFBo1M0hci7s9wdG'),(4,'Gilberto','Sá','gi@g.com',2,'inativo','12345'),(5,'Tereza','Wisser','t@t.com',2,'ativo','12345'),(6,'Vanderson','Ribeiro','v@v.com',2,'ativo','12345'),(7,'Maria','Santos','m@s.com',2,'ativo','$2b$10$bzZ1SMOoTQGGEL0WYQ3C.Oq65OPHLbL/GJ.kAc7ONMHJ37zznrCbC'),(9,'José','Silva','j@s.com',2,'ativo','$2b$10$dK0G9m2jHm6/7jjGgadTHubTbys2sTZey7LCQyRl0b0ozg.Hkhh.m'),(10,'Telma','Pereira','t@p.com',1,'ativo','$2b$10$W0tOO2M6Ka1vnLNOrQs5AeIQ2kQ1Td75JfRLDdyYduhUrHwZLABRe'),(11,'Pedro','Oliveira','p@oliveira.com',1,'inativo','$2b$10$pUHAbX41FR9l8Wfr.OlxBed1hg6fyAZIjqeI/.dhzEjaWOLnhNfSG'),(12,'João','Dev','j@d.com',1,'ativo','$2b$10$ldN8uELG1qA.qTcGBEYACu05xJ5NVvQZhsNgsFIuolIg/gdDgjTCq'),(108,'Luis','Oli','luis@oliver.com',1,'inativo','$2b$10$Zthla.WnZedQvN7JylmS3eYTP/t1GASD3cUVE0P2HRd9oa/PDy0aC'),(129,'Carol','Abreu','c@a.com',1,'ativo','$2b$10$yXU7YZ75zKQBRbHI7hPYjeeLoyzMQZ8l7VnD706jALP81P8cjsKZa'),(130,'Natalia','Campos','n@campos.com',1,'inativo','$2b$10$.EFNu5219bObuGs2LtfDquKh.MO9y6p4tUMNmMtu5TWq5t7ILJ/KS'),(132,'Ana','Oli','ana@oli.com',1,'ativo','$2b$10$Mm4lTMjZsh0wjzGmwT4une2eNo2KXuIjXkaSgjM5X2dNFcFz8kyxS'),(133,'Natalia','Dev','n@dev.com',2,'inativo','$2b$10$mWiCgmKx6PL3JoIKWTlq8eZxe8x6UOCCgeKhyZCg4o6OU5wnXjnjS'),(134,'Carol','Dev','carol@email.com',1,'ativo','$2b$10$uTuXsGPbyWBdqAhlS0j1CuLaLiMFqc25ZbKZDUjr7ATUX3dNPv/Cu'),(135,'João','Oliveira','joao@email.com',1,'ativo','$2b$10$rueBYs765RBZi77PQpubD.1uHJE0LvTZn6KqPTOLLeY8K0EK6SjFe'),(136,'Maria','Ribeiro','mariar@email.com',1,'ativo','$2b$10$5/53FAf29AyS8rgrOgnFJOtRFHLDsSqi1Ot23DeYHbs/fkgUmSBEW'),(137,'Gilberto ','Sá','gilberto@sa.com',2,'ativo','$2b$10$ijyy4YDTT.P5vQza54IyuOEgloWu9YvuMwma8Hc9i/Nih62wzITem'),(138,'Márcia','Silva','marcia@email.com',1,'ativo','$2b$10$wzlpIzbBEzIeIoet6RUPNeIS2leje/MWxIiN/qpR.pkeqPop2BEgu');
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

-- Dump completed on 2023-04-14 11:39:28
