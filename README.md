# WebService que sirve datos a una aplicación Android Java
## Procedimientos de ejecucion

* 1. ***Clonar repositorio***

[Repositorio en GitHub](https://github.com/sandro060606/WSTOOLS.git)


```bash
git clone https://github.com/sandro060606/WSTOOLS.git
cd WSTOOLS
```

* 2. ***Ejecutar npm install***

```bash
npm install
```

* 3. ***Restaurar la base de datos***

```sql
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
```

* 4. ***Configurar variables de entorno***

```bash
DB_HOST=localhost
DB_USER=Tu_usuario
DB_PASSWORD=
DB_NAME=Tu_db
DB_PORT=3306
PORT=3000
```
* 5. ***Ejecutar la aplicación node server***

```bash
nodemon server
```