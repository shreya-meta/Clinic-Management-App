import React from "react";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AccountCircle } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { ThemeProvider } from "@mui/material/styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import KeyIcon from "@mui/icons-material/Key";
import {
  AppBar,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  useStyles,
} from "../LayoutStyles";
import { theme } from "../../GlobalStyles/GlobalStyles";
const Header = ({ open, setOpen, search, setSearch }: any) => {
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
  // const handleLogout = () => {
  //   dispatch({
  //     type: authConstants.AUTH_ERROR,
  //   });
  //   dispatch({
  //     type: userConstants.GET_CURRENT_LOGIN_USER_FAIL,
  //   });
  // };

  const handleSearch = (e: any) => {
    setSearch(e?.target?.value.toLowerCase());
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar color="primary">
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <IconButton
              className={clsx(
                classes.menuButton,
                !open && classes.menuButtonHidden
              )}
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.badgeIcons}
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
              <MenuItem>
                <PowerSettingsNewIcon color="primary" />
                Logout
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default React.memo(Header);
