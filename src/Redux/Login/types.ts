import { doctorProps } from "../../Pages/Doctor/types";
// types for
export interface loginProps {
  role: string;
  loggedUser?: doctorProps;
}
export interface DoctorInitialTypes {
  loadingLogin: boolean;
  loggedUser: doctorProps | null;
  isAuthenticated: boolean;
  userRole: string;
}
