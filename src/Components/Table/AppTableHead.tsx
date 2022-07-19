import { memo } from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { TableRow } from "@mui/material";
import { useContext } from "react";
import { AppTableContext } from "./AppTable";
const AppTableHead = () => {
  const { columns, types } = useContext(AppTableContext);
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>S.N.</TableCell>
          {columns.map((headCell: any) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
            >
              {headCell.label}
            </TableCell>
          ))}
          {types !== "appointment" && <TableCell>Actions</TableCell>}
        </TableRow>
      </TableHead>
    </>
  );
};

export default memo(AppTableHead);
