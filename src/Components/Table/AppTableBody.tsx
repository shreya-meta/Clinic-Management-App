import { TableRow, TableCell, Button } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../Utils/AppUtils";
import { AppTableContext } from "./AppTable";
import EditIcon from "@mui/icons-material/Edit";
import { Order } from "./types";
import { useGlobalStyles } from "../GlobalStyles/GlobalStyles";
import { useAppDispatch } from "../../Utils/appHooks";
import { handleEdit } from "./handleEvents";

const AppTableBody = () => {
  const dispatch = useAppDispatch();
  const { page, rowsPerPage, types, setShowModal } = useContext(AppContext);
  const { columns, orderBy, order, rowsValue } = useContext(AppTableContext);
  const classess = useGlobalStyles();
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  return (
    <>
      {stableSort(rowsValue, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
              <TableCell>{index + 1}</TableCell>
              {columns?.map((column: any) => {
                const { id } = column;
                let value = row[id];
                return <TableCell key={id}>{value ? value : "-"}</TableCell>;
              })}
              <TableCell>
                <Button
                  className={classess.mainButton}
                  onClick={() => {
                    handleEdit(row, types, dispatch, setShowModal);
                  }}
                >
                  <EditIcon sx={{ color: "white" }} />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};

export default AppTableBody;
