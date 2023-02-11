const multer = require('multer')
const util = require('util')
// const path = require('path')
// const __basedir = path.resolve()
const supabase = require('../../db/config/supabase')

const imageFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb (null, true)
    }else {
        cb('please upload only images', false)
    }
}

const path = supabase.storage.from('upload')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`) //
    },
})

const uploadImage =  multer({
    storage: storage,
    fileFilter: imageFilter,
}).array('file',5) //untuk menentukan banyak image yg bisa diupload

let uploadFile = util.promisify(uploadImage)

module.exports = {
    uploadFile,
    __basedir,
}