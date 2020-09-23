import React from "react";
import RecipeDetailsManager from "./RecipeDetailsManager";
import { CrudList } from "Components";

import {
  RecipeDetail,
  SectionLabel,
  RecipeDetailRow,
  Ingredients,
  PreparationSteps,
} from "./styles";

const RecipeDetails = () => {
  const {
    data: { recipe, casualRowData },
  } = RecipeDetailsManager();

  return (
    <RecipeDetail>
      <SectionLabel>Details</SectionLabel>

      {casualRowData.map(({ id, label, text }) => (
        <RecipeDetailRow key={id}>
          <h3>{label}:</h3>
          <p>{text}</p>
        </RecipeDetailRow>
      ))}

      <RecipeDetailRow isVertical>
        <h3>What you need:</h3>
        <Ingredients>
          <CrudList dataset={recipe?.ingredients} />
        </Ingredients>
      </RecipeDetailRow>

      <RecipeDetailRow isVertical>
        <h3>How To Prepare:</h3>
        <PreparationSteps>
          <CrudList dataset={recipe?.preparationSteps} />
        </PreparationSteps>
      </RecipeDetailRow>
    </RecipeDetail>
  );
};

export default RecipeDetails;
