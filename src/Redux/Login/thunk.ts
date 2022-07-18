import { Dispatch } from "react";
import { AppDispatch } from "../../Store";
import { alertErrorAction, alertSuccessAction } from "../Alert/AlertSlice";
import * as API from "./api";
import * as action from "./LoginSlice";
import { loginProps } from "./types";
// Asynchronous thunk actions
// get doctors
export const login =
  (user_role: string | loginProps) => async (dispatch: AppDispatch) => {
    console.log(user_role, "user_role");
    try {
      //dispatch loading action
      dispatch(action.loadingLoginAction());
      // dispatch success action
      dispatch(action.loginSuccessAction(user_role));
      dispatch(alertSuccessAction("Login Success"));
    } catch (error) {
      // dispatch fail action
      dispatch(action.loginFailAction());
      dispatch(alertErrorAction("Invalid Credentials "));
    }
  };
// get admin data
export const getAdminData = () => async (dispatch: AppDispatch) => {
  try {
    //fetch api
    const { data } = await API.getAdminData();
    // dispatch success action
    dispatch(action.getAdminDataSuccessAction(data));
  } catch (error) {
    // dispatch fail action
    dispatch(action.getAdminDataFailAction());
  }
};
