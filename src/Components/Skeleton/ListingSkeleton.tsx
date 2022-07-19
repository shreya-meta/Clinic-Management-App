import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { useStyles } from "./SkeletonStyles";
import SidebarSkeleton from "./SidebarSkeleton";
import ListingTableData from "./listingTableData";
import { Grid, Typography } from "@mui/material";
export default function ListingSkeleton() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <SidebarSkeleton />
        <Grid className={classes.MainSkeleton}>
          <Grid className={classes.BakSkeleton2}>
            <Grid>
              <Skeleton animation="wave" height={30} width={30} />
            </Grid>
            <Grid>
              <Skeleton animation="wave" height={50} width={400} />
            </Grid>
            <Grid>
              <Skeleton animation="wave" height={40} width={200} />
            </Grid>
          </Grid>
          <Grid className="tableBody_skeleton">
            <Grid className={classes.CardSkeleton}>
              <Grid className={classes.cardHeaderSkeleton}>
                <Grid container>
                  <Grid item md={11}>
                    <Skeleton animation="wave" height={40} width={50} />
                  </Grid>
                  <Grid item md={1} style={{ textAlign: "right" }}>
                    <Skeleton animation="wave" height={40} width={40} />
                  </Grid>
                </Grid>
              </Grid>
              <hr className={classes.SkeletonHr}></hr>
            </Grid>
          </Grid>
          <ListingTableData />
          <Grid className={classes.bottomSkeleton}>
            <Typography>Footer</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
