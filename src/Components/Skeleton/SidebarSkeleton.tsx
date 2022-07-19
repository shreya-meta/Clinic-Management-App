import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useStyles } from "./SkeletonStyles";

const SidebarSkeleton = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.sidebarSkeleton}>
        <Grid className={classes.BakSkeleton}>
          <Grid className={classes.Logo_img}>
            <Skeleton width={70} height={70} />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Skeleton animation="wave" height={60} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={10}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={10}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={10}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={10}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={10}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={10}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton animation="wave" height={40} />
            </Grid>
            <Grid item xs={10}>
              <Skeleton animation="wave" height={40} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SidebarSkeleton;
