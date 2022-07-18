import { doctorProps, specialityProps } from "../../Pages/Doctor/types";
import { axiosInstance } from "../../Utils/axios";

//get data
export const getDoctor = () => axiosInstance.get<doctorProps>(`doctors`);
//create doctor
export const createDoctor = (body: doctorProps) =>
  axiosInstance.post<doctorProps>(`doctors`, body);
//updateDoctor
export const updateDoctor = (body: doctorProps, id: number) =>
  axiosInstance.patch<doctorProps>(`doctors/${id}`, body);
//get specialities
export const getSpecialities = () =>
  axiosInstance.get<specialityProps>(`specialities`);
