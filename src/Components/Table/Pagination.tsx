import TablePagination from "@mui/material/TablePagination";
import { useContext } from "react";
import { AppContext } from "../../Utils/AppUtils";
import { AppTableContext } from "./AppTable";

const Pagination = () => {
  const { setRowsPerPage, setPage, rowsPerPage, page } = useContext(AppContext);
  const { rowsValue } = useContext(AppTableContext);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowsValue?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Pagination;
