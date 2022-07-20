import { createSlice } from "@reduxjs/toolkit";
import { initialAlertTypes } from "./types";

//initialize state
const initialState: initialAlertTypes = {
  open: false,
  error: false,
  info: false,
  success: false,
  message: "",
};
// create alert slice
const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertSuccessAction: (state, { payload }) => {
      state.open = true;
      state.success = true;
      state.message = payload;
    },
    alertErrorAction: (state, { payload }) => {
      state.open = true;
      state.error = true;
      state.message = payload;
    },
    alertInfoAction: (state, { payload }) => {
      state.open = true;
      state.info = true;
      state.message = payload;
    },
    closeAlertAction: (state) => {
      state.open = false;
      state.info = false;
      state.success = false;
      state.message = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  alertSuccessAction,
  alertErrorAction,
  alertInfoAction,
  closeAlertAction,
} = alertSlice.actions;
// export reducer
export default alertSlice.reducer;
