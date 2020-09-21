import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./rootReducer";
import persistorConfig from "./persistorConfig";
import { history } from "utils/history";

const persistedReducer = persistReducer(persistorConfig, createRootReducer());

const configureStore = (initialState = {}) => {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
  }

  const sagaMiddleware = createSagaMiddleware({});

  const middrewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middrewares)];

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  let persistor = persistStore(store);

  // extendables
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};
  store.persistor = persistor;

  return { store, persistor };
};

export default configureStore;
