const { imageItemQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')
const { uploadFile } = require('../services/upload-image')

//upload image

class imageItemController {
    async uploadImage(req, res) {
        try {
            const id = req.params.id
            
            await uploadFile(req, res)
    
            if(req.files === undefined) { return responseHendler.badRequest(res, message('images').incompleteKeyOrValue)}

            console.log(req.files)
            let images = req.files.map((item) => {
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