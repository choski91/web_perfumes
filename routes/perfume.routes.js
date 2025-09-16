const express = require('express');
const perfumeController = require("../controllers/perfume.controller");
const router = express.Router();

// Rutas 
// Perfumes por email
router.get('/email/:email/perfumes', perfumeController.getPerfumesByEmailController);
router.get("/", perfumeController.getPerfumesFilteredController);
// router.post('/', perfumeController.createPerfume);
// router.put('/', perfumeController.updatePerfume);
// router.delete('/', perfumeController.deletePerfume);


module.exports = router;
