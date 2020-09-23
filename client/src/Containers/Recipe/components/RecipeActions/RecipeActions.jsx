import React from "react";
import { useRecipeContext } from "Containers/Recipe/context";
import { RecipeActionsWrapper, ActionWrapper } from "./styles";

const RecipeActions = () => {
  const {
    data: { recipeActions },
  } = useRecipeContext();

  return (
    <RecipeActionsWrapper>
      {recipeActions.map(({ id, icon, type, label, handler }) => {
        if (type === "misc") return <div key={id}></div>;
        else
          return (
            <ActionWrapper key={id} onClick={handler}>
              <i className={icon} />
              <span>{label}</span>
            </ActionWrapper>
          );
      })}
    </RecipeActionsWrapper>
  );
};

export default RecipeActions;
