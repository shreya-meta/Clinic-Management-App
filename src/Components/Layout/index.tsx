import { ThemeProvider } from "@mui/styles";
import { useState } from "react";
import Header from "./Header/Header";
import SidebarMenu from "./Sidebar/SidebarMenu";

const Layout = () => {
  const [open, setOpen] = useState();
  return (
    <>
      <Header />
      <SidebarMenu />
    </>
  );
};

export default Layout;
