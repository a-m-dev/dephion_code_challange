import { useMemo, useCallback } from "react";
import { useRecipeContext } from "Containers/Recipe/context";
import { PublicRoutes } from "utils/routes";

const RecipeDetailsManager = ({ match, history }) => {
  const {
    data: { recipe, isUserOwnsRecipe },
    actions: { removeRecipe },
  } = useRecipeContext();

  const casualRowData = useMemo(() => {
    return [
      { id: 1, label: "Title", text: recipe.name },
      {
        id: 2,
        label: "Num of Serving",
        text: `${recipe.numberOfServing} people`,
      },
      { id: 3, label: "Cooking time", text: `${recipe.cookingTime} minutes` },
    ];
  }, [recipe]);

  const handleEditRecipe = useCallback(() => {
    const { recipeId } = match.params;
    history.push(PublicRoutes.editRecipe(recipeId));
  }, [match, history]);

  const handleRemoveRecipe = useCallback(() => {
    removeRecipe({ recipeId: recipe._id });
  }, [recipe]);

  return {
    data: { recipe, casualRowData, isUserOwnsRecipe },
    actions: { handleEditRecipe, handleRemoveRecipe },
  };
};

export default RecipeDetailsManager;
