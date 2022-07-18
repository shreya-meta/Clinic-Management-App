import { combineReducers } from "@reduxjs/toolkit";
import AlertSlice from "../Redux/Alert/AlertSlice";
import DoctorSlice from "../Redux/Doctor/DoctorSlice";
import LoginSlice from "../Redux/Login/LoginSlice";
import PatientSlice from "../Redux/Patient/PatientSlice";

export const rootReducer = combineReducers({
  doctor: DoctorSlice,
  alert: AlertSlice,
  login: LoginSlice,
  patient: PatientSlice,
});
