const pool = require('../config/db_pgsql');
const perfumeQueries = require('../queries/perfume.queries');

// GET 
const getPerfumesByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(perfumeQueries.getPerfumesByUserEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release();
  }
  return result;
};

const getPerfumesFiltered = async (searchTerm) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(
      perfumeQueries.getPerfumesFiltered,
      [`%${searchTerm}%`]
    );
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release();
  }
  return result;
};

// CREATE
// const createPerfume = async (perfume) => {
//   const { nombre, marca, foto, puntuacion, etiqueta, id_usuario } = perfume;
//   let client, result;
//   try {
//     client = await pool.connect();
//     const data = await client.query(perfumeQueries.createPerfume, [
//       nombre,
//       marca,
//       foto,
//       puntuacion,
//       etiqueta,
//       id_usuario,
//     ]);
//     result = data.rows[0]; 
//   } catch (err) {
//     console.error(err);
//     throw err;
//   } finally {
//     if (client) client.release();
//   }
//   return result;
// };

// UPDATE
// const updatePerfume = async (perfume) => {
//   const { id_perfume, nombre, marca, foto, puntuacion, etiqueta } = perfume;
//   let client, result;
//   try {
//     client = await pool.connect();
//     const data = await client.query(perfumeQueries.updatePerfume, [
//       nombre,
//       marca,
//       foto,
//       puntuacion,
//       etiqueta,
//       id_perfume,
//     ]);
//     result = data.rows[0];
//   } catch (err) {
//     console.error(err);
//     throw err;
//   } finally {
//     if (client) client.release();
//   }
//   return result;
// };

// DELETE
// const deletePerfume = async (id_perfume) => {
//   let client, result;
//   try {
//     client = await pool.connect();
//     const data = await client.query(perfumeQueries.deletePerfume, [id_perfume]);
//     result = data.rows[0]; // Devuelve el perfume borrado
//   } catch (err) {
//     console.error(err);
//     throw err;
//   } finally {
//     if (client) client.release();
//   }
//   return result;
// };

const perfumes = {
  getPerfumesByEmail,
  getPerfumesFiltered
  // createPerfume,
  // updatePerfume,
  // deletePerfume,
};

module.exports = perfumes;
