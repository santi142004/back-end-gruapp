// Importar Express y el controlador userCranesController
const express = require('express');
const router = express.Router();
const { getUserCranes } = require('../controllers/userCranesController');

// Define la ruta para obtener las grúas de un usuario por ID
router.get('/userCranes/:id', getUserCranes);

module.exports = router;
