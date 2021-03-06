import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import configureStore from "./store/configStore";
import { initialState } from "./store/initialState";
import * as serviceWorker from "./serviceWorker";
import App from "./root/App";

const appStore = configureStore(initialState);

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root store={appStore} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
