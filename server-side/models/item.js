'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'authorId' })
      this.belongsTo(models.Category, { foreignKey: 'categoryId' })
      this.hasMany(models.Ingredient, { foreignKey: 'itemId' })
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is require'
        },
        notEmpty: {
          msg: 'Name is require'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is require'
        },
        notEmpty: {
          msg: 'Description is require'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price is require'
        },
        notEmpty: {
          msg: 'Price is require'
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image url is require'
        },
        notEmpty: {
          msg: 'Image url is require'
        }
      }
    },
    authorId: DataTypes.INTEGER,
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Category id is require'
        },
        notEmpty: {
          msg: 'Category id is require'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};