import { Fragment, useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Sidebar from "./Sidebar";
import { Drawer, Search, StyledInputBase, useStyles } from "../LayoutStyles";
import { clinicDoctorSidebarData, clinicSidebarData } from "./SidebarData";
import { AppContext } from "../../../Utils/AppUtils";
import { Grid } from "@mui/material";
import { useAppSelector } from "../../../Utils/appHooks";
import { loginSelector } from "../../../Redux/Login/selector";

const SidebarMenu = () => {
  const { open } = useContext(AppContext);
  const { userRole } = useAppSelector(loginSelector);
  const [search, setSearch] = useState("");
  const classes = useStyles();
  // load sidebar data based upon roles
  const dataToBeLoad =
    userRole === "admin" ? clinicSidebarData : clinicDoctorSidebarData;
  return (
    <Drawer variant="permanent" open={open}>
      <>
        {open && (
          <Typography
            variant="h6"
            color="common.white"
            sx={{
              lineHeight: "3.1",
              fontFamily: "system-ui",
              marginLeft: "80px",
            }}
          >
            CLINIC MGT
          </Typography>
        )}
      </>
      <Divider />
      <List component="nav" disablePadding>
        <ListItem>
          {open && (
            <Grid className={classes.searchSidebar}>
              <Search>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Search>
            </Grid>
          )}
        </ListItem>
        {dataToBeLoad?.map((item: any, index: number) => {
          return (
            <Fragment key={index}>
              <Sidebar
                {...item}
                key={index}
                search={search}
                setSearch={setSearch}
              />
            </Fragment>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SidebarMenu;
