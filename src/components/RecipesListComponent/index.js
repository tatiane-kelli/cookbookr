import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../api';
import { 
  Title,
  RecipesList,
  RecipeRow,
  RecipeRowImage,
  RecipeInfo,
  RecipeName,
  SeeRecipeButton,
  Separator
 } from './styles';

function RecipesListComponent({ category }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes(category);
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    getRecipes();
  }, [category]);

  return (
    <>
      <Title>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Receitas'}</Title>
      <RecipesList>
        {recipes.map(recipe => (
          <RecipeRow key={recipe.id}>
            <RecipeRowImage src={recipe.imageUrl} alt={recipe.name} />
            <RecipeInfo>
              <RecipeName>{recipe.name}</RecipeName>
            </RecipeInfo>
            <SeeRecipeButton href="/">Preparar</SeeRecipeButton>
          </RecipeRow>
        ))}
        <Separator />
      </RecipesList>
    </>
  );
}

export default RecipesListComponent;
