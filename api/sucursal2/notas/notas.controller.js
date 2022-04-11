const  Notas  = require('./notas.model')

module.exports = {

    getAllNotas: async(req, res) => {
        try {
            const notas = await Notas.find();
            res.status(200).json(notas)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    postNota: async(req, res) => {
        try {
            await Notas(req.body).save()
            res.status(200).json('Nota creada')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteNota: async(req, res) => {
        try {
            const nota = await Notas.findById(req.params.id)
            await nota.remove()
            res.status(200).json('Eliminado correctamente')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteNota2: async(req, res) => {
        try {
            await Notas.remove({nota: req.body.nota})
            res.status(200).json('Se elimino correctamente')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}