
const { userQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')
const generateToken = require('../../lib/jwt')

class userController {

    async registerUser (req, res) {
        // using request body to parsing on user create queries
        try {

            const payload = req.body
            //validate the email
            const findUser = await userQueries.findUserByEmail(payload)
            if(findUser) {return responseHendler.duplicate(res, message('email').duplicateData)}
            //create a new user
            const newUser = await userQueries.createUser(payload)
            if (!newUser) {return responseHendler.badRequest(res, message().errorMessage)}

            return responseHendler.ok(res, message('register').success)

        }

        catch (err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async loginUser (req, res) {
        try {
            //find user
            const payload = req.body
            const findUser = await userQueries.findUserByEmail(payload)
            if(!findUser) { return responseHendler.notFound(res,message('email').notFoundResource)}

            const token = await generateToken(findUser)
            if(!token) { return responseHendler.internalError(res,message().serverError)}

            const data = {
                fullname: findUser.fullname,
                role: findUser.role,
                token: token
            }
            return responseHendler.ok(res,message('login').success, data)

        }

        catch (err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }

    }
}

module.exports = {
    userController,
}
