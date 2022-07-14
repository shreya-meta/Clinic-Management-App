export interface specialityProps {
  id: number;
  name: string;
}
export interface doctorProps {
  id?: number;
  name: string;
  speciality: specialityProps[];
  visiting_hours: string;
  email: string;
  password: string;
  picture: string;
  phone_no: string;
}
