import { createSlice } from "@reduxjs/toolkit";
import { patientProps } from "../../Pages/Patient/types";

export interface PatientState {
  loading: boolean;
  edit: boolean;
  patients: patientProps[];
  patient: patientProps | null;
  loadingPatient: boolean;
  appointmentModal: boolean;
}
//initialize state
const initialState: PatientState = {
  loading: false,
  edit: false,
  patients: [],
  patient: null,
  loadingPatient: false,
  appointmentModal: false,
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
      state.loadingPatient = false;
    },
    createPatientFailAction: (state) => {
      state.loading = false;
      state.loadingPatient = false;
    },
    patientEditSuccessAction: (state, { payload }) => {
      state.patient = payload;
      state.edit = true;
    },
    updatePatientSuccessAction: (state) => {
      state.edit = false;
      state.loading = false;
      state.loadingPatient = false;
    },
    updatePatientFailAction: (state) => {
      state.edit = false;
      state.loading = false;
      state.loadingPatient = false;
    },
    getSearchedDataSuccessAction: (state, { payload }) => {
      state.patients = payload;
    },
    clearPatientDataAction: (state) => {
      state.edit = false;
      state.loading = false;
      state.appointmentModal = false;
    },
    appointmentStateAction: (state) => {
      state.appointmentModal = true;
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
  appointmentStateAction,
} = patientSlice.actions;
// export reducer
export default patientSlice.reducer;
