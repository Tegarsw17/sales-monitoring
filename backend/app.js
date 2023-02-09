const express = require('express')
const app = express()
const { userRouter, itemRouter } = require('./app/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// Router
app.use('/v1', userRouter)
app.use('/v1', itemRouter)


module.exports = {
    app,
    express
};