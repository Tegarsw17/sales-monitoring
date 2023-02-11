const {imageItemController} = require('../controllers/image_items-controller')
const router = require('express').Router()

const imageitemcontroller = new imageItemController()

router.post('/api/imageitem',imageitemcontroller.uploadImage)

module.exports = router