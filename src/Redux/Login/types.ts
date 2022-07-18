import { doctorProps } from "../../Pages/Doctor/types";

export interface adminData {
  email: string;
  password: string;
}
export interface loginProps {
  role: string;
  loggedUser?: doctorProps;
}
