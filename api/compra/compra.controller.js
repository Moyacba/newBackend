const Compra = require('./compra.model');

module.exports = {
    getAllCompras: async(req, res) => {
        const compra = await Compra.find()
        try {
            res.status(200).json(compra)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    
    addCompra: async(req, res) => {
        try {
            await Compra(req.body).save()
            res.status(200).json('Compra registrada')
        } catch (error) {
            res.status(500).json(error)
        }
    },
}


/* const { Purchase } = require('../dbSequelize')

module.exports = {

    getAllPurchase: async(req, res) => {
        try {
            const purchase = await Purchase.findAll();
            console.log('ok')
            res.status(200).json(purchase)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    postPurchase: async(req, res) => {
        try {
            await Purchase.create(req.body)
            res.status(200).json('Compra registrada con exito')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },
} */