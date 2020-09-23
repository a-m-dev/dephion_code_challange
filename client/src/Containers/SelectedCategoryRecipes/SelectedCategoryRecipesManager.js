import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import RecipeListByCategorySaga from "./redux/saga";
import RecipeListByCategoryReducer from "./redux/reducer";
import {
  getRecipeListByCategoryAction,
  resetRecipeListByCategoryAction,
} from "./redux/actions";

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

  const [getRecipeListByCategory, resetRecipeListByCategory] = useBindDispatch([
    getRecipeListByCategoryAction,
    resetRecipeListByCategoryAction,
  ]);

  const { loading, error, recipesByCategory } = useSelector(
    (state) => state[SelectedCategoryRecipesKeyOnRedux] || initialState
  );

  useEffect(() => {
    if (selectedCategory) {
      getRecipeListByCategory({ categoryId: selectedCategory });
    }

    return () => {
      resetRecipeListByCategory();
    };
  }, [selectedCategory]);

  return {
    data: {
      loading,
      error,
      recipesByCategory: [...recipesByCategory].reverse(),
    },
  };
};

export default SelectedCategoryRecipesManager;
