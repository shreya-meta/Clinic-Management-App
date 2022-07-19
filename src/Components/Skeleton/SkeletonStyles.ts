import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  BakSkeleton: {
    padding: 6,
  },
  BakSkeleton2: {
    backgroundColor: "#fff",
    padding: 6,
    justifyContent: "space-between",
    display: "flex",
    height: 59,
    marginBottom: 20,
  },
  tableHeight: {
    minHeight: 650,
    maxHeight: 350,
    "@media (max-width: 1366px)": {
      minHeight: 350,
      maxHeight: 350,
    },
  },
  table: {
    padding: 8,
  },
  Logo_img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: 66,
  },
  profile_img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: 90,
  },
  TextCenter: {
    textAlign: "center",
  },
  MainSkeleton: {
    width: "calc(100% - 240px)",
    "@media (max-width: 1366px)": {
      width: "calc(100% - 210px)",
    },
  },
  sidebarSkeleton: {
    height: "100vh",
    backgroundColor: "#fff",
    width: "240px",
    "@media (max-width: 1366px)": {
      width: 210,
    },
    position: "relative",
    transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    whiteSpace: "nowrap",
  },
  bottomSkeleton: {
    color: " #998d8d",
    bottom: 0,
    padding: "16px 12px 8px",
    position: "fixed",
    fontSize: "12px !important",
  },
  CardSkeleton: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  cardHeaderSkeleton: {
    padding: "8px 16px 8px 16px",
  },
  SkeletonHr: {
    borderColor: "rgba(0, 0, 0, 0.12)",
    height: 1,
    margin: 0,
  },
  tablebody: {
    padding: 8,
  },
});
