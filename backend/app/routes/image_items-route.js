const {imageItemController} = require('../controllers/image_items-controller')
const router = require('express').Router()
const { tokenJwt } = require('../middlewares/authentication')
const otorisasi = require('../middlewares/authorization')

const imageitemcontroller = new imageItemController()
const tokenjwt = new tokenJwt()

router.post('/api/imageitem/:id',tokenjwt.verifyToken,otorisasi.authorization('admin'),imageitemcontroller.uploadImage)

module.exports = router