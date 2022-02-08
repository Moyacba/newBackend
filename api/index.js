const express = require('express');
const router = express.Router();

const productoRoute = require('./producto/producto.route');
const ventaRoute = require('./venta/venta.router');
const servicioRoute = require('./servicio/servicio.router');
const movementRoute = require('./movement/movement.route')
const compraRoute = require('./compra/compra.router')
const notasRoute = require('./notas/notas.router')
const cajaRoute = require('./caja/caja.route')

router.use('/api/producto', productoRoute);
router.use('/api/venta', ventaRoute);
router.use('/api/servicio', servicioRoute);
router.use('/api/movement', movementRoute);
router.use('/api/compra', compraRoute)
router.use('/api/notas', notasRoute)
router.use('/api/caja', cajaRoute)

module.exports = router;