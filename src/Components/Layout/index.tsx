import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AppContext } from "../../Utils/AppUtils";
import Header from "./Header/Header";
import { useStyles } from "./LayoutStyles";
import SidebarMenu from "./Sidebar/SidebarMenu";
const Layout = ({ handleClickOpen, children }: any) => {
  console.log(children, "children");
  const [open, setOpen] = useState(false);
  const providerValue = { open, setOpen };
  const classes = useStyles();
  return (
    <Grid container>
      {/* provided value to the child component */}
      <AppContext.Provider value={providerValue}>
        <Header />
        <Grid>
          <SidebarMenu />
        </Grid>
        <Grid className={classes.content}>
          <Card className={classes.layoutCard}>
            <Grid container justifyContent="flex-end">
              <Typography variant="h6">"Teat"</Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Add
              </Button>
            </Grid>
            <Divider />
            <CardContent>{children}</CardContent>
          </Card>
        </Grid>
      </AppContext.Provider>
    </Grid>
  );
};

export default Layout;
