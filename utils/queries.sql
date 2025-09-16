--TABLE USERS--
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50),
    logged BOOLEAN DEFAULT false  
),

--TABLE PERFUMES--
CREATE TABLE perfumes (
    id_perfume SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    puntuacion SMALLINT CHECK (puntuacion BETWEEN 1 AND 5),
    etiqueta VARCHAR(20),
    id_usuario INT REFERENCES users (id),
),


   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('my dream', 'tommy hilfiger', 'dreaming foto.jpg', 5, 'intenso', 1)

   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('gardenia', 'zara', 'gardenia foto.jpg', 4, 'intenso', 1)

   
   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('miss dior', 'dior', 'miss dior foto.jpg', 3, 'fresco', 1)

    SELECT p.* 
    FROM perfumes p
    JOIN usuarios u ON p.id_usuario = u.id
   WHERE u.email = $1
