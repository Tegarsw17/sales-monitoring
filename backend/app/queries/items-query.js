const { Item, Category } = require('../../db/models')



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
        include: Category,
    })
}

//for all role
const getItemById = async (payload) => {
    return Item.findOne({
        where: { 
            id: payload.id,
        },
        include: Category,
    })
}

//for verification other controllers
const getItemV = async (payload, auth) => {
    return Item.findOne({
        where: { 
            id: payload.id,
            user_id: auth
        },
        include: Category,
    })
}

//for admin role
const updateItem = async (payload, auth) => {
    return Item.update(payload,{
        where: { 
            id: payload.id,
        },
        include: Category,

    })
}

const deleteItem = async (payload, auth) => {
    return Item.delete({
        where: {
            id: payload.id,
        }
    })
}

module.exports = {
    createItem,
    getItem,
    getItemById,
    getItemV,
    updateItem,
    deleteItem
}