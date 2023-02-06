const app = require('./app')
const { port } = require('./config/database')



app.listen(port, () => {
    console.log(`server listening on ${port}`)
})