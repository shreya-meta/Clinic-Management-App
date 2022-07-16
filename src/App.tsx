import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Login from "./Pages/login";
import AppTable from "../src/Components/Table/AppTable";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useAppSelector } from "./Utils/appHooks";
import { alertSelector } from "./Redux/Alert/selector";
import CustomAlert from "./Components/Alert/CustomAlert";
const App = () => {
  console.log(alertSelector, "hello alert");
  const { open, message } = useAppSelector(alertSelector);
  return (
    <>
      {/* open alert  */}
      {open && <CustomAlert openAlert={open} data={message} />}
      {/* <Router>
          <PrivateRoutes />
        </Router> */}
      <Login />
    </>
  );
};

export default App;
