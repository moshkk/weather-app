import React from "react";
import Typography from "@mui/material/Typography";
import {FlexBoxCentered} from "../common/components";

export const NoData: React.FC = () => {
  return(
    <FlexBoxCentered>
      <Typography>Ups... Something went wrong. Please try searching again</Typography>
    </FlexBoxCentered>
  );
};
