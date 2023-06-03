const { Ingredient } = require('../models')
const createIngredient = async (newItem, ingredient) => {
    await Ingredient.create({
        itemId: newItem.id,
        name: ingredient.ingredient
    })
}

module.exports = createIngredient