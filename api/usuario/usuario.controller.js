const  Usuarios  = require('./usuario.model')

module.exports = {

    getAllUsuarios: async(req, res) => {
        try {
            const usuarios = await Usuarios.find();
            res.status(200).json(usuarios)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    SignIn: async(req, res) => {
        try {
            const user = await Usuarios.findOne({usuario: req.body.usuario, passw: req.body.passw})
            if (user) {
                res.status(200).json(user.sucursal)
            } else{
                res.status(201).json('Usuario no encontrado')
            }
        } catch (error) {
            res.status(500).send(error)
        }
    },

    postUsuario: async(req, res) => {
        try {
            await Usuarios(req.body).save()
            res.status(200).json('Usuario creado')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteUsuario: async(req, res) => {
        try {
            const usuario = await Usuarios.findById(req.params.id)
            await usuario.remove()
            res.status(200).json('Eliminado correctamente')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteUsuario2: async(req, res) => {
        try {
            await usuario.remove({nota: req.body.nota})
            res.status(200).json('Se elimino correctamente')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}