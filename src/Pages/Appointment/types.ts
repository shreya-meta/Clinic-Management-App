import { Dispatch } from "react";
import { doctorProps } from "../Doctor/types";
import { patientProps } from "../Patient/types";

export interface appointmentColumn {
  id: keyof appointmentListingProps;
  label: string;
  minWidth?: number;
}
export interface appointmentListingProps {
  name: string;
  patientDisplay: string;
  doctorDisplay: string;
  slot: string;
  isComplete: boolean;
  feedback?: string;
  isCompleteDisplay?: string;
}

export interface specialityProps {
  id: number;
  name: string;
}
export interface appointmentProps {
  id?: number;
  name: string;
  patient: patientProps | null;
  slot: string;
  doctor: doctorProps | null;
  feedback: string;
  isComplete: boolean;
  doctorDisplay?: string;
  patientDisplay?: string;
}
export interface createAppointmentProps {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}
