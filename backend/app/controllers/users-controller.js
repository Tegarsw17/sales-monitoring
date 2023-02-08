
const { userQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')
const generateToken = require('../../lib/jwt')

class userController {

    async registerUser (req, res) {
        // using request body to parsing on user create queries
        try {
            // const fullname = req.body.fullname
            // const address = req.body.address
            // const email = req.body.email
            // const phone = req.body.phone
            // const password = req.body.password
            // const role = req.body.role
            const payload = req.body

            //validate the email
            const findUser = await userQueries.findUserByEmail(payload)
            if(findUser) {return responseHendler.duplicate(res, message('email').duplicateData)}
            //create a new user
            const newUser = await userQueries.createUser(payload)
            if (!newUser) {return responseHendler.badRequest(res, message().serverError)}

            return responseHendler.ok(res, message('register').success)

        }

        catch (err) {
            return res.status(400).json({
                message: err.message
            })
            // return responseHendler.internalError(res, message().serverError)
        }
    }

    async loginUser (req, res) {
        try {
            //find user
            const email = req.body.email
            const findUser = await userQueries.findUserByEmail(email)
            if(!findUser) { return responseHendler.notFound(res,message('email').notFoundResource)}

            const token = await generateToken(findUser)
            if(!token) { return responseHendler.internalError(res,message().serverError)}

            const data = token
            return responseHendler.ok(res,message('login').success, data)

        }

        catch (err) {
            return res.status(400).json({
                message: err.message
            })
            // return responseHendler.internalError(res, message().serverError)
        }

    }
}

module.exports = {
    userController,
}
