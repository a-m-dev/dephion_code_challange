import {
  ERROR,
  LOADING,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  RESET_CATEGORY,
  FOLLOW_CATEGORY,
} from "./constants";

export const loadingAction = (loadingStatus) => ({
  type: LOADING,
  payload: { loadingStatus },
});

export const errorAction = (error) => ({
  type: ERROR,
  payload: { error },
});

export const getCategoryAction = (payload) => ({
  type: GET_CATEGORY,
  payload,
});
export const updateCategoryAction = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});
export const resetCategoryAction = () => ({
  type: RESET_CATEGORY,
});

export const followCategoryAction = (payload) => ({
  type: FOLLOW_CATEGORY,
  payload,
});
