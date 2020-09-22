import produce from "immer";
import initialState from "./initialState";
import {
  ERROR,
  LOADING,
  UPDATE_TOP_CATEGORIES,
  RESET_TOP_CATEGOEIS,
} from "./constants";

const TopCategoriesReducer = (state = initialState, action) =>
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

      case UPDATE_TOP_CATEGORIES: {
        draft.categories = action.payload.categories;
        break;
      }

      case RESET_TOP_CATEGOEIS: {
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

export default TopCategoriesReducer;
