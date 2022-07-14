import { axiosInstance } from "../../Utils/axios";
import { doctorProps } from "./types";

//get data
export const getDoctor = () => axiosInstance.get<doctorProps>(`doctors`);
