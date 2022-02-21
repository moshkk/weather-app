import React from "react";
import {PaddedContentFlexBoxColumn, PaddedContentFlexBoxRow} from "../../common/components";
import {Typography} from "@mui/material";
import styled from "@mui/material/styles/styled";
import {WeatherStateDataType} from "../../../state/types/stateData.types";
import {WeatherIcon} from "../../common/icons/WeatherIcon";

const WeatherInfoBoxRight = styled(PaddedContentFlexBoxRow)(({theme}) => ({
  justifyContent: 'right',
}));

const WeatherInfoBoxLeft = styled(PaddedContentFlexBoxColumn)(({theme}) => ({
  justifyContent: 'left',
  textAlign: 'left'
}));

const WeatherInfoBoxContainer = styled(PaddedContentFlexBoxRow)(({theme}) => ({
  justifyContent: 'space-between',
}));

type WeatherGeneralInfoProps = {
  data: WeatherStateDataType;
  title: string;
  parentTitle: string;
};

export const WeatherGeneralInfo: React.FC<WeatherGeneralInfoProps> = ({ parentTitle, data, title }) => {

  const { weatherStateName, weatherStateAbbr, applicableDate } = data || {};

  return(
    <WeatherInfoBoxContainer>
      <WeatherInfoBoxLeft>
        <Typography variant={'h6'}>{title}, {parentTitle}</Typography>
        <Typography>{applicableDate}</Typography>
        <Typography>{weatherStateName}</Typography>
      </WeatherInfoBoxLeft>
      <WeatherInfoBoxRight>
        <WeatherIcon weatherKey={weatherStateAbbr} fontSize={'large'} />
      </WeatherInfoBoxRight>
    </WeatherInfoBoxContainer>
  );
};
