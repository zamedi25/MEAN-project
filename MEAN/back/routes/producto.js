const express = require ('express')
const router = express.Router()
const productoController = require('../controllers/productos.controller')

// router.post ('/', () =>{
//     console.log("mirando si la wea funciona")
// })

router.post('/crear-producto', productoController.crearProducto)

module.exports = router