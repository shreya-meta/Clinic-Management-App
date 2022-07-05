import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { Box, TableRow, TableSortLabel } from "@mui/material";
import { TableData, TableHeadProps } from "./types";
import { MouseEvent } from "react";
const AppTableHead = ({ onRequestSort }: TableHeadProps) => {
  const createSortHandler =
    (property: keyof TableData) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map((headCell) => (
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
                  <Box component="span" sx={visuallyHidden}>
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

export default AppTableHead;
