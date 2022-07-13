import React, { FC } from "react";
import { Route } from "react-router";
import { ProtectedRouteProps } from "./types";
const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
  permission,
  path,
  ...rest
}) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    </>
  );
};

export default React.memo(ProtectedRoute);
