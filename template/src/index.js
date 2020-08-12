import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { rootReducer, StateProvider, InitialState } from "helpers";
import { App } from "components";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={InitialState} reducer={rootReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
