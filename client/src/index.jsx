import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import App from "Containers/App";
import configureStore from "./redux/createStore";
import { history } from "utils/history";
import * as serviceWorker from "./serviceWorker";

import "./font-icon.css";

const initialState = {};
const { store, persistor } = configureStore(initialState);
const MOUNTED_NODE = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  MOUNTED_NODE
);

serviceWorker.unregister();
