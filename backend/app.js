const express = require('express')
const app = express()
const { userRouter } = require('./app/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// Router
app.use('/v1', userRouter)


module.exports = {
    app,
    express
}