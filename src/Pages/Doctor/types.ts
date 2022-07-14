export interface doctorColumn {
  id: keyof doctorListingProps;
  label: string;
  minWidth?: number;
}
export interface doctorListingProps {
  name: string;
  visiting_hours: string;
  phone_no: string;
}
