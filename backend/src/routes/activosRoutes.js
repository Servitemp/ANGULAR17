// routes/activosRoutes.js
const express = require('express');
const activosController = require('../controllers/activosController');

const router = express.Router();

router.get('/allActivos', activosController.obtenerTodosActivos);

module.exports = router;
