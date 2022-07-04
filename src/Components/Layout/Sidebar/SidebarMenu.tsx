import { Fragment, useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import Sidebar from "./Sidebar";
import {
  Drawer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  useStyles,
} from "../LayoutStyles";
import { clinicSidebarData } from "./SidebarData";
import { AppContext } from "../../../Utils/AppUtils";
import { Grid } from "@mui/material";

const SidebarMenu = () => {
  const { open } = useContext(AppContext);
  const isSuperuser = true;
  const [search, setSearch] = useState("");
  const classes = useStyles();
  return (
    <Drawer variant="permanent" open={open}>
      <>
        {open && (
          <Typography
            variant="h6"
            color="common.white"
            sx={{ lineHeight: "3.1", fontFamily: "system-ui" }}
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
        {clinicSidebarData?.map((item: any, index: number) => {
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
