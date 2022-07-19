import { Dispatch, SetStateAction } from "react";
import {
  appointmentEditSuccessAction,
  filterAppointmentsByPatientAction,
} from "../../Redux/Appointment/AppointmentSlice";
import { doctorEditSuccessAction } from "../../Redux/Doctor/DoctorSlice";
import { patientEditSuccessAction } from "../../Redux/Patient/PatientSlice";
import { AppDispatch } from "../../Store";

export const handleEdit = (
  row: any,
  types: string,
  dispatch: AppDispatch,
  setShowModal: Dispatch<SetStateAction<boolean>>
) => {
  if (types === "doctor") {
    dispatch(doctorEditSuccessAction(row));
  } else if (types === "patient") {
    dispatch(patientEditSuccessAction(row));
  }
  setShowModal(true);
};
//when doctor clicked a table row
export const handleTableRowClicked = (
  row: any,
  dispatch: AppDispatch,
  setShowModal: Dispatch<SetStateAction<boolean>>
) => {
  dispatch(appointmentEditSuccessAction(row));
  setShowModal(true);
};
// // for view button
export const handleView = (
  id: number,
  dispatch: AppDispatch,
  setShowModal: Dispatch<SetStateAction<boolean>>
) => {
  filterAppointmentsByPatientAction(id);
  // setShowModal(true);
};
