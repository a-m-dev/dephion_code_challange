import produce from "immer";
import initialState from "./initialState";
import { ERROR, LOADING, UPDATE_RECIPE, RESET_RECIPE } from "./constants";

const RecipeReducer = (state = initialState, action) =>
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

      case UPDATE_RECIPE: {
        draft.recipe = action.payload;
        break;
      }

      case RESET_RECIPE: {
        draft.recipe = {};
        draft.error = false;
        draft.loading = false;
        break;
      }

      default: {
        return draft;
      }
    }
  });

export default RecipeReducer;
