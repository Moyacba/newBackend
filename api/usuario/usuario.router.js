const router = require('express').Router();

const notasController = require('./usuario.controller')

router.get('/', notasController.getAllUsuarios)
router.put('/', notasController.SignIn)
router.post('/', notasController.postUsuario);
/* router.delete('/:id', notasController.deleteUsuario) */
// router.patch('/', notasController.deleteUsuario2)

module.exports = router;