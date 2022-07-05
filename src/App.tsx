import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Login from "./Pages/login";
import AppTable from "../src/Components/Table/AppTable";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Layout /> */}
        {/* <Login /> */}
        <AppTable />
      </Router>
    </div>
  );
}

export default App;
