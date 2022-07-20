import { appointmentProps } from "../../Pages/Appointment/types";
import { AppDispatch } from "../../Store";
import { alertErrorAction, alertSuccessAction } from "../Alert/AlertSlice";
import * as API from "./api";
import * as action from "./AppointmentSlice";
// Asynchronous thunk actions
// get appointments
export const getAppointments = () => async (dispatch: AppDispatch) => {
  try {
    //dispatch loading action
    dispatch(action.loadingAppointmentAction());
    //fetch api
    const { data } = await API.getAppointment();
    // dispatch success action
    dispatch(action.getAppointmentSuccessAction(data));
  } catch (error) {
    // dispatch fail action
    dispatch(action.getAppointmentFailAction());
    dispatch(alertErrorAction("Failed To Get Data"));
  }
};
// create doctors
export const createAppointment =
  (values: appointmentProps) => async (dispatch: AppDispatch) => {
    try {
      const body = values;
      dispatch(action.loadingCreateAppointmentAction());
      const { data } = await API.createAppointment(body);
      dispatch(action.createAppointmentSuccessAction(data));
      dispatch(alertSuccessAction("Appointment Created Successfully"));
    } catch (error) {
      dispatch(action.createAppointmentFailAction());
      dispatch(alertErrorAction("Failed To Create Appointment"));
    }
  };
// update doctors
export const updateAppointment =
  (values: appointmentProps, id: number) => async (dispatch: AppDispatch) => {
    try {
      const body = values;
      dispatch(action.loadingCreateAppointmentAction());
      await API.updateAppointment(body, id);
      dispatch(alertSuccessAction("Appointment Updated Successfully"));
      dispatch(getAppointments());
      dispatch(action.updateAppointmentSuccessAction());
    } catch (error) {
      dispatch(action.updateAppointmentFailAction());
      dispatch(alertErrorAction("Failed To Update Appointment"));
    }
  };
