import Skeleton from "@mui/material/Skeleton";
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import { useStyles } from "./SkeletonStyles";
import { TableCell, TableRow } from "@mui/material";

const ListingTableData = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.tablebody}>
        <Grid item xs={12}>
          <TableContainer className={classes.tableHeight}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" height={40} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ListingTableData;
