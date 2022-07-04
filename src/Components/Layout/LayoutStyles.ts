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
  // searchSidebar: {
  //   width: "38%",
  // },
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
  sidebarList: {
    color: "white",
  },
  sidebar: {
    height: "100vh",
  },
  ListItemhover: {
    "&:hover": {
      backgroundColor: "#2f59b2",
      color: "#fff",
    },
  },
  subMenuPadding: {
    paddingLeft: "50px !important",
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
    borderRadius: "10px",
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
    width: " 200px",
    height: "35px",
  },
  badgeIcons: {
    position: "relative",
    marginTop: 12,
  },
  accountIcon: {
    color: "#2f8ca7",
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
    color: "#2f8ca7",
  },
}));
//style for app bar
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer,
  backgroundColor: "rgb(0 0 0 / 12%)",
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
//when drawer is open
const openedMixin = (theme: Theme): CSSObject => ({
  position: "relative",
  overflowX: "hidden",
  whiteSpace: "nowrap",
  background: "linear-gradient(93deg, #4694a0 30%, #2f8ca7 90%);",
  borderRight: "none !important",
  height: "100vh",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeOut,
    duration: 320,
  }),
});
//when drawer is closed
const closedMixin = (theme: Theme): CSSObject => ({
  position: "relative",
  overflowX: "hidden",
  width: `calc(${theme.spacing(5.5)} + 1px)`,
  background: "linear-gradient(93deg, #4694a0 30%, #2f8ca7 90%);",
  height: "100vh",
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
//search
export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
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
  color: "#9d8e8ef5",
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
    height: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
