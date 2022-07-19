import { Card, CardContent, Grid, TextField } from "@mui/material";
import { loginSelector } from "../../Redux/Login/selector";
import { useAppSelector } from "../../Utils/appHooks";
import { useDoctorStyles } from "../Doctor/DoctorStyles";
const ProfileInfo = () => {
  const classes = useDoctorStyles();
  const { loggedUser, userRole } = useAppSelector(loginSelector);
  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            {userRole === "doctor" && (
              <>
                <Grid item xs={6}>
                  <TextField
                    className={classes.textWidth}
                    value={loggedUser?.visiting_hours}
                    autoFocus
                    id="visiting_hours"
                    label="Visiting Hours"
                    size="small"
                    variant="outlined"
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.textWidth}
                    name="email"
                    value={loggedUser?.phone_no}
                    autoFocus
                    id="email"
                    label="Email"
                    size="small"
                    variant="outlined"
                    disabled
                  />
                </Grid>
              </>
            )}
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
                value={
                  userRole === "admin" ? "admin@admin.com" : loggedUser?.email
                }
                autoFocus
                id="email"
                label="Email"
                size="small"
                variant="outlined"
                disabled
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileInfo;
