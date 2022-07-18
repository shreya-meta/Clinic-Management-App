import { Dispatch, SetStateAction } from "react";
import { doctorEditSuccessAction } from "../../Redux/Doctor/DoctorSlice";
import { AppDispatch } from "../../Store";

export const handleEdit = (
  row: any,
  types: string,
  dispatch: AppDispatch,
  setShowModal: Dispatch<SetStateAction<boolean>>
) => {
  if (types === "doctor") {
    dispatch(doctorEditSuccessAction(row));
  }
  setShowModal(true);
};
