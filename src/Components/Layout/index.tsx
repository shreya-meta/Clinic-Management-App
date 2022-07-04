import { ThemeProvider } from "@mui/styles";
import { useState } from "react";
import { AppContext } from "../../Utils/AppUtils";
import Header from "./Header/Header";
import SidebarMenu from "./Sidebar/SidebarMenu";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const providerValue = { open, setOpen };
  return (
    <>
      {/* provided value to the child component */}
      <AppContext.Provider value={providerValue}>
        <Header />
        <SidebarMenu />
      </AppContext.Provider>
    </>
  );
};

export default Layout;
