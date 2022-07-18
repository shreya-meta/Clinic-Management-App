import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

// lab components imports

// doctor page
const Profile = lazy(() => import("../Pages/Profile"));
const Doctor = lazy(() => import("../Pages/Doctor"));
const PrivateRoutes = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Switch>
          <ProtectedRoutes exact path="/" component={Profile} />
          <ProtectedRoutes exact path="/doctor" component={Doctor} />
        </Switch>
      </Suspense>
    </>
  );
};

export default PrivateRoutes;
