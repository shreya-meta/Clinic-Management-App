import { createSlice } from "@reduxjs/toolkit";
import { patientProps } from "../../Pages/Patient/types";

export interface PatientState {
  loading: boolean;
  edit: boolean;
  patients: patientProps[];
  patient: patientProps | null;
  loadingPatient: boolean;
}
//initialize state
const initialState: PatientState = {
  loading: false,
  edit: false,
  patients: [],
  patient: null,
  loadingPatient: false,
};
const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    loadingPatientAction: (state) => {
      state.loadingPatient = true;
    },
    loadingCreatePatientAction: (state) => {
      state.loading = true;
    },
    getPatientSuccessAction: (state, { payload }) => {
      state.patients = payload;
      state.loadingPatient = false;
    },
    getPatientFailAction: (state) => {
      state.loadingPatient = false;
    },
    createPatientSuccessAction: (state, { payload }) => {
      state.patients = [payload, ...state.patients];
      state.loading = false;
    },
    createPatientFailAction: (state) => {
      state.loading = false;
    },
    patientEditSuccessAction: (state, { payload }) => {
      state.patient = payload;
      state.edit = true;
    },
    updatePatientSuccessAction: (state) => {
      state.edit = false;
      state.loading = false;
    },

    getSearchedDataSuccessAction: (state, { payload }) => {
      state.patients = payload;
    },
    updatePatientFailAction: (state) => {
      state.edit = false;
    },
    clearPatientDataAction: (state) => {
      state.edit = false;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadingPatientAction,
  loadingCreatePatientAction,
  getPatientSuccessAction,
  getPatientFailAction,
  createPatientSuccessAction,
  createPatientFailAction,
  patientEditSuccessAction,
  updatePatientSuccessAction,
  updatePatientFailAction,
  getSearchedDataSuccessAction,
  clearPatientDataAction,
} = patientSlice.actions;
// export reducer
export default patientSlice.reducer;
