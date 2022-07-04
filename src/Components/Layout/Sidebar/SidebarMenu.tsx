import { Fragment, useEffect, useState } from "react";
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
} from "../LayoutStyles";
import { clinicSidebarData } from "./SidebarData";

const SidebarMenu = ({ open }: any) => {
  const isSuperuser = true;
  const [search, setSearch] = useState("");
  return (
    <Drawer variant="permanent" open={open}>
      <div>
        <div className="sidebar__logo">
          {open && <Typography variant="h6">CLINIC MGT</Typography>}
        </div>
      </div>
      <Divider />
      <List component="nav" disablePadding>
        <ListItem>
          {open && (
            <div>
              <Search className="search-wrapper-sidebar">
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <SearchIconWrapper className="search-icon-wrapper">
                  <SearchIcon style={{ color: "#f2f2f2" }} />
                </SearchIconWrapper>
              </Search>
            </div>
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
