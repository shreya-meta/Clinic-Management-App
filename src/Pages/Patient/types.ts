import { Dispatch } from "react";

export interface patientColumn {
  id: keyof patientListingProps;
  label: string;
  minWidth?: number;
}
export interface patientListingProps {
  name: string;
  age: string;
  sex: string;
  location: string;
  history?: any;
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
  addedPicture?: File;
}
export interface patientProps {
  id?: number;
  name: string;
  dobDate: string;
  age: string;
  sex: string;
  location: string;
  history?: any;
}
export interface createDoctorProps {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}
