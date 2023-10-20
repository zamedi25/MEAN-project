console.log("holiwiiiis")

const express = require ('express')
const conectarDB = require ('./config/db')

const app = express()

app.use(express.json())
conectarDB()

app.use('/productos', require('./routes/producto'))

app.listen(3000, () => {
    console.log("El servidor si funciona")
})