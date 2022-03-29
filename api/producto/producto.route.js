const router = require('express').Router();


const productoController = require('./producto.controller');

router.get('/', productoController.getAllProductos);
router.get('/:id', productoController.getProducto);
router.post('/', productoController.addProducto);
router.put('/img/:id', productoController.imgProducto);
router.put('/', productoController.putProducto);
/* router.get('/saleCart', productController.getSaleProducts);
router.put('/', productController.PutProduct); */

module.exports = router;