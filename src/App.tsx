import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./Pages/login";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useAppSelector } from "./Utils/appHooks";
import { alertSelector } from "./Redux/Alert/selector";
import CustomAlert from "./Components/Alert/CustomAlert";
import PublicRoutes from "./Routes/PublicRoutes";
import { loginSelector } from "./Redux/Login/selector";
const App = () => {
  const { open, message } = useAppSelector(alertSelector);
  const { isAuthenticated } = useAppSelector(loginSelector);
  return (
    <>
      {/* open alert  */}
      {open && <CustomAlert openAlert={open} data={message} />}
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
};

export default App;
