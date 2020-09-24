import produce from "immer";
import initialState from "./initialState";
import {
  ERROR,
  LOADING,
  // recipe
  UPDATE_RECIPE,
  RESET_RECIPE,
  GET_RECIPE_ERROR,
  GET_RECIPE_LOADING,

  // category
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_LOADING,
  UPDATE_CATEGORIES,
  RESET_CATEGORIES,
} from "./constants";

const RecipeManagmentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ERROR: {
        draft.error = action.payload.error;
        break;
      }

      case LOADING: {
        draft.loading = action.payload.loadingStatus;
        break;
      }

      // CATEGORY
      case GET_CATEGORIES_ERROR: {
        draft.categoryError = action.payload.error;
        return draft;
      }

      case GET_CATEGORIES_LOADING: {
        draft.categoryLoading = action.payload.loadingStatus;
        return draft;
      }

      case UPDATE_CATEGORIES: {
        draft.categories = action.payload.categories;
        break;
      }

      case RESET_CATEGORIES: {
        draft.categoryLoading = false;
        draft.categoryError = false;
        draft.categories = [];
        break;
      }

      // RECIPE
      case GET_RECIPE_LOADING: {
        draft.recipeLoading = action.payload.loadingStatus;
        break;
      }

      case GET_RECIPE_ERROR: {
        draft.recipeError = action.payload.error;
        break;
      }

      case UPDATE_RECIPE: {
        draft.recipe = action.payload;
        break;
      }

      case RESET_RECIPE: {
        draft.recipeError = false;
        draft.recipeLoading = false;
        draft.recipe = {};
        break;
      }

      default: {
        return draft;
      }
    }
  });

export default RecipeManagmentReducer;
