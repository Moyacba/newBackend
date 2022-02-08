const mongoose = require('mongoose')

const servicioSchema = mongoose.Schema({
    cliente: { type: String },
    telefono: { type: String },
    producto: { type: String },
    categoria: { type: String },
    motivo: { type: String },
    presupuesto: { type: Number },
    repuesto: { type: Number },
    pago: { type: String },
    estado: { type: String },
    detalles: { type: String },
})

module.exports = mongoose.model('Servicio', servicioSchema)


/* const moment = require('moment');
moment.locale('es')

module.exports = (sequelize, type) => {
    return sequelize.define('servicio', {
        idServicio: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente: type.STRING,
        telefono: type.STRING,
        producto: type.STRING,
        categoria: type.STRING,
        motivo: type.STRING,
        presupuesto: type.INTEGER,
        repuesto: type.INTEGER,
        pago: type.STRING,
        estado: type.STRING,
        detalles: type.STRING,
        createdAt: {
            type: type.DATE,             
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY hh:mm:ss');
            }
        },
        updatedAt: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY hh:mm:ss');
            }
        }
    })
}; */