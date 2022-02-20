import React from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export const SearchBox: React.FC = () => {
  return(
    <React.Fragment>
      <TextField
        label="Location search"
        variant="outlined"
        color="primary"
        fullWidth
      />
    </React.Fragment>
  );
};
