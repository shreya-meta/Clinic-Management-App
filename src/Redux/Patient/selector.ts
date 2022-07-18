import { RootState } from "../../Store";

// A selector
export const patientSelector = (state: RootState) => state.patient;
