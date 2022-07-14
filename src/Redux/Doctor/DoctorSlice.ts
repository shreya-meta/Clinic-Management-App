import { createSlice } from "@reduxjs/toolkit";
import { doctorListingProps } from "../../Pages/Doctor/types";

export interface DoctorState {
  loading: boolean;
  doctors: doctorListingProps[];
}
//initialize state
const initialState: DoctorState = {
  loading: false,
  doctors: [],
};
const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    loadingDoctorAction: (state) => {
      state.loading = true;
    },
    getDoctorSuccessAction: (state, { payload }) => {
      state.doctors = payload;
      state.loading = false;
    },
    getDoctorsFailAction: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadingDoctorAction,
  getDoctorSuccessAction,
  getDoctorsFailAction,
} = doctorSlice.actions;
// export reducer
export default doctorSlice.reducer;
