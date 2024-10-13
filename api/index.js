const express = require('express');
const cors = require('cors');
const sequelize = require('./config/dbConfig');
const categoryRoutes = require('./routes/categoryRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/recipes', recipeRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
