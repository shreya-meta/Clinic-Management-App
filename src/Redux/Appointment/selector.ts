import { RootState } from "../../Store";

// A selector
export const doctorsSelector = (state: RootState) => state.doctor;
