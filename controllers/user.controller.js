const user = require('../models/user.model'); 

//GET http://localhost:3000/api/user

const getAllUsers = async (req, res) => {
    let users;
    if (req.query.email) {
        users = await user.getUserByEmail(req.query.email);
    }
    else {
        users = await user.getAllUsers();
    }
    res.status(200).json(users); 
}

//POST http://localhost:3000/api/user/

const createUser = async (req, res) => {
    const newUser = req.body; 
    const response = await user.createUser(newUser);
    res.status(201).json({
        "usuario creado": response,
        data: newUser
    });
}

//PUT http://localhost:3000/api/user/ 

const editUser = async (req, res) => {
    const updateUser = req.body; // { oldEmail, email, password }

    try {
        const result = await user.updateUser(updateUser);

        if (result === 0) {
            return res.status(404).json({
                message: `No se encontró el usuario '${updateUser.oldEmail}'`
            });
        }

        res.status(200).json({
            message: `usuario actualizado: ${updateUser.oldEmail}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error al actualizar usuario",
            error: err.message
        });
    }
};

//DELETE http://localhost:3000/api/user/ 

// const deleteAuthor = async (req, res) => {
//     const { email } = req.body;

//     try {
//         await author.deleteAuthor(email);
//         res.status(200).json({
//             message: `Se ha borrado ${email}`
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Error al eliminar autor",
//             error: err.message
//         });
//     }
// };


module.exports = {
    getAllUsers,
    createUser,
    editUser,
    // deleteAuthor
};
