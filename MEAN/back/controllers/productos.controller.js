const Producto = require('../models/Producto')

exports.crearProducto = async(req, res) => {
    
    try {
        console.log(req.body)
        let producto 
        producto = new Producto(req.body)
        await producto.save()
        res.json('producto')

    } catch (error) {
        console.log(error)

        res.status(502).json({response: 'Ups, algo malio sal'})
    }
}