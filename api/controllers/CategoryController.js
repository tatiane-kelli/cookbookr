const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

module.exports = { getAllCategories };
