import React, { useContext } from "react";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  AppBar,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  useStyles,
} from "../LayoutStyles";
import PersonIcon from "@mui/icons-material/Person";
import { AppContext } from "../../../Utils/AppUtils";
import { useAppDispatch } from "../../../Utils/appHooks";
import { logoutSuccessAction } from "../../../Redux/Login/LoginSlice";
import { alertSuccessAction } from "../../../Redux/Alert/AlertSlice";
const Header = ({ search, setSearch }: any) => {
  const dispatch = useAppDispatch();
  const { open, setOpen } = useContext(AppContext);
  const handleDrawer = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
  };
  const classes = useStyles();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e: any) => {
    setSearch(e?.target?.value.toLowerCase());
  };
  //handle logout
  const handleLogout = () => {
    dispatch(logoutSuccessAction());
    dispatch(alertSuccessAction("Logout successfully."));
  };
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          className={clsx(
            classes.menuButton,
            !open && classes.menuButtonHidden
          )}
          color="inherit"
          onClick={handleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearch}
          />
        </Search>
        <IconButton
          color="inherit"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AccountCircle className={classes.accountIcon} fontSize="large" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/" className={classes.menuLink}>
            <MenuItem onClick={handleClose}>
              <PersonIcon color="primary" />
              Profile
            </MenuItem>
          </Link>
          <Link to="/" className={classes.menuLink}>
            <MenuItem onClick={handleLogout}>
              <PowerSettingsNewIcon color="primary" />
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
