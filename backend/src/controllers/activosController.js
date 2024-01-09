// controllers/activosController.js
const ActivosModel = require('../models/activosModel');

function obtenerTodosActivos(req, res) {
    ActivosModel.obtenerTodosActivos((activos) => {
      res.json(activos);
    });
  }
  
  module.exports = {
    obtenerTodosActivos,
  };