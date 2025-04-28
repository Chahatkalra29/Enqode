const express = require('express')

const router = express.Router()
const{testuser, regUser, debug, loginuser, addLinkQr, logoutuser,getQrLinks, forgetpass, resetpass, deleteqr} = require('../Controller/UserController')
const uAuth = require('../Middleware/userAuthentication')

router.get('/testuser',uAuth, testuser)
//http://localhost:5000/userapi/getqrlinks
router.get('/getqrlinks',uAuth,getQrLinks)

router.get('/logoutuser',uAuth, logoutuser)

router.get('/deleteqr:qrid',uAuth,deleteqr)
//http://localhost:5000/userapi/addlinkqr
router.post('/addlinkqr',uAuth, addLinkQr)

router.post('/forgetpass',forgetpass)

router.post('/reset-pass/:token', resetpass)

router.post('/reguser', regUser)
// router.post('/debug',debug)
router.post('/loguser', loginuser)

module.exports = router 