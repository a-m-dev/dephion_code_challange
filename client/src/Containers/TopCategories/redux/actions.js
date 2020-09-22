import {
  ERROR,
  LOADING,
  GET_TOP_CATEGORIES,
  UPDATE_TOP_CATEGORIES,
  RESET_TOP_CATEGOEIS,
} from "./constants";

export const loadingAction = (loadingStatus) => ({
  type: LOADING,
  payload: { loadingStatus },
});

export const errorAction = (error) => ({
  type: ERROR,
  payload: { error },
});

export const getTopCategoriesAction = (payload) => ({
  type: GET_TOP_CATEGORIES,
  payload,
});
export const updateTopCategoriesAction = (payload) => ({
  type: UPDATE_TOP_CATEGORIES,
  payload,
});
export const resetTopCategoriesAction = () => ({
  type: RESET_TOP_CATEGOEIS,
});
