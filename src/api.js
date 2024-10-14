const API_URL = 'http://localhost:3001/api';

export const fetchRecipes = async (category) => {
  const response = await fetch(`${API_URL}/recipes/category/${category}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
