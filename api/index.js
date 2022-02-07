const express = require('express');
const router = express.Router();

const productoRoute = require('./producto/producto.route');
const ventaRoute = require('./venta/venta.router');
const serviceRoute = require('./service/service.router');
const movementRoute = require('./movement/movement.route')
const purchaseRoute = require('./purchase/purchase.router')
const notasRoute = require('./notas/notas.router')
const boxRoute = require('./box/box.route')

router.use('/api/producto', productoRoute);
router.use('/api/venta', ventaRoute);
router.use('/api/service', serviceRoute);
router.use('/api/movement', movementRoute);
router.use('/api/purchase', purchaseRoute)
router.use('/api/notas', notasRoute)
router.use('/api/box', boxRoute)

module.exports = router;