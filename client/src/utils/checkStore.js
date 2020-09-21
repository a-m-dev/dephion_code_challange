import { conformsTo, isFunction, isObject } from "lodash";
import invariant from "invariant";

export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
    persistor: isObject,
  };
  invariant(
    conformsTo(store, shape),
    "(app/utils...) injectors: Expected a valid redux store"
  );
}
