const moment = require('moment');

module.exports = (sequelize, DataType) => {
    return sequelize.define('venta', {
        idVenta: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente: DataType.STRING,
        total: DataType.INTEGER,
        pago: DataType.STRING,
        estado: DataType.STRING,
        productos:{
            type: DataType.TEXT,
            get: function(){
                return JSON.parse(this.getDataType('value'))
            },
            set: function(value){
                this.setDataValue('Value', JSON.stringify(value))
            },
        },
        detalles: DataType.STRING,
        createdAt: {
            type: DataType.DATE,             
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY HH:mm:ss');
            }
        },
        updatedAt: {
            type: DataType.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY HH:mm:ss');
            }
        }
    })
};