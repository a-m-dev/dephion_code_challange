import produce from "immer";
import initialState from "./initialState";
import {
  ERROR,
  LOADING,
  UPDATE_USER_DATA,
  RESET_USER_DATA,
  UPDATE_USER_DATA_NOT_AUTH_INCLUDED,
} from "./constants";

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

      case UPDATE_USER_DATA: {
        const { expiresAt, token, type } = action.payload;
        draft.userData = action.payload.userData;
        draft.authData = { expiresAt, token, type };
        break;
      }

      case UPDATE_USER_DATA_NOT_AUTH_INCLUDED: {
        draft.userData = action.payload;
        draft.loading = false;
        break;
      }

      case RESET_USER_DATA: {
        draft.userData = {};
        draft.authData = {};
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
