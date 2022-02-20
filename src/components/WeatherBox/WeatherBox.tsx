import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import {Paper} from "@mui/material";
import {SearchBox} from "./SearchBox/SearchBox";
import {WeatherBoxHeader} from "./WeatherBoxHeader";
import {PaddedContentFlexBoxColumn, PaddedContentFlexBoxRow} from "./components";
import {getLocationByIdAction} from "../../state/actions/stateActions";
import {useAppDispatch, useAppSelector} from "../../state/store";
import {LocationSliceKey} from "../../state/slices/locationDataSlice";
import {WeatherInfo} from "./WeatherInfo/WeatherInfo";

const StyledWeatherBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: 500,
}));

const defaultLocationId = 44418;

export const WeatherBox: React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocationByIdAction(defaultLocationId));
  }, []);

  const activeLocation = useAppSelector((state) => state[LocationSliceKey]);

  return(
    <Paper>
      <StyledWeatherBox>
        <WeatherBoxHeader title={'The one and only weather app'} />
        <PaddedContentFlexBoxColumn>
          <SearchBox />
          <WeatherInfo data={activeLocation} />
        </PaddedContentFlexBoxColumn>
      </StyledWeatherBox>
    </Paper>
  );
};
