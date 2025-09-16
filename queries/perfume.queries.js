const perfumeQueries = {
  createPerfume: `
    INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,

  getPerfumesByUserEmail : `
  SELECT p.* 
  FROM perfumes p
  JOIN users u ON p.id_usuario = u.id
  WHERE u.email = $1
 `,


  getAllPerfumes: `
    SELECT * FROM perfumes;
  `,

  getPerfumesByUser: `
    SELECT * FROM perfumes WHERE id_usuario = $1;
  `,

  getPerfumeById: `
    SELECT * FROM perfumes WHERE id_perfume = $1;
  `,

  updatePerfume: `
    UPDATE perfumes
    SET nombre = $1, marca = $2, foto = $3, puntuacion = $4, etiqueta = $5
    WHERE id_perfume = $6
    RETURNING *;
  `,

  deletePerfume: `
    DELETE FROM perfumes
    WHERE id_perfume = $1
    RETURNING *;
  `,

    getPerfumesFiltered: `
    SELECT * 
    FROM perfumes
    WHERE nombre ILIKE $1 OR marca ILIKE $1
  `
};

module.exports = perfumeQueries;
