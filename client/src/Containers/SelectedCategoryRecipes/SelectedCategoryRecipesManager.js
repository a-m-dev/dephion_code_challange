import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import RecipeListByCategorySaga from "./redux/saga";
import RecipeListByCategoryReducer from "./redux/reducer";
import { getRecipeListByCategoryAction } from "./redux/actions";

const SelectedCategoryRecipesKeyOnRedux = "SelectedCategoryRecipes";

const SelectedCategoryRecipesManager = ({ selectedCategory }) => {
  useInjectReducer({
    key: SelectedCategoryRecipesKeyOnRedux,
    reducer: RecipeListByCategoryReducer,
  });
  useInjectSaga({
    key: SelectedCategoryRecipesKeyOnRedux,
    saga: RecipeListByCategorySaga,
  });

  const [getRecipeListByCategory] = useBindDispatch([
    getRecipeListByCategoryAction,
  ]);

  const { loading, error, recipesByCategory } = useSelector(
    (state) => state[SelectedCategoryRecipesKeyOnRedux] || initialState
  );

  useEffect(() => {
    if (selectedCategory) {
      // console.log({ selectedCategory });
      getRecipeListByCategory({ categoryId: selectedCategory });
    }
  }, [selectedCategory]);

  return {
    data: { loading, error, recipesByCategory },
  };
};

export default SelectedCategoryRecipesManager;
