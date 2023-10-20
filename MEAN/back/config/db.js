const mongoose = require ('mongoose')
require ('dotenv').config({ path: 'config.env'})

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_ZAMEDI_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Su base de datos ha sido conectada')
    } catch (error) {
        console.log('Intentelo de nuevo')
        process.exit(1)
    }
}

module.exports = conectarDB