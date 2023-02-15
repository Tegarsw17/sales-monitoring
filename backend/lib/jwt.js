const jwt = require('jsonwebtoken')
const config = require('../db/config/auth')

const generateToken = async (payload) => {

    const token = jwt.sign({ id: payload.id, role: payload.role}, config.secret, ({expiresIn: 86400})) //24 jam

    return token
}

module.exports = generateToken