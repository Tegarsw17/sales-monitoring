const { itemController } = require('../controllers/items-controller')
const router = require('express').Router()
const { tokenJwt } = require('../middlewares/authentication')
const otorisasi = require('../middlewares/authorization')

const itemcontroller = new itemController()
const tokenjwt = new tokenJwt()

router.post('/api/item',tokenjwt.verifyToken,otorisasi.authorization('admin'), itemcontroller.createItem )
router.get('/api/item',itemcontroller.getItem)

module.exports = router

 