const { itemController } = require('../controllers/items-controller')
const router = require('express').Router()
const { tokenJwt } = require('../middlewares/authentication')
const otorisasi = require('../middlewares/authorization')

const itemcontroller = new itemController()
const tokenjwt = new tokenJwt()

//route create item
router.post('/api/item',tokenjwt.verifyToken,otorisasi.authorization('admin'), itemcontroller.createItem )
//route get all item
router.get('/api/item',itemcontroller.getItem)
//route get item by id
router.post('/api/item/:id',itemcontroller.getItemById)
//route update item
router.patch('/api/item/:id',tokenjwt.verifyToken,otorisasi.authorization('admin'), itemcontroller.updateItem)
//route delete item
router.delete('/api/item/:id',tokenjwt.verifyToken,otorisasi.authorization('admin'), itemcontroller.deleteItem)
//route search item
router.post('/api/itemsearch', itemcontroller.searchItem)

module.exports = router

 