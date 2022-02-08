const router = require('express').Router();

const productoController = require('./producto.controller');

router.get('/', productoController.getAllProductos);
router.post('/', productoController.addProducto);
router.put('/', productoController.putProducto);
/* router.get('/saleCart', productController.getSaleProducts);
router.put('/', productController.PutProduct); */

module.exports = router;