const { comparePassword } = require('../helpers/bcrypt')
const { encryption } = require('../helpers/jwt')
const { User } = require('../models')

class userController {

    static async index(req, res, next) {
        try {
            const user = await User.findAll({
                attributes: {
                    exclude: ['password']
                }
            })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } = req.body
            const user = await User.create({
                username,
                email,
                password,
                phoneNumber,
                address,
                role: 'admin'
            })
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) throw { name: 'EmailRequired' }
            if (!password) throw { name: 'PasswordRequired' }
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user) throw { name: 'Unauthorized' }
            const isValidPassword = comparePassword(password, user.password)
            if (!isValidPassword) throw { name: 'Unauthorized' }
            const access_token = encryption({
                id: user.id,
                email: user.email
            })
            res.status(200).json({
                access_token
            })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = userController