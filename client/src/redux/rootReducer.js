import { combineReducers } from "redux";

const createRootReducer = (injectedReducers) => {
  return combineReducers({
    ...injectedReducers,
  });
};

export default createRootReducer;
