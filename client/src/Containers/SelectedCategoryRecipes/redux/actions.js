import {
  ERROR,
  LOADING,
  GET_RECIPE_LIST_BY_CATEGORY,
  UPDATE_RECIPE_LIST_BY_CATEGORY,
  RESET_RECIPE_LIST_BY_CATEGORY,
} from "./constants";

export const loadingAction = (loadingStatus) => ({
  type: LOADING,
  payload: { loadingStatus },
});

export const errorAction = (error) => ({
  type: ERROR,
  payload: { error },
});

export const getRecipeListByCategoryAction = (payload) => ({
  type: GET_RECIPE_LIST_BY_CATEGORY,
  payload,
});
export const updateRecipeListByCategoryAction = (payload) => ({
  type: UPDATE_RECIPE_LIST_BY_CATEGORY,
  payload,
});
export const resetRecipeListByCategoryAction = () => ({
  type: RESET_RECIPE_LIST_BY_CATEGORY,
});
