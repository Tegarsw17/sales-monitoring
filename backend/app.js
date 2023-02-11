const express = require('express')
const app = express()
const { userRouter, itemRouter } = require('./app/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.header(
        'Access-Control-Allow-Headers',
        'authorization, Origin, Content-Type, Accept'
    )
    next()
})
// Router
app.use('/v1', userRouter)
app.use('/v1', itemRouter)


module.exports = {
    app,
    express
};