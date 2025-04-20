const express = require('express')

const router = express.Router()
const{testuser, regUser, debug, loginuser} = require('../Controller/UserController')
const uAuth = require('../Middleware/userAuthentication')

router.get('/testuser',uAuth, testuser)
router.post('/reguser', regUser)
// router.post('/debug',debug)
router.post('/loguser', loginuser)

module.exports = router 