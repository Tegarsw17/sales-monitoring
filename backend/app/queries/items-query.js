const { Item } = require('../../db/models')



//create new item

const createItem = async (payload) => {
    return Item.create({
        user_id: payload.user_id,
        name_item: payload.name_item,
        category_id: payload.category_id,  
        price: payload.price,
        quantity: payload.quantity
    })
}

module.exports = {
    createItem,
}