import { patientProps } from "../../Pages/Patient/types";
import { axiosInstance } from "../../Utils/axios";

//get data
export const getPatient = () => axiosInstance.get<patientProps>(`patients`);
//create doctor
export const createPatient = (body: patientProps) =>
  axiosInstance.post<patientProps>(`patients`, body);
//updateDoctor
export const updatePatient = (body: patientProps, id: number) =>
  axiosInstance.patch<patientProps>(`patients/${id}`, body);
