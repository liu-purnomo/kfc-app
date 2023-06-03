const express = require('express')
const router = express.Router()
const users = require('./users.js')
const items = require('./items.js')
const categories = require('./categories.js')

router.use('/users', users)
router.use('/items', items)
router.use('/categories', categories)

module.exports = router