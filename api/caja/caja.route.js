const router = require('express').Router();

const cajaController = require('./caja.controller')

// router.get('/:id', cajaController.getIdCajaActual);
router.get('/id/', cajaController.getIdCaja);
router.get('/', cajaController.getAllCaja);
router.get('/open', cajaController.getOpenCaja);
router.post('/', cajaController.postCaja);
router.put('/', cajaController.putCaja);
router.put('/close', cajaController.putCloseCaja);
/*router.get('/', boxController.getAllBox);
router.get('/:id', boxController.getIdBox);
router.post('/', boxController.postBox);
router.put('/', boxController.putBox); */

module.exports = router;