import { AppDispatch } from "../../Store";
import { alertErrorAction, alertSuccessAction } from "../Alert/AlertSlice";
import * as action from "./LoginSlice";
import { loginProps } from "./types";
// Asynchronous thunk actions
// login
export const login =
  (user_role: string | loginProps) => async (dispatch: AppDispatch) => {
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
