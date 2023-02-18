const { trackController } = require('../controllers/tracks-controller')
const router = require('express').Router()
const { tokenJwt } = require('../middlewares/authentication')
const otorisasi = require('../middlewares/authorization')

const trackcontroller = new trackController()
const tokenjwt = new tokenJwt()

//route cretrack
router.post('/api/track',tokenjwt.verifyToken,otorisasi.authorization('sales'), trackcontroller.createTrack )

module.exports = router