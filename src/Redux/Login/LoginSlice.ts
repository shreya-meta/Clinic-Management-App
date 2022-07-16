import { createSlice } from "@reduxjs/toolkit";

export interface DoctorInitialTypes {
  loadingLogin: boolean;
}
//initialize state
const initialState: DoctorInitialTypes = {
  loadingLogin: false,
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
    },
    loginFailAction: (state) => {
      state.loadingLogin = false;
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
} = LoginSlice.actions;
// export reducer
export default LoginSlice.reducer;
