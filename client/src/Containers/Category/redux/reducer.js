import produce from "immer";
import initialState from "./initialState";
import { ERROR, LOADING, UPDATE_CATEGORY, RESET_CATEGORY } from "./constants";

const CategoryReducer = (state = initialState, action) =>
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

      case UPDATE_CATEGORY: {
        draft.category = action.payload.category;
        break;
      }

      case RESET_CATEGORY: {
        draft.category = {};
        draft.error = false;
        draft.loading = false;
        break;
      }

      default: {
        return draft;
      }
    }
  });

export default CategoryReducer;
