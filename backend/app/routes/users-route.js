const { userController } = require('../controllers/users-controller')
const router = require('express').Router()

const usercontroller = new userController()

router.post('/api/register', usercontroller.registerUser )
router.post('/api/login', usercontroller.loginUser )

module.exports = router

 