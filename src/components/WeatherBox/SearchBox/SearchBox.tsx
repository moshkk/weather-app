import {TextField} from "@mui/material";

export const SearchBox: React.FC = () => {
  return(
    <TextField
      label="Location search"
      variant="outlined"
      color="primary"
      fullWidth
    />
  );
};
