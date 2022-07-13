import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

// lab components imports

// doctor page
const Doctor = lazy(() => import("../Pages/Doctor"));

const PrivateRoutes = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Switch>
          <ProtectedRoutes exact path="/" component={Doctor} permission="" />
        </Switch>
      </Suspense>
    </>
  );
};

export default PrivateRoutes;
