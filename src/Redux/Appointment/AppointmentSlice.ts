import { createSlice } from "@reduxjs/toolkit";
import { appointmentProps } from "../../Pages/Appointment/types";
export interface AppointmentState {
  loading: boolean;
  edit: boolean;
  appointments: appointmentProps[];
  filteredAppointments: appointmentProps[];
  appointment: appointmentProps | null;
  loadingAppointment: boolean;
}
//initialize state
const initialState: AppointmentState = {
  loading: false,
  edit: false,
  appointments: [],
  filteredAppointments: [],
  appointment: null,
  loadingAppointment: false,
};
// create appointment slice
const AppointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    loadingAppointmentAction: (state) => {
      state.loadingAppointment = true;
    },
    loadingCreateAppointmentAction: (state) => {
      state.loading = true;
    },
    getAppointmentSuccessAction: (state, { payload }) => {
      state.appointments = payload?.id
        ? payload.data?.filter(
            (appointment: appointmentProps) =>
              appointment?.doctor?.id === payload?.id
          )
        : payload.data;
      state.loadingAppointment = false;
    },
    getAppointmentFailAction: (state) => {
      state.loadingAppointment = false;
    },
    createAppointmentSuccessAction: (state, { payload }) => {
      state.appointments = [payload, ...state.appointments];
      state.loading = false;
    },
    createAppointmentFailAction: (state) => {
      state.loading = false;
    },
    appointmentEditSuccessAction: (state, { payload }) => {
      state.appointment = payload;
      state.edit = true;
    },
    updateAppointmentSuccessAction: (state) => {
      state.edit = false;
      state.loading = false;
    },

    getSearchedDataSuccessAction: (state, { payload }) => {
      state.appointments = payload;
    },
    updateAppointmentFailAction: (state) => {
      state.edit = false;
      state.loading = false;
    },
    clearAppointmentDataAction: (state) => {
      state.edit = false;
      state.loading = false;
    },
    filterAppointmentsByDateAction: (state, { payload }) => {
      state.appointments = payload;
    },
    filterAppointmentsByPatientAction: (state, { payload }) => {
      state.filteredAppointments = state.appointments?.filter(
        (appointment) => +appointment?.patient?.id! === +payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadingAppointmentAction,
  loadingCreateAppointmentAction,
  getAppointmentSuccessAction,
  getAppointmentFailAction,
  createAppointmentSuccessAction,
  createAppointmentFailAction,
  appointmentEditSuccessAction,
  updateAppointmentSuccessAction,
  updateAppointmentFailAction,
  getSearchedDataSuccessAction,
  clearAppointmentDataAction,
  filterAppointmentsByDateAction,
  filterAppointmentsByPatientAction,
} = AppointmentSlice.actions;
// export reducer
export default AppointmentSlice.reducer;
