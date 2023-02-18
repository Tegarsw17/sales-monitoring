const { Image_track } = require('../../db/models')

//create image
const createImage = async (payload) => {
    return Image_track.bulkCreate(payload)
}

const createOneImage = async (payload) => {
    return Image_track.create(payload)
}

module.exports = {
    createImage,
    createOneImage
}