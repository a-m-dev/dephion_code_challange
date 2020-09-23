import React from "react";
import { RecipeContext } from "./context";
import RecipeManager from "./RecipeManager";
import { RecipeHero } from "Components";
import { RecipeActions, RecipeDetails } from "./components";

import { RecipeWrapper } from "./styles";

const Recipe = (props) => {
  const {
    data,
    actions,
    data: { loading, recipe },
  } = RecipeManager(props);

  return (
    <RecipeContext.Provider value={{ data, actions }}>
      <RecipeWrapper>
        <RecipeHero {...recipe} />
        <RecipeActions />
        <RecipeDetails />
      </RecipeWrapper>
    </RecipeContext.Provider>
  );
};

export default Recipe;
