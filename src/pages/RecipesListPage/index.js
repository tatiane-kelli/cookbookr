import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import RecipesListComponent from '../../components/RecipesListComponent';

function RecipesListPage() {
  const { category } = useParams();

  return (
    <>
      <Header />
      <RecipesListComponent category={category} />
    </>
  );
}

export default RecipesListPage;
