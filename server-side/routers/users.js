const express = require('express')
const { userController } = require('../controllers')
const router = express()

router.get('/', userController.index)
router.post('/login', userController.login)
router.post('/register', userController.register)

module.exports = router