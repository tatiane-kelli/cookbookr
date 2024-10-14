const Recipe = require('../models/Recipe');

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

const getRecipesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const recipes = await Recipe.findAll({ where: { categoryId } });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes for the category' });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByPk(id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
};

module.exports = { getAllRecipes, getRecipesByCategory, getRecipeById };
