import { Dispatch } from "react";

export interface doctorColumn {
  id: keyof doctorListingProps;
  label: string;
  minWidth?: number;
}
export interface doctorListingProps {
  name: string;
  visiting_hours: string;
  phone_no: string;
}
export interface specialityProps {
  id: number;
  name: string;
}
export interface doctorProps {
  id?: number;
  name: string;
  speciality: specialityProps[];
  // speciality: string;
  visiting_hours: string;
  email: string;
  password?: string;
  picture: string | null;
  type?: string;
  phone_no: string;
}
export interface createDoctorProps {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}
