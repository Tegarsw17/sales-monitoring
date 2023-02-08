const jwt = require('jsonwebtoken')
const config = require('../db/config/auth')

const generateToken = async (payload) => {
    const data = {
        id: payload.id,
        role: payload.role
    }

    const token = jwt.sign({ data}, config.secret, ({expiresIn: 86400})) //24 jam

    return token
}

module.exports = generateToken