const moment = require('moment')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const producto1Schema = mongoose.Schema({
    // fecha: {type: Date},
    // codigo: {type: Number},
    // categoria: {type: String},
    // producto: {type: String},
    // precioCompra: {type: Number},
    // precioVenta: {type: Number},
    // stock: {type: Number},
    // proveedor: {type: String},
    // detalles: {type: String},
    // img: {type: String},

    codigo: { type: Number },
    fecha: { type: Date },
    categoria: { type: String },
    producto: { type: String },
    precioCompra: { type: Number },
    precioVenta: { type: Number },
    fechaPrecioVenta: { type: String},
    stock: { type: Number },
    proveedor: { type: String },
    detalles: { type: String },
    img: { type: String },
    codAlt: {type: String},
    atributos: {type: Array}
})

module.exports = mongoose.model('Producto1', producto1Schema)
/* 
module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        idProduct: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: type.STRING,
        producto: type.STRING,
        precioCompra: type.INTEGER,
        precioVenta: type.INTEGER,
        stock: type.INTEGER,
        proveedor: type.STRING,
        detalles: type.STRING,
        createdAt: {
            type: type.DATE,             
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
            }
        },
        updatedAt: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY');
            }
        }
    })
};
 */