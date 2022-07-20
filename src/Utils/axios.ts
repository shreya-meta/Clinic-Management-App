import axios from "axios";
//creating axios instance
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});
// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Doing something before request is sent thu
//     if (!window.navigator.onLine) {
//       return Promise.reject("No Internet");
//     }
//   },
//   (error: AxiosError): Promise<AxiosError> => {
//     // reject request error
//     return Promise.reject(error);
//   }
// );
