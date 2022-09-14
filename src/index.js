import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/scss/main.scss";
import "antd/dist/antd.css";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import store from "./features/store";

const persist_store = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist_store}>
      <App />
    </PersistGate>
  </Provider>
);
