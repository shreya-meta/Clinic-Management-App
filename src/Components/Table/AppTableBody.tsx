import { TableRow, TableCell, Button } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../Utils/AppUtils";
import { AppTableContext } from "./AppTable";
import EditIcon from "@mui/icons-material/Edit";
import { useGlobalStyles } from "../GlobalStyles/GlobalStyles";
import { useAppDispatch } from "../../Utils/appHooks";
import FeedIcon from "@mui/icons-material/Feed";
import { handleEdit, handleTableRowClicked, handleView } from "./handleEvents";
const AppTableBody = () => {
  const dispatch = useAppDispatch();
  const { page, rowsPerPage, types, setShowModal } = useContext(AppContext);
  const { columns, rowsValue } = useContext(AppTableContext);
  const classes = useGlobalStyles();
  return (
    <>
      {rowsValue
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: any, index: number) => {
          return (
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              key={row.id}
              onClick={(event) => {
                types === "appointment" &&
                  handleTableRowClicked(row, dispatch, setShowModal);
              }}
            >
              <TableCell>{index + 1}</TableCell>
              {columns?.map((column: any) => {
                const { id } = column;
                let value = row[id];
                return <TableCell key={id}>{value ? value : "-"}</TableCell>;
              })}

              {types !== "appointment" && (
                <TableCell>
                  <Button
                    className={classes.mainButton}
                    onClick={() => {
                      handleEdit(row, types, dispatch, setShowModal);
                    }}
                  >
                    <EditIcon sx={{ color: "white" }} />
                  </Button>
                </TableCell>
              )}
              {types === "patient" && (
                <TableCell>
                  <Button
                    className={classes.mainButton}
                    onClick={() => {
                      handleView(row?.id, dispatch, setShowModal);
                    }}
                  >
                    <FeedIcon sx={{ color: "white" }} />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          );
        })}
    </>
  );
};

export default AppTableBody;
