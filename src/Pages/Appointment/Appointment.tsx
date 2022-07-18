import { Chip } from "@mui/material";
import React, { useContext } from "react";
import AppTable from "../../Components/Table/AppTable";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
import { doctorColumn, doctorProps, specialityProps } from "./types";

const Appointment = () => {
  const { loading } = useContext(AppContext);
  const { doctors } = useAppSelector(doctorsSelector);
  // table rows
  const columns: doctorColumn[] = [
    { id: "name", label: "Name" },
    { id: "visiting_hours", label: "Visting Hours" },
    { id: "phone_no", label: "Phone No" },
    { id: "speciality", label: "Speciality" },
  ];
  //display speciality in chip
  const rowsValue = doctors.map((row: doctorProps) => ({
    ...row,
    speciality: row?.speciality?.map((speciality: specialityProps) => {
      return <Chip label={speciality?.name} key={speciality?.id} />;
    }),
  }));
  // const rowsValue=
  return (
    <>
      <AppTable columns={columns} rowsValue={rowsValue} />
    </>
  );
};

export default React.memo(Appointment);