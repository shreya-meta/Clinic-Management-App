import React, { useContext } from "react";
import AppTable from "../../Components/Table/AppTable";
import { appointmentSelector } from "../../Redux/Appointment/selector";
import { useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
import { appointmentColumn, appointmentProps } from "./types";

const Appointment = () => {
  const { loading } = useContext(AppContext);
  const { appointments } = useAppSelector(appointmentSelector);
  // table rows
  const columns: appointmentColumn[] = [
    { id: "name", label: "Name" },
    { id: "patientDisplay", label: "Patient" },
    { id: "doctorDisplay", label: "Doctor" },
    { id: "slot", label: "Slot" },
    { id: "isComplete", label: "Is Complete" },
  ];
  // const rowsValue=
  return (
    <>
      <AppTable columns={columns} rowsValue={appointments} />
    </>
  );
};

export default React.memo(Appointment);
