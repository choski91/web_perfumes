const pool = require('../config/db_pgsql');
const userQueries = require ('../queries/user.queries');

// GET
const getUserByEmail = async (email) => {
    try {
        const { rows } = await pool.query(userQueries.getUserByEmail, [email]);
        return rows[0]; // devuelve un solo usuario
    } catch (err) {
        console.error('Error en getUserByEmail:', err);
        throw err;
    }
}


//CREATE
const createUser = async ({ email, password }) => {
    try {
        const { rows } = await pool.query(userQueries.createUser, [email, password]);
        return rows[0];
    } catch (err) {
        console.error('Error en createUser:', err);
        throw err;
    }
};

const editUser = async ({ oldEmail, email, password }) => {
    try {
        const { rowCount } = await pool.query(userQueries.updateUser, [email, password, oldEmail]);
        return rowCount;
    } catch (err) {
        console.error('Error en updateUser:', err);
        throw err;
    }
};





const users = {
    getUserByEmail,
    createUser,
    editUser,
    
};

module.exports = users;
