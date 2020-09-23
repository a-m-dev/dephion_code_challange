import produce from "immer";
import initialState from "./initialState";
import {
  ERROR,
  LOADING,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_LOADING,
  UPDATE_CATEGORIES,
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

      default: {
        return draft;
      }
    }
  });

export default RecipeManagmentReducer;
