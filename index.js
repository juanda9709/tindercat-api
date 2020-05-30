const express = require('express')
const app = express()
const catsRoutes = require('./routes/cats')
const interestsRoutes = require('./routes/interests')
const cors = require('cors')

require('./connection/mongoConnection')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hola mundo'))

app.use('/cats', catsRoutes)
app.use('/interests', interestsRoutes)

app.listen(5001, () => console.log('server running'))
