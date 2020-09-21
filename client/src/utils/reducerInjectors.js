import invariant from "invariant";
import { isEmpty, isFunction, isString } from "lodash";
import { persistReducer } from "redux-persist";
import persistorConfig from "redux/persistorConfig";
import checkStore from "./checkStore";
import createReducer from "../redux/rootReducer";

export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) checkStore(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      "(app/utils...) injectReducer: Expected `reducer` to be a reducer function"
    );

    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;

    store.injectedReducers[key] = reducer;
    const persistedReducer = persistReducer(
      persistorConfig,
      createReducer(store.injectedReducers)
    );
    store.replaceReducer(persistedReducer);
    store.persistor.persist();
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
