const { imageItemQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')
const { uploadFile } = require('../services/upload-image')

//upload image

class imageItemController {
    async uploadImage(req, res) {
        try {
            const id = req.params.id
            const files = req.files

            if(!files) { return responseHendler.badRequest(res, message('images').incompleteKeyOrValue)}

            const upload = await uploadFile(req, res)

            let images = files.map((item) => {
                const image = {}
                image.item_id = id
                image.url = item.filename
                
                return image
            })

            const createImage = await imageItemQueries.createImage(images)
            if(!createImage) { return responseHendler.badRequest(res, message('images').incompleteKeyOrValue)}

            return responseHendler.ok(res, message('images').created)

        }
        catch(err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }
}

module.exports = {
    imageItemController,
}