const Servicio = require('./servicio.model');

module.exports = {
    getAllServicios: async (req, res) => {
        const options = {
            limit: 10,
            page: 1
        }

        const servicios = await Servicio.paginate({}, options)
        try {
            res.status(200).json(servicios)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    addServcio: async (req, res) => {
        const options = req.body

        const servicios = await Servicio.paginate({}, options)
        try {
            res.status(200).json(servicios)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    putServicio: async (req, res) => {
        try {
            const id = req.body._id
            const data = req.body
            await Servicio.findByIdAndUpdate(id, data
                // {
                // cliente: req.body.cliente,
                // telefono1: req.body.telefono,
                // telefono2: req.body.telefono,
                // obsCliente: req.body.obsCliente,
                // categoria: req.body.categoria,
                // marca: req.body.marca,
                // motivo: req.body.motivo,
                // total: req.body.total,
                // senia: req.body.senia,
                // obsProducto: req.body.obsProducto,
                // contrasenia: req.body.contrasenia,
                // sim: req.body.sim,
                // sd: req.body.sd,
                // acc: req.body.acc,
                // dato1: req.body.dato1,
                // dato2: req.body.dato2,
                // dato3: req.body.dato3,
                // pago: req.body.pago,
                // estado: req.body.estado,
                // esobsTecnicotado: req.body.obsTecnico,
                // fechaIn: req.body.fechaIn,
                // fechaOut: req.body.fechaOut,
            // }
            )
            res.status(200).json('Servicio actualizado!')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
/* const { Servicio } = require('../dbSequelize');

module.exports = {

    getAllService: async(req, res) => {
        try {
            const servicios = await Servicio.findAll();
            res.status(200).json(servicios)
        } catch (error) {
            res.state(500).send(error)
        }
    },
    getService: async(req, res) => {
        try {
            res.status(200).json(servicios)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    postService: async(req, res) => {
        try {
            await Servicio.create(req.body);
            res.status(200).json('Servicio técnico registrado!')
        } catch (error) {
            res.status(500).send(error)
        }
    },
    putService: async(req, res) => {
        console.log(req.body)
        try {
            await Servicio.update({
                estado: req.body.estado,
                presupuesto: req.body.presupuesto
            },
            {
                where: {
                    idServicio: req.body.idService
                }
            })
            res.status(200).json('Servicio actualizado')
        } catch (error) {
            res.status(500).send(error)
        }
    },
} */