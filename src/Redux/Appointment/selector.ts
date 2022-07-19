import { RootState } from "../../Store";

// A selector
export const appointmentSelector = (state: RootState) => state.appointment;
