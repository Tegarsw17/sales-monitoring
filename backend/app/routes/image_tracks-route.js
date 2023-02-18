const {imageTrackController} = require('../controllers/image_tracks-controller')
const router = require('express').Router()
const { tokenJwt } = require('../middlewares/authentication')
const otorisasi = require('../middlewares/authorization')

const imagetrackcontroller = new imageTrackController()
const tokenjwt = new tokenJwt()

router.post('/api/imagetrack',tokenjwt.verifyToken,otorisasi.authorization('sales'),imagetrackcontroller.uploadImage)

module.exports = router