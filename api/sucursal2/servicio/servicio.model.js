const mongoose = require('mongoose')
mongoosePaginate = require('mongoose-paginate-v2')

const servicio1Schema = mongoose.Schema({
    cliente: { type: String },
    telefono1: { type: String },
    telefono2: { type: String },
    obsCliente: { type: String },
    categoria: { type: String },
    marca: { type: String },
    motivo: { type: String },
    total: { type: Number },
    pagos: { type: Array },
    obsProducto: { type: String },
    contrasenia: { type: Array },
    sim: { type: String },
    sd: { type: String },
    acc: { type: Array },
    dato1: { type: Array },
    dato2: { type: Array },
    dato3: { type: Array },
    estado: { type: String },
    obsTecnico: { type: String },
    fechaEstado: {type: Array},
    fechaIn: { type: Date },
    fechaOut: { type: Date }
})

servicio1Schema.plugin(mongoosePaginate)

module.exports = mongoose.model('Servicio1', servicio1Schema)


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