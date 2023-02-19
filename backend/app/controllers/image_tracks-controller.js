const { imageTrackQueries, trackQueries } = require('../queries')
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

            //find track with status open and id user is req.userId
            const auth = req.userId
            const findTrack = await trackQueries.findOneTrack('open', auth)
            if(!findTrack) { return responseHendler.notFound(res, message('track').notFoundResource)}

            //use to bulk upload
            console.log(req.files)
            let images = req.files.map((item) => {
                const image = {}
                image.track_id = findTrack.id
                image.url = item.path
                
                return image
            })

            const createImage = await imageTrackQueries.createImage(images)
            if(!createImage) { return responseHendler.badRequest(res, message('images').incompleteKeyOrValue)}

            //update status track to 'close'
            const updateStatusTrack = await trackQueries.updateTrack('close', findTrack)
            if(!updateStatusTrack) { return responseHendler.badRequest(res, message().invalidCreateResource)}

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