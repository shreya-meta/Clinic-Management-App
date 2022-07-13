import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Components/Layout";
import Login from "./Pages/login";
import AppTable from "../src/Components/Table/AppTable";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { store } from "./Store";
function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      {/* <Login /> */}
      {/* <AppTable /> */}
      {/* <Provider store={store}> */}
      <Router>
        <PrivateRoutes />
      </Router>
      {/* </Provider> */}
    </div>
  );
}

export default App;
