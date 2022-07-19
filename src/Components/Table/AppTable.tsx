import { createContext, memo, useContext } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import AppTableHead from "./AppTableHead";
import { TableProps } from "./types";
import { AppContext } from "../../Utils/AppUtils";
import AppTableBody from "./AppTableBody";
import Pagination from "./Pagination";

export const AppTableContext = createContext<any>("");
const AppTable = ({ columns, rowsValue }: TableProps) => {
  const { types } = useContext(AppContext);
  //provided value to the child component
  const providerValue = {
    columns,
    types,
    rowsValue,
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <AppTableContext.Provider value={providerValue}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"small"}
            >
              {/* table head */}
              <AppTableHead />
              <TableBody>
                {/* table body */}
                <AppTableBody />
              </TableBody>
            </Table>
          </TableContainer>
          {/* pagination */}
          <Pagination />
        </AppTableContext.Provider>
      </Paper>
    </Box>
  );
};
export default memo(AppTable);
