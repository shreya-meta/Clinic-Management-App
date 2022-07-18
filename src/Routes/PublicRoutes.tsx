import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Login = lazy(() => import("../Pages/login"));
const PublicRoutes = () => {
  return (
    <>
      <Suspense fallback="">
        <Switch>
          <Route path="/">{<Login />}</Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default PublicRoutes;
