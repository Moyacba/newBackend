const { findByIdAndUpdate, findById, findOneAndUpdate } = require('./producto.model');
const Producto = require('./producto.model');

module.exports = {
    getAllProductos: async (req, res) => {
        const options = {
            limit: 10,
            page: 1
        }

        const productos = await Producto.paginate({}, options)
        try {
            res.status(200).json(productos)
        } catch (error) { 
            res.status(500).json(error)
        }
    },

    getProducto: async (req, res) => {
        const producto = await Producto.findById(req.params.id)
        res.status(200).json(producto)
    },

    getOneProducto: async (req, res) => {
        console.log(req.params.id)
        const producto = await Producto.findOne({ codigo: req.params.id })
        res.status(200).json(producto)
    },

    addProducto: async (req, res) => {
        const options = req.body
        console.log(options)

        const productos = await Producto.paginate({}, options)
        try {
            res.status(200).json(productos)
        } catch (error) { 
            res.status(500).json(error)
        }

        //const validar = await Producto.findOne({ codigo: req.body.codigo })
        //if (validar) {
        //    res.status(300).json('Ya existe articulo con ese codigo')
        //} else {
        //    await Producto(req.body).save()
        //    res.status(200).json('Producto registrado con exito!')
        //}
        // if (validar) {
        //     try {
        //         validar.articulo.push(req.body.articulo)
        //         await Producto(validar).save()
        //         res.status(200).json('Producto registrado')
        //     } catch (error) {
        //         res.status(500).json('Codigo ya existe, error en push articulo: ', error)
        //     }
        // } else {
        //     try {
        //         var prod = req.body
        //         await Producto(prod).save()
        //         res.status(200).json('Producto registrado')
        //     } catch (error) {
        //         res.status(500).json(error)
        //     }
        // }
    },

    putProducto: async (req, res) => {
        try {
            console.log(req.body._id)
            await Producto.findByIdAndUpdate(req.body._id, {
                codigo: req.body.codigo,
                fecha: req.body.fecha,
                categoria: req.body.categoria,
                producto: req.body.producto,
                precioCompra: req.body.precioCompra,
                precioVenta: req.body.precioVenta,
                fechaPrecioVenta: req.body.fechaPrecioVenta,
                stock: req.body.stock,
                proveedor: req.body.proveedor,
                detalles: req.body.detalles,
                img: req.body.img,
                codAlt: req.body.codAlt,
                atributos: req.body.atributos
            })
            res.status(200).json('Producto registrado')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    putIdProducto: async (req, res) => {
        // console.log(req.params.id)
        // const varProd = await Producto.findOneAndUpdate(
        //     { codigo: req.params.id},
        //     {$push articulo: req.body.producto})
        // if (varProd) {

        // }
        res.status(200).json('nada')
    },

    imgProducto: async (req, res) => {
        console.log('id: ', req.params.id)
        console.log('Url: ', req.body.data)
        try {
            await Producto.findByIdAndUpdate(req.params.id, {
                img: req.body.data
            })
            res.status(200).json('Producto registrado')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
/* const { Producto } = require('../dbSequelize');

module.exports = {

    getAllProduct: async(req, res) => {
        try {
            const products = await Producto.findAll();
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },
    getSaleProducts: async(req, res) => {
        try {
            const products = await Producto.findAll({attributes:['producto']})
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    AddProduct: async(req, res) => {
        try {
            await Producto.create(req.body)
            res.status(200).json('Producto agregado con éxito')
        } catch (error) {
            res.status(500).send(error)
        }
    },

    PutProduct: async(req, res) => {
        try {
            console.log(req.body)
            await Producto.update({
                producto: req.body.producto,
                categoria: req.body.categoria,
                stock: req.body.stock,
                precioCompra: req.body.precioCompra,
                precioVenta: req.body.precioVenta,
                proveedor: req.body.proveedor,
                detalles: req.body.detalles,
            },
            {
                where: {
                    idProduct: req.body.idProduct
                }
            })
            res.status(200).json('Producto actualizado')
        } catch (error) {
            res.status(500).send(error)
        }
    },

    PutSaleProduct: async(req, res) => {
        try {
            await Producto.update({
                stock: req.body.stock
            },{
                where: {
                    idProduct: req.body.idProduct
                }
            })
        } catch (error) {
            res.status(500).send(error)
        }
    }
} */