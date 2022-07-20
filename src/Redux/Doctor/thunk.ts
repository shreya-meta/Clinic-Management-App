import { Dispatch } from "react";
import { doctorProps } from "../../Pages/Doctor/types";
import { AppDispatch } from "../../Store";
import { alertErrorAction, alertSuccessAction } from "../Alert/AlertSlice";
import * as API from "./api";
import * as action from "./DoctorSlice";
// Asynchronous thunk actions
// get doctors
export const getDoctors = () => async (dispatch: AppDispatch) => {
  try {
    //dispatch loading action
    dispatch(action.loadingDoctorAction());
    //fetch api
    const { data } = await API.getDoctor();
    // dispatch success action
    dispatch(action.getDoctorSuccessAction(data));
  } catch (error) {
    // dispatch fail action
    dispatch(action.getDoctorsFailAction());
    dispatch(alertErrorAction("Failed To Get Data"));
  }
};
// create doctors
export const createDoctor =
  (values: doctorProps) => async (dispatch: AppDispatch) => {
    try {
      const body = values;
      // body.append("name", name);
      // body.append("visiting_hours", visiting_hours);
      // body.append("email", email);
      // body.append("phone_no", phone_no);
      // body.append("speciality", String(speciality));
      // body.append("password", password);
      // body.append("confirmPassword", confirmPassword);
      // if (picture) {
      //   const blob = new Blob([picture], {
      //     type: "text/plain",
      //   });
      //   const url = URL.createObjectURL(blob);
      //   body.append("picture", url);
      // }
      dispatch(action.loadingCreateDoctorAction());
      const { data } = await API.createDoctor(body);
      dispatch(action.createDoctorSuccessAction(data));
      dispatch(alertSuccessAction("Doctor Created Successfully"));
    } catch (error) {
      dispatch(action.createDoctorFailAction());
      dispatch(alertErrorAction("Failed To Create Doctor"));
    }
  };
// update doctors
export const updateDoctor =
  (values: doctorProps, id: number) => async (dispatch: AppDispatch) => {
    try {
      const body = values;
      dispatch(action.loadingCreateDoctorAction());
      await API.updateDoctor(body, id);
      dispatch(alertSuccessAction("Doctor Updated Successfully"));
      dispatch(getDoctors());
      dispatch(action.updateDoctorSuccessAction());
    } catch (error) {
      dispatch(action.updateDoctorFailAction());
      dispatch(alertErrorAction("Failed To Update Doctor"));
    }
  };
// get specialities
export const getSpecialities = () => async (dispatch: Dispatch<any>) => {
  try {
    //dispatch loading action
    dispatch(action.loadingDoctorAction());
    //fetch api
    const { data } = await API.getSpecialities();
    // dispatch success action
    dispatch(action.getSpecialitySuccessAction(data));
  } catch (error) {
    // dispatch fail action
    dispatch(action.getSpecialityFailAction());
  }
};
