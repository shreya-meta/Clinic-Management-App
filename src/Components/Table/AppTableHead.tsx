import { memo } from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { Box, TableRow, TableSortLabel } from "@mui/material";
import { TableData, TableHeadProps } from "./types";
import { MouseEvent, useContext } from "react";
import { AppContext } from "../../Utils/AppUtils";
const AppTableHead = ({ onRequestSort }: TableHeadProps) => {
  const { columns, orderBy, order } = useContext(AppContext);
  const createSortHandler =
    (property: keyof TableData) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map((headCell: any) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span">
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default memo(AppTableHead);
