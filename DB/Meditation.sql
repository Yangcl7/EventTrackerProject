-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Meditationdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Meditationdb` ;

-- -----------------------------------------------------
-- Schema Meditationdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Meditationdb` DEFAULT CHARACTER SET utf8 ;
USE `Meditationdb` ;

-- -----------------------------------------------------
-- Table `Meditationdb`.`meditation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Meditationdb`.`meditation` ;

CREATE TABLE IF NOT EXISTS `Meditationdb`.`meditation` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `time_spent` INT(11) NOT NULL,
  `goal` TINYINT(4) NULL DEFAULT NULL,
  `recommended_time` INT(11) NULL DEFAULT NULL,
  `feeling_rate` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS meditator;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'meditator' IDENTIFIED BY 'meditator';

GRANT ALL ON `Meditationdb`.* TO 'meditator';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Meditationdb`.`meditation`
-- -----------------------------------------------------
START TRANSACTION;
USE `Meditationdb`;
INSERT INTO `Meditationdb`.`meditation` (`id`, `name`, `time_spent`, `goal`, `recommended_time`, `feeling_rate`) VALUES (1, 'Mindfulness ', 10, true, 10, 3);
INSERT INTO `Meditationdb`.`meditation` (`id`, `name`, `time_spent`, `goal`, `recommended_time`, `feeling_rate`) VALUES (2, 'Breath awareness', 10, true, 10, 3);
INSERT INTO `Meditationdb`.`meditation` (`id`, `name`, `time_spent`, `goal`, `recommended_time`, `feeling_rate`) VALUES (3, 'Mindfulness', 8, false, 10, 3);
INSERT INTO `Meditationdb`.`meditation` (`id`, `name`, `time_spent`, `goal`, `recommended_time`, `feeling_rate`) VALUES (4, 'Kundalini yoga', 15, true, 15, 5);
INSERT INTO `Meditationdb`.`meditation` (`id`, `name`, `time_spent`, `goal`, `recommended_time`, `feeling_rate`) VALUES (5, 'Body scan', 20, true, 20, 6);
INSERT INTO `Meditationdb`.`meditation` (`id`, `name`, `time_spent`, `goal`, `recommended_time`, `feeling_rate`) VALUES (6, 'Zen meditation', 15, false, 30, 5);
INSERT INTO `Meditationdb`.`meditation` (`id`, `name`, `time_spent`, `goal`, `recommended_time`, `feeling_rate`) VALUES (7, 'Zen meditation ', 30, true, 30, 8);

COMMIT;

