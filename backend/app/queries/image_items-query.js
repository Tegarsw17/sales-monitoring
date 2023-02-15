const { Image_item } = require('../../db/models')

//create image
const createImage = async (payload) => {
    return Image_item.bulkCreate(payload)
}

const createOneImage = async (payload) => {
    return Image_item.create(payload)
}

module.exports = {
    createImage,
    createOneImage
}