-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema tp3-compras
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tp3-compras
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tp3-compras` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `tp3-compras` ;

-- -----------------------------------------------------
-- Table `tp3-compras`.`rols`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`rols` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rolId` INT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `dni` INT NOT NULL,
  `telefono` INT NULL DEFAULT NULL,
  `billetera` DECIMAL(10,0) NOT NULL DEFAULT '0',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `rolId` (`rolId` ASC) VISIBLE,
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`rolId`)
    REFERENCES `tp3-compras`.`rols` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`carritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`carritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `total` DOUBLE NOT NULL,
  `idComprador` INT NOT NULL,
  `idVendedor` INT NOT NULL,
  `idCompra` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idComprador` (`idComprador` ASC) VISIBLE,
  INDEX `idVendedor` (`idVendedor` ASC) VISIBLE,
  INDEX `idCompra` (`idCompra` ASC) VISIBLE,
  CONSTRAINT `carritos_ibfk_1`
    FOREIGN KEY (`idComprador`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `carritos_ibfk_2`
    FOREIGN KEY (`idVendedor`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `carritos_ibfk_3`
    FOREIGN KEY (`idCompra`)
    REFERENCES `tp3-compras`.`carritos` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`tarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`tarjeta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(255) NOT NULL,
  `numero` VARCHAR(255) NOT NULL,
  `nombreTitular` VARCHAR(255) NOT NULL,
  `dniTitular` INT NOT NULL,
  `fechaVenc` DATETIME NOT NULL,
  `codSeguridad` VARCHAR(255) NOT NULL,
  `idUser` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUser` (`idUser` ASC) VISIBLE,
  CONSTRAINT `tarjeta_ibfk_1`
    FOREIGN KEY (`idUser`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`domicilios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`domicilios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `provincia` VARCHAR(255) NOT NULL,
  `localidad` VARCHAR(255) NOT NULL,
  `calle` VARCHAR(255) NOT NULL,
  `numero` INT NOT NULL,
  `pisoDepto` VARCHAR(255) NULL DEFAULT NULL,
  `idUser` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUser` (`idUser` ASC) VISIBLE,
  CONSTRAINT `domicilios_ibfk_1`
    FOREIGN KEY (`idUser`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idVendedor` INT NOT NULL,
  `idComprador` INT NOT NULL,
  `idCarrito` INT NOT NULL,
  `idMedioDePago` INT NOT NULL,
  `idDestino` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idVendedor` (`idVendedor` ASC) VISIBLE,
  INDEX `idComprador` (`idComprador` ASC) VISIBLE,
  INDEX `idCarrito` (`idCarrito` ASC) VISIBLE,
  INDEX `idMedioDePago` (`idMedioDePago` ASC) VISIBLE,
  INDEX `idDestino` (`idDestino` ASC) VISIBLE,
  CONSTRAINT `compras_ibfk_1`
    FOREIGN KEY (`idVendedor`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_2`
    FOREIGN KEY (`idComprador`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_3`
    FOREIGN KEY (`idCarrito`)
    REFERENCES `tp3-compras`.`carritos` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_4`
    FOREIGN KEY (`idMedioDePago`)
    REFERENCES `tp3-compras`.`tarjeta` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_5`
    FOREIGN KEY (`idDestino`)
    REFERENCES `tp3-compras`.`domicilios` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`cuentabancaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`cuentabancaria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nroCuenta` VARCHAR(255) NOT NULL,
  `idVendedor` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idVendedor` (`idVendedor` ASC) VISIBLE,
  CONSTRAINT `cuentabancaria_ibfk_1`
    FOREIGN KEY (`idVendedor`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `stock` INT NOT NULL,
  `formaDePago` VARCHAR(255) NOT NULL,
  `idUser` INT NOT NULL,
  `idCategoria` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idCategoria` (`idCategoria` ASC) VISIBLE,
  CONSTRAINT `productos_ibfk_1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `tp3-compras`.`categoria` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`denuncia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`denuncia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoria` ENUM('falsificación', 'producto ilegal', 'fraude', 'contenido inapropiado') NOT NULL,
  `comentario` VARCHAR(255) NULL DEFAULT NULL,
  `productoId` INT NOT NULL,
  `userId` INT NOT NULL,
  `estado` ENUM('a resolver', 'resuelto') NOT NULL DEFAULT 'a resolver',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `productoId` (`productoId` ASC) VISIBLE,
  INDEX `userId` (`userId` ASC) VISIBLE,
  CONSTRAINT `denuncia_ibfk_1`
    FOREIGN KEY (`productoId`)
    REFERENCES `tp3-compras`.`productos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `denuncia_ibfk_2`
    FOREIGN KEY (`userId`)
    REFERENCES `tp3-compras`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`mediodepagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`mediodepagos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`producto_mediodepago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`producto_mediodepago` (
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `productoId` INT NOT NULL,
  `medioDePagoId` INT NOT NULL,
  PRIMARY KEY (`productoId`, `medioDePagoId`),
  INDEX `medioDePagoId` (`medioDePagoId` ASC) VISIBLE,
  CONSTRAINT `producto_mediodepago_ibfk_1`
    FOREIGN KEY (`productoId`)
    REFERENCES `tp3-compras`.`productos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `producto_mediodepago_ibfk_2`
    FOREIGN KEY (`medioDePagoId`)
    REFERENCES `tp3-compras`.`mediodepagos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`productocarritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`productocarritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `idProducto` INT NOT NULL,
  `idCarrito` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idProducto` (`idProducto` ASC) VISIBLE,
  INDEX `idCarrito` (`idCarrito` ASC) VISIBLE,
  CONSTRAINT `productocarritos_ibfk_1`
    FOREIGN KEY (`idProducto`)
    REFERENCES `tp3-compras`.`productos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `productocarritos_ibfk_2`
    FOREIGN KEY (`idCarrito`)
    REFERENCES `tp3-compras`.`carritos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tp3-compras`.`reclamos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp3-compras`.`reclamos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `compraId` INT NOT NULL,
  `estado` ENUM('a resolver', 'resuelto') NOT NULL DEFAULT 'a resolver',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `compraId` (`compraId` ASC) VISIBLE,
  CONSTRAINT `reclamos_ibfk_1`
    FOREIGN KEY (`compraId`)
    REFERENCES `tp3-compras`.`compras` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
