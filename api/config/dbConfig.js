const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cookbookr', 'postgres', '010302', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});
sequelize.sync({ alter: true });

module.exports = sequelize;
