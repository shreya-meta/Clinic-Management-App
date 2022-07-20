import { patientProps } from "../../Pages/Patient/types";
import { AppDispatch } from "../../Store";
import { alertErrorAction, alertSuccessAction } from "../Alert/AlertSlice";
import * as API from "./api";
import * as action from "./PatientSlice";
// Asynchronous thunk actions
// get doctors
export const getPatients = () => async (dispatch: AppDispatch) => {
  try {
    //dispatch loading action
    dispatch(action.loadingPatientAction());
    //fetch api
    const { data } = await API.getPatient();
    // dispatch success action
    dispatch(action.getPatientSuccessAction(data));
  } catch (error) {
    // dispatch fail action
    dispatch(action.getPatientFailAction());
    dispatch(alertErrorAction("Failed To Get Data"));
  }
};
// create doctors
export const createPatient =
  (values: patientProps) => async (dispatch: AppDispatch) => {
    try {
      const body = values;
      dispatch(action.loadingCreatePatientAction());
      const { data } = await API.createPatient(body);
      dispatch(action.createPatientSuccessAction(data));
      dispatch(alertSuccessAction("Patient Created Successfully"));
    } catch (error) {
      dispatch(action.createPatientFailAction());
      dispatch(alertErrorAction("Failed To Create Patient"));
    }
  };
// update doctors
export const updatePatient =
  (values: patientProps, id: number) => async (dispatch: AppDispatch) => {
    try {
      const body = values;
      dispatch(action.loadingCreatePatientAction());
      await API.updatePatient(body, id);
      dispatch(alertSuccessAction("Patient Updated Successfully"));
      dispatch(getPatients());
      dispatch(action.updatePatientSuccessAction());
    } catch (error) {
      dispatch(action.updatePatientFailAction());
      dispatch(alertErrorAction("Failed To Update Patient"));
    }
  };
