const express = require('express')
const { itemController } = require('../controllers')
const isLoggedIn = require('../middlewares/authentication')
const router = express()



router.get('/', itemController.index)
router.post('/', isLoggedIn, itemController.create)
router.get('/:id', itemController.detail)
router.put('/:id', isLoggedIn, itemController.update)
router.delete('/:id', isLoggedIn, itemController.delete)

module.exports = router