import { appointmentProps } from "../../Pages/Appointment/types";
import { axiosInstance } from "../../Utils/axios";
//get data
export const getAppointment = () =>
  axiosInstance.get<appointmentProps>(`appointments`);
//create appointment data
export const createAppointment = (body: appointmentProps) =>
  axiosInstance.post<appointmentProps>(`appointments`, body);
//update appointment
export const updateAppointment = (body: appointmentProps, id: number) =>
  axiosInstance.patch<appointmentProps>(`appointments/${id}`, body);
