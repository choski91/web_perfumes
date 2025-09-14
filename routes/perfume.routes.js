const express = require('express');
const perfumeController = require("../controllers/perfume.controller");
const router = express.Router();

// Rutas 
router.get('/', perfumeController.getPerfume);
router.post('/', perfumeController.createPerfume);
router.put('/', perfumeController.updatePerfume);
router.delete('/', perfumeController.deletePerfume);


module.exports = router;
