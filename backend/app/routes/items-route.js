const { itemController } = require('../controllers/items-controller')
const router = require('express').Router()

const itemcontroller = new itemController()

router.post('/api/item', itemcontroller.createItem )

module.exports = router

 