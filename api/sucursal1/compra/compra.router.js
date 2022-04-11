const router = require('express').Router();

const compraController = require('./compra.controller')

router.get('/', compraController.getAllCompras);
router.post('/', compraController.addCompra);
/* router.get('/', purchaseController.getAllPurchase);
router.post('/', purchaseController.postPurchase); */

module.exports = router;