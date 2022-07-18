import { Grid, TextField } from "@mui/material";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { loginSelector } from "../../Redux/Login/selector";
import { useAppSelector } from "../../Utils/appHooks";
import { useDoctorStyles } from "../Doctor/DoctorStyles";
import { doctorProps } from "../Doctor/types";
const Profile = () => {
  const classes = useDoctorStyles();
  const { loggedUser } = useAppSelector(loginSelector);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            className={classes.textWidth}
            name="name"
            value={loggedUser?.name}
            autoFocus
            id="name"
            label="Name"
            size="small"
            variant="outlined"
            disabled
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
