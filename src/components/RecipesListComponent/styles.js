import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  margin: 24px;
`;

export const RecipesList = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
`;

export const RecipeRow = styled.div`
  display: flex;
  align-items: center;
`;

export const RecipeRowImage = styled.img`
  width: 80px;
  height: 90px;
`;

export const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeName = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

export const SeeRecipeButton = styled.a`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  color: #A47963;
  padding: 2px 10px 2px 10px;
  border: 2px solid #A47963;
  border-radius: 20px;

  &:hover{
    background-color: #A47963;
    color: #FAFAFA;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  color: #A47963;
`;
