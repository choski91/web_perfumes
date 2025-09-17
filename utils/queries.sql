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
    nombre VARCHAR(75) NOT NULL,
    marca VARCHAR(75) NOT NULL,
    foto VARCHAR(250) NOT NULL,
    puntuacion SMALLINT CHECK (puntuacion BETWEEN 1 AND 5),
    etiqueta VARCHAR(20),
    id_usuario INT REFERENCES users (id),
),


   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('Dreaming', 'Tommy Hilfiger', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTojsUBpzjBcMZXozQmnsMuzBD28e9NbVn4vbQs69uXSv9qtFg501M4pMpoQYTNC4sFum-eYy6aFO3DgcoIhU36EFvupngSguMwLjNbqFHQZaeIfjYOtANmfq1KvOHM1llUgpOuHWg&usqp=CAc', 5, 'intenso', 1)

   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('Gardenia', 'Zara', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSI0CDtQBO1SeugTwDFJoj_gxLoqUxsJIRJYrbNP8VYBOkx5w9w-IV_vmD-NAMQB_a9csa3odbX22T1cBMrw_eZg_8dnR5Y6ByQrosVe0tN0Yu5fCxsaiUfSA', 4, 'intenso', 1)

   
   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('Miss Dior', 'Dior', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxjVPMhDNQM4vHI_Ef1T2wWIZl62BBTM4PjUsZ9zbRTXLeFY69bEBrStv6vWwOQNMeoWmGbBNTPG_RsCPNESaFXkSi039FItAXTL0BNF0Mx7QnR06MX1iP2wPBRltHsW7eo6w6MYQ&usqp=CAc', 3, 'fresco', 1)

    
   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('Coco', 'Chanel', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-k-QUxmO9fRWGI9z9yHwCogOXqbctSGI5f3JqW1Pa49sp6zTlae5Ce17EmgW73Zx7RK_0EvRtbPrr2zovm2RhLDyw_2Du8qKg4vEWr43yAhjrQn9y6TZeqRtRQCFkOf8TNiHCQlY&usqp=CAc', 2, 'fresco', 1)


   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('Light Blue', 'Dolce & Gabbana', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQA6b0WDeIsBcL-l4vd2xKY7fG3Qv35j4p4JETo_6m6W1aX7BJZ5er9Wf6mjA7cRT5KdTwvjfWWY2uQFFFVQHS8PHW013lgjsU7yVL6T-eVP_tKg3ivWn4Y9B2nbGzIT14ccKv3w&usqp=CAc', 3, 'fresco', 1)


   INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ('212 Vip', 'Carolina Herrera', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_HmXoZMutyJcOR69c5YcPcSt2FWkbjp4H53Rn8-Fg59927xm-pDKYVe53KrJp6naUMIHP-noybgU-Vc-_Vtq2TZAO0JeZeTdNMWa4f_YMC3C3TDhB5vSCdT2PV8WL5h4327XXcywU62U&usqp=CAc', 3, 'fresco', 1)




SELECT p.*
FROM perfumes p
JOIN usuarios u ON p.id_usuario = u.id
WHERE u.email = 'correo@ejemplo.com';

--uno perfumes con usuarios por el id_usuario y filtro x el email--
    -- SELECT p.* 
    -- FROM perfumes p
    -- JOIN usuarios u ON p.id_usuario = u.id
    -- WHERE u.email = $1
