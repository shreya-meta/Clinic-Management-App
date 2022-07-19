import React from "react";
import { appointmentSelector } from "../../Redux/Appointment/selector";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../Utils/appHooks";
import { appointmentColumn, appointmentProps } from "../Appointment/types";
import AppTable from "../../Components/Table/AppTable";

const ViewAppointment = () => {
  const { filteredAppointments } = useAppSelector(appointmentSelector);
  const columns: appointmentColumn[] = [
    { id: "name", label: "Name" },
    { id: "slot", label: "Slot" },
    { id: "doctorDisplay", label: "Doctor" },
    { id: "patientDisplay", label: "Patient" },
    { id: "feedback", label: "Feedback" },
    { id: "isComplete", label: "Is Complete" },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => {
                const { id, label } = column;
                return <TableCell key={id}>{label}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAppointments.map((row: appointmentProps) => {
              const { id, name, slot, doctor, patient, isComplete, feedback } =
                row;

              return (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{slot}</TableCell>
                  <TableCell>{doctor?.name}</TableCell>
                  <TableCell>{patient?.name}</TableCell>
                  <TableCell>{feedback ? feedback : "-"}</TableCell>
                  <TableCell>{isComplete ? "Yes" : "No"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ViewAppointment;
