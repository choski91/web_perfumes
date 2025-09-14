const pool = require('../config/db_pgsql');
const userQueries = require ('../queries/user.queries');

// GET
// const getUserByEmail = async (email) => {
//     let client, result;
//     try {
//         client = await pool.connect(); 
//         const data = await client.query(userQueries.getUserByEmail, [email])
//         result = data.rows
//     } catch (err) {
//         console.log(err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result
// }


//CREATE
const createUser = async (user) => {
    const {email, password } = user;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(userQueries.createUser, [ email, password])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const updateUser = async (user) => {
    const { oldEmail, email, password} = user;
    let client, result;

    try {
        client = await pool.connect();
        const data = await client.query(
            userQueries.updateUser,
            [oldEmail, email, password]
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



const users = {
    // getUserByEmail,
    createUser,
    updateUser,
};

module.exports = users;
