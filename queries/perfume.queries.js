const perfumeQueries = {
  createPerfume: `
    INSERT INTO perfumes (nombre, marca, foto, puntuacion, etiqueta, id_usuario)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
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
  `
};

module.exports = perfumeQueries;
