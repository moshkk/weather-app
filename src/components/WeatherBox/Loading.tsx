import React from "react";
import {CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FlexBoxCentered} from "../common/components";

export const Loading: React.FC = () => {
  return(
    <FlexBoxCentered>
      <CircularProgress />
      <Typography>Loading weather...</Typography>
    </FlexBoxCentered>
  );
};
