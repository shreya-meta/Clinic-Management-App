import { MouseEvent } from "react";

export interface TableHeadProps {
  onRequestSort: (event: MouseEvent<unknown>, property: any) => void;
}
export interface TableData {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
