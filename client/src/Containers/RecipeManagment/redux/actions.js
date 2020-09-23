import {
  ERROR,
  LOADING,
  CREATE_RECIPE,
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
