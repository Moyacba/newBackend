const express = require('express');
const router = express.Router();

const producto2Route = require('./sucursal2/producto/producto.route');
const venta2Route = require('./sucursal2/venta/venta.router');
const servicio2Route = require('./sucursal2/servicio/servicio.router');
const movement2Route = require('./sucursal2/movement/movement.route')
const compra2Route = require('./sucursal2/compra/compra.router')
const notas2Route = require('./sucursal2/notas/notas.router')
const caja2Route = require('./sucursal2/caja/caja.route')

const producto1Route = require('./sucursal1/producto/producto.route');
const venta1Route = require('./sucursal1/venta/venta.router');
const servicio1Route = require('./sucursal1/servicio/servicio.router');
const movement1Route = require('./sucursal1/movement/movement.route')
const compra1Route = require('./sucursal1/compra/compra.router')
const notas1Route = require('./sucursal1/notas/notas.router')
const caja1Route = require('./sucursal1/caja/caja.route')

const usuarioRoute = require('./usuario/usuario.router')

router.use('/1/api/producto', producto2Route);
router.use('/1/api/venta', venta2Route);
router.use('/1/api/servicio', servicio2Route);
router.use('/1/api/movement', movement2Route);
router.use('/1/api/compra', compra2Route)
router.use('/1/api/notas', notas2Route)
router.use('/1/api/caja', caja2Route)

router.use('/2/api/producto', producto1Route);
router.use('/2/api/venta', venta1Route);
router.use('/2/api/servicio', servicio1Route);
router.use('/2/api/movement', movement1Route);
router.use('/2/api/compra', compra1Route)
router.use('/2/api/notas', notas1Route)
router.use('/2/api/caja', caja1Route)

router.use('/api/usuario', usuarioRoute)

module.exports = router;