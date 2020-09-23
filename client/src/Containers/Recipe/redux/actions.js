import {
  ERROR,
  LOADING,
  GET_RECIPE,
  UPDATE_RECIPE,
  RESET_RECIPE,
  FAVORITE_RECIPE,
  SHARE_RECIPE,
  REMOVE_RECIPE,
} from "./constants";

export const loadingAction = (loadingStatus) => ({
  type: LOADING,
  payload: { loadingStatus },
});

export const errorAction = (error) => ({
  type: ERROR,
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

export const favoriteRecipeAction = (payload) => ({
  type: FAVORITE_RECIPE,
  payload,
});

export const shareRecipeAction = (payload) => ({
  type: SHARE_RECIPE,
  payload,
});

export const removeRecipeAction = (payload) => ({
  type: REMOVE_RECIPE,
  payload,
});
