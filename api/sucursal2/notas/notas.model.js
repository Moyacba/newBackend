const mongoose = require('mongoose')

const notas1Schema = mongoose.Schema({
    fecha: {type: Date},
    nota: {
        type: String
    }
})

module.exports = mongoose.model('Notas1', notas1Schema)

/* const moment = require('moment')

module.exports = (sequelize, type) => {
    return sequelize.define('notes', {
        idNotes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: type.STRING,
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
} */