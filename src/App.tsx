import PrivateRoutes from "./Routes/PrivateRoutes";
import { useAppSelector } from "./Utils/appHooks";
import { alertSelector } from "./Redux/Alert/selector";
import CustomAlert from "./Components/Alert/CustomAlert";
import PublicRoutes from "./Routes/PublicRoutes";
import { loginSelector } from "./Redux/Login/selector";
import "./App.css";

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
