import { memo } from "react";
import { Button, Grid } from "@mui/material";
import { buttonProps } from "./types";
import Spinner from "../Spinner/Spinner";

const AppButton = ({ loading, title, handleSubmit }: buttonProps) => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sx={{ mt: 2 }}>
          <Button
            type="submit"
            disabled={loading}
            variant="contained"
            onClick={handleSubmit}
          >
            <span>{loading ? <Spinner /> : title}</span>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(AppButton);
