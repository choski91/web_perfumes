const express = require('express');
const userController = require("../controllers/user.controller");
const router = express.Router();

// Rutas de usuario
router.post('/register', userController.createUser); // registro
router.post('/login', userController.loginUser);     // login
router.put('/', userController.editUser);            // actualizar usuario

module.exports = router;
