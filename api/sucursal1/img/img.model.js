const mongoose = require('mongoose')

const compraSchema = mongoose.Schema({
    producto: { type: String },
})

module.exports = mongoose.model('Compra', compraSchema)