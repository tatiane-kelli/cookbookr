const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Category = require('./Category');

const Recipe = sequelize.define('Recipe', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.UUID,
    references: {
      model: Category,
      key: 'categoryId',
    },
  },
});

Recipe.belongsTo(Category, { foreignKey: 'categoryId', as: 'Category' });
Category.hasMany(Recipe, { foreignKey: 'categoryId' });

module.exports = Recipe;
