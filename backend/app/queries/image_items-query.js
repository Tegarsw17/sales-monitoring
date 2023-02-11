const { Image_item } = require('../../db/models')

//create image
const createImage = async (payload) => {
    return Image_item.bulkCreate(payload)
}

module.exports = {
    createImage,
}