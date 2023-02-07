
const { userQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')

class userController {

    async registerUser (req, res) {
        // using request body to parsing on user create queries
        try {
            const fullname = req.body.fullname
            const address = req.body.address
            const email = req.body.email
            const phone = req.body.phone
            const password = req.body.password
            const role = req.body.role

            //create a new user
            const newUser = await userQueries.createUser(fullname,address, phone, email, password, role)

            //validate 
            if (!newUser) {return responseHendler.badRequest(res, message().serverError)}

            return responseHendler.ok(res, message('register').success)

        }

        catch (err) {
            // res.status(400).json({
            //     message: err.message
            // })
            return responseHendler.internalError(res, message().serverError)
        }
    }
}

module.exports = {
    userController,
}
