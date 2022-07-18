import { createSlice } from "@reduxjs/toolkit";
import { doctorProps, specialityProps } from "../../Pages/Doctor/types";

export interface DoctorState {
  loading: boolean;
  edit: boolean;
  doctors: doctorProps[];
  doctor: doctorProps | null;
  specialities: specialityProps[];
  loadingSpeciality: boolean;
}
//initialize state
const initialState: DoctorState = {
  loading: false,
  edit: false,
  doctors: [],
  doctor: null,
  specialities: [],
  loadingSpeciality: false,
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
      state.doctor = payload;
      state.edit = true;
    },
    getSpecialitySuccessAction: (state, { payload }) => {
      state.specialities = payload;
      state.loadingSpeciality = false;
      state.loading = false;
    },
    getSpecialityFailAction: (state) => {
      state.loadingSpeciality = false;
      state.loading = false;
    },
    updateDoctorSuccessAction: (state) => {
      state.edit = false;
    },

    getSearchedDataSuccessAction: (state, { payload }) => {
      state.doctors = payload;
    },
    updateDoctorFailAction: (state) => {
      state.edit = false;
    },
    clearDoctorDataAction: (state) => {
      state.edit = false;
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
  getSpecialitySuccessAction,
  getSpecialityFailAction,
  updateDoctorSuccessAction,
  updateDoctorFailAction,
  getSearchedDataSuccessAction,
  clearDoctorDataAction,
} = doctorSlice.actions;
// export reducer
export default doctorSlice.reducer;
