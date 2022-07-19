import { MouseEvent } from "react";
import { appointmentProps } from "../../Pages/Appointment/types";
import { doctorProps } from "../../Pages/Doctor/types";
import { patientProps } from "../../Pages/Patient/types";

export interface TableHeadProps {
  onRequestSort: (event: MouseEvent<unknown>, property: any) => void;
}

export interface rowsValueProps {
  rowsValue: doctorProps[] | patientProps[] | appointmentProps[];
}
export interface TableProps extends rowsValueProps {
  columns: any;
}
export type Order = "asc" | "desc";
