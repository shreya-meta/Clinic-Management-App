import React, { useEffect, memo } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import Slide from "@mui/material/Slide";
import { closeAlertAction } from "../../Redux/Alert/AlertSlice";
import { alertSelector } from "../../Redux/Alert/selector";
import { openAlert } from "./types";

const TransitionLeft = (props: any) => {
  return <Slide {...props} direction="left" timeout={250} />;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CustomAlert = ({ openAlert, data }: openAlert) => {
  const { error, info } = useAppSelector(alertSelector);
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  // open alert function
  const openAlertFunction = () => {
    setOpen(openAlert);
  };
  // run effect when component mounts
  useEffect(() => {
    openAlertFunction();
  }, []);
  // close alert
  const handleClose = () => {
    setOpen(false);
    dispatch(closeAlertAction());
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        TransitionComponent={TransitionLeft}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        {error ? (
          <Alert
            severity="error"
            variant="filled"
            onClose={() => handleClose()}
          >
            {data}
          </Alert>
        ) : info ? (
          <Alert severity="info" variant="filled" onClose={() => handleClose()}>
            {data}
          </Alert>
        ) : (
          <Alert
            severity="success"
            variant="filled"
            onClose={() => handleClose()}
          >
            {data}
          </Alert>
        )}
      </Snackbar>
    </>
  );
};
export default memo(CustomAlert);
