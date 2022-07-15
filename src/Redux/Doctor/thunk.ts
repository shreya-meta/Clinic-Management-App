import { PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { doctorProps } from "../../Pages/Doctor/types";
import * as API from "./api";
import * as action from "./DoctorSlice";
// Asynchronous thunk actions
// get doctors
export const getDoctors = () => async (dispatch: Dispatch<any>) => {
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
export const createDoctor =
  ({
    name,
    speciality,
    visiting_hours,
    email,
    password,
    picture,
    phone_no,
  }: doctorProps) =>
  async (dispatch: Dispatch<any>) => {
    try {
      const body = new FormData();
      body.append("name", name);
      body.append("visiting_hours", visiting_hours);
      body.append("email", email);
      body.append("phone_no", phone_no);
      body.append("speciality", speciality);
      body.append("password", password);
      // body.append("confirmPassword", confirmPassword);
      if (picture) {
        body.append("picture", picture);
      }
      dispatch(action.loadingDoctorAction());
      const { data } = await API.createDoctor(body);
      dispatch(action.createDoctorSuccessAction(data));
    } catch (error) {
      dispatch(action.createDoctorFailAction());
    }
  };
