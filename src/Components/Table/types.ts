import {
  appointmentColumn,
  appointmentProps,
} from "../../Pages/Appointment/types";
import { doctorColumn, doctorProps } from "../../Pages/Doctor/types";
import { patientColumn, patientProps } from "../../Pages/Patient/types";
export interface rowsValueProps {
  rowsValue: doctorProps[] | patientProps[] | appointmentProps[];
}
export interface TableProps extends rowsValueProps {
  columns: appointmentColumn[] | patientColumn[] | doctorColumn[];
}
