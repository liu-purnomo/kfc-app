const createIngredient = require('../helpers/createIngredient')
const { Item, Category, Ingredient, User, sequelize } = require('../models')


class itemController {
    static async index(req, res, next) {
        try {
            const { count, rows } = await Item.findAndCountAll({
                include: [User, Category, Ingredient,],
                attributes: {
                    exclude: ['updatedAt', 'createdAt']
                }
            })
            res.status(200).json({
                totalItem: count,
                items: rows
            })
        } catch (err) {
            next(err)
        }
    }

    static async create(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const { id } = req.user
            const { item, ingredients } = req.body
            const newItem = await Item.create({
                name: item.name,
                description: item.description,
                price: item.price,
                imgUrl: item.imgUrl,
                authorId: +id,
                categoryId: item.categoryId
            }, { transaction: t }
            )

            let dataIngredient = []

            for (let i = 0; i < ingredients.length; i++) {
                dataIngredient.push({
                    itemId: newItem.id,
                    name: ingredients[i].ingredient
                })
            }

            await Ingredient.bulkCreate(dataIngredient, { transaction: t })

            await t.commit();
            res.status(201).json(newItem)
        } catch (err) {
            await t.rollback()
            next(err)
        }
    }


    static async update(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const { id } = req.params
            const { item, ingredients } = req.body
            const { name, description, price, imgUrl, categoryId } = item
            await Item.update({
                name,
                description,
                price,
                imgUrl,
                categoryId
            }, {
                where: { id },
                transaction: t
            })

            await Ingredient.destroy({
                where: {
                    itemId: id
                },
                transaction: t
            })

            let dataIngredient = []

            for (let i = 0; i < ingredients.length; i++) {
                dataIngredient.push({
                    itemId: id,
                    name: ingredients[i].ingredient
                })
            }

            await Ingredient.bulkCreate(dataIngredient, { transaction: t })

            await t.commit();
            res.status(200).json({
                message: 'Data edited'
            })

        } catch (err) {
            next(err)
        }
    }



    static async detail(req, res, next) {
        try {
            const { id } = req.params
            const item = await Item.findOne({
                where: { id },
                include: [User, Category, Ingredient]
            })

            if (!item) throw { name: 'NotFound' }
            res.status(200).json({
                item
            })
        } catch (err) {
            next(err)
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params
            const effectedRow = await Item.destroy({
                where: {
                    id: +id
                }
            })
            if (effectedRow <= 0) throw { name: 'NotFound' }
            res.status(200).json({
                message: 'Item has been deleted'
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = itemController