import { makeStyles } from "@mui/styles";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  alpha,
} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import { AppBarProps } from "./Sidebar/types";
const drawerWidth = 230;
export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: "46px",
  },
  toolbarTop_layout: {
    marginTop: 50,
  },
  toolbarIcon: {
    color: "white",
    justifyContent: "flex-end",
    textAlign: "center",
    padding: "12px",
    alignItems: "center",
    minHeight: "72px",
    fontWeight: "bold",
    paddingBottom: "24px",
    paddingTop: "24px",
  },

  Top_Appbar: {
    background: "linear-gradient(93deg, #305bb3 30%, #2f59b2 90%)",
  },
  menuButton: {
    // margin: "0 0 0 18px",
  },
  menuButtonHidden: {
    margin: "0 0 0 28px",
  },

  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    padding: "4px",
    overflow: "auto",
  },
  container: {
    paddingTop: "32px",
    paddingBottom: "32px",
  },
  paper: {
    padding: "16px",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  sidebarList: {
    color: "white",
  },
  ListItemhover: {
    "&:hover": {
      backgroundColor: "#2f59b2",
      color: "#fff",
    },
  },
  subMenuPadding: {
    paddingLeft: "30px !important",
    "&:hover": {
      backgroundColor: "#94c1d4",
      color: "#fff",
    },
  },
  Iconbg: {
    color: "#fff !important",
  },
  search: {
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgb(255 255 255 / 33%)",
    "&:hover": {
      backgroundColor: "rgb(255 255 255 / 33%)",
    },
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    padding: "16px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchAppbar: {
    position: "relative",
    backgroundColor: "#f5fcff",
    borderRadius: "4px",
    "&:hover": {
      borderColor: "#a4adb2",
    },
    padding: "2px 4px",
    // width: "25% !important",
    height: 30,
    marginLeft: 0,
    margin: 9,
  },
  searchSidebar: {
    position: "relative",
    margin: 9,
    borderRadius: "4px",
    "&:hover": {
      borderColor: "#a4adb2",
    },
    padding: "2px",
  },
  badgeIcons: {
    position: "relative",
    marginTop: 12,
  },
  notificationIcon: {
    color: "#305bb3",
  },
  accountIcon: {
    color: "#305bb3",
  },
  logo: {
    maxWidth: 50,
    marginRight: "10px",
  },
  SidebarIcon: {
    width: "16px !important",
  },
  //style for footer
  BottomNavigation: {
    padding: "16px 12px 8px",
    fontSize: "12px",
    position: "fixed",
    bottom: 0,
    color: "#998d8d",
  },
  menuLink: {
    textDecoration: "none",
    color: "#305bb3",
  },
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer,
  backgroundColor: "rgba(235, 235, 235, 0.87)",
  color: "rgba(0,0,0,0.87)",
  width: `calc(100% - ${theme.spacing(5.5)} + 1px)`,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.easeOut,
    duration: 320,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: 320,
    }),
  }),
}));

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.easeOut,
    duration: 320,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: 320,
    }),
    marginLeft: 0,
  }),
}));
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const openedMixin = (theme: Theme): CSSObject => ({
  position: "relative",
  overflowX: "hidden",
  whiteSpace: "nowrap",
  background: "linear-gradient(93deg, #305bb3 30%, #2f59b2 90%)",
  borderRight: "none !important",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeOut,
    duration: 320,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  position: "relative",
  overflowX: "hidden",
  width: `calc(${theme.spacing(5.5)} + 1px)`,
  background: "linear-gradient(93deg, #305bb3 30%, #2f59b2 90%)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeOut,
    duration: 320,
  }),
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
