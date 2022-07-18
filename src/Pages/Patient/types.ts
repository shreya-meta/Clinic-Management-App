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
export interface patientProps {
  id?: number;
  name: string;
  dobDate: string;
  age: string;
  sex: string;
  location: string;
  history?: any;
}
export interface createPatientProps {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}
