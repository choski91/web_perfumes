const pool = require('../config/db_pgsql');
const usersqueries = require ('../queries/perfume.queries');

// GET
const getAllPerfumes = async (perfume) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(userqueries.getAllPerfumes)
        console.log(data.rows)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//CREATE
const createPerfume = async (perfume) => {
    const { nombre, marca, foto, puntuacion, etiqueta } = perfume;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createPerfume,[title, content, id_author, category])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updatePerfume = async (perfume) => {
    const { oldTitle, content, date, newTitle, category } = perfume;
    let client, result;

    try {
        client = await pool.connect();
        const data = await client.query(
            queries.updatePerfume,
            [oldTitle, content, date, newTitle, category]
        );
        result = data.rowCount; 
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (client) client.release();
    }

    return result;
};

//DELETE
const deletePerfume = async (email) => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.deletePerfume, [email]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }

    return result.rowCount;
};




const perfumes = {
    
    createPerfume,
    updatePerfume,
    deletePerfume
    
}

module.exports = perfumes;
