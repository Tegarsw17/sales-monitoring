const { itemQueries } = require('../queries')
const message = require('../../helpers/messages').MESSAGE
const responseHendler = require('../../helpers/error-helper')
const  itemDecorator  = require('../decorators/items-decorator')

class itemController {

    async createItem(req, res) {
        try {
            const payload = req.body
            const auth = req.userId
            const create = await itemQueries.createItem(payload, auth)
            //validate create
            if(!create) {return responseHendler.badRequest(res, message('item').invalidCreateResource)}

            //response return
            return responseHendler.ok(res, message('item').created)

        }

        catch(err) {
            const key = err.message
            return responseHendler.badRequest(res, message(key).errorMessage)
        }
    }

    async getItem(req, res) {
        try {
            const getAllItem = await itemQueries.getItem()
            if(getAllItem.length == 0) {return responseHendler.notFound(res, message('item').notFoundResource)}
    
            const data = await itemDecorator.itemDecoratorArray(getAllItem)
            return responseHendler.ok(res, message('get all item').success, data)
        }
        catch(err) {
            const key = err.message
            return responseHendler.badRequest(res, message(key).errorMessage)
        }
    }

    async getItemById(req, res) {
        try {
            const payload = req.params
            const getItem = await itemQueries.getItemById(payload)
            if(!getItem) {return responseHendler.badRequest(res, message('item').notFoundResource)}

            const data = itemDecorator.itemDecoratorObject(getItem)
            return responseHendler.ok(res, message('get all item').success, data)

        }
        catch(err) {
            const key = err.message
            return responseHendler.badRequest(res, message(key).errorMessage)
        }
    }

    async updateItem(req, res) {
        try {
            //find item 
            const payload1 = req.params
            const payload2 = req.body

            const findItem = await itemQueries.getItemById(payload1)
            if(!findItem) { return responseHendler.notFound(res, message('item').notFoundResource)}
            //update item
            const updateItem = await itemQueries.updateItem(payload2, findItem)
            if(!updateItem) { return responseHendler.badRequest(res, message().serverError)}
            
            return responseHendler.ok(res, message('item').updated)
        }
        catch(err) {
            const key = err.message
            return responseHendler.badRequest(res, message(key).errorMessage)
        }
    }

    async deleteItem(req, res) {
        try {
            //find item
            const payload = req.params

            const findItem = await itemQueries.getItemById(payload)
            if(!findItem) { return responseHendler.notFound(res, message('item').notFoundResource)}
            //update item
            const deleteItemById = await itemQueries.deleteItem(findItem)
            if(!deleteItemById) { return responseHendler.badRequest(res, message().serverError)}
            
            return responseHendler.ok(res, message('item').deleted)
        }
        catch(err) {
            const key = err.message
            return responseHendler.badRequest(res, message(key).errorMessage)
        }
    }

    async searchItem(req, res) {
        try {
            const payload = req.body
            const searchResult = await itemQueries.searchItem(payload)
            if(!searchResult) { return responseHendler.notFound(res, message('item').notFoundResource)}

            const data = await itemDecorator.itemDecoratorArray(searchResult)
            console.log(data)
            return responseHendler.ok(res, message('get all item').success, data)

        }   
        catch(err) {
            const key = err.message
            console.log(err)
            return responseHendler.badRequest(res, message(key).errorMessage)
        }
    }

}

module.exports = {
    itemController,
}
