import { FC, memo } from "react";
import { Route } from "react-router-dom";
import { ProtectedRouteProps } from "./types";
const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
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

export default memo(ProtectedRoute);
