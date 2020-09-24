import React from "react";
import RecipeDetailsManager from "./RecipeDetailsManager";
import { withRouter } from "react-router-dom";
import { CrudListView } from "Components";
import { Button } from "Components";

import {
  RecipeDetail,
  SectionLabel,
  RecipeDetailRow,
  Ingredients,
  PreparationSteps,
  RecipeUserActions,
} from "./styles";

const RecipeDetails = (props) => {
  const {
    data: { recipe, casualRowData, isUserOwnsRecipe },
    actions: { handleEditRecipe, handleRemoveRecipe },
  } = RecipeDetailsManager(props);

  return (
    <RecipeDetail>
      <SectionLabel>Details</SectionLabel>
      {isUserOwnsRecipe && (
        <RecipeUserActions>
          <Button label="Edit" onClick={handleEditRecipe} />
          <Button label="Remove" onClick={handleRemoveRecipe} />
        </RecipeUserActions>
      )}

      {casualRowData.map(({ id, label, text }) => (
        <RecipeDetailRow key={id}>
          <h3>{label}:</h3>
          <p>{text}</p>
        </RecipeDetailRow>
      ))}

      <RecipeDetailRow isVertical>
        <h3>What you need:</h3>
        <Ingredients>
          <CrudListView dataset={recipe?.ingredients} />
        </Ingredients>
      </RecipeDetailRow>

      <RecipeDetailRow isVertical>
        <h3>How To Prepare:</h3>
        <PreparationSteps>
          <CrudListView dataset={recipe?.preparationSteps} />
        </PreparationSteps>
      </RecipeDetailRow>
    </RecipeDetail>
  );
};

export default withRouter(RecipeDetails);
