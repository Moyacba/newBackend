const router = require('express').Router();

const notasController = require('./notas.controller')

router.get('/', notasController.getAllNotas)
router.post('/', notasController.postNota);
/* router.delete('/:id', notasController.deleteNota) */
router.patch('/', notasController.deleteNota2)

module.exports = router;