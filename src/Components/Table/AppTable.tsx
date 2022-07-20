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
import ListingTableData from "../Skeleton/listingTableData";

export const AppTableContext = createContext<any>("");
const AppTable = ({ columns, rowsValue }: TableProps) => {
  // const { patients, loadingPatient, edit, appointmentModal } =
  //   useAppSelector(patientSelector);
  const { types, loading } = useContext(AppContext);
  console.log(loading, "test loading");
  //provided value to the child component
  const providerValue = {
    columns,
    types,
    rowsValue,
  };
  console.log(rowsValue, "rowsValue");
  return (
    <Box sx={{ width: "100%" }}>
      {loading ? (
        <ListingTableData />
      ) : (
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
      )}
    </Box>
  );
};
export default memo(AppTable);
