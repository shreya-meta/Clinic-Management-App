import { createSlice } from "@reduxjs/toolkit";
import { doctorProps } from "../../Pages/Doctor/types";

export interface DoctorState {
  loading: boolean;
  edit: boolean;
  doctors: doctorProps[];
  doctor: doctorProps | null;
}
//initialize state
const initialState: DoctorState = {
  loading: false,
  edit: false,
  doctors: [],
  doctor: null,
};
const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    loadingDoctorAction: (state) => {
      state.loading = true;
    },
    getDoctorSuccessAction: (state, { payload }) => {
      state.doctors = payload;
      state.loading = false;
    },
    getDoctorsFailAction: (state) => {
      state.loading = false;
    },
    createDoctorSuccessAction: (state, { payload }) => {
      state.doctors = [payload, ...state.doctors];
      state.loading = false;
    },
    createDoctorFailAction: (state) => {
      state.loading = false;
    },
    doctorEditSuccessAction: (state, { payload }) => {
      state.doctor = state.doctors.find(
        (doctor: any) => doctor.id === payload
      )!;
      state.edit = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadingDoctorAction,
  getDoctorSuccessAction,
  getDoctorsFailAction,
  createDoctorSuccessAction,
  createDoctorFailAction,
  doctorEditSuccessAction,
} = doctorSlice.actions;
// export reducer
export default doctorSlice.reducer;
