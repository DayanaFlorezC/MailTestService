const express = require('express')
require('dotenv').config()
const cors = require('cors')

const emailRoute = require('./src/routes/emailRoute')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', emailRoute)

app.listen(port, () => {
    console.log('server running on port ' + port)
})