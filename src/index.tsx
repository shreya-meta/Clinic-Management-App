import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "./Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          {/* way to delay rendering until your persisted state has been retrieved and saved to redux */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </Provider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
