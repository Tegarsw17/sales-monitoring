const { imageTrackQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')
//to upload on local
const { uploadFile } = require('../services/upload-image')
//to upload on cloudinary
const { uploadCloudinary } = require('../services/upload-cloudinary')

//upload image
class imageTrackController {
    async uploadImage(req, res) {
        try {
            const id = req.params.id
            
            //deploy storage dicloudinary
            await uploadCloudinary(req, res)
    
            if(req.files === undefined) { return responseHendler.badRequest(res, message('images').incompleteKeyOrValue)}

            //use to bulk upload
            console.log(req.files)
            let images = req.files.map((item) => {
                const image = {}
                image.user_id = req.userId
                image.url = item.path
                
                return image
            })

   
            const createImage = await imageTrackQueries.createImage(images)
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
    imageTrackController,
}