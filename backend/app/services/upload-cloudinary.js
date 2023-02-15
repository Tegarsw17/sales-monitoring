const { cloudinary } = require('../../db/config/cloudinary')
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer = require("multer")
const util = require('util')

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "images",
        format: async (req, file) => {
            "jpg", "png"
        }, // supports promises as well
        public_id: (req, file) => {
            console.log(
                new Date().toISOString().replace(/:/g, "-") + file.originalname
            )
            return (
                new Date().toISOString().replace(/:/g, "-") + file.originalname
            )
        }
    }
})

const imageFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb (null, true)
    }else {
        cb('please upload only images', false)
    }
}

const uploadImage =  multer({
    storage: storage,
    fileFilter: imageFilter,
}).array('file',5)

let uploadCloudinary = util.promisify(uploadImage)

module.exports = {
    uploadCloudinary
}
