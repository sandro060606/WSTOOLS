-- Active: 1780669069425@@127.0.0.1@3306
CREATE DATABASE constructora;
USE constructora;

CREATE TABLE herramientas (
    idherramienta   INT AUTO_INCREMENT PRIMARY KEY,
    nombre          VARCHAR(50)     NOT NULL,
    marca           VARCHAR(50)     NOT NULL,
    descripcion     VARCHAR(100)    NOT NULL,
    fotografia      VARCHAR(200)    NULL,
    condición       ENUM('Bueno', 'Regular', 'Malo') NOT NULL DEFAULT 'Bueno',
    tipo            ENUM('Manual', 'Electrica') NOT NULL DEFAULT 'Electrica'
)ENGINE = INNODB;

-- x2 Manuales
INSERT INTO herramientas (nombre, marca, descripcion, tipo) VALUES
('Alicates', 'Kamasa', 'Para trabajos electricos', 'Manual'),
('Destornillador', 'PB', 'Tipo cruz imantado', 'Manual');

-- x2 Electricas
INSERT INTO herramientas (nombre, marca, descripcion) VALUES
('Amoladora', 'Bosch', '500 Watts'),
('Taladro', 'DeWalt', 'Inalambrico 18V');

SELECT * FROM herramientas;