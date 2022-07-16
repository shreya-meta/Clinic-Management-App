import { doctorProps, specialityProps } from "../../Pages/Doctor/types";
import { axiosInstance } from "../../Utils/axios";

//get data
export const getDoctor = () => axiosInstance.get<doctorProps>(`doctors`);
//create doctor
export const createDoctor = (body: string) =>
  axiosInstance.post<doctorProps>(`doctors`, body);
//get specialities
export const getSpecialities = () =>
  axiosInstance.get<specialityProps>(`specialities`);
