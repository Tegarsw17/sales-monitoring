const { Item } = require('../../db/models')



//create new item

const createItem = async (payload, auth) => {
    return Item.create({
        user_id: auth,
        name_item: payload.name_item,
        category_id: payload.category_id,  
        item_description: payload.description,
        price: payload.price,
        quantity: payload.quantity
    })
}

const getItem = async () => {
    return Item.findAll()
}

module.exports = {
    createItem,
    getItem,
}