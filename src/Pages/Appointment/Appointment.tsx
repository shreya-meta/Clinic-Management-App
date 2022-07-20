import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useGlobalStyles } from "../../Components/GlobalStyles/GlobalStyles";
import AppTable from "../../Components/Table/AppTable";
import { filterAppointmentsByDateAction } from "../../Redux/Appointment/AppointmentSlice";
import { appointmentSelector } from "../../Redux/Appointment/selector";
import { getAppointments } from "../../Redux/Appointment/thunk";
import { loginSelector } from "../../Redux/Login/selector";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { appointmentColumn, appointmentProps } from "./types";
const Appointment = () => {
  const { appointments } = useAppSelector(appointmentSelector);
  const [nextAppointment, setNextAppointment] = useState(false);
  const { loggedUser } = useAppSelector(loginSelector);
  const globalClassess = useGlobalStyles();
  const dispatch = useAppDispatch();
  // get filtered data greater than or equals to todays date
  function filteredData(date: number) {
    return date >= Date.now();
  }
  const filterDataByDates = () => {
    return appointments.filter((appointment: appointmentProps) => {
      let appointmentDate = new Date(appointment?.slot.substring(0, 10));
      return filteredData(+appointmentDate);
    });
  };
  // effect runs if nextAppointment changes
  useEffect(() => {
    nextAppointment
      ? dispatch(filterAppointmentsByDateAction(filterDataByDates()))
      : dispatch(getAppointments(loggedUser?.id && loggedUser?.id));
  }, [nextAppointment]);
  const handleFilterByDate = () => {
    setNextAppointment((prev) => !prev);
  };
  const rowsValue = appointments?.map((appointment: appointmentProps) => ({
    ...appointment,
    isCompleteDisplay: appointment?.isComplete ? "Yes" : "No",
  }));
  // table columns
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
