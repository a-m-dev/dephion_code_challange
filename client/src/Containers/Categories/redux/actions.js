import {
  ERROR,
  LOADING,
  GET_CATEGORIES,
  UPDATE_CATEGORIES,
  RESET_CATEGOEIS,
} from "./constants";

export const loadingAction = (loadingStatus) => ({
  type: LOADING,
  payload: { loadingStatus },
});

export const errorAction = (error) => ({
  type: ERROR,
  payload: { error },
});

export const getCategoriesAction = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});
export const updateCategoriesAction = (payload) => ({
  type: UPDATE_CATEGORIES,
  payload,
});
export const resetCategoriesAction = () => ({
  type: RESET_CATEGOEIS,
});
