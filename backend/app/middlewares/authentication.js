const jwt = require('jsonwebtoken')
const config = require('../../db/config/auth')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')


class tokenJwt {

    verifyToken (req, res, next) {


        const token = req.headers['authorization']

        if(!token) {return responseHendler.authenticationFailed(res, message().unathentication)}

        jwt.verify(token, config.secret, (err, decoded) =>{
            if(err) {return responseHendler.authenticationFailed(res, message().unathentication)}
            req.userId = decoded.id
            req.userRole = decoded.role

            next()
        })
    }


}

module.exports = {
    tokenJwt,
}