import React from "react";

import { RecipeCard } from "Components";
import SelectedCategoryRecipesManager from "./SelectedCategoryRecipesManager";

import {
  SelectedCategoryRecipesWrapper,
  Heading,
  Label,
  RecipesWrapper,
} from "./styles";

const SelectedCategoryRecipes = (props) => {
  const {
    data: { loading, recipesByCategory },
  } = SelectedCategoryRecipesManager(props);

  return (
    <SelectedCategoryRecipesWrapper>
      <Heading>
        <Label>Category Recipes ({`${recipesByCategory.length} found`})</Label>
      </Heading>
      {loading && <h1>Loading...</h1>}
      {!loading && recipesByCategory.length === 0 && (
        <span>This Category does not have recipe</span>
      )}
      {!loading && (
        <RecipesWrapper>
          {recipesByCategory.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </RecipesWrapper>
      )}
    </SelectedCategoryRecipesWrapper>
  );
};

export default SelectedCategoryRecipes;
