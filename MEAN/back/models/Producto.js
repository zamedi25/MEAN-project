const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
    urlImg: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Producto', ProductoSchema)