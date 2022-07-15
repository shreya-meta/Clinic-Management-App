import { doctorProps } from "../../Pages/Doctor/types";
import { axiosInstance } from "../../Utils/axios";

//get data
export const getDoctor = () => axiosInstance.get<doctorProps>(`doctors`);
//create doctor
export const createDoctor = (body: FormData) =>
  axiosInstance.post<doctorProps>(`doctors`, body);
