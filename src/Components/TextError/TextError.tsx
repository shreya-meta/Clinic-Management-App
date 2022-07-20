import { Grid } from "@mui/material";
import { memo } from "react";
import { useStyles } from "./TextErrorStyles";
const TextError = ({ children }: any) => {
  const classes = useStyles();
  return <Grid className={classes.error}>{children}</Grid>;
};
export default memo(TextError);
