const express = require('express')

const router = express.Router()
const{testuser, regUser, debug, loginuser, addLinkQr} = require('../Controller/UserController')
const uAuth = require('../Middleware/userAuthentication')

router.get('/testuser',uAuth, testuser)

//http://localhost:5000/userapi/addlinkqr
router.post('/addlinkqr',uAuth, addLinkQr)

router.post('/reguser', regUser)
// router.post('/debug',debug)
router.post('/loguser', loginuser)

module.exports = router 