const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipesByCategory, getRecipeById } = require('../controllers/RecipeController');

router.get('/', getAllRecipes);
router.get('/category/:categoryId', getRecipesByCategory);
router.get('/:id', getRecipeById);

module.exports = router;
