import React from "react";
import {PaddedContentFlexBoxColumn, PaddedContentFlexBoxRow} from "../components";
import {SvgIcon, Typography} from "@mui/material";
import styled from "@mui/material/styles/styled";
import {WeatherStateDataType} from "../../../types/weatherStateData.types";
import {iconToWeatherKeyMap} from "../utils/iconToWeatherKeyMap";
import {WeatherIcon} from "../../icons/WeatherIcon";

const WeatherInfoBoxRight = styled(PaddedContentFlexBoxColumn)(({theme}) => ({
  justifyContent: 'right',
}));

const WeatherInfoBoxLeft = styled(PaddedContentFlexBoxRow)(({theme}) => ({
  justifyContent: 'left',
  alignItems: 'center',
}));

const WeatherInfoBoxContainer = styled(PaddedContentFlexBoxRow)(({theme}) => ({
  justifyContent: 'space-between',
}));

type WeatherInfoBoxProps = {
  data: WeatherStateDataType;
  title: string;
  parentTitle: string;
};

export const WeatherInfoBox: React.FC<WeatherInfoBoxProps> = ({ parentTitle, data, title }) => {

  const { dateDay, weatherStateName, weatherStateAbbr } = data;

  return(
    <WeatherInfoBoxContainer>
      <WeatherInfoBoxLeft>
        <WeatherIcon weatherKey={weatherStateAbbr} fontSize={'large'} />
      </WeatherInfoBoxLeft>
      <WeatherInfoBoxRight>
        <Typography align={'right'}>{title}, {parentTitle}</Typography>
        <Typography align={'right'}>{dateDay}</Typography>
        <Typography align={'right'}>{weatherStateName}</Typography>
      </WeatherInfoBoxRight>
    </WeatherInfoBoxContainer>
  );
};
