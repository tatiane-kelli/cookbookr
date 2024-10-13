const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Category = sequelize.define('Category', {
  categoryId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
