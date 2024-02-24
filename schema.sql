-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS `notes_app`;

-- Seleccionar la base de datos
USE `notes_app`;

-- Crear la tabla de notas
CREATE TABLE IF NOT EXISTS `notes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `tag` VARCHAR(50)
);

-- Agregar notas de ejemplo
INSERT INTO `notes` (`title`, `description`, `tag`) VALUES
('Nota de ejemplo 1', 'Esta es una nota de ejemplo con una descripción corta.', 'personal'),
('Nota de ejemplo 2', 'Esta es otra nota de ejemplo con una descripción más detallada sobre un tema específico.', 'trabajo'),
('Nota de ejemplo 3', 'Aquí hay una tercera nota de ejemplo con una descripción simple.', 'recordatorio');