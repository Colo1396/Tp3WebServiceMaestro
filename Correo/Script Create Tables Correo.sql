-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bucp5em1rpmwnjz26n5s
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bucp5em1rpmwnjz26n5s
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bucp5em1rpmwnjz26n5s` DEFAULT CHARACTER SET utf8 ;
USE `bucp5em1rpmwnjz26n5s` ;

-- -----------------------------------------------------
-- Table `bucp5em1rpmwnjz26n5s`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bucp5em1rpmwnjz26n5s`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `dni` INT NULL,
  `razonSocial` VARCHAR(150) NULL,
  `usuario` VARCHAR(45) NULL,
  `contraseña` VARCHAR(45) NULL,
  `idUsuarioRef` INT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bucp5em1rpmwnjz26n5s`.`envio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bucp5em1rpmwnjz26n5s`.`envio` (
  `idEnvio` INT NOT NULL AUTO_INCREMENT,
  `codSeguimiento` INT NULL,
  `domicilio` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NULL,
  `dni` INT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idEnvio`, `idUsuario`),
  INDEX `fk_envio_usuario_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_envio_usuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `bucp5em1rpmwnjz26n5s`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
