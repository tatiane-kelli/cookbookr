const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
  try {
    console.log("Fetching categories...");
    const categories = await Category.findAll();
    console.log("Categories fetched:", categories); 
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};


module.exports = { getAllCategories };
