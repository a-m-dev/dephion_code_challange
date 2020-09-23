import { useMemo } from "react";
import { useRecipeContext } from "Containers/Recipe/context";

const RecipeDetailsManager = () => {
  const {
    data: { recipe },
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

  return { data: { recipe, casualRowData } };
};

export default RecipeDetailsManager;
