import { UPDATE_RECIPE } from "Containers/Recipe/redux/constants";
import {
  ERROR,
  LOADING,
  CREATE_RECIPE,

  // update Recipe
  UPDATE_RECIPE_ITEM,
  UPDATE_RECIPE_ERROR,
  UPDATE_RECIPE_LOADING,

  // recipe
  GET_RECIPE_LOADING,
  GET_RECIPE_ERROR,
  GET_RECIPE,
  RESET_RECIPE,

  // category
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES,
  UPDATE_CATEGORIES,
} from "./constants";

export const loadingAction = (loadingStatus) => ({
  type: LOADING,
  payload: { loadingStatus },
});

export const errorAction = (error) => ({
  type: ERROR,
  payload: { error },
});

export const createCategoryAction = (payload) => ({
  type: CREATE_RECIPE,
  payload,
});

// update Recipe
export const loadingUpdateRecipeAction = (loadingStatus) => ({
  type: UPDATE_RECIPE_LOADING,
  payload: { loadingStatus },
});

export const errorRecipeUpdateAction = (error) => ({
  type: UPDATE_RECIPE_ERROR,
  payload: { error },
});

export const updateRecipeItemAction = (payload) => ({
  type: UPDATE_RECIPE_ITEM,
  payload,
});

// GET Recipe
export const loadingGetRecipeAction = (loadingStatus) => ({
  type: GET_RECIPE_LOADING,
  payload: { loadingStatus },
});
export const errorGetRecipeAction = (error) => ({
  type: GET_RECIPE_ERROR,
  payload: { error },
});

export const getRecipeAction = (payload) => ({
  type: GET_RECIPE,
  payload,
});

export const updateRecipeAction = (payload) => ({
  type: UPDATE_RECIPE,
  payload,
});
export const resetRecipeAction = () => ({
  type: RESET_RECIPE,
});

// GET CATEGORY LIST
export const loadingGetCategoryAction = (loadingStatus) => ({
  type: GET_CATEGORIES_LOADING,
  payload: { loadingStatus },
});
export const errorGetCategoryAction = (error) => ({
  type: GET_CATEGORIES_ERROR,
  payload: { error },
});

export const getCategoriesAction = () => ({
  type: GET_CATEGORIES,
});

export const updateCategoriesAction = (payload) => ({
  type: UPDATE_CATEGORIES,
  payload,
});
