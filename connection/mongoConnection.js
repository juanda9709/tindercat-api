const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db_tindercat', { useNewUrlParser: true, useUnifiedTopology: true }) // conexion con la base de datos
const db = mongoose.connection
db.on('error', () => console.error('Error connecting'))
db.once('open', () => console.log('Connection mongo success'))

module.exports = db
