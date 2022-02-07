const router = require('express').Router();

const notasController = require('./notas.controller')

router.get('/', notasController.getAllNotas)
router.post('/', notasController.postNota);
router.delete(':id', notasController.deleteNota)

module.exports = router;