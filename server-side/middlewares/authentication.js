const { decryption } = require("../helpers/jwt")
const { User } = require('../models')

const isLoggedIn = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        if (!access_token) throw { name: 'InvalidToken' }
        const payload = decryption(access_token)
        const user = await User.findByPk(+payload.id)
        if (!user) throw { name: 'InvalidToken' }
        req.user = payload
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = isLoggedIn