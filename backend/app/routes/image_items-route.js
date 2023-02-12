const {imageItemController} = require('../controllers/image_items-controller')
const router = require('express').Router()

const imageitemcontroller = new imageItemController()

router.post('/api/imageitem/:id',imageitemcontroller.uploadImage)

module.exports = router