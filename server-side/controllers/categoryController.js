const { Category } = require('../models')
class categoryController {
    static async index(req, res, next) {
        try {
            const { count, rows } = await Category.findAndCountAll()
            res.status(200).json({
                allItems: count,
                categories: rows
            })
        } catch (err) {
            next(err)
        }
    }

    static async detail(req, res, next) {
        try {
            const { id } = req.params
            const category = await Category.findByPk(id)
            res.status(200).json(category)
        } catch (err) {
            next(err)
        }
    }

    static async create(req, res, next) {
        try {
            const { name } = req.body.formValue
            const newCategory = await Category.create({
                name
            })
            res.status(201).json(newCategory)
        } catch (err) {
            next(err)
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params
            const { name } = req.body
            const editedCategory = await Category.update({
                name
            }, {
                where: {
                    id
                }
            })
            if (editedCategory <= 0) throw { name: 'NotFound' }
            res.status(200).json({
                message: 'Category has been updated'
            })
        } catch (err) {
            next(err)
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params
            const deletedCategory = await Category.destroy({
                where: {
                    id
                }
            })
            if (deletedCategory <= 0) throw { name: 'NotFound' }
            res.status(200).json({
                message: 'Category has been deleted'
            })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = categoryController