import { Dispatch } from "react";
import { AppDispatch } from "../../Store";
import * as API from "./api";
import * as action from "./LoginSlice";
// Asynchronous thunk actions
// get doctors
export const login = (user_type: string) => async (dispatch: AppDispatch) => {
  console.log(user_type, "user_type");
  try {
    //dispatch loading action
    dispatch(action.loadingLoginAction());
    // dispatch success action
    dispatch(action.loginSuccessAction(user_type));
  } catch (error) {
    // dispatch fail action
    dispatch(action.loginFailAction());
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
