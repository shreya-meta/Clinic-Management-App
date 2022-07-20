import { doctorProps, specialityProps } from "../../Pages/Doctor/types";

export interface DoctorState {
  loading: boolean;
  edit: boolean;
  doctors: doctorProps[];
  doctor: doctorProps | null;
  specialities: specialityProps[];
  loadingSpeciality: boolean;
  loadingDoctor: boolean;
}
