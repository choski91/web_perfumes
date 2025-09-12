--TABLE USERS--
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50),
    logged BOOLEAN DEFAULT false  
),

CREATE TABLE perfumes (
    id_perfume SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    puntuacion SMALLINT CHECK (puntuacion BETWEEN 1 AND 5),
    etiqueta VARCHAR(20),
    id_usuario INT REFERENCES users (id),
),

--CREAR USUARIO SIGNUP
INSERT INTO users (email, password)
VALUES ($1, $2);

--OBTENER USUARIO POR EMAIL PARA LOGIN
SELECT * FROM users WHERE email = $1;

--SELECT ALL FROM USERS
SELECT * FROM users;

--ACTUALIZAR PERFIL USER
UPDATE users
SET  email = $1, password = $2
WHERE id = $3;

--logIn
UPDATE users 
SET logged = true
WHERE email = $1 AND password = $2;

--logOut
UPDATE users
SET logged = false
WHERE id = $1;