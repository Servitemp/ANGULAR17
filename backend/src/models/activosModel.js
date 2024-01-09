// models/activosModel.js
const db = require('../utils/db');

function obtenerTodosActivos(callback) {
  db.query('SELECT a.id AS id, \
                   a.cod_int as cod_int, \
                   a.nombre_activo as nombre_activo, \
                   DATE_FORMAT(a.fecha_ingreso, "%Y-%m-%d") as fecha_ingreso, \
                   DATE_FORMAT(a.fecha_compra, "%Y-%m-%d") as fecha_compra, \
                   a.valor as valor, \
                   ti.tipo as nombre_tipo, \
                   e.estado as nombre_estado, \
                   a.asignado as asignado, \
                   a.detalles as detalles, \
                   a.marca as marca, \
                   b.nombre_area as empresa, \
                   COALESCE(comentarios.cantidad_comentarios, 0) as cantidad_comentarios \
                   FROM activos_fijos as a INNER JOIN activos_fijos_estados as e ON e.id_estados = a.estado \
                   INNER JOIN area as b ON b.id_area = a.empresa \
                   INNER JOIN activos_fijos_tipos as ti ON ti.id_tipos = a.tipo \
                   LEFT JOIN persona as c ON c.id_persona = a.asignado \
                   LEFT JOIN (SELECT id_activos_fijo, \
                   COUNT(id) as cantidad_comentarios \
                   FROM activos_fijos_comentarios WHERE estado = 1 GROUP BY id_activos_fijo) as comentarios ON a.id = comentarios.id_activos_fijo \
                   WHERE a.estado_control = 1', (error, results) => {
    if (error) throw error;
    callback(results);
  });
}
  
  module.exports = {
    obtenerTodosActivos,
  };
