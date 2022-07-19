import { Grid, TextField } from "@mui/material";
import { loginSelector } from "../../Redux/Login/selector";
import { useAppSelector } from "../../Utils/appHooks";
import { useDoctorStyles } from "../Doctor/DoctorStyles";
const ProfileInfo = () => {
  const classes = useDoctorStyles();
  const { loggedUser, userRole } = useAppSelector(loginSelector);
  console.log(userRole, "test user_role");
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            className={classes.textWidth}
            name="name"
            value={userRole === "admin" ? "Admin" : loggedUser?.name}
            autoFocus
            id="name"
            label="Name"
            size="small"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.textWidth}
            name="email"
            value={userRole === "admin" ? "admin@admin.com" : loggedUser?.email}
            autoFocus
            id="email"
            label="Email"
            size="small"
            variant="outlined"
            disabled
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileInfo;
