import { PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
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
