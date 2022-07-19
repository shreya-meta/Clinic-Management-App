import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import React, { Dispatch } from "react";
export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export interface sidebarProps {}
export interface layoutProps {
  handleClickOpen?: () => void;
  search: string;
  children: React.ReactNode;
  setSearch: Dispatch<React.SetStateAction<string>>;
  title: string;
  types: string;
}
