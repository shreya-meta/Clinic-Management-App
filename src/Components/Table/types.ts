import { appointmentProps } from "../../Pages/Appointment/types";
import { doctorProps } from "../../Pages/Doctor/types";
import { patientProps } from "../../Pages/Patient/types";
export interface rowsValueProps {
  rowsValue: doctorProps[] | patientProps[] | appointmentProps[];
}
export interface TableProps extends rowsValueProps {
  columns: any;
}
