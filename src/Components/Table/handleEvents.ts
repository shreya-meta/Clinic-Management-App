import { Dispatch, SetStateAction } from "react";
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
