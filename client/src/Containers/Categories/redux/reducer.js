import produce from "immer";
import initialState from "./initialState";
import {
  ERROR,
  LOADING,
  UPDATE_CATEGORIES,
  RESET_CATEGOEIS,
} from "./constants";

const CategoriesReducer = (state = initialState, action) =>
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

      case UPDATE_CATEGORIES: {
        draft.categories = action.payload.categories;
        break;
      }

      case RESET_CATEGOEIS: {
        draft.categories = [];
        draft.error = false;
        draft.loading = false;
        break;
      }

      default: {
        return draft;
      }
    }
  });

export default CategoriesReducer;
