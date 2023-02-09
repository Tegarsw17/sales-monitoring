const { itemQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')

class itemController {

    async createItem(req, res) {

        try {
            const payload = req.body
            const create = await itemQueries.createItem(payload)
            //validate create
            if(!create) {return responseHendler.badRequest(res, message().errorMessage)}

            //response return
            return responseHendler.ok(res, message('item').created)

        }

        catch(err) {
            const key = err.message
            return responseHendler.badRequest(res, message(key).errorMessage)
        }
    }
}

module.exports = {
    itemController,
}
