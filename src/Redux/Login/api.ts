import { doctorProps } from "../../Pages/Doctor/types";
import { axiosInstance } from "../../Utils/axios";

//get data
export const getAdminData = () => axiosInstance.get<doctorProps>(`doctors`);
