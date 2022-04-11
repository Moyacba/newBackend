const router = require('express').Router();
const ventaController = require('./venta.controller');

router.get('/', ventaController.getAllVentas)
router.post('/', ventaController.addVenta)
/* router.get('/', saleController.getAllSale);
router.post('/', saleController.postSale) */

module.exports = router;