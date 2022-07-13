import { doctorColumn } from "./types";

const Doctor = () => {
  // table columns
  const columns: doctorColumn[] = [
    { id: "name", label: "Name" },
    { id: "visiting_hours", label: "Visting Hours" },
    { id: "phone_no", label: "Phone No" },
  ];
  return (
    <>
      <p>Hello Doctor</p>
    </>
  );
};

export default Doctor;
