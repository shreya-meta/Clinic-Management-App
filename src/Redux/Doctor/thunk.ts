import { Dispatch } from "react";
import { AppDispatch } from "../../Store";
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
  }
};
// create doctors
export const createDoctor = (values: any) => async (dispatch: AppDispatch) => {
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
    dispatch(action.loadingDoctorAction());
    const { data } = await API.createDoctor(body);
    dispatch(action.createDoctorSuccessAction(data));
  } catch (error) {
    dispatch(action.createDoctorFailAction());
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
