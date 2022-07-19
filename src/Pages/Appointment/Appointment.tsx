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
      return appointment?.slot.substring(0, 10) >= date;
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
  const rowsValue = appointments?.map((appointment: appointmentProps) => ({
    ...appointment,
    isCompleteDisplay: appointment?.isComplete ? "Yes" : "No",
  }));
  // table rows
  const columns: appointmentColumn[] = [
    { id: "name", label: "Name" },
    { id: "patientDisplay", label: "Patient" },
    { id: "doctorDisplay", label: "Doctor" },
    { id: "slot", label: "Slot" },
    { id: "isCompleteDisplay", label: "Is Complete" },
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
      <AppTable columns={columns} rowsValue={rowsValue} />
    </>
  );
};

export default React.memo(Appointment);
