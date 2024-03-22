const express = require('express');
const router = express.Router();
const gruaController = require('../controllers/grua-controller');

router.post('/', gruaController.addGrua);

// Otras rutas relacionadas con grúas si es necesario
module.exports = router;