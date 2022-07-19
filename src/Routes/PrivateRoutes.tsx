import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import ListingSkeleton from "../Components/Skeleton/ListingSkeleton";
import ProtectedRoutes from "./ProtectedRoutes";

// lab components imports

// doctor page
const Profile = lazy(() => import("../Pages/Profile"));
const Patient = lazy(() => import("../Pages/Patient"));
const Appointment = lazy(() => import("../Pages/Appointment"));
const Doctor = lazy(() => import("../Pages/Doctor"));
const PrivateRoutes = () => {
  return (
    <>
      <Suspense fallback={<ListingSkeleton />}>
        <Switch>
          <ProtectedRoutes exact path="/" component={Profile} />
          <ProtectedRoutes exact path="/doctor" component={Doctor} />
          <ProtectedRoutes
            exact
            path="/patient-registration"
            component={Patient}
          />
          <ProtectedRoutes exact path="/appointment" component={Appointment} />
        </Switch>
      </Suspense>
    </>
  );
};

export default PrivateRoutes;
