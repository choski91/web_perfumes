const user = require('../models/user.model'); 



// POST http://localhost:3000/api/users/register
const createUser = async (req, res) => {
    const newUser = req.body; // { email, password }

    try {
        // Valido si el usuario existe
        const existingUser = await user.getUserByEmail(newUser.email);
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const createdUser = await user.createUser(newUser);
        res.status(201).json({
            message: 'Usuario creado',
            user: createdUser
        });

    } catch (err) {
        console.error('Error al crear usuario:', err);
        res.status(500).json({ message: 'Error al crear usuario', error: err.message });
    }
};

// POST http://localhost:3000/api/users/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await user.getUserByEmail(email);

        if (!foundUser || foundUser.password !== password) {
            return res.status(401).json({ message: 'Email o contraseña incorrectos' });
        }

        res.status(200).json({
            message: 'Login exitoso',
            user: foundUser
        });

    } catch (err) {
        console.error('Error al iniciar sesión:', err);
        res.status(500).json({ message: 'Error al iniciar sesión', error: err.message });
    }
};

// PUT /api/users
const editUser = async (req, res) => {
    const updateUserData = req.body; // { oldEmail, email, password }

    try {
        const result = await user.updateUser(updateUserData);

        if (result === 0) {
            return res.status(404).json({
                message: `No se encontró el usuario '${updateUserData.oldEmail}'`
            });
        }

        res.status(200).json({
            message: `Usuario actualizado: ${updateUserData.oldEmail}`
        });

    } catch (err) {
        console.error('Error al actualizar usuario:', err);
        res.status(500).json({
            message: "Error al actualizar usuario",
            error: err.message
        });
    }
};


module.exports = {
    loginUser,
    createUser,
    editUser,

};
