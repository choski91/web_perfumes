const express = require('express');
const userController = require("../controllers/user.controller");
const router = express.Router();

// Rutas 
router.get('/', userController.getUser);
router.post('/', userController.createAuthors);
router.put('/', userController.editUser);
router.delete('/', userController.deleteUser)



module.exports = router;