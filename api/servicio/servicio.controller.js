const Servicio = require('./servicio.model');

module.exports = {
    getAllServicios: async (req, res) => {
        const servicios = await Servicio.find()
        try {
            res.status(200).json(servicios)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    addServcio: async (req, res) => {
        try {
            await Servicio(req.body).save()
            res.status(200).json('Servicio registrado')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    putServicio: async (req, res) => {
        try {
            console.log(req.body._id)
            await Producto.findByIdAndUpdate(req.body._id, {
                cliente: req.body.cliente,
                telefono: req.body.telefono,
                producto: req.body.producto,
                categoria: req.body.categoria,
                motivo: req.body.motivo,
                presupuesto: req.body.presupuesto,
                repuesto: req.body.repuesto,
                pago: req.body.pago,
                estado: req.body.estado,
                detalles: req.body.detalles
            })
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