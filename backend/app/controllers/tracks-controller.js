const { trackQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')

class trackController {

    async createTrack (req, res) {
        try {
            const payload = req.body
            if (!payload) {return responseHendler.notFound(res, message('req.body').notFoundResource)}

            const auth = req.userId
            const create = trackQueries.createTrack(payload, auth)
            if (!create) {return responseHendler.badRequest(res, message().serverError)}

            return responseHendler.ok(res, message('track sales').created)
        }
        catch (err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }
    
 }

 module.exports = {
    trackController
 }