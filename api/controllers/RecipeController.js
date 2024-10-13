const Recipe = require('../models/Recipe');
const Category = require('../models/Category');

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({ include: 'Category' });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

const getRecipesByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const recipes = await Recipe.findAll({ where: { categoryId }, include: 'Category' });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes by category' });
  }
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findByPk(id, { include: 'Category' });
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
};

module.exports = { getAllRecipes, getRecipesByCategory, getRecipeById };
