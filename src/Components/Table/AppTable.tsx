import { createContext, memo, MouseEvent, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import AppTableHead from "./AppTableHead";
import { TableData } from "./types";
import { AppContext } from "../../Utils/AppUtils";
import AppTableBody from "./AppTableBody";
import Pagination from "./Pagination";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): TableData {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
}
export const AppTableContext = createContext<any>("");
const AppTable = ({ columns }: any) => {
  const {
    // orderBy,
    // order,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    rows,
  } = useContext(AppContext);
  console.log(rows, "rows in body");
  // const [order, setOrder] = useState<Order>("asc");
  // const [orderBy, setOrderBy] = useState<keyof TableData>("calories");

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof TableData
  ) => {
    // const isAsc = orderBy === property && order === "asc";
    // setOrder(isAsc ? "desc" : "asc");
    // setOrderBy(property);
  };
  //provided value to the child component
  const providerValue = {
    columns,
    // orderBy,
    // order,
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <AppTableContext.Provider value={providerValue}>
              {/* table head */}
              <AppTableHead onRequestSort={handleRequestSort} />
              <TableBody>
                {/* table body */}
                <AppTableBody />
              </TableBody>
            </AppTableContext.Provider>
          </Table>
        </TableContainer>
        {/* pagination */}
        <Pagination />
      </Paper>
    </Box>
  );
};
export default memo(AppTable);
