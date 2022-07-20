import { createSlice } from "@reduxjs/toolkit";
import { DoctorState } from "./types";

//initialize state
const initialState: DoctorState = {
  loading: false,
  loadingDoctor: false,
  edit: false,
  doctors: [],
  doctor: null,
  specialities: [],
  loadingSpeciality: false,
};
// create doctor slice
const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    loadingDoctorAction: (state) => {
      state.loadingDoctor = true;
    },
    loadingCreateDoctorAction: (state) => {
      state.loading = true;
    },
    getDoctorSuccessAction: (state, { payload }) => {
      state.doctors = payload;
      state.loadingDoctor = false;
      state.loading = false;
    },
    getDoctorsFailAction: (state) => {
      state.loadingDoctor = false;
      state.loading = false;
    },
    createDoctorSuccessAction: (state, { payload }) => {
      state.doctors = [payload, ...state.doctors];
      state.loading = false;
      state.loadingDoctor = false;
    },
    createDoctorFailAction: (state) => {
      state.loading = false;
      state.loadingDoctor = false;
    },
    doctorEditSuccessAction: (state, { payload }) => {
      state.doctor = payload;
      state.edit = true;
    },
    getSpecialitySuccessAction: (state, { payload }) => {
      state.specialities = payload;
      state.loadingSpeciality = false;
      state.loading = false;
      state.loadingDoctor = false;
    },
    getSpecialityFailAction: (state) => {
      state.loadingSpeciality = false;
      state.loading = false;
      state.loadingDoctor = false;
    },
    updateDoctorSuccessAction: (state) => {
      state.edit = false;
      state.loading = false;
    },
    updateDoctorFailAction: (state) => {
      state.edit = false;
      state.loading = false;
      state.loadingDoctor = false;
    },
    getSearchedDataSuccessAction: (state, { payload }) => {
      state.doctors = payload;
    },

    clearDoctorDataAction: (state) => {
      state.edit = false;
      state.loadingDoctor = false;
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
  loadingCreateDoctorAction,
} = doctorSlice.actions;
// export reducer
export default doctorSlice.reducer;
