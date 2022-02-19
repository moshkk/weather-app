import React from "react";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import {Paper} from "@mui/material";
import {SearchBox} from "./SearchBox/SearchBox";

const StyledWeatherBox = styled(Box)(({theme}) => ({
  display: 'flex',
  padding: theme.spacing(1)
}));

export const WeatherBox: React.FC = () => {
  return(
    <Paper>
      <StyledWeatherBox>
        <SearchBox />
      </StyledWeatherBox>
    </Paper>
  );
};
