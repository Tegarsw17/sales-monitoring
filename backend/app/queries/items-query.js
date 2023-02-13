const { Item, Category, Image_item } = require('../../db/models')



//for admin role
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

//for all role
const getItem = async () => {
    return Item.findAll({
        include: [
            {
                model: Image_item,
            },
            {
                model: Category,
            }
        ],
    })
}

//for all role
const getItemById = async (payload) => {
    return Item.findOne({
        where: { 
            id: payload.id,
        },
        include: [
            {
                model: Image_item,
            },
            {
                model: Category,
            }
        ],
    })
}

//for admin role
const updateItem = async (payload1, payload2) => {
    return Item.update(payload1,{
        where: { 
            id: payload2.id,
        },
        include: Category,

    })
}

const deleteItem = async (payload) => {
    return Item.destroy({
        where: {
            id: payload.id,
        }
    })
}

module.exports = {
    createItem,
    getItem,
    getItemById,
    updateItem,
    deleteItem
}