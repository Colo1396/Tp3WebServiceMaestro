-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema brn6nr4w9oyn8lsc7zbc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema brn6nr4w9oyn8lsc7zbc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `brn6nr4w9oyn8lsc7zbc` DEFAULT CHARACTER SET utf8 ;
USE `brn6nr4w9oyn8lsc7zbc` ;

-- -----------------------------------------------------
-- Table `brn6nr4w9oyn8lsc7zbc`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `brn6nr4w9oyn8lsc7zbc`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `razonSocial` VARCHAR(150) NULL,
  `idUsuarioRef` INT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `brn6nr4w9oyn8lsc7zbc`.`mediosPago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `brn6nr4w9oyn8lsc7zbc`.`mediosPago` (
  `idMediosPago` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idMediosPago`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `brn6nr4w9oyn8lsc7zbc`.`cuentaBancaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `brn6nr4w9oyn8lsc7zbc`.`cuentaBancaria` (
  `idCuentaBancaria` INT NOT NULL AUTO_INCREMENT,
  `nroCuenta` VARCHAR(45) NULL,
  `monto` DOUBLE NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idCuentaBancaria`, `idUsuario`),
  INDEX `fk_cuentaBancaria_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_cuentaBancaria_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `brn6nr4w9oyn8lsc7zbc`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `brn6nr4w9oyn8lsc7zbc`.`tarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `brn6nr4w9oyn8lsc7zbc`.`tarjeta` (
  `idTarjeta` INT NOT NULL AUTO_INCREMENT,
  `nroTarjeta` VARCHAR(45) NULL,
  `tipo` VARCHAR(45) NULL,
  `limite` DOUBLE NULL,
  `montoUtilizado` DOUBLE NULL,
  `saldo` DOUBLE NULL,
  `idCuentaBancaria` INT NOT NULL,
  PRIMARY KEY (`idTarjeta`, `idCuentaBancaria`),
  INDEX `fk_tarjeta_cuentaBancaria1_idx` (`idCuentaBancaria` ASC) VISIBLE,
  CONSTRAINT `fk_tarjeta_cuentaBancaria1`
    FOREIGN KEY (`idCuentaBancaria`)
    REFERENCES `brn6nr4w9oyn8lsc7zbc`.`cuentaBancaria` (`idCuentaBancaria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `brn6nr4w9oyn8lsc7zbc`.`movHistorico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `brn6nr4w9oyn8lsc7zbc`.`movHistorico` (
  `idTransaccion` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL,
  `signo` INT NULL,
  `monto` DOUBLE NULL,
  `idUsuario` INT NOT NULL,
  `idCuentaBancaria` INT NOT NULL,
  `idMediosPago` INT NOT NULL,
  PRIMARY KEY (`idTransaccion`, `idUsuario`, `idCuentaBancaria`, `idMediosPago`),
  INDEX `fk_movHistorico_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_movHistorico_cuentaBancaria1_idx` (`idCuentaBancaria` ASC) VISIBLE,
  INDEX `fk_movHistorico_mediosPago1_idx` (`idMediosPago` ASC) VISIBLE,
  CONSTRAINT `fk_movHistorico_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `brn6nr4w9oyn8lsc7zbc`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movHistorico_cuentaBancaria1`
    FOREIGN KEY (`idCuentaBancaria`)
    REFERENCES `brn6nr4w9oyn8lsc7zbc`.`cuentaBancaria` (`idCuentaBancaria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movHistorico_mediosPago1`
    FOREIGN KEY (`idMediosPago`)
    REFERENCES `brn6nr4w9oyn8lsc7zbc`.`mediosPago` (`idMediosPago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `brn6nr4w9oyn8lsc7zbc`.`mpXUsu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `brn6nr4w9oyn8lsc7zbc`.`mpXUsu` (
  `idMediosPago` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idMediosPago`, `idUsuario`),
  INDEX `fk_mediosPago_has_usuario_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_mediosPago_has_usuario_mediosPago_idx` (`idMediosPago` ASC) VISIBLE,
  CONSTRAINT `fk_mediosPago_has_usuario_mediosPago`
    FOREIGN KEY (`idMediosPago`)
    REFERENCES `brn6nr4w9oyn8lsc7zbc`.`mediosPago` (`idMediosPago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mediosPago_has_usuario_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `brn6nr4w9oyn8lsc7zbc`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
