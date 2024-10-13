const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cookbookr', 'postgres', '010302', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
