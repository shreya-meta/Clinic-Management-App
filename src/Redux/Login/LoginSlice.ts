import { createSlice } from "@reduxjs/toolkit";
import { DoctorInitialTypes } from "./types";

//initialize state
const initialState: DoctorInitialTypes = {
  loadingLogin: false,
  isAuthenticated: false,
  loggedUser: null,
  userRole: "",
};
//create login slice
const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loadingLoginAction: (state) => {
      state.loadingLogin = true;
    },
    loginSuccessAction: (state, { payload }) => {
      state.loadingLogin = false;
      state.isAuthenticated = true;
      state.userRole = payload.role;
      state.loggedUser = payload.loggedUser;
    },
    loginFailAction: (state) => {
      state.loadingLogin = false;
    },
    logoutSuccessAction: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadingLoginAction,
  loginSuccessAction,
  loginFailAction,
  logoutSuccessAction,
} = LoginSlice.actions;
// export reducer
export default LoginSlice.reducer;
