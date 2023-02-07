const dotenv = require('dotenv')

dotenv.config({path: '.env'})

const app = require('./app')

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})