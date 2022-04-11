const router = require('express').Router();
const servicioController = require('./servicio.controller');

router.get('/', servicioController.getAllServicios)
router.post('/', servicioController.addServcio)
router.put('/', servicioController.putServicio)
router.patch('/:id', servicioController.putServicio)
/* router.get('/', serviceController.getAllService);
router.get('/', serviceController.getService);
router.post('/', serviceController.postService);
router.put('/', serviceController.putService); */

module.exports = router;