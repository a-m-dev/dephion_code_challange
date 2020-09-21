import produce from "immer";
import initialState from "./initialState";
import { ERROR, LOADING, UPDATE_ITEM, RESET_ITEM } from "./constants";

const GlobalReducer = (state = initialState, action) =>
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

      case UPDATE_ITEM: {
        draft.data = action.payload.users;
        break;
      }

      case RESET_ITEM: {
        draft.data = {};
        draft.error = false;
        draft.loading = false;
        break;
      }

      default: {
        return draft;
      }
    }
  });

export default GlobalReducer;
