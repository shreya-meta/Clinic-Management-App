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
import { useGlobalStyles } from "../GlobalStyles/GlobalStyles";
import SidebarMenu from "./Sidebar/SidebarMenu";
const Layout = ({ handleClickOpen, children, setSearch, title }: any) => {
  console.log(children, "children");
  const [open, setOpen] = useState(false);
  const providerValue = { open, setOpen };
  const classes = useStyles();
  const globalClassess = useGlobalStyles();
  return (
    <Grid container>
      {/* provided value to the child component */}
      <AppContext.Provider value={providerValue}>
        <Header setSearch={setSearch} />
        <Grid>
          <SidebarMenu />
        </Grid>
        <Grid className={classes.content}>
          <Card className={classes.layoutCard}>
            <Typography variant="h6">{title}</Typography>
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                className={globalClassess.mainButton}
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
