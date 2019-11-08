import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "@rafael.audy/habit-geek-utils/store";
import "@rafael.audy/habit-geek-utils/i18next/i18n";

import AppContainer from "./components/AppContainer";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
