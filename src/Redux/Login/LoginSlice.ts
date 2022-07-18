import { createSlice } from "@reduxjs/toolkit";
import { doctorProps } from "../../Pages/Doctor/types";

export interface DoctorInitialTypes {
  loadingLogin: boolean;
  loggedUser: doctorProps | null;
  isAuthenticated: boolean;
  userRole: string;
}
//initialize state
const initialState: DoctorInitialTypes = {
  loadingLogin: false,
  isAuthenticated: false,
  loggedUser: null,
  userRole: "",
};
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
    getAdminDataSuccessAction: (state, { payload }) => {
      state.loadingLogin = false;
    },
    getAdminDataFailAction: (state) => {
      state.loadingLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadingLoginAction,
  loginSuccessAction,
  loginFailAction,
  getAdminDataSuccessAction,
  getAdminDataFailAction,
  logoutSuccessAction,
} = LoginSlice.actions;
// export reducer
export default LoginSlice.reducer;
