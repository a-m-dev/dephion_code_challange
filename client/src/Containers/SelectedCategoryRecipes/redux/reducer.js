import produce from "immer";
import initialState from "./initialState";
import {
  ERROR,
  LOADING,
  UPDATE_RECIPE_LIST_BY_CATEGORY,
  RESET_RECIPE_LIST_BY_CATEGORY,
} from "./constants";

const RecipeListByCategoryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ERROR: {
        draft.error = action.payload.error;
        return draft;
      }

      case LOADING: {
        draft.loading = action.payload.loadingStatus;
        return draft;
      }

      case UPDATE_RECIPE_LIST_BY_CATEGORY: {
        draft.recipesByCategory = action.payload.recipes;
        return draft;
      }

      case RESET_RECIPE_LIST_BY_CATEGORY: {
        draft.recipesByCategory = [];
        draft.error = false;
        draft.loading = false;
        return draft;
      }

      default: {
        return draft;
      }
    }
  });

export default RecipeListByCategoryReducer;
