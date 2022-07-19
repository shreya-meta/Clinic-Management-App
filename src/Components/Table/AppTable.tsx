import { createContext, memo, MouseEvent, useContext, useState } from "react";
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
  const {
    // orderBy,
    // order,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    types,
  } = useContext(AppContext);
  // const [order, setOrder] = useState<Order>("asc");
  // const [orderBy, setOrderBy] = useState<keyof TableData>("calories");

  const handleRequestSort = (event: MouseEvent<unknown>, property: any) => {
    // const isAsc = orderBy === property && order === "asc";
    // setOrder(isAsc ? "desc" : "asc");
    // setOrderBy(property);
  };
  //provided value to the child component
  const providerValue = {
    columns,
    types,
    rowsValue,
    // orderBy,
    // order,
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
              <AppTableHead onRequestSort={handleRequestSort} />
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
