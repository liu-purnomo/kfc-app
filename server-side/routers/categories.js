const express = require('express')
const { categoryController } = require('../controllers')
const isLoggedIn = require('../middlewares/authentication')
const router = express()



router.get('/', categoryController.index)
router.post('/', isLoggedIn, categoryController.create)
router.get('/:id', isLoggedIn, categoryController.detail)
router.put('/:id', isLoggedIn, categoryController.update)
router.delete('/:id', isLoggedIn, categoryController.delete)

module.exports = router