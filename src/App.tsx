import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Login from "./Pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        {/* <Login /> */}
      </Router>
    </div>
  );
}

export default App;
