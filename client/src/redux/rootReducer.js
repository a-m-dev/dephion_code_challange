import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "utils/history";

const createRootReducer = (injectedReducers) => {
  return combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });
};

export default createRootReducer;
