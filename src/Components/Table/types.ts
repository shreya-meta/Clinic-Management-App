import { MouseEvent } from "react";
import { doctorColumn, doctorListingProps } from "../../Pages/Doctor/types";

export interface TableHeadProps {
  onRequestSort: (event: MouseEvent<unknown>, property: any) => void;
}
export interface TableProps {
  columns: any;
  rowsValue: any;
}
export type Order = "asc" | "desc";
