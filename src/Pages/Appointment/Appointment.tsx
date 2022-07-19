import { Button } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { useGlobalStyles } from "../../Components/GlobalStyles/GlobalStyles";
import AppTable from "../../Components/Table/AppTable";
import { filterAppointmentsByDateAction } from "../../Redux/Appointment/AppointmentSlice";
import { appointmentSelector } from "../../Redux/Appointment/selector";
import { getAppointments } from "../../Redux/Appointment/thunk";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { appointmentColumn, appointmentProps } from "./types";

const Appointment = () => {
  const { appointments } = useAppSelector(appointmentSelector);
  const [nextAppointment, setNextAppointment] = useState(false);
  const globalClassess = useGlobalStyles();
  const dispatch = useAppDispatch();
  // get today date
  let today = new Date();
  let date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }- ${today.getDate()}`;
  // get filtered data greater than or quals to todays date
  const filterDataByDates = () => {
    return appointments.filter((appointment: appointmentProps) => {
      console.log(appointment?.slot.substring(0, 9) >= date, "greater than ");
      console.log("2022-5-15" >= date, "greater than ");

      return appointment?.slot.substring(0, 9) >= date;
    });
  };
  // effect runs if nextAppointment changes
  useEffect(() => {
    nextAppointment
      ? dispatch(filterAppointmentsByDateAction(filterDataByDates()))
      : dispatch(getAppointments());
  }, [nextAppointment]);
  const handleFilterByDate = () => {
    setNextAppointment((prev) => !prev);
  };
  // table rows
  const columns: appointmentColumn[] = [
    { id: "name", label: "Name" },
    { id: "patientDisplay", label: "Patient" },
    { id: "doctorDisplay", label: "Doctor" },
    { id: "slot", label: "Slot" },
    { id: "isComplete", label: "Is Complete" },
  ];
  return (
    <>
      <Button
        variant="contained"
        className={globalClassess.mainButton}
        onClick={() => handleFilterByDate()}
      >
        {nextAppointment ? "All Appointment" : "Next Appointment"}
      </Button>
      <AppTable columns={columns} rowsValue={appointments} />
    </>
  );
};

export default React.memo(Appointment);
