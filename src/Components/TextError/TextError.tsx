import { Grid } from "@mui/material";
import React from "react";
import { useStyles } from "./TextErrorStyles";
const TextError = ({ children }: any) => {
  const classes = useStyles();
  return <Grid className={classes.error}>{children}</Grid>;
};
export default React.memo(TextError);
